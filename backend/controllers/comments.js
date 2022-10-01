const Comment = require("../models/comment");
const fs = require("fs");

// création d'un post par un utilisateur
exports.createComment = (req, res, next) => {
    const commentObject = JSON.parse(req.body.comment);
    delete createComment.id;
    const comment = new Comment({
      ...commentObject,
      likes: 0,
      dislikes: 0,
      usersDisliked: [],
      usersLiked: [],
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    });
    comment
      .save()
      .then(() => res.status(201).json({ message: "Post enregistré !" }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  //Permet de trouver le Post unique ayant le même ID que le paramètre de la requête
  exports.getOneComment = (req, res, next) => {
    Comment.findOne({
      id: req.params.id,
    })
    // Le Post est ensuite retournée dans une Promise et envoyée au front-end
      .then((comment) => {
        res.status(200).json(comment);
      })
      // Si aucun Post n'est trouvée ou si une erreur se produit, une erreur 404 est envoyée au front-end avec l'erreur générée
      .catch((error) => {
        res.status(404).json({
          error: error,
        });
      });
  };
  
  // Permet a l'utilisateur de mettre a jour ou de modifier un post qu'il a crée
  exports.modifyComment = (req, res, next) => {
    Comment.findOne({ id: req.params.id }).then((comment) => {
      const filename = comment.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        const commentObject = req.file
          ? {
              ...JSON.parse(req.body.comment),
              imageUrl: `${req.protocol}://${req.get("host")}/images/${
                req.file.filename
              }`,
            }
          : { ...req.body };
          // updateOne permet de mettre a jour le Post qui correspond à l'objet passé comme premier argument
          // Le paramètre id passé dans la demande est utilisé puis il est remplacé par le Post passée comme second argument
        Comment.updateOne(
          { id: req.params.id },
          { ...commentObject, id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Post modifiée !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    });
  };
  
  // Permet de supprimer (on lui passe un objet correspondant au document à supprimer puis une réponse de réussite ou d'échec est envoyée au front-end)
  exports.deleteComment = (req, res, next) => {
    Comment.findOne({ id: req.params.id })
      .then((comment) => {
        const filename = comment.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Comment.deleteOne({ id: req.params.id })
            .then(() => res.status(200).json({ message: "Post supprimé !" }))
            .catch((error) => res.status(400).json({ error }));
        });
      })
      .catch((error) => res.status(500).json({ error }));
  };
  
  // L'utilisateur peut voir tous les posts
  exports.getAllComments = (req, res, next) => {
    Comment.find()
      .then((comments) => {
        res.status(200).json(comments);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };
  
  // l'utilisateur peut liker ou disliker les posts
  exports.likeComment = (req, res, next) => {
    const commentId = req.params.id;
    const userId = req.body.userId;
    const like = req.body.like;
    // 1. l'utilisateur aime un post pour la première fois (comme === 1)
    // pousser l'userId vers le tableau usersLiked ; incrémente les likes
    if (like === 1) {
      Comment.updateOne(
        { id: commentId },
        {
          $inc: { likes: like },
          $push: { usersLiked: userId },
        }
      )
        .then((comment) => res.status(200).json({ message: "Post appréciée" }))
        .catch((error) => res.status(500).json({ error }));
    }
  
    // 2. l'utilisateur n'aime pas un post pour la première fois (comme === -1)
    // pousse l'userId vers le tableau usersLiked ; un like de moins.
    else if (like === -1) {
      Comment.updateOne(
        { id: commentId },
        {
          $inc: { dislikes: -1 * like },
          $push: { usersDisliked: userId },
        }
      )
        .then((comment) => res.status(200).json({ message: "Post dépréciée" }))
        .catch((error) => res.status(500).json({ error }));
    }
    // 3. L'utilisateur change d'avis
    // 3.1. l'utilisateur reprend son like :
    else {
      Comment.findOne({ id: commentId })
        .then((comment) => {
          if (comment.usersLiked.includes(userId)) {
            Comment.updateOne(
              { id: commentId },
              { $pull: { usersLiked: userId }, $inc: { likes: -1 } }
            )
              .then((comment) => {
                res.status(200).json({ message: "Post dépréciée" });
              })
              .catch((error) => res.status(500).json({ error }));
            //3.2 l'utilisateur change d'avis sur son dislike
          } else if (comment.usersDisliked.includes(userId)) {
            Comment.updateOne(
              { id: commentId },
              {
                $pull: { usersDisliked: userId },
                $inc: { dislikes: -1 },
              }
            )
              .then((comment) => {
                res.status(200).json({ message: "Post appréciée" });
              })
              .catch((error) => res.status(500).json({ error }));
          }
        })
        .catch((error) => res.status(401).json({ error }));
    }
  };
  
  