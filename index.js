const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('sonamsingh')
  })
app.get('/login', (req, res) => {
  res,send('<h1>Please login at sonam singh rajput</h1>')
})  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})