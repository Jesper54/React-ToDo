import React from 'react';

const TodoItem = (props) => {
    const { todo, index } = props;
    return (
        <li className="SingleTodoItem">
            <input className="TodoCheckbox" onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
            <span className="TodoItem" style={{ textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span>
            <button className="btn .btn-sm btn-danger btn-remove" onClick={() => props.removeTodo(index)}>Remove</button>
            </li>
        );
    }

export default TodoItem;