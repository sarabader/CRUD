import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

 function Im(){
  const navigate = useNavigate();
    const [state, setState]=useState([])

    useEffect (() =>{
    // axios.get("https://rickandmortyapi.com/api/character").then((res) => {
    // console.log(res.data.results);
    // setState(res.data.results)
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
     console.log(res.data.results);
    setState(res.data.results)
  
      
      })
    
    },[])
    const onDelete = (id) => {
      console.log(id)
     axios.get(`https://rickandmortyapi.com/api/character/${id}`).then (res => {
      console.log(res)
      setState(state.filter(del =>{
       return del.id != id
      }))

   }) }
      return (
       
        <div className='b' >
    
    
           {state.map((items,index)=>{
      return(
        <div key={index}className='a' >
        <p>Image Name:{items.name}</p>
        <img src= {items.image}></img>
       
        </div>
      )
    })}
    
    {/* {state.map(items=>{
      return(
        <div className='bor' >
        <p>Image Name:{items.name}</p>
        <img src= {items.image}></img>
        </div>
      )
    })}   */}
    
        </div>
      );
    }
 

 export default Im