import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId:{
        name: '',
        id: 0
      },
      alert: false
    };
  }
  userId =(name)=>{
    this.state.userId.push(name)
   
  alertUser = e => {
    if (this.userId.name === this.state.userId.name) {
      this.setState({ alert: true });
    } else {
      this.setState({ alert: false });
    }
  };
  addUser = e => {
    if (this.state.alert === false) {
      // for (let i = 0; i < this.state.userId.id; i++) {
        // newUserId: [{ addUser, name: "" }],
        console.log("number increase");
      }
    }
  };
  checkListOfUsers = e => {};

  render() {

    if (this.state.alert === true) {
      alert("This username is already taken, please try again.");
    }
    return (
      <>
      <h3>Create a new User </h3>
        <input type="text" />
        <button onClick={this.userId}>add</button>
        
      <h3>User List</h3>
      <ul>{this.state.users}</ul>
      </>
    );
  }
}

export default Users;

