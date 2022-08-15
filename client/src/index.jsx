import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    // this.search = this.search.bind(this);

  }

  search (term) {
    // console.log(this);
    // console.log(`${term} was searched successfully.`);
    // TODO
    var searchRequest = $.post('/repos', function(data) {
    })
      .done((data) => {
        console.log(data);
        this.setState({repos: data});
        console.log(`${term} was searched successfully.`);
      })
      .fail(function() {
        console.error(`${term} was not searched.`);
      });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));