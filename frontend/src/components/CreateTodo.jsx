import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import { useNavigate } from "react-router-dom";


function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('high');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateTodo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/todo/create",
        {
          title,
          description,
          dueDate,
          priority,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      navigate("/todos")
      console.log("Todo created:", response.data);
    } catch (err) {
      setError("Please Login to create a Todo");
      alert("Login to create a Todo")
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create a New Todo</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-gray-700">Priority</h3>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="high"
              checked={priority === 'high'}
              onChange={e => setPriority(e.target.value)}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700">High</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="low"
              checked={priority === 'low'}
              onChange={e => setPriority(e.target.value)}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Low</span>
          </label>
        </div>

        <button
          onClick={handleCreateTodo}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Add Todo
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </>
  );
}

export default CreateTodo;
