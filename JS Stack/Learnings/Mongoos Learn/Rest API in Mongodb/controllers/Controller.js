import CRUDmodel from "../model/student.js";

class MyCRUD {
    static getDOc = async (req, res)=>{
        // console.log("Create Doc");
        try {
            const result = await CRUDmodel.findById(req.params.id)
            res.send(result)
            } catch (error) {
                console.log(error);
            }
    }
    static updateDoc = async (req, res)=>{
        // console.log("Create Doc");
        try {
            const result = await CRUDmodel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
            } catch (error) {
                console.log(error);
            }
        // res.send('Updating the Doc...');
    }
    static createDoc = async (req, res)=>{
        // console.log("Create Doc");
        try {
            // const {name, age, hobby} = req.body
            // const Doc = await CRUDmodel({
            //     name: name,
            //     age: age,
            //     hobby: hobby
            // })
            const Doc = await CRUDmodel(req.body)
            const result = await Doc.save()
            res.status(201).send(result)
        } catch (error) {
            console.log(error);
        }
        // res.send('Creating the Doc...');
    }
    static deleteDoc = (req, res)=>{
        // console.log("Create Doc");
        res.send('deleting the Doc...');
    }
}
export default MyCRUD;