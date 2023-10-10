const express = require('express')
const app = express()
const port = 3000

app.get('/Devxpace', (req, res) => {
  res.send("This is Devxpace's World!")
})

app.listen(port, () => {
  console.log(`Abhi's app listening on port ${port}`)
})
