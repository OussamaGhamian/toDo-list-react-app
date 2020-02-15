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
    if (this.state.currentTask != "")
      await this.setState({
        tasksList: [...this.state.tasksList, this.state.currentTask],
        currentTask: ""
      })
  }
  hundleInput = (e) => {
    this.setState({ currentTask: e.target.value })
  }

  handleDelete = (e) => {

    this.setState({
      tasksList: this.state.tasksList.filter((task, index) => index != e.target.value)
    })
  }
  handleEdit = () => {
    
  }
  render() {
    return (

      <div className="App">
        <h1>Todo App</h1>
        <input type="text" placeholder="add a task..." value={this.state.currentTask} onChange={this.hundleInput} />
        <input type="button" value="Add" onClick={this.hundleAdd} />
        <ul>
          {this.state.tasksList.map((task, index) => <div className="item">
            <li >{task}</li>
            <div className="btnGrp">
              <button value={index} onClick={this.handleDelete}>Del</button>
              <button value={index} onClick={this.handleEdit}>Edit</button>
            </div>
          </div>)}
        </ul>
      </div>

    );
  }
}

