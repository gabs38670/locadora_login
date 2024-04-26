const {DataTypes} = require  ('sequelize')
 
const conn = require ('../db/conn')

const veiculo = conn.define ('veiculo',{
    marca:{
        type: DataTypes.STRING(20),
        allowNull:false
    },
    modelo:{
        type: DataTypes.STRING(20),
        allowNull:false
    },
    ano:{
        type: DataTypes.STRING(4),
        allowNull:false
    },
    disponibilidade:{
        type: DataTypes.STRING(1),
}
})

module.exports = veiculo