const mongoose = require("mongoose");

// schéma d'un post
// Schéma de données qui contient les champs souhaités pour chaque post
const commentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});

// Exportation du schéma en tant que modèle Mongoose appelé "Post"
module.exports = mongoose.model("Comment", commentSchema);