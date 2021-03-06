'use strict'

module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    'artist',
    {
      iArtistID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sArtistLastName: {
        type: DataTypes.STRING
      },
      sArtistMiddleName: {
        type: DataTypes.STRING
      },
      sArtistFirstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sArtistPhone: {
        type: DataTypes.STRING,
        unique: true
      },
      sArtistEmail: {
        type: DataTypes.STRING,
        unique: true
      },
      dArtistBirthday: {
        type: DataTypes.DATEONLY
      },
      sArtistAvatar: {
        type: DataTypes.STRING
      },
      iActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'artist'
    }
  )
  Artist.associate = function(models) {
    Artist.hasMany(models.picture, {
      foreignKey: 'iArtistID'
    })
  }

  Artist.list = async function() {
    const response = await Artist.findAll({
      order: [['iArtistID', 'DESC']]
    })
    return response
  }

  Artist.listWithPicture = async function() {
    const response = await Artist.findAll({
      include: [
        {
          model: sequelize.models.picture,
          required: true
        }
      ],
      order: [
        ['iArtistID', 'DESC'],
        [sequelize.models.picture, 'iOrder', 'ASC'],
        [sequelize.models.picture, 'iPictureID', 'ASC']
      ]
    })
    return response
  }

  Artist.item = async function({ iArtistID = false }) {
    const response = await Artist.findByPk(iArtistID, {})
    return response
  }

  Artist.itemWithPicture = async function({ iArtistID = false }) {
    const response = await Artist.findByPk(iArtistID, {
      include: [
        {
          model: sequelize.models.picture,
          required: true
        }
      ],
      order: [
        [sequelize.models.picture, 'iOrder', 'ASC'],
        [sequelize.models.picture, 'iPictureID', 'ASC']
      ]
    })
    return response
  }

  Artist.delete = async function({ iArtistID }) {
    const response = await Artist.destroy({
      where: { iArtistID }
    })
    return response
  }

  Artist.add = async function(formdata) {
    console.log(formdata)
    const response = await Artist.create(formdata)
    return response
  }

  return Artist
}
