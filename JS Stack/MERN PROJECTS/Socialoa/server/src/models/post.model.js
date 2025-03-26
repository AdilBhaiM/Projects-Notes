import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
    trim: true,
  },
  images: {
    type: [Image],
    default: [],
  },
  caption: {
    type: String,
    required: true,
    trim: true,
  },
  scheduledDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
