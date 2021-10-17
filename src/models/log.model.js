const DataTypes = require("sequelize");

const sequilize = require("./../conections/databaseMysql");

const Log = sequilize.define("logs", {
  who: { type: DataTypes.STRING },
  when: { type: DataTypes.STRING },
  log: { type: DataTypes.TEXT },
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
});

module.exports=Log