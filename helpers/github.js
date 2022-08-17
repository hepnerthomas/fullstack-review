const axios = require('axios');
const config = process.env.GIT_TOKEN || require('../config.js').TOKEN;

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
      'Authorization': `token ${config}`
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