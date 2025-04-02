import express from "express";
import {
  createPost,
  deletePost,
  EditPost,
  getUserPosts,
} from "../controllers/post.controller.js";
import { uploadPost } from "../AyrShare/createPost.js";
const router = express.Router();

router.post("/post/create", createPost);
router.put("/post/edit/:id", EditPost);
router.get("/post/:id", getUserPosts);
router.delete("/post/delete/:id", deletePost);
router.post("/uploadpost", (req, res) => {
  try {
    uploadPost({
      post: "this is my testsetstset post",
      platforms: ["facebook"],
      mediaUrls: [
        "https://images.unsplash.com/photo-1642953702322-a5da05d2e36b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    });
    res.status(200).json({
      message: "Post Uploaded",
    });
  } catch (error) {
    console.log("Error in Uploading post = ", error);
    res.status(400).json({
      message: "Internal Server error in uploading post",
    });
  }
});

export default router;
