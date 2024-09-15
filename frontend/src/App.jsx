import { useEffect, useState } from 'react'
import CreateTodo from '../components/CreateTodo'
import Todos from '../components/Todos'
import './App.css'
import Header from '../components/Header';

function App() {

  const [ todos, setTodos] = useState([]);

  useEffect(() => {
  const fetchTodos = async () => {
      const res = await fetch("http://localhost:3000/todos");
      const json = await res.json();
      console.log(json.todos);
      setTodos(json.todos);
  };

  fetchTodos();
}, [todos]);


  return (
   <div>
    <Header />
    <CreateTodo />
    <Todos todos={todos} />
   </div>
  )
}

export default App
