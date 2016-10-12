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
    client: 'Heroku Postgres',
    connection: {
      database: 'reddit-clone-v2-dev',
      host: 'ec2-23-21-102-155.compute-1.amazonaws.com',
      user: 'jkyldtsrmwmvbs',
      password: 'AdI_cvntxzIDpx39tn_sJd6LNB'
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
