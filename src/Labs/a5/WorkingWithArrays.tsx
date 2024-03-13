import React, { useState } from "react";
function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const API = "http://localhost:4000/a5/todos";
    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API}>Get Todos</a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                value={todo.id}
                onChange={(e) =>
                    setTodo({ ...todo, id: parseInt(e.target.value) })
                }
            />
            <input
                type="text"
                value={todo.title}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        title: e.target.value,
                    })
                }
            />
            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`}>
                Update Title to {todo.title}
            </a>
            <a href={`${API}/${todo.id}`}>Get Todo by ID</a>
            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}>Get Completed Todos</a>
            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`}>Create Todo</a>
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <h3>Updating Completed Status</h3>
            <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
                Update Completed Status of Todo with ID = {todo.id}
            </a>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) =>
                    setTodo({ ...todo, completed: e.target.checked })
                }
            />

            <h3>Updating Description</h3>
            <a href={`${API}/${todo.id}/description/${todo.description}`}>
                Update Description of item with ID = {todo.id} to {todo.description}
            </a>
            <input
                type="text"
                value={todo.description}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        description: e.target.value,
                    })
                }
            />



        </div>
    );
}
export default WorkingWithArrays;
