const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'accept': 'application/vnd.github+json',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  // return a promise from axios get request
  return axios(options);
    // .then((response) => {

    // })
    // .catch((error) => {

    // });

}

module.exports.getReposByUsername = getReposByUsername;