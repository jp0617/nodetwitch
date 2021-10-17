
const mongose = require("mongoose");
const env = require("dotenv");

env.config();

const url = process.env.MONGO_CONN;

mongose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const db = mongose.connection;

try {
  db.on("error", () => {
    console.log("Error en la conexión a mongo");
  });
  db.once("open", () => {
    console.log("Conexión a mongo exitosa");
  });
} catch (error) {
  throw error;
}

exports.db = db;
