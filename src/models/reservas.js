const {DataTypes} = require  ('sequelize')
 
const conn = require ('../db/conn')


const reserva = conn.define('reserva',{
    cliente:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    veiculo:{
        type:DataTypes.STRING(35),
        allowNull:false
    },
    data_inicio:{
        type:DataTypes.STRING(8),
        allowNull:false
    },
    data_fim:{
        type:DataTypes.STRING(8),
        allowNull:false
    }
});

module.exports = reserva
