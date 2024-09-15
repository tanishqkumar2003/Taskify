import React from 'react'

function Todos({todos}) {
  console.log(todos);
  
  return (
    <div>
      <h1>This is the list of Todos</h1>
        {todos.map(function(todo){
          return <div className='bg-slate-500'>
            <h1 className="text-3xl font-bold underline">{ todo.title }</h1>
            <h3>{ todo.description }</h3>
            <button onClick ={function() {
                fetch("http://localhost:3000/completed", {
                  method:"PUT",
                  body: JSON.stringify({
                  id: todo._id
                  }),
                  headers: {
                  "Content-type": "application/json"
                  }
                  })
                  .then(async function(res) {
                  const json = await res.json();
                  // alert(JSON.stringify(json))
                  })
                  }}>{todo.completed == true ? "Completed": "Mark as Complete"}</button>

            <button onClick ={function() {
                fetch("http://localhost:3000/delete", {
                  method:"DELETE",
                  body: JSON.stringify({
                  id: todo._id
                  }),
                  headers: {
                  "Content-type": "application/json"
                  }
                  })
                  .then(async function(res) {
                  const json = await res.json();
                  alert(JSON.stringify(json))
                  })
                  }}>Delete</button>      
          </div>
        })}
    </div>
  )
}

export default Todos
