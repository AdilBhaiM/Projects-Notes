const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "static")))

app.get('/', require(path.join(__dirname, 'routes/MyBlog.js')))

// app.get('/world/:name', (req, res) => {
//   console.log(req.body);
//   res.send('Hello World!'+ req.params.name)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})