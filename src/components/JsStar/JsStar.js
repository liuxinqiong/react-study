import React, { Component } from "react";
import axios from "axios";
import createFetch from "../../createFetch";

class JsStar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }

  getInitialState() {
    return {
      loading: true,
      error: null,
      data: null
    };
  }

  componentDidMount() {
    // way1：axios
    // axios.get('https://api.github.com/search/repositories?q=javascript&sort=stars').then(value => {
    //     this.setState({
    //         loading: false,
    //         data: value.data
    //     });
    // }, error => {
    //     this.setState({
    //         loading: false,
    //         error: error
    //     });
    // });
    // way2：fetch
    createFetch(fetch, { baseUrl: "https://api.github.com/" })(
      "search/repositories?q=javascript&sort=stars",
      { method: "GET" }
    ).then(data => {
      this.setState({
        loading: false,
        data: data
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <span>Loading</span>;
    } else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    } else {
      var repos = this.state.data.items;
      var repoList = repos.map((repo, index) => {
        return (
          <li key={index}>
            <a href={repo.html_url}>{repo.name}</a>({repo.stargazers_count}{" "}
            stars) <br /> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
}

export default JsStar;
