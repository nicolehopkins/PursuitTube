import React from 'react';

class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:['vicky','eddie','nicole','steph'],
            newUserName : newUserName,
        }
    }
    addUser =(e)=>{
        if (this.newUserName===this.userName){
            <alert>this name has already been added</alert>
        console.log(addUser)
    }
    listOfUsers=(e)=>{
        
    }

    render(){
        return(
            <>
            <input type="text"></input>
            </>
        )
    }
    
}

export default Users;
