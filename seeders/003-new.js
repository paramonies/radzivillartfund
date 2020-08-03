'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'new',
      [
        {
          iNewID: 1,
          sTitle: 'Nisi consequat sit amet eu.',
          sContent: 'Enim anim amet excepteur ut commodo veniam. Enim laborum laboris laborum nostrud occaecat do tempor est sint ad fugiat velit. Non ea voluptate incididunt incididunt irure velit eiusmod voluptate sit labore. Ex officia consequat sit.'
        },
        {
          iNewID: 2,
          sTitle: 'Elit aute dolor qui id reprehenderit qui incididunt ut est eu Lorem ullamco est.',
          sContent: 'Enim anim amet excepteur ut commodo veniam. Enim laborum laboris laborum nostrud occaecat do tempor est sint ad fugiat velit. Non ea voluptate incididunt incididunt irure velit eiusmod voluptate sit labore. Ex officia consequat sit.'
        },
        {
          iNewID: 3,
          sTitle: 'Ipsum est non esse aute do sit est occaecat ut ullamco commodo ex amet velit.',
          sContent: 'Ullamco velit cillum eiusmod ad nostrud labore in irure. Ut laborum eu ea aliqua laborum veniam culpa. Nulla proident fugiat deserunt labore culpa do. In eu id in do exercitation in aliquip in veniam minim. Sunt excepteur mollit.'
        },
        {
          iNewID: 4,
          sTitle: 'Esse occaecat duis anim cillum ullamco labore magna.',
          sContent: 'Id sunt labore deserunt laborum duis pariatur dolor et. Pariatur consectetur reprehenderit excepteur sunt nisi nisi commodo ex sit aliqua aliquip. Ex commodo dolore sint et dolor eiusmod.'
        },
        {
          iNewID: 5,
          sTitle: 'In ipsum irure cillum sint tempor in sunt ipsum velit elit adipisicing anim in.',
          sContent: 'Incididunt culpa consequat excepteur fugiat exercitation et do voluptate. Incididunt in ipsum anim deserunt aliquip minim. Magna laborum non id nulla eu et aliqua pariatur est occaecat elit nisi. Id Lorem minim excepteur aliquip.'
        },
        
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('new', null, {})
  }
}
