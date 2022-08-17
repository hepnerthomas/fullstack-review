const mongoose = require('mongoose');
if (process.env.type === "PROD") {
  mongoose.connect('mongodb://hepnerthomas/fetcher');
} else {
  mongoose.connect('mongodb://localhost/fetcher');
}


let repoSchema = mongoose.Schema({
  // _id: Number,
  id: {type: Number, unique: true},
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

  // my original solution, and how solution video did it
  return Repo.create(repos);

}

let get = () => {
  return Repo.find().sort({'total_count': 'desc', 'name': 'asc'}).limit(25);
}

module.exports = {save, get};