import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'

function Read() {
  const [state, setstate] = useState([])
  useEffect (() => {
    axios.get("https://6362426866f75177ea2a9c61.mockapi.io/todolist").then((res)=>{
      // console.log(res.data)
      setstate(res.data)
    })
  }, [])

  //Delete
     const onDelete = (id) => {
       console.log(id)
      axios.delete(`https://6362426866f75177ea2a9c61.mockapi.io/todolist/${id}`).then (res => {
       console.log(res)
       setstate(state.filter(del =>{
        return del.id != id
       }))

    }) }


  return (
    <div>
        {state.map((items,index) => {
        return(
        <div key={index}>
          <p>First Name: {items.fName}</p>
          <p>Last Name: {items.lName}</p>
          <button onClick={() => {onDelete(items.id)}}>Delete</button>
          <Link to ="/Update">
            <button onClick={()=>localStorage.setItem("id",items.id)}>update</button>
          </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Read