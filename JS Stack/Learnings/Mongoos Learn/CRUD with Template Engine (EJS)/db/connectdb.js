import mongoose from 'mongoose';
const connectStudentDB = async (DATABASE_URL)=>{
    try {
        const OPTIONS = {
            dbname : 'learnMongoos'
        }
        await mongoose.connect(DATABASE_URL, OPTIONS)
        console.log('Connected Successfully')
    } catch (err) {
        console.log(err)
    }
}
export default connectStudentDB