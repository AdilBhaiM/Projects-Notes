import express from 'express';
// import cookies from 'cookie-parser';
import router from './routes/route.js';
import session from 'express-session';
const app = express()
const port = process.env.PORT || 3000

app.use(session({
    secret: "iamKey",
    resave: false,
    saveUninitialized: true
    // cookie: {maxAge: 20000}
}))

app.use('/', router)
// app.use('/set', router)
// app.use('/get', router)

app.listen(port, ()=>{
    console.log(`Server is listening at localhost:${port}`);
})