import cloudinary from "../lib/cloudinary";
import Post from "../models/post.model";

export const createPost = async (res, req) => {
    const {platform, images, caption, scheduleDate} = req.body;
    if(!platform || !images[0] || !caption) return res.status(400).json({
        message: "Provide all required fields to proceed further!"
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
        await NewPost.save()
        return res.status(200).json({
            post: NewPost
        })
    } catch (error) {
        console.log("Error in Creating Post : " , error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}