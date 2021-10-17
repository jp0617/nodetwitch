const axios = require("axios");


/**
 * getgames: This function get top games <br/>
 * Route: / <br/>
 * method: get
 * 
 * 
 *
 *
 *
 * 
 *
 *
 */

exports.getgames = (req, res) => {
  axios
    .get("https://api.twitch.tv/helix/games/top",{
      headers: {
        Authorization: process.env.auth_patch,
        "Client-ID": process.env.client_id,
      },
    })
    .then(function (response) {
      res.status(200).json(response.data.data);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};
