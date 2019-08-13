// Update with your config settings.

module.exports = {
  development: {
    //our DBMS driver
    client: "sqlite3",
    //the location of our db
    connection: {
      filename: "./data/car-dealer.db3"
    },
    //necessary when using the sqlite3
    useNullAsDefault: true,
    //generates migration files on the data/migration folder

    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  } 
};
