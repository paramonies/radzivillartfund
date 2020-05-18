'use strict'

const Sequelize = require('sequelize')
const axios = require('axios')

module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define(
    'picture',
    {
      iPictureID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iArtistID: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      sPictureName: {
        type: DataTypes.STRING,
        unique: true
      },
      iOrder: {
        type: DataTypes.INTEGER,
        defultValue: 999
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'picture'
    }
  )
  Picture.associate = function(models) {
    Picture.belongsTo(models.artist, {
      foreignKey: 'iArtistID'
    })
  }

  return Picture
}
