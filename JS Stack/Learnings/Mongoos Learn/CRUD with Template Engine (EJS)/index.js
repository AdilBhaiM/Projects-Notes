import express from 'express';
import connectStudentDB from './db/connectdb.js';
import router from './routes/MyRoutes.js';
import {join} from 'path';
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = 'mongodb://localhost:27017/';

connectStudentDB(DATABASE_URL)

app.use(express.urlencoded({extended:false}))

app.set('view engine', 'ejs')

app.use(express.static(join(process.cwd(), 'public')))
app.use('/edit', express.static(join(process.cwd(), 'public')))
// app.get('/', (req, res)=>{

// })


app.get('/', router)
app.get('/edit/:id', router)
app.get('/add', router)
app.post('/add', router)
app.post('/edit/:id', router)
app.post('/delete/:id', router)
app.listen(port, ()=>{
    console.log(`Server is listening at localhost:${port}`)
})