import express from 'express';
import connectStudent from './db/connectdb.js';
import createMyFirstDoc, { getAllDocs } from './models/Student.js';

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.PORT || 'mongodb://localhost:27017';



connectStudent(DATABASE_URL)
// createMyFirstDoc('Harsh', 36, 595959.123, ["Driving", "RIding", "Flying"], false)
getAllDocs('6782f0266c4d3f9da6aac0d2')


app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`)
})
