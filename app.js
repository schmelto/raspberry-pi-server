const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the first thing for my rest API.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})