const vacacionModel = require("../models/vacations.model");



const create = async ({
  id_channel,
  vacation_enabled,
  inicio_vacaciones,
  fin_vacaciones,
  zonahoraria,
}) => {
  try {
    const vacacion = vacacionModel({
      id_channel,
      vacation_enabled,
      inicio_vacaciones,
      fin_vacaciones,
      zonahoraria,
    });
    await vacacion.save();
    return vacacion;
  } catch (error) {
    throw error;
  }
};


module.exports={
  create
}