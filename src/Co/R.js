import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'

function R() {
  const [state, setstate] = useState([])
  useEffect (() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res)=>{
      // console.log(res.data)
      setstate(res.data.resilts)
    })
  }, [])

  //Delete
     const onDelete = (id) => {
       console.log(id)
      axios.delete(`https://rickandmortyapi.com/api/character/${id}`).then (res => {
       console.log(res)
       setstate(state.filter(del =>{
        return del.id != id
       }))

    }) }


  return (
    <div>
        {state.map((items, index) => {
        return(
        <div key ={index}>
          <p> ID: {items.id}</p>
          <img src={items.image}></img>
          <button onClick={() => {onDelete(items.id)}}>Delete</button>
          <Link to ="/Ud">
            <button onClick={()=>localStorage.setItem("id",items.id)}>update</button>
          </Link>
          </div>
        )
      })}
    </div>
  )
}

export default R;