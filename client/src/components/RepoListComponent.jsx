import React from 'react';

class RepoListComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {repo} = this.props;
    var url = repo.url;
    console.log(url);
    return (
      <div>
        <li><a href={repo.url}>{repo.name}</a></li>
      </div>
    )

  }

}


export default RepoListComponent;

