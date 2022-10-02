const mongoose = require("mongoose");

// schéma d'un post
// Schéma de données qui contient les champs souhaités pour chaque post
const postSchema = mongoose.Schema({
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

// Exportation du schéma en tant que modèle Mongoose appelé "Post"
module.exports = mongoose.model("Post", postSchema);