const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
// multer pour sauvegarder les images dans le serveur
const multer = require("../middleware/multer-config");

const postsCtrl = require("../controllers/posts");
// routes CRUD des posts
router.get("/", auth, postsCtrl.getAllPosts);
router.post("/", auth, multer, postsCtrl.createPost);
router.get("/:id", auth, postsCtrl.getOnePost);
router.put("/:id", auth, multer, postsCtrl.modifyPost);
router.delete("/:id", auth, postsCtrl.deletePost);
// route pour les likes
router.post("/:id/like", auth, postsCtrl.likePost);

module.exports = router
