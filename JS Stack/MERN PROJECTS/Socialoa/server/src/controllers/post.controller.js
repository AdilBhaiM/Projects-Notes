import cloudinary from "../lib/cloudinary";
import Post from "../models/post.model";

export const createPost = async (res, req) => {
    const {platform, images, caption, scheduleDate} = req.body;
    if(!platform || !images[0] || !caption) return res.status(400).json({
        message: "Provide all fields to proceed further!"
    })
    try {
        const uploadedImages = await cloudinary.uploader.upload(images);
        const NewPost = new Post({
            platform,
            images : uploadedImages,
            caption,
            if (scheduleDate) {
                scheduleDate
            }
        })
        
    } catch (error) {
        
    }
}