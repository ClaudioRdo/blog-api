const express = require("express");
const storage = require("../../config/cloudinary");
const multer = require("multer");
const {
  postDetails,
  createpost,
  deletepost,
  updatepost,
  fetchPosts,
  toggleLikesPost,
  toggleDisLikesPost,
} = require("../../controllers/posts/postsController");
const isLogin = require("../../middlewares/isLogin");

const postRouter = express.Router();

//file upload middleware
const upload = multer({ storage });

//POST/api/v1/posts
postRouter.post("/", isLogin, upload.single("image"), createpost);

//GET/api/v1/posts/:id
postRouter.get("/:id", isLogin, postDetails);

//GET/api/v1/posts/likes/:id
postRouter.get("/likes/:id", isLogin, toggleLikesPost);

//GET/api/v1/posts/dislikes:id
postRouter.get("/dislikes/:id", isLogin, toggleDisLikesPost);

//GET/api/v1/posts
postRouter.get("/", fetchPosts);

//DELETE/api/v1/posts/:id
postRouter.delete("/:id", isLogin, deletepost);

//PUT/api/v1/posts/:id
postRouter.put("/:id", isLogin, upload.single("image"), updatepost);

module.exports = postRouter;