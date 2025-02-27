import CRUDmodel from "../model/student.js";

class MyCRUD {
    static addDoc = (req, res)=>{
        // console.log("Create Doc");
        res.render('add');
    }
    static PostAddedDoc = async (req, res)=>{
        // console.log(req.body);
        try {
            const {name, age, hobby, myclass, addmission_date} = req.body
            const Mydoc = new CRUDmodel({
                name: name,
                age: age,
                hobby: hobby,
                class: myclass,
                addmission_date: addmission_date
            })
            const result =  await Mydoc.save()
            // console.log(result)
            // console.log(name, age, hobby);
            // console.log(result);
            res.redirect('/');
            console.log('Created Successfully');
        } catch (error) {
            // console.log(error)
        }
    }
    static AllList = async (req, res)=>{
        try {
            const result = await CRUDmodel.find();
            // console.log(result)
            res.render('list', {data: result});
        } catch (error) {
            console.log(error);
        }
        
    }
    static showDoc = async (req, res)=>{
        try {
            const result = await CRUDmodel.findById(req.params.id)
            res.render('edit', {
                data:result
            });
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
        
    }
    static editDoc = async (req, res)=>{
        try {
            const editMyDoc = await CRUDmodel.findByIdAndUpdate(req.params.id, req.body)

        } catch (error) {
            console.log(error);
        }
        res.redirect('/');
    }
    static DeleteDoc = async (req, res)=>{
        try {
            const deletedoc = await CRUDmodel.findByIdAndDelete(req.params.id)
        } catch (error) {
            console.log(error);
        }
        res.redirect('/');
    }
}

export default MyCRUD;