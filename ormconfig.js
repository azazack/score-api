module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST || "localhost",
  "port": 5432,
  "username": process.env.DB_USERNAME || "postgres",
  "password": process.env.DB_PASSWORD || "root",
  "database": process.env.DB_DATABASE || "azazack",
  "entities": ["src/entity/*.ts"],
  "logging": true,
  "synchronize": true
}
