import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { HomePage } from "./components/Home"
import CreateTodo from "./components/CreateTodo"
import ViewTodo from "./pages/ViewTodo"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/create" element={<CreateTodo/>} />
            <Route path="/todos" element={<ViewTodo/>} />
            {/* <Route path="/about" element={<AboutUs/>} /> */}
            {/* <Route path="/contact" element={<ContactUs/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App





// import { useEffect, useState } from 'react'
// import CreateTodo from '../components/CreateTodo'
// import Todos from '../components/Todos'
// import './App.css'
// import Header from '../components/Header';

// function App() {

//   const [ todos, setTodos] = useState([]);

//   useEffect(() => {
//   const fetchTodos = async () => {
//       const res = await fetch("http://localhost:3000/todos");
//       const json = await res.json();
//       console.log(json.todos);
//       setTodos(json.todos);
//   };

//   fetchTodos();
// }, [todos]);


//   return (
//    <div>
//     <Header />
//     <CreateTodo />
//     <Todos todos={todos} />
//    </div>
//   )
// }

// export default App
