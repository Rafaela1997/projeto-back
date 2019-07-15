const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const controller = require('./bixoController')

const server = express()
server.use(cors())
server.use(bodyParser.json())

server.get('/residencia', (req, res) => {
  controller.getAll()
    .then(residencia => {
        res.send(residencia)
      })
    .catch(error => {
        console.log(error)})
})

server.post('/residencia', (req, res) => {
  controller.add(req.body)
  .then(residencia => {
      res.send(residencia)
  })
  .catch(error => console.log(error))
  
})
 let PORT = process.env.PORT
server.listen(PORT, () => {
  console.log('Server rodando na porta ')
})
