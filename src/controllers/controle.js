
const cliente = require ('../models/clientes')

const veiculo = require ('../models/veiculos')

const reserva = require ('../models/reservas')

module.exports = class controle {
  static home (req,res){
    res.render ('home')
  }

  static cliente (req,res){
    res.render ('clientes')
  }
   
  static clientes (req,res){
    const clientes = {
         nome: req.body.nome,
         endereco: req.body.endereco,
         telefone: req.body.telefone,
         email: req.body.email,
         done: false,
    }
        cliente.create(clientes)
         .then(res.redirect('/clientes'))
        .catch((err)=> console.log()) 
  }
  static cad_cliente (req,res){
    res.render('cad_cliente')
  }
  static cad_cliente(req,res){
    cliente.findAll({raw: true})
    .then((data) =>{
      res.render('cad_cliente',{cliente: data})
    })
    .catch((err)=> console.log())
  }

 static veiculos (req,res){
  res.render('veiculos')
 }
 static addveiculo (req,res){
  const addveiculo = {
       marca: req.body.marca,
       modelo: req.body.modelo,
       ano: req.body.ano,
       disponibilidade: req.body.disponibilidade,
       done: false,
  }
     veiculo.create(addveiculo)
       .then(res.redirect('/veiculos'))
      .catch((err)=> console.log()) 

}
static cad_veiculo (req,res){
  res.render('cad_veiculo')
}
 static cad_veiculo (req,res){
   veiculo.findAll({raw: true})
   .then((data) =>{
     res.render('cad_veiculo',{veiculo: data})
   })
   .catch((err) => console.log)
 }


 static reserva (req,res){
  res.render('reserva')
 }

static addreserva (req,res){
  const addreserva = {
    cliente:req.body.cliente,
    veiculo: req.body.veiculo,
    data_inicio: req.body.data_inicio,
    data_fim: req.body.data_fim,
    done: false,
}
  reserva.create(addreserva)
  .then(res.redirect('/reserva'))
      .catch((err)=> console.log()) 
}

static cad_reserva (req,res){
  res.render('cad_reserva')
 }
}