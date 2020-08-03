'use strict'

module.exports = (sequelize, DataTypes) => {
  const Nouvelle = sequelize.define(
    'Nouvelle',
    {
      iNewID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sTitle: {
        type: DataTypes.STRING,
        unique: true
      },
      sContent: DataTypes.STRING
    },  
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'new'
    }
  )

  Nouvelle.list = async function() {
    const response = await Nouvelle.findAll({
      order: [['iNewID', 'DESC']]
    })
    return response
  }

  return Nouvelle
}
