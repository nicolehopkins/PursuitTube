// import React, { Component } from 'react';

// class UserLink extends Component {
//   render() {
//     return (
//         <div>
//           <h2>User</h2>
//         </div>
//     );
//   }
// }

// export default UserLink;

import React from "react";
import { Alert } from "reactstrap";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["default", "vicky", "eddie", "nicole", "steph"], //[]
      newUserName: "",
      feed:[],
      alert: true
    };
  }
  addUser = e => {
    if (this.state.newUserName === this.state.users) { // think off diff way to check cant do string to an array - array method (.includes) or (indexOf)
      this.setState({ alert: true });
    } else {
      this.setState({ alert: false });
    }
  };

  checkListOfUsers = e => {};

  render() {

        if(this.state.alert === true ){
            alert ("this username is already taken, please try again")
        }
    
    return (
      <>
        <input type="text" /> 
        <button onClick={this.addUser}>add</button>
        {console.log('yoooooo')}
      </>
    );
  }
}

export default Users;
