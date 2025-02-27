class myControllers{
    static set_cookie = (req, res)=>{
        res.session("username", "gpai")
        res.send("Set Cookie..")
    }
    static get_session = (req, res)=>{
        console.log(req.session)
        res.send("Get session..")
    }
    static clear_cookie = (req, res)=>{
        res.clearCookie("username")
        res.send("Clear All Cookie..")
    }
}

export default myControllers