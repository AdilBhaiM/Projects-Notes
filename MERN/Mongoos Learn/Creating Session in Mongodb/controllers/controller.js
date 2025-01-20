class myControllers{
    static createSession = (req, res)=>{
        req.session.device = 'Mobile';
        if(req.session.count){
            req.session.count++
        }else{
            req.session.count = 1
        }
        res.send('Setting Session')
        // res.send(`Mobile = ${req.session.device} and Count = ${req.session.count}`)
    }
    static getSession = (req, res)=>{
        console.log(req.session)
        // res.send("Get session..")
        res.send(`Mobile = ${req.session.device} and Count = ${req.session.count}`)
    }
    // static clear_cookie = (req, res)=>{
    //     res.destroy("username")
    //     res.send("Clear All Cookie..")
    // }
}

export default myControllers