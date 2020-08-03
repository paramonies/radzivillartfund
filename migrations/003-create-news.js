'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('new', {
      iNewID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sTitle: {
        type: Sequelize.STRING,
        unique: true
      },
      sContent: Sequelize.STRING
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('new')
  }
}
