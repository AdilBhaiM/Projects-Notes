import mongoose from 'mongoose';

const CRUDSchema = new mongoose.Schema({
    name: {type: String, required:true},
    age: {type: Number, required:true, min: 8, max: 18},
    hobby: {type: String, required: true},
    class: {type: String, required: true},
    addmission_date: {type: Date, required: true}
})

// console.log(studentSchema.path('fees'))

// studentSchema.path('name')

const CRUDmodel = mongoose.model('CRUD', CRUDSchema)

export default CRUDmodel