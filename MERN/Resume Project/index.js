import express from 'express';
const app = express();
import { join } from 'path';
const port = process.env.PORT || '3000';


app.get('/', (req, res)=>{
    res.send('Hello')
})


app.listen(port, ()=>{
    console.log(`Example app is running on localhost:${port}`)
})