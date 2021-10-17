const axios = require("axios");
const vacacionService = require("../services/vacacion.services");
const logService = require("../services/log.services");

/**
 * getuser: This function get user <br/>
 * Route: /users <br/>
 * method: get
 *
 * @example
 * query
 * "user":"string"
 *
 *
 *
 *
 *
 *
 */

exports.getusers = (req, res) => {
  axios
    .get("https://api.twitch.tv/helix/users", {
      params: {
        login: req.query.user,
      },
      headers: {
        Authorization: process.env.auth_get,
        "Client-ID": process.env.client_id,
      },
    })
    .then(function (response) {
      res.status(200).json(response.data.data[0]);
      logService.create({
        who: process.env.client_id,
        log: "consulta user " + req.query.user,
      });
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

/**
 * postcommercial: This function create a commercial <br/>
 * Route: /users <br/>
 * method: post
 *
 * @example
 *
 *
 * body
 *
 * {
 *  id_canal:string
 *  duracion:integer
 * }
 *
 *
 *
 *
 *
 *
 */

exports.postcommercial = (req, res) => {
  const broadcaster_id = req.body.id_canal;
  const length = req.body.duracion;

  var data = JSON.stringify({
    broadcaster_id: broadcaster_id,
    length: length,
  });

  var config = {
    method: "post",
    url: "https://api.twitch.tv/helix/channels/commercial",
    headers: {
      Authorization: process.env.auth_post,
      "Client-Id": process.env.client_id,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data.data);
      logService.create({
        who: process.env.client_id,
        log: ("create commercial " + broadcaster_id, length),
      });
    })
    .catch(function (error) {
      res.status(500).json({ message: "the user is current offline" });
    });
};

/**
 * updateschedulevacations: This function update vacation mode <br/>
 * Route: /users <br/>
 * method: patch
 *
 * @example
 *
 *
 * body
 *
 * {
 *  id_canal:string
 *  vacacion: boolean
 *  inicio_vacaciones: timezone
 *  fin_vacaciones: timezone
 *  zonahoraria: string zona horaria
 * }
 *
 *
 *
 *
 *
 *
 */
exports.updateschedulevacations = (req, res) => {
  const id_channel = req.body.id_canal;
  const vacation_enabled = req.body.vacaciones;
  const inicio_vacaciones = req.body.inicio_vacaciones;
  const fin_vacaciones = req.body.fin_vacaciones;
  const zonahoraria = req.body.zonahoraria;

  var config = {
    method: "patch",
    url: `https://api.twitch.tv/helix/schedule/settings?broadcaster_id=${id_channel}&is_vacation_enabled=${vacation_enabled}&vacation_start_time=${inicio_vacaciones}&vacation_end_time=${fin_vacaciones}&timezone=${zonahoraria}`,
    headers: {
      Authorization: process.env.auth_patch,
      "Client-Id": process.env.client_id,
    },
  };

  axios(config)
    .then(function (response) {
      vacacionService.create(req.body);
      logService.create({
        who: process.env.client_id,
        log: "update vacations " + id_channel,
        vacation_enabled,
        inicio_vacaciones,
        fin_vacaciones,
        zonahoraria,
      });
      res.status(200).json({ message: "updated successfully" });
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

/**
 * deletevideo: This function delete videos  <br/>
 * Route: /users <br/>
 * method: delete
 *
 * @example
 *
 *params
 * idvideo:integer
 *
 *
 *
 *
 *
 *
 */
exports.deletevideo = (req, res) => {
  const idvideo = req.query.id;
  var config = {
    method: "delete",
    url: `https://api.twitch.tv/helix/videos?id=${idvideo}`,
    headers: {
      Authorization: process.env.auth_delete,
      "Client-Id": process.env.client_id,
    },
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data.data);
      logService.create({
        who: process.env.client_id,
        log: "delete video " + idvideo,
      });
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};
