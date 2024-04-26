const {DataTypes} = require  ('sequelize')
 
const conn = require ('../db/conn')

const cliente = conn.define ('cliente',{
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    endereco:{
        type:DataTypes.STRING (35),
        allowNull:false,
    },
    telefone:{
        type: DataTypes.STRING(12),
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING(40),
        allowNull:false,
    },

})




module.exports = cliente
