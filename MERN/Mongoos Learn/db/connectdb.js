import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
    try {

        const OPTINOS = {
            user: "adiladil",
            pass: "1234",
            dbname: "admin",
            authSource: "admin"
        }
        await mongoose.connect(DATABASE_URL, OPTINOS);
        console.log('Connected Successfully');
    } catch (err) {
        console.log(err);
    }
}

export default connectDB