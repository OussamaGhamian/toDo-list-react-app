import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      currentTask: "",
      tasksList: []
    }
  }
  /**
   * write your functions between the constructor and the function "render".
   */

  hundleAdd = async (e) => {
    if(this.state.tasksList.length > 0)
    await this.setState({
      tasksList: [...this.state.tasksList, this.state.currentTask]
    })

  }
  hundleInput = (e) => {
    console.log(e.target.value)
    if(e.target.value !== "")
    this.setState({ currentTask: e.target.value })
    

  }
  render() {
    return (

      <div className="App">
        <h1>Todo App</h1>
        <input type="text" placeholder="add a task..." onChange={this.hundleInput} />
        <input type="button" value="Add" onClick={this.hundleAdd} />
        <ul>
          {this.state.tasksList.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
      </div>

    );
  }
}

