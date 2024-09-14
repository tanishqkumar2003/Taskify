import React from 'react'

function Todos({todos= [
    { title: 'Buy groceries', description: 'Milk, bread, eggs', completed: false },
    { title: 'Clean house', description: 'Vacuum and dust', completed: true },
  ]}) {
  console.log(todos);
  
  return (
    <div>
      <h1>This is the list of Todos</h1>
        {todos.map(function(todo){
          return <div>
            <h1>{ todo.title }</h1>
            <h1>{ todo.description }</h1>
            <button>{ todo.completed == true ? "Completed" : "Mark as completed" }</button>
          </div>
        })}
    </div>
  )
}

export default Todos

// {todos= [
//   { title: 'Buy groceries', description: 'Milk, bread, eggs', completed: false },
//   { title: 'Clean house', description: 'Vacuum and dust', completed: true },
// ]}