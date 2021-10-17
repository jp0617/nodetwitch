const celebrate = require("celebrate");

module.exports = {
  user: celebrate.celebrate(
    {
      [celebrate.Segments.QUERY]: celebrate.Joi.object().keys({
        user: celebrate.Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  commercial: celebrate.celebrate(
    {
      [celebrate.Segments.BODY]: celebrate.Joi.object().keys({
        id_canal: celebrate.Joi.string().required(),
        duracion: celebrate.Joi.number().integer().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  schedule: celebrate.celebrate(
    {
      [celebrate.Segments.BODY]: celebrate.Joi.object().keys({
        id_canal: celebrate.Joi.string().required(),
        vacaciones: celebrate.Joi.boolean().required(),
        inicio_vacaciones: celebrate.Joi.string().isoDate(),
        fin_vacaciones: celebrate.Joi.string().isoDate(),
        zonahoraria: celebrate.Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  video: celebrate.celebrate(
    {
      [celebrate.Segments.BODY]: celebrate.Joi.object().keys({
        id: celebrate.Joi.number().integer(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
};
