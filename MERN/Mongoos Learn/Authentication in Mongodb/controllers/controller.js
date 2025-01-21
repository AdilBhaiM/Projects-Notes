import UserModel from '../models/userModel.js';
class Controllers{
    static home = (req, res)=>{
        res.render('Home')
    }
    static createUser = async (req, res)=>{
        try {
            // if(req.body.email !== undefined && req.body.password !== undefined && req.body.name !== undefined){}
            const result = await UserModel.findOne({email: req.body.email})
            if(result == null){
                if(req.body.password == req.body.confirm_password){
                    let passError = 0
                    const myDoc = new UserModel({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    })
                    myDoc.save()
                    const result = await UserModel.findOne({email: req.body.email})
                    res.redirect('/Login')
                }else{
                    // console.log(passError)
                    // res.redirect('/Signup')
                    res.render('Signup', { passError:1 })
                }
            }else{
                res.send('Email Already Exists')
            }
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
            // console.log(result);
            if(result !== null){
                if(result.password == password){
                    res.send(result);
                }else{
                    res.send("Your Password is not Correct");
                }
            }else {
                res.send("Email doesn't Exist.")
            }
        } catch (error) {
            console.log(error);
        }
    }
    static Signup = (req, res)=>{
        res.render('Signup', { passError : 0 })
    }
}

export default Controllers