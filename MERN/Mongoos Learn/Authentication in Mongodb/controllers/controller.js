import UserModel from '../models/userModel.js';
class Controllers{
    static home = (req, res)=>{
        res.render('Home')
    }
    static createUser = async (req, res)=>{
        try {
            const myDoc = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            myDoc.save()
            res.redirect('/Login')
        } catch (error) {
            console.log(error);
        }
    }
    static Login = (req, res)=>{
        res.render('LogIn')
    }
    static findUser = async (req, res)=>{
        try {
            const {email, password} =req.body
            const result = await UserModel.findOne({email: email})
            console.log(result);
            if(result !== null){
                if(result.password == password){
                    res.send(result);
                }else{
                    res.send("Your Password is not Correct");
                }
            }else {
                res.send("Email doesn't Exists.")
            }
        } catch (error) {
            console.log(error);
        }
    }
    static Signup = (req, res)=>{
        res.render('Signup')
    }
}

export default Controllers