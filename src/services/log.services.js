const LogModel = require("./../models/log.model");

const create = async ({ who = "", log = "" }) => {
  try {
    const when = new Date().toISOString();
    const query = {
      when,
      who,
      log,
    };
    const logRegister = await LogModel.create(query);
    console.log("logRegister.id", logRegister.id);
    return true;
  } catch (error) {
    console.log("error->", error);
    throw error;
  }
};

module.exports = {
  create,
};
