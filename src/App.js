import React, { useState}from 'react';
import './App.css';

function App() {
//   Below arrav destructure suntax is equivalent to:
// cost newTodoStateArr = useState("'");
// cost newTodo = newTodoStateArr[0]:
// cost setNewTodo = newTodoStateArr[1];
  
  const [newTodo, setNewTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    // todos.push(newTodo)
    if (newTodo.length === 0) { return; }

    const newItem = {
      text: newTodo,
      complete: false
    }
    setTodos([...todos, newItem])
    setNewTodo("")
  }
  
  const handleTodoDelete = (delIdx) => { 
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    })
    setTodos(filteredTodos);
    // const index = todos.indexOf(newTodo);
    // todos.splice(index, 1);
    // setTodos(todos);
    // setNewTodo("")
  }

  const handleToggleCompelet = (idx) => { 
    const updateTodo = todos.map((todo, i) => { 
      if (idx === i) { 
         todo.complete = !todo.complete;
        // return updateTodo;
      }
      return todo;
    })
        setTodos(updateTodo);

  }
  return (
    <div className="container m-5 p-5 algin-centered text-center">
      <form onSubmit={(event) => ( handleNewTodoSubmit(event))}>
        <input onChange={(event) => (setNewTodo(event.target.value))} type="text" value={newTodo} className='m-2'/>
        <button className='btn btn-outline-dark m-2'>Add</button>
      </form>
      {
        todos.map((todo, i) => { 
          const todoClasses = ['font-weight-bold', 'font-italic', 'm-2', 'text-muted']
          if (todo.complete) { 
            todoClasses.push('text-decoration-line-through');
          }
          return (
            <div className='' key={i}>
              <input onChange={(event) => {
                handleToggleCompelet(i);
              }} checked={todo.complete} type="checkbox" />
              <span className={todoClasses.join(" ")+"font-weight-bold"}> {todo.text}</span>
              <button className='btn btn-outline-dark m-2 ' onClick={(event) => {
                //  handleTodoDelete(todo);
                handleTodoDelete(i);
              }}>Delete</button>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
