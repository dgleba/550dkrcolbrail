module.exports = {
  HOST: "192.168.88.60",
  PORT: "3306",
  USER: "root",
  PASSWORD: "pw",
  DB: "dkrdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
