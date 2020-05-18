'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'artist',
      [
        {
          iArtistID: 1,
          sArtistLastName: 'Соловьев',
          sArtistMiddleName: null,
          sArtistFirstName: 'Илья',
          sArtistPhone: '9031111111',
          sArtistEmail: 'oke@ya.ru',
          dArtistBirthday: null,
          sArtistAvatar: null,
          iActive: true
        },
        {
          iArtistID: 2,
          sArtistLastName: 'Радзивилл',
          sArtistMiddleName: null,
          sArtistFirstName: 'Вероника',
          sArtistPhone: '9032222222',
          sArtistEmail: 'vr@ya.ru',
          dArtistBirthday: null,
          sArtistAvatar: null,
          iActive: true
        },
        {
          iArtistID: 3,
          sArtistLastName: 'Третьяков',
          sArtistMiddleName: null,
          sArtistFirstName: 'Владимир',
          sArtistPhone: '9034444444',
          sArtistEmail: 'tr@ya.ru',
          dArtistBirthday: null,
          sArtistAvatar: null,
          iActive: true
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('artist', null, {})
  }
}
