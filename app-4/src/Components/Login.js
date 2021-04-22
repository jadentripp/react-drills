import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            username: '',
            password: '',
        }
    }
    // handleChange= (e)=> {
    //     this.setState({
    //         userInput: e.target.value
    //     })
    //     }
    usernameUpdate= (e)=> {
        this.setState({
            username: e
    })
    }
    passwordUpdate= (e)=> {
        this.setState({
            password: e
    })
    }
    login = () =>{
        alert("Username: "+ this.state.username + " Password:  "+ this.state.password)
    }
    render(){
        return( 
        <div>
            <input type='text' onChange={(e)=> this.usernameUpdate(e.target.value)} value ={this.state.username}  />
            <input type='text' onChange={(e)=> this.passwordUpdate(e.target.value)} value ={this.state.password}  />
            <button onClick ={this.login}>Login </button>
        </div>
    )
           
        }
    }
