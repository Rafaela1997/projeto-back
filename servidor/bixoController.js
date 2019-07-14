  const  connect  = require('./bixoAPIRepository')
const bixomodel = require('./bixoSchema')

connect()

const getAll = async () => {
  return bixomodel.find((error, bixo) => {
    return bixo
  })
}

const getById = (id) => {
  return bixomodel.findById(id) 
}

const add = (residencia) => {
  const novaResidencia = new bixomodel(residencia)
  return novaResidencia.save()
}


module.exports = {
  getAll,
  getById,
  add,
} 