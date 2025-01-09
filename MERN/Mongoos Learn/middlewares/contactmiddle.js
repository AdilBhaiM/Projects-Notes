const conMiddle = (req, res, next) => {
    // res.send('this is contact middleware')
    console.log('Contact MiddleWare')
    next()
}

export {conMiddle}