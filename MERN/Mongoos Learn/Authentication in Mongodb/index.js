import express from 'express';
const app = express();
import connectStudentDB from './db/connectdb.js';
import {join} from 'path';
import web from './routes/web.js'
const port = process.env.PORT || 3000;
const DATABASE_URL = 'mongodb://localhost:27017/';

app.use(express.urlencoded({extended:false}))

connectStudentDB(DATABASE_URL)
app.set('view engine', 'ejs')
app.use(express.static(join(process.cwd(), 'public')))


app.use('/', web)
app.listen(port, ()=>{
    console.log(`this server is listening at localhost:${port}`);
})