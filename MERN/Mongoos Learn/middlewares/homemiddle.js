const homeMiddle = (req, res, next) => {
    // res.send('this is contact middleware')
    console.log('Home MiddleWare')
    next()
}

export {homeMiddle}