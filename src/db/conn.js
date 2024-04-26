const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize ('locadoura', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao Sequelize')
}  catch (error) {
    console.error('Não foi possível conectar:', error)
  }
  
  module.exports = sequelize