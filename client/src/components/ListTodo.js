import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      //fetch makes a get request by default
      const response = await fetch("http://localhost:5001/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //delete todo function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
        method: "DELETE",
      });

      //use a filter to return all todos exceot the one which has the id passed into the delete function
      setTodos(todos.filter((todo) => todo.todo_id != id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //useEffect will constantly run which means getTodos() will keep on happening
  //to stop this add [] at the bottom to make it do 1 request only
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
            </tr>*/}
          {todos.map((todo) => (
            //key gives the each row its id from the DB
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo}></EditTodo>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
