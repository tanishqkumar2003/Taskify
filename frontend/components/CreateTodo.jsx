import React, { useState } from 'react'

function CreateTodo() {

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState(""); 

  return (
    <div>
       <input type='text' placeholder='Title' onChange={function(e){
        const value = e.target.value;
        setTitle(value)
       }} /><br/><br/>

       <input type='text' placeholder='Description' onChange={function(e){
        const value = e.target.value;
        setDescription(value)
       }} />

       <button onClick={()=>{
        fetch("http://localhost:3000/todo",{ 
          method: "POST",
          body:JSON.stringify({
            title: title,
            description: description
          }),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(async function(res){
          const json = await res.json;
          alert("Todo added")
        })
       }} >Add a Todo</button>
    </div>
  )
}

export default CreateTodo



