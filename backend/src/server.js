const express = require('express')
const app = express()
const notFoundHandler = require('./404')
const serverErrorHandler = require('./404')

app.use(express.json())

app.get('/',(req,res)=>{
  const msg = 'hello'
  res.status(200).send(msg)
})

app.use('*',notFoundHandler)
app.use(serverErrorHandler)

module.exports = {
  app,
  start: port => {
    if(!port){throw new Error('missing port')}
    app.listen(port,() => console.log(`server listening PORT: ${port}`) )
  }
}
