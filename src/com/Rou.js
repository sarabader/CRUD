import React from 'react'
import { Routes, Route } from "react-router-dom"
import App from '../App'
import Create from './Create';
import Read from './Read';
import Update from './Update';


function Rou() {
  return (
    <div>
        <Routes>
        <Route  path='/Create' element ={<Create/>}></Route>
        <Route  path='Read' element = {<Read/>}></Route>
        <Route  path='Update' element = {<Update/>}></Route>

        </Routes>
    </div>
  )
}

export default Rou