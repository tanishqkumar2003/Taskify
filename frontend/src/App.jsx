import { useEffect, useState } from 'react'
import CreateTodo from '../components/CreateTodo'
import Todos from '../components/Todos'
import './App.css'
import Header from '../components/Header';

function App() {

  const [ todos, setTodos] = useState([]);

  useEffect(() => {
  // Define a function to fetch data
  const fetchTodos = async () => {
      const res = await fetch("http://localhost:3000/todos");
      const json = await res.json();
      console.log(json.todos);
      setTodos(json.todos);
  };

  // Call the fetch function
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



 // fetch("http://localhost:3000/todos")
  // .then(async function(res){
  //   const json = await res.json();
  //   console.log(json.todos);
  //   setTodos(json.todos)
  // })