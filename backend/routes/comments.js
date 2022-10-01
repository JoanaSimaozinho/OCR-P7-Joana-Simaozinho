const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
// multer pour sauvegarder les images dans le serveur
const multer = require("../middleware/multer-config");

const commentsCtrl = require("../controllers/comments");
// routes CRUD des posts
router.get("/comments", auth, commentsCtrl.getAllComments);
router.post("/comments", auth, multer, commentsCtrl.createComment);
router.get("/comments/:id", auth, commentsCtrl.getOneComment);
router.put("/comments/:id", auth, multer, commentsCtrl.modifyComment);
router.delete("/comments/:id", auth, commentsCtrl.deleteComment);
// route pour les likes
router.post("/:id/like", auth, commentsCtrl.likeComment);

module.exports = router
