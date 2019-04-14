import React from 'react';

const NewTodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
          <label className="TodoText" htmlFor="newTodo">Insert a new Todo</label>
          <input className="TodoInput form-control" onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo}/><br></br>
          <button className="btn btn-primary btn-add" type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodoForm;