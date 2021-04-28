import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends Component{
  constructor(){
    super()
    this.state = {
      userInput: '',
      taskList: []
    }
  }
  handleChange= (e)=>{
    this.setState({
      userInput: e
    })
  }
  add = (userInput, taskList)=> {
    this.setState({
      taskList: [this.state.userInput, ...this.state.taskList],
      userInput: ''
    })
  }

  render() {
    let taskList  = this.state.taskList.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input
            value={this.state.userInput}
            placeholder="Enter new task"
            onChange={e => this.handleChange(e.target.value)}
          />
          <button onClick={this.add}>Add</button>
        </div>
        <br />
        {taskList}
      </div>
    );
  }
}

export default App;
