import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Todo App Header</h1>
        <div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Add Todo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
