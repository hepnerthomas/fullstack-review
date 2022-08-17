const gitHubHelpers = require('../helpers/github.js');
const db = require('../database/index.js');
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

// middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // get the username from the req object
  var username = req.body.username;
  console.log(username);

  // call getReposByUserName(username) and store response in repos
  gitHubHelpers.getReposByUsername(username)
    .then((repos) => {
      // call db.save(repos)
      // console.log(repos.data[0]);
    // add _id and total_count fields to each repo
      var repoDocuments = repos.data.map((repo) => {
        // repo['_id'] = repo['id'];
        repo['owner_id'] = repo.owner.id;
        repo['owner_login'] = repo.owner.login;
        repo['total_count'] = repo['stargazers_count'] + repo['watchers_count'] + repo['forks_count'];
        // let document = new Repo(repo);
        return repo;
      });
      console.log(repoDocuments[0]);
      console.log("GitHub API request succeeded!");
      return db.save(repoDocuments)
      // db.save(repos.data)
      // .then(() => res.sendStatus(201))
    })
    .then(() => {
        console.log("Saved GitHub repos to the database!");
        res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Bad GitHub API request");
        // if err: respond with status code 400
      res.sendStatus(400);
    })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  return db.get()
    .then((repos) => {
      console.log(repos);
      res.json(repos);
    })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

