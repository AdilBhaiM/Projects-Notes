import express from 'express';
import connectStudent from './db/connectdb.js';
// import createMyFirstDoc, { getAllDocs } from './models/Student.js';
import session from 'express-session';
import router from './routes/routes.js';
import MongoStore from 'connect-mongo';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.PORT || 'mongodb://localhost:27017';


connectStudent(DATABASE_URL)


const sessionStorage = MongoStore.create({
    mongoUrl:DATABASE_URL,
    dbName:'mySession',
    collectionName: 'session',
    ttl: 14*24*60*60,
    autoRemove: 'native'
})

app.use(session({
    name: 'MyName',
    secret: "iamKey",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 20000},
    store: sessionStorage
}))

// createMyFirstDoc('Harsh', 36, 595959.123, ["Driving", "RIding", "Flying"], false)
// getAllDocs('6782f0266c4d3f9da6aac0d2')


app.get('/create', router)
app.get('/get', router)

app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`)
})
