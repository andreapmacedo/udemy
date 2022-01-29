import Pessoa from './pessoa' // sistema modulo do EC
// const Pessoa = require('./pessoa')

import './modulos/assets/css/estilo.css'
import './modulos/moduloA'

const atendente = new Pessoa
console.log(atendente.cumprimentar())