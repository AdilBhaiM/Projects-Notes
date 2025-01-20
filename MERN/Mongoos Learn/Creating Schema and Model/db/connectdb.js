import mongoose from 'mongoose'
const connectStudent = async (DATABASE_URL) => {
    try{
        const OPTIONS = {
            dbname: "schooldb"
        }
        await mongoose.connect(DATABASE_URL, OPTIONS);
        console.log('Connected Successfully,')
    }catch(err){
        console.log(err)
    }
}
export default connectStudent