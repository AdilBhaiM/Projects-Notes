import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/db.js'
import User from './models/userModel.js'

dotenv.config();

const port = process.env.PORT
const app = express();

// Midlewares

app.use(express.json())
app.use(cors())

// Routes

app.get('/', async (req, res)=>{
    console.log("Connection Start");
    // const result = await pool.query('SELECT current_database()')
    const users = await User.query().limit(5);
    console.log("Connection Stop");
    res.json({ message: 'Connected successfully', users });
    // res.send(`This database name is : ${result.rows[0].current_database}`)
})


// Listener

app.listen(port, ()=> {
    console.log(`Server is listening at Port : ${port}`);
})