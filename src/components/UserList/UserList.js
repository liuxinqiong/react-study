import React, { Component } from "react";

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
const isSearched = searchTerm => item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase());

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users,
      searchTerm: ""
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.id !== id;
    const updateList = this.state.Users.filter(isNotId);
    this.setState({ Users: updateList });
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    const { Users, searchTerm } = this.state;
    return (
      <div>
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Search
        </Search>
        <Table Users={Users} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children}
        <input type="text" value={value} onChange={onChange} />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const { Users, pattern, onDismiss } = this.props;
    return (
      <div>
        {Users.filter(isSearched(pattern)).map((user, index) => (
          <div key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => onDismiss(user.id)}>Dismiss</button>
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;
