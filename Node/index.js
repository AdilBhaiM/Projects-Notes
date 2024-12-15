// import express from "express"
const express = require('express')
const app = express()
const path = require("path")
const port = 3000

app.use(express.static(path.join(__dirname, "public")))


app.get('/world/:name', (req, res) => {
  console.log(req.body);
  res.send('Hello World!'+ req.params.name)
})


app.get('/hello', (req, res) => {
//   res.send('Hello World!')
res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})