import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'ToDo App',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      }, {
        title: 'Learn Html',
        done: false
      }]
    };
  }

  // log de value
  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  //recente value
  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; //copy the array
    todos[index] = {...todos[index]}; // copy the todo
    todos[index].done = event.target.checked; // update done property on copied todo
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; //copy the array
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1> 
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo}/>
          <button type="submit">Add Todo</button>
        </form>

        <button onClick={() => this.allDone()}>All done</button>

        <ul>
          {this.state.todos.map((todo, index) => {
            return ( <li key={todo.title}>
            <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span>
            <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li> )
          })}
        </ul>

      </div>
    );
  }
}
// 27:04

export default App;