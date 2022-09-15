const Post = require("../models/post");
const fs = require("fs");

// création d'un post par un utilisateur
exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject.id;
  const post = new Post({
    ...postObject,
    likes: 0,
    dislikes: 0,
    usersDisliked: [],
    usersLiked: [],
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  post
    .save()
    .then(() => res.status(201).json({ message: "Post enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//Permet de trouver le Post unique ayant le même ID que le paramètre de la requête
exports.getOnePost = (req, res, next) => {
  Post.findOne({
    id: req.params.id,
  })
  // Le Post est ensuite retournée dans une Promise et envoyée au front-end
    .then((post) => {
      res.status(200).json(post);
    })
    // Si aucun Post n'est trouvée ou si une erreur se produit, une erreur 404 est envoyée au front-end avec l'erreur générée
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

// Permet a l'utilisateur de mettre a jour ou de modifier un post qu'il a crée
exports.modifyPost = (req, res, next) => {
  Post.findOne({ id: req.params.id }).then((post) => {
    const filename = post.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      const postObject = req.file
        ? {
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get("host")}/images/${
              req.file.filename
            }`,
          }
        : { ...req.body };
        // updateOne permet de mettre a jour le Post qui correspond à l'objet passé comme premier argument
        // Le paramètre id passé dans la demande est utilisé puis il est remplacé par le Post passée comme second argument
      Post.updateOne(
        { id: req.params.id },
        { ...postObject, id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Post modifiée !" }))
        .catch((error) => res.status(400).json({ error }));
    });
  });
};

// Permet de supprimer (on lui passe un objet correspondant au document à supprimer puis une réponse de réussite ou d'échec est envoyée au front-end)
exports.deletePost = (req, res, next) => {
  Post.findOne({ id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ id: req.params.id })
          .then(() => res.status(200).json({ message: "Post supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

// L'utilisateur peut voir tous les posts
exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// l'utilisateur peut liker ou disliker les posts
exports.likePost = (req, res, next) => {
  const postId = req.params.id;
  const userId = req.body.userId;
  const like = req.body.like;
  // 1. l'utilisateur aime un post pour la première fois (comme === 1)
  // pousser l'userId vers le tableau usersLiked ; incrémente les likes
  if (like === 1) {
    Post.updateOne(
      { id: postId },
      {
        $inc: { likes: like },
        $push: { usersLiked: userId },
      }
    )
      .then((post) => res.status(200).json({ message: "Post appréciée" }))
      .catch((error) => res.status(500).json({ error }));
  }

  // 2. l'utilisateur n'aime pas un post pour la première fois (comme === -1)
  // pousse l'userId vers le tableau usersLiked ; un like de moins.
  else if (like === -1) {
    Post.updateOne(
      { id: postId },
      {
        $inc: { dislikes: -1 * like },
        $push: { usersDisliked: userId },
      }
    )
      .then((post) => res.status(200).json({ message: "Post dépréciée" }))
      .catch((error) => res.status(500).json({ error }));
  }
  // 3. L'utilisateur change d'avis
  // 3.1. l'utilisateur reprend son like :
  else {
    Post.findOne({ id: postId })
      .then((post) => {
        if (post.usersLiked.includes(userId)) {
          Post.updateOne(
            { id: postId },
            { $pull: { usersLiked: userId }, $inc: { likes: -1 } }
          )
            .then((post) => {
              res.status(200).json({ message: "Post dépréciée" });
            })
            .catch((error) => res.status(500).json({ error }));
          //3.2 l'utilisateur change d'avis sur son dislike
        } else if (post.usersDisliked.includes(userId)) {
          Post.updateOne(
            { id: postId },
            {
              $pull: { usersDisliked: userId },
              $inc: { dislikes: -1 },
            }
          )
            .then((post) => {
              res.status(200).json({ message: "Post appréciée" });
            })
            .catch((error) => res.status(500).json({ error }));
        }
      })
      .catch((error) => res.status(401).json({ error }));
  }
};
