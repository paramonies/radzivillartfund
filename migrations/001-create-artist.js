'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('artist', {
      iArtistID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sArtistLastName: {
        type: Sequelize.STRING
      },
      sArtistMiddleName: {
        type: Sequelize.STRING
      },
      sArtistFirstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sArtistPhone: {
        type: Sequelize.STRING,
        unique: true
      },
      sArtistEmail: {
        type: Sequelize.STRING,
        unique: true
      },
      dArtistBirthday: {
        type: Sequelize.DATEONLY
      },
      sArtistAvatar: {
        type: Sequelize.STRING
      },
      iActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('artist')
  }
}