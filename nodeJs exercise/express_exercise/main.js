const express = require('express')
const app = express()
const port = 3000

// route
app.get('/', (req, res) => {
  // console.log(Object.keys(req)) 
  console.log(Object.keys(res)) 
  // console.log('lkf==>',req.query)
  console.log('lkf==>',req.statusCode)
  res.send('Hello World!')
})

// static resource
app.use('/public/',express.static('./public/'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})