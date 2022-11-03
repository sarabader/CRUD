import React, { useEffect, useState } from 'react';
import axios from "axios";

 export default function Pagee() {
  const [state, setState] = useState([])
     useEffect (() => {
       axios.get("https://makeup-api.herokuapp.com/api/v1/products.json").then((res) => {
    console.log(res.data)
     setState(res.data)
       })
        }, [])
   return (
    <div className='Pag'>
        {state.map(items => {
     return(
        <>
       <img src={items.image_link}></img>
        {/* <p>{items.country_id}</p> */}
        <p>{items.name}</p> 
        </>
      )
    })}
     </div>
   )
 }