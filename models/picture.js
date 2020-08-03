'use strict'

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
        type: DataTypes.INTEGER
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

  Picture.list = async function() {
    const response = await Picture.findAll({
      order: [['iPictureID', 'DESC']]
    })
    return response
  }

  Picture.item = async function({ iPictureID = false }) {
    const response = await Picture.findByPk(iPictureID, {})
    return response
  }

  Picture.add = async function(formdata) {
    console.log(formdata)
    const response = await Picture.create(formdata)
    return response
  }

  Picture.delete = async function({ iPictureID }) {
    const response = await Picture.destroy({
      where: { iPictureID }
    })
    return response
  }

  return Picture
}
