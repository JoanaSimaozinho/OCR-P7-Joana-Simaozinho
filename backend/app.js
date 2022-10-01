const cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const postsRoutes = require("./routes/posts");
const postsComment = require("./routes/comments");
const userRoutes = require("./routes/user");
const userComment = require("./routes/comments");


const app = express();

// Middleware
app.use(cors());

dotenv.config();

// Connection de l'API à la base de données
mongoose
  .connect('mongodb+srv://joana:projet7@cluster0.cpjmnxu.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/posts", postsRoutes);
app.use("/api/comment", postsComment)
app.use("/api/auth", userRoutes);
app.use("/api/comment", userComment);


module.exports = app;
