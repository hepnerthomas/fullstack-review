const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner_id: Number,
  owner_login: String,
  stargazers_count: Number,
  watchers_count: Number,
  forks_count: Number,
  total_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // I - array of objects, each representing a repo
  // O - none
  // C - none
  // E - none

  // Pseudocode

  // iterate through the list of repos
  // add total_count field to each repo
  var repoDocuments = repos.map((repo) => {
    repo['total_count'] = repo['stargazers_count'] + repo['watchers_count'] + repo['forks_count'];
    // let document = new Repo(repo);
    return document;
  });

  // add all newly created repo documents to the Mongo database
  Repo.insertMany(repoDocuments, function(err) {
    if (err) {
      console.log(err);
    }
  });

}

module.exports.save = save;