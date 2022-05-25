/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
    client: 'pg',
    connection: 'postgres://localhost:5432/knex-api',
    migrations: {
      tableName: 'knex_migrations',
      directory: "./migrations/",
    },
    seeds: {
      directory: './seeds' 
  }
}


