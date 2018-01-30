import React, { Component } from "react";

const Users = [
  { name: "lxq", id: 1 },
  { name: "ws", id: 2 },
  { name: "lzz", id: 3 }
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users
    };
  }

  onDismiss(id) {
    const isNotId = item => item.id !== id;
    const updateList = this.state.Users.filter(isNotId);
    this.setState({ Users: updateList });
  }

  render() {
    return (
      <div>
        {this.state.Users.map((user, index) => (
          <div key={user.id}>
            <span>{user.name}</span>
            <button type="button" onClick={() => this.onDismiss(user.id)}>
              Dismiss
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;
