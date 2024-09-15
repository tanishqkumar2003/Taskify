import React from 'react';

function Todos({ todos }) {
  console.log(todos);

  return (
    <div className="max-w-4xl mx-auto p-6 pt-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Todos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {todos.map(function(todo) {
          return (
            <div
              key={todo._id}
              className="bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h1 className="text-2xl font-bold mb-2">{todo.title}</h1>
              <h3 className="text-lg mb-4 text-gray-700">{todo.description}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    fetch("http://localhost:3000/completed", {
                      method: "PUT",
                      body: JSON.stringify({
                        id: todo._id
                      }),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    })
                      .then(async function(res) {
                        const json = await res.json();
                        // alert(JSON.stringify(json))
                      });
                  }}
                  className={`px-4 py-2 rounded-lg text-white ${todo.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} transition-colors duration-300`}
                >
                  {todo.completed ? "Completed" : "Mark as Complete"}
                </button>
                <button
                  onClick={() => {
                    fetch("http://localhost:3000/delete", {
                      method: "DELETE",
                      body: JSON.stringify({
                        id: todo._id
                      }),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    })
                      .then(async function(res) {
                        const json = await res.json();
                        alert(JSON.stringify(json));
                      });
                  }}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
