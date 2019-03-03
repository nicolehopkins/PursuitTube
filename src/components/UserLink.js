import React from "react";


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      users: ["default", "vicky", "eddie", "nicole", "steph"], //[]
      newUser: "",
    };
  }
 
  switchNames = e => {
    this.setState({ newUser: e.target.value })
  }

  addUser = () => {
    if (this.newUser.includes(this.state.users)) {
      return alert ("This username is already taken, please try again.")
      }
      
      const listOfUsers = [this.state.users].push(this.state.newUser) 
      this.setState({users: this.listOfUsers})
    };


    render() {
      return (
        <>
          <div className="row col-6">
            <h3> Create a new user</h3>
            <input type="text" onChange={this.switchNames}/>
            <button onClick={this.addUser}>add</button>
          </div>

          <div className="row col-6">
            <h3>Usernames</h3>
            <li>
              {this.listOfUsers}
            </li>
          </div>

        </>
      );
    }
  }

export default Users;
