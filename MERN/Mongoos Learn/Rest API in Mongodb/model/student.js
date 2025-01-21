import mongoose from 'mongoose';

const CRUDSchema = new mongoose.Schema({
    name: {type: String, required:true},
    age: {type: Number, required:true},
    hobby: {type: String, required:true}
})
// console.log(studentSchema.path('fees'))
// studentSchema.path('name')
const CRUDmodel = mongoose.model('RestAPI', CRUDSchema)
export default CRUDmodel