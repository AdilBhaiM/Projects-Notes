import express from 'express';
const app = express();
import { join } from 'path';
import { router } from './routes/MyRoute.js';
import { conMiddle } from './middlewares/contactmiddle.js';
import { serviceMiddle } from './middlewares/servicesmiddle.js';
import { skillMiddle } from './middlewares/skillsmiddle.js';
import home from './routes/homeRoute.js';
const port = process.env.PORT || '3000';



app.set('view engine', 'ejs')

app.use(express.static('public'))


app.use('/contact', conMiddle)
app.use('/services', serviceMiddle)
app.use('/skills', skillMiddle)
// app.use('/', homeMiddle)

app.use('/', router)
app.use('/', home)




app.listen(port, ()=>{
    console.log(`Example app is running on localhost:${port}`)
})