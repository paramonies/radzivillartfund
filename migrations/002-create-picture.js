'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('picture', {
      iPictureID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iArtistID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'artist',
          key: 'iArtistID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      sPictureName: {
        type: Sequelize.STRING,
        unique: true
      },
      iOrder: {
        type: Sequelize.INTEGER,
        defultValue: 999
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('picture')
  }
}