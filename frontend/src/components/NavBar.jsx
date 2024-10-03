import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogout = ()=>{
      localStorage.clear()
  }

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Taskify</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white font-semibold mx-4 hover:text-blue-200 transition duration-300">
            Home
          </Link>
          <Link to="/create" className="text-white font-semibold mx-4 hover:text-blue-200 transition duration-300">
            Create Todo
          </Link>
          <Link to="/todos" className="text-white font-semibold mx-4 hover:text-blue-200 transition duration-300">
            View Todos
          </Link>
          <Link to="/" onClick={handleLogout} className="text-white font-semibold mx-4 hover:text-blue-200 transition duration-300">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
