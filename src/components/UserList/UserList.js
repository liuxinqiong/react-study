import React, { Component } from "react";

const DEFAULT_QUERY = "redux";
const DEFAULT_HPP = "100";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

// 临时测试数据
const Users = [
  { name: "lxq", id: 1 },
  { name: "ws", id: 2 },
  { name: "lzz", id: 3 },
  { name: "lxq", id: 4 },
  { name: "ws", id: 5 },
  { name: "lzz", id: 6 },
  { name: "lxq", id: 7 },
  { name: "ws", id: 8 },
  { name: "lzz", id: 9 }
];

// es5
/*
function isSearched(searchTerm) {
  return function(item) {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  };
}
*/

// es6
const isSearched = searchTerm => item => {
  return item.title
    ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
    : false;
};

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchKey: "", // 因为searchTerm 是动态值
      searchTerm: DEFAULT_QUERY,
      error: null
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
  }

  onDismiss(id) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];
    const isNotId = item => item.objectID !== id;
    const updateList = hits.filter(isNotId);
    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updateList, page }
      }
    });
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    const { searchKey, results } = this.state;
    const oldHits =
      results && results[searchKey] ? results[searchKey].hits : [];
    const updateList = [...oldHits, ...result.hits];
    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updateList, page }
      }
    });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => this.setState({ error: e }));
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }
    event.preventDefault();
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  render() {
    const { results, searchTerm, searchKey, error } = this.state;
    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;
    const list =
      (results && results[searchKey] && results[searchKey].hits) || [];
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        {error ? (
          <div className="interactions">
            <p>Something went wrong.</p>
          </div>
        ) : (
          <Table
            result={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        )}

        <div className="interactions">
          <button
            onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
          >
            More
          </button>
        </div>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { value, onChange, onSubmit, children } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">{children}</button>
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const { result, pattern, onDismiss } = this.props;
    return (
      <div className="table">
        {result.filter(isSearched(pattern)).map((item, index) => (
          <div key={item.objectID} className="table-row">
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;
