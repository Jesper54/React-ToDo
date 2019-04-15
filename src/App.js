import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'ToDo App',
      newTodo: '',
      todos: [{ // Start van de array van todo's
        title: 'Dit is een voorbeeld',
        done: false
      }]
    };
  }

  // wanneer er iets verandert update de form
  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  // 
  formSubmitted(event) {
    // if statement maken of hij empty is
    //const InputValue = this.props.newTodo;
    if(this.state.newTodo.trim() === "") {

    }else{
    event.preventDefault();
    this.setState({
      newTodo: '', // als je een op enter drukt krijg je een nieuwe input met niets
      todos: [...this.state.todos, { // oude array
        title: this.state.newTodo, // nieuwe box in de array
        done: false
      }]
    });
  }
}

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; //kopieert de array
    todos[index] = {
    ...todos[index],
    done: event.target.checked //kopieert de todo en unchecked de nieuwe box
    };

    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; //kopieert de array
    todos.splice(index, 1); // split hem en verwijdert de value

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true //vinkt elke value in de array aan als done
      };
    });

    this.setState({
      todos
    });
  }

  render() { // rendert de hele form met aangeroepen functies
    return (
      <div className="App">
        <h1>{this.state.message}</h1> 
        <p>Gemaakt door Jesper Bralten</p>

        <NewTodoForm //roept de form aan via een andere file
        formSubmitted={this.formSubmitted.bind(this)} // vergelijkt de props
        newTodoChanged={this.newTodoChanged.bind(this)}
        newTodo={this.state.newTodo}  
        />

        <button className="btn btn-success btn-done" onClick={() => this.allDone()}>All Done</button>

        <TodoList // roeps de todolist aan via andere file
        todos={this.state.todos} // vergelijkt de props
        toggleTodoDone={this.toggleTodoDone.bind(this)}
        removeTodo={this.removeTodo.bind(this)}
        />

      </div>
    );
  }
}

export default App;

// https://www.youtube.com/watch?v=vIA130MePY8
// Deze tutorial heb ik gevolgd