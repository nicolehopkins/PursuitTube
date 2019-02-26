import React from "react";
import { Alert } from "reactstrap";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ["default", "vicky", "eddie", "nicole", "steph"],
      newUserName: "",
      alert: false
    };
  }
  addUser = e => {
    if (this.newUserName === this.userName) {
      this.setState({ alert: true });
    } else {
      this.setState({ alert: false });
    }
  };

  checkListOfUsers = e => {};

  render() {
    //  const alert=()= this.addUser
    return (
      <>
        <input type="text" /> 
        <button onClick={this.addUser}>add</button>
      </>
    );
  }
}

export default Users;
