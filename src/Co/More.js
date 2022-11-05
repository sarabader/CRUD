import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'


 function More(){
    const{cId}=useParams();
    const [state, setState]=useState([])

    useEffect (() =>{
    // axios.get("https://rickandmortyapi.com/api/character").then((res) => {
    // console.log(res.data.results);
    // setState(res.data.results)
    axios.get(`https://rickandmortyapi.com/api/character/${cId}`).then((res) => {
     console.log(res.data.results);
    setState(res.data.results)
      
      })
    
    },[])
      return (
       
        <div >
    
    
           {state.map((items, index)=>{
      return(
        <div key={index} >
        <p>Image Name:{items.name}</p>
        <p>status:{items.status}</p>
        <p>species:{items.species}</p>
        <p>gender:{items.gender}</p>

        <img src= {items.image}></img>
        <Link to ="/C">
            <button >Back</button>
          </Link>
    
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
 

 export default More