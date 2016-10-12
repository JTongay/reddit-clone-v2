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
      database: 'postgres://jkyldtsrmwmvbs:AdI_cvntxzIDpx39tn_sJd6LNB@ec2-23-21-102-155.compute-1.amazonaws.com:5432/datd6m4n33gc5e',
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
