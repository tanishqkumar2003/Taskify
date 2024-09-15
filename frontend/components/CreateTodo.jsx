import React, { useState } from 'react';

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Create a New Todo</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={() => {
          fetch('http://localhost:3000/todo', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              description: description
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(async function(res) {
            const json = await res.json();
            alert('Todo added');
          })
          .catch(error => {
            console.error('Error:', error);
            alert('Failed to add todo');
          });
        }}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
