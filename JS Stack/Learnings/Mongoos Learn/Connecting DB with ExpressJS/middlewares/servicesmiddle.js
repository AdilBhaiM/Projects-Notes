const serviceMiddle = (req, res, next) => {
    // res.send('this is contact middleware')
    console.log('Services MiddleWare')
    next()
}

export {serviceMiddle}