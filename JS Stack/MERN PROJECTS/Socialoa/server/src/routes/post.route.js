import express from "express";
import {
  createPost,
  deletePost,
  EditPost,
  getUserPosts,
} from "../controllers/post.controller.js";
const router = express.Router();

router.post("/post/create", createPost);
router.put("/post/edit/:id", EditPost);
router.get("/post/:id", getUserPosts);
router.delete("/post/delete/:id", deletePost);

export default router;
