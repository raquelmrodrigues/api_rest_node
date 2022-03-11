const bcryptjs = require('becryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'John Doe',
        email: 'jon@gmail.com',
        password_hash: await bcryptjs.hash('1234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Ana',
        email: 'ana@gmail.com',
        password_hash: await bcryptjs.hash('1234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Paulo',
        email: 'paulo@gmail.com',
        password_hash: await bcryptjs.hash('1234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  )

  down: () => {},
};
