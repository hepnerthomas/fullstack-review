import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    // this.search = this.search.bind(this);

  }

  componentDidMount() {
    axios.get('/repos')
      .then((response) => {
        console.log("Successfully loaded top 25 repositories!");
        this.setState({repos: response.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  search (term) {
    // console.log(this);
    // console.log(`${term} was searched successfully.`);
    // TODO
    var params = {username: term}
    var searchRequest = $.post('/repos', params, function(data) {
    })
      .done((data) => {
        axios.get('/repos')
          .then((response) => {
            console.log("Successfully loaded top 25 repositories!");
            this.setState({repos: response.data});
          })
          .catch(function(error) {
            console.log(error);
          });
        console.log(data);
        console.log(`${term} was searched successfully.`);
      })
      .done((response) => {
        console.log("response: ", response);
      })
      .fail(function() {
        console.error(`${term} was not searched.`);
      });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));