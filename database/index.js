const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher'); // , {useNewUrlParser: true}

let repoSchema = mongoose.Schema({
  _id: Number,
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
  // add _id and total_count fields to each repo
  var repoDocuments = repos.map((repo) => {
    repo['_id'] = repo['id'];
    repo['total_count'] = repo['stargazers_count'] + repo['watchers_count'] + repo['forks_count'];
    // let document = new Repo(repo);
    return repo;
  });

  // add all newly created repo documents to the Mongo database
  Repo.insertMany(repoDocuments, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("success: inserted new repos to the database!");
    }
  });

  // // insert one repo into the Mongo DB
  // const firstRepo = new Repo(repoDocuments[0]);
  // firstRepo.save(function (err) {
  //   if (err) {
  //     console.log(err);
  //   }
  // });

  // // find id in repo and print out its object
  // 18221276, 20978623, 56271164
  // Repo.findById(56271164, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(data._id, data.name, data.total_count);
  //   }
  // });

  // Repo.findByIdAndRemove(18221276, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(data._id, data.name, data.total_count);
  //   }
  // });

  // Repo.deleteMany(18221276, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(data._id, data.name, data.total_count);
  //   }
  // });

  // var addedRepos = Repo.find({}, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     return data;
  //   }
  // });


  // // find id in repo and print out its object
  // Repo.findOne({_id: 18221276}, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(data.id, data.name, data.total_count);
  //   }
  // });

}

module.exports.save = save;