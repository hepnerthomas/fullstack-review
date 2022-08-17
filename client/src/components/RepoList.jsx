import React from 'react';
import RepoListComponent from './RepoListComponent.jsx';

class RepoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {repos} = this.props;
    var repoListComponents = repos.map((repo) => {
      let url = 'https://github.com/' + repo.owner_login + '/' + repo.name;
      // console.log(url);
      repo.url = url;
      return <RepoListComponent key={repo.id} repo={repo}/>;
    });
    console.log(repoListComponents);

    return (
      <div>
        <h4> Repo List Component </h4>
        <div>There are {repos.length} repos.</div><br></br>
        <div>{repoListComponents}</div>
      </div>

    )
  }

}

// const RepoList = (props) => (
//   <div>
//     <h4> Repo List Component </h4>
//     There are {props.repos.length} repos.
//   </div>
// )

export default RepoList;