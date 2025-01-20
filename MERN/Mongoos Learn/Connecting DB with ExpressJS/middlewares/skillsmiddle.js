const skillMiddle = (req, res, next) => {
    // res.send('this is contact middleware')
    console.log('Skills MiddleWare')
    next()
}

export {skillMiddle}