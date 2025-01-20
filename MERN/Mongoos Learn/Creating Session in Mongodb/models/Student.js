import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {type: String, required:true},
    age: {type: Number, required:true, min: 18, max: 50},
    fees: {type: mongoose.Schema.Types.Decimal128, required: true, validator: v => v >= 5500.59},
    hobbies: {type:Array},
    isactive: {type:Boolean}
})

// console.log(studentSchema.path('fees'))

// studentSchema.path('name')

const studentModel = mongoose.model('student', studentSchema)


const createMyFirstDoc = async (name, age, fees, hobbies, isactice)=>{
    try {
        const studentDoc = new studentModel({
            name: name,
            age: age,
            fees: fees,
            hobbies: hobbies,
            isactive: isactice
        })
        const result = await studentDoc.save()
        // const allData = await studentDoc.find()
        console.log(result)
        // console.log(allData)
    } catch (error) {
        console.log(error)
    }
}

const getAllDocs = async (id)=>{
    const dell = await studentModel.deleteOne({_id: id})
    const result = await studentModel.find()
    console.log(dell)
    console.log(result)
}

// const getAllDocs = async ()=>{
//     const result = await studentModel.updateOne({name: "Usman"}, {name: 'MrAdil'})
//     console.log(result)
// }

export default createMyFirstDoc
export {getAllDocs}