import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js'

dotenv.config();

const port = process.env.PORT
const app = express();

// Midlewares

app.use(express.json())
app.use(cors())

// Routes

app.get('/', async (req, res)=>{
    console.log("Connection Start");
    const result = await pool.query('SELECT current_database()')
    console.log("Connection Stop");
    res.send(`This database name is : ${result.rows[0].current_database}`)
})


// Listener

app.listen(port, ()=> {
    console.log(`Server is listening at Port : ${port}`);
})