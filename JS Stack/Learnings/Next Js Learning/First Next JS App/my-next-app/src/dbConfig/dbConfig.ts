import mongoose from 'mongoose'


export async function connect() {
    try {

        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on("connected" , () => {
            console.log("MongoDB connected Successfully");
        })
        
        connection.on("error" , () => {
            console.log("MongoDB connection error. Please make sure mongoDB is running.");
            process.exit();
        })

    } catch (error) {

        console.log("Something went wrong!");
        console.log(error);
    }
}