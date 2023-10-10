const express = require('express')
const app = express()
const port = 3000

app.get('/Abhiworld', (req, res) => {
  res.send("This is Abhi's World!")
})

app.listen(port, () => {
  console.log(`Abhi's app listening on port ${port}`)
})
