import express from 'express';
import router from './routes/student.js';
import { join } from 'path';
// import { setEngine } from 'crypto';
const app = express();
const port = process.env.PORT || '3000';

// app.use(express.static('public'))


// const options = {
//     dotfiles: 'allow'
// }

app.set("view engine", 'ejs')


// app.use('/golobolo', express.static(join(process.cwd(), 'public'), options));
app.use(express.static(join(process.cwd(), 'public')));

// app.get('/', (req, res)=>{
//     res.send('Hello this is my webApp')
// })

// app.all('*', (req, res)=>{
//     res.send('Page is empty')
// })

// app.get('/ab?cd', (req, res)=>{
//     res.send('This will find the pattern of acd and abcd')
// })


// app.get(/b/, (req, res)=>{
//     res.send('Your url slug contains b')
// })


// app.get('/cb', (req, res, next)=>{
//     console.log('first Callback')
//     next()
//     // res.send('Hello this is first callback')
// }, (req, res) => {
//     console.log('Second Callback')
//     res.send('Hello this is second callback')
// })


// const firstCall = (req, res, next)=>{
//     console.log('First Callback Function')
//     next()
// }
// const secondCall = (req, res, next)=>{
//     console.log('Second Callback Function')
//     next()
// }
// const thirdCall = (req, res)=>{
//     console.log('Third Callback Function')
//     res.send('This is our last Callback in array')
// }
// app.get('/arrayOfCbs', [firstCall, secondCall, thirdCall])



// const cb1 = (req, res, next)=>{
//     console.log('First Callback Function')
//     next()
// }
// const cb2 = (req, res, next)=>{
//     console.log('Second Callback Function')
//     next()
// }
// app.get('/cbexample4', [cb1, cb2], (req, res, next) => {
//     console.log('Third Callback') 
//     next() 
//  } , (req, res) => { 
//     console.log('Fourth Callback') 
//     res.send ('Combination of Independent Function and Array of Functions')
// })



// app.route('/student')
// app.all('/student', (req, res, next) => { 
//     // res.send('Do everythings about Student')
//     next()
// })
// app.get('/student', (req, res) => { 
//     res.send('All Student') 
// }) 
// app.post('/student', (req, res) => {
//     res.send('Add New Student')
// })
// app.put('/student', (req, res) => { 
//     res.send('Update Student')
// })


// app.get('/:category-:product', (req, res)=>{
//     const {category, product} = req.params;
//     res.send(`How to find ${category} category having product ${product}`)
// })


// app.get('/:id([0-9]{2})', (req, res)=>{
//     res.send(`How to find the number ${req.params.id}`)
// })


// app.get('/:category(post|article)/:product', (req, res)=>{
//     const {category, product} = req.params;
//     res.send(`How to find ${category} category having product ${product}`)
// })


app.get('/', router);
app.get('/about', router);

app.listen(port, ()=> {
    console.log(`Example app is running at localhost:${port} Port`);
})