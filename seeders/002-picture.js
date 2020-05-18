'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'picture',
      [
        {
          iPictureID: 1,
          iArtistID: 1,
          sPictureName: '1.jpg',
          iOrder: 999
        },
        {
          iPictureID: 2,
          iArtistID: 3,
          sPictureName: '2.jpg',
          iOrder: 999
        },
        {
          iPictureID: 3,
          iArtistID: 3,
          sPictureName: '3.jpg',
          iOrder: 100
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('picture', null, {})
  }
}
