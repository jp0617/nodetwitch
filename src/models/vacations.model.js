const mongoose = require("mongoose");
const { Schema } = mongoose;

const vacacionSchema = new Schema(
  {
    id_channel: String,
    vacation_enabled: Boolean,
    inicio_vacaciones: Date,
    fin_vacaciones: Date,
    zonahoraria: String,
  },
  {
    timestamps: true,
  }
);

const vacacion = mongoose.model("Vacations", vacacionSchema);
module.exports = vacacion;
