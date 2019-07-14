const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bixoSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  cpf:{type:String,required:true},
dtnasc:{type:String, required:false},
cep:{type:Number,required:true},
contato: { type: Number, required: false },
email: {type:String, required:true},
endereco: {type:String,required:true},
numero:{type:String,required:true},
bairro: {type:String,required:true},
cidade: {type:String,required:true},
estado: {type:String,require:true},
faculdade:{type:String,required:true}
})

const residenciaModel = mongoose.model("bixo", bixoSchema);
module.exports = residenciaModel;