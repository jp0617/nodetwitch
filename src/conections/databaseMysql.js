const key = require("../key");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(key.settingsDatabases.MySQL);
const env = require("dotenv");
env.config();
const testConnection = async (sequelize) => {
  try {
    await sequelize.authenticate();
    console.log("connect postgres on");
  } catch (error) {
    console.log("error", error);
  }
};

testConnection(sequelize);

module.exports= sequelize;
