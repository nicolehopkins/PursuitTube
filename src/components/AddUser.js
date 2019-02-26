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
    return (
      <>
        <Alert color="danger" isOpen={this.state.alert} toggle={this.alert}>
          The username you entered ahs already been added, Please add a new name !
        </Alert>
        <input type="text" /> 
        <button onClick={this.checkListOfUsers}></button>
      </>
    );
  }
}

export default Users;
