const express = require('express')
const app = express()
const notFoundHandler = require('./handlers/404')
const serverErrorHandler = require('./handlers/404')
const main_router = require('./router')

app.use(express.json())

app.use(main_router)

app.use('*',notFoundHandler)
app.use(serverErrorHandler)

module.exports = {
  app,
  start: port => {
    if(!port){throw new Error('missing port')}
    app.listen(port,() => console.log(`server listening PORT: ${port}`) )
  }
}
