import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://mrkabsiejossw:KGz3qryNPeSP9O6s@cluster0.wqwt5.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB connected : "+ conn.connection.host);
    } catch (error) {
        console.log("MongoDB Connection error : "+ error);
    }
}