// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'reddit-clone-v2-dev',
      host: 'localhost'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'reddit-clone-v2-test',
      host: 'localhost',
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'reddit-clone-v2-dev',
      host: 'https://reddit-clone-jtongay.herokuapp.com/'
    }
  }

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
