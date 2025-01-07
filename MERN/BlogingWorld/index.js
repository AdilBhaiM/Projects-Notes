// const express = require('express')
// var app = express();
import express from "express"
// var exphbs  = require('express-handlebars');
import { create } from "express-handlebars";
const app = express()

import path from "path"
import blogRoute from "./routes/MyBlog.js"
const port = 3000

const __dirname = import.meta.dirname;
app.use(express.static(path.join(__dirname, "static")))

const hbs = create({
    extname: ".handlebars", // Optional: specify file extension
    defaultLayout: "main",  // Optional: default layout file
  });

app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');
app.use('/', blogRoute)
app.use('/blog', blogRoute)
app.use('/blogpage/:slug', blogRoute)

// app.get('/blog', import(path.join(__dirname, 'routes/MyBlog.js')))

// app.get('/blogpage/:slug', import(path.join(__dirname, 'routes/MyBlog.js')))

// app.get('/world/:name', (req, res) => {
//   console.log(req.body);
//   res.send('Hello World!'+ req.params.name)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})