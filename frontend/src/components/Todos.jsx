import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleGetTodo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/todo/get",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setTodos(response.data.todos);
        console.log("Todo fetched:", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    handleGetTodo();
  }, [update]);

  const handleMarkAsCompleted = async (id) => {
    try {
      const complete = await axios.put(
        "http://localhost:3000/api/v1/todo/completed", {
          _id: id
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log("Todo updated:");
      setUpdate(complete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/todo/delete/${id}`, 
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log("Todo deleted:", response.data);
      setUpdate(response); 
    } catch (error) {
      console.log(error);
    }
  };
  const highPriorityTodos = todos.filter(todo => todo.priority === 'high');
  const lowPriorityTodos = todos.filter(todo => todo.priority === 'low');

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto p-6 pt-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Your Todos</h2>
      
      {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error if any */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* High Priority Todos */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-red-500">High Priority</h3>
          {highPriorityTodos.length > 0 ? (
            highPriorityTodos.map((todo) => (
              <div 
                key={todo._id} 
                className={`p-4 my-5 rounded-lg shadow-lg transition-transform duration-200 hover:shadow-xl border border-gray-200 
                  ${todo.completed ? 'bg-green-100' : 'bg-yellow-100'}`} // Conditional background color
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-500 transition duration-150">{todo.title}</h3>
                  <p className="text-gray-700">{todo.description}</p>
                  {todo.dueDate && (
                    <p className="text-gray-500">
                      Due Date: {new Date(todo.dueDate).toLocaleDateString()}
                    </p>
                  )}
                  <p className={`text-sm font-semibold ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {todo.completed ? 'Completed' : 'Pending'}
                  </p>
                  {!todo.completed && ( // Render the button only if the todo is not completed
                    <button 
                      onClick={() => handleMarkAsCompleted(todo._id)} 
                      className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                      Mark as Completed
                    </button>
                  )}
                  <button 
                    onClick={() => handleDeleteTodo(todo._id)} 
                    className="mt-3 ml-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No high-priority todos available.</p>
          )}
        </div>

        {/* Low Priority Todos */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-green-500">Low Priority</h3>
          {lowPriorityTodos.length > 0 ? (
            lowPriorityTodos.map((todo) => (
              <div 
                key={todo._id} 
                className={`p-4 my-5 rounded-lg shadow-lg transition-transform duration-200 hover:shadow-xl border border-gray-200 
                  ${todo.completed ? 'bg-green-100' : 'bg-yellow-100'}`} // Conditional background color
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-500 transition duration-150">{todo.title}</h3>
                  <p className="text-gray-700">{todo.description}</p>
                  {todo.dueDate && (
                    <p className="text-gray-500">
                      Due Date: {new Date(todo.dueDate).toLocaleDateString()}
                    </p>
                  )}
                  <p className={`text-sm font-semibold ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {todo.completed ? 'Completed' : 'Pending'}
                  </p>
                  {!todo.completed && ( // Render the button only if the todo is not completed
                    <button 
                      onClick={() => handleMarkAsCompleted(todo._id)} 
                      className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                      Mark as Completed
                    </button>
                  )}
                  <button 
                    onClick={() => handleDeleteTodo(todo._id)} 
                    className="mt-3 ml-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No low-priority todos available.</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Todos;
