import express from 'express';
import mongoose from 'mongoose';
const app = express();
// import { join } from 'path';
import { router } from './routes/MyRoute.js';
import { conMiddle } from './middlewares/contactmiddle.js';
import { serviceMiddle } from './middlewares/servicesmiddle.js';
import { skillMiddle } from './middlewares/skillsmiddle.js';
import home from './routes/homeRoute.js';
import connectDB from './db/connectdb.js';
const port = process.env.PORT || '3000';
const DATABASE_URL = 'mongodb://localhost:27017/';




connectDB(DATABASE_URL)

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