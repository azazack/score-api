module.exports = {
  "type": "postgres",
  "host": "ec2-3-89-214-80.compute-1.amazonaws.com",
  "port": 5432,
  "username": "lcovscnkdxgjib",
  "password": "815130ff5c869c22b7ef76753ca0d7ccaccebc7a5e3f6a9bf0ee24481bd258ba",
  "database": "d3r98dr8lrj5n3",
  "entities": ["src/entity/*.ts"],
  "logging": true,
  "synchronize": true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}
