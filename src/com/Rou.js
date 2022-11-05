import React from 'react'
import { Routes, Route } from "react-router-dom"
import App from '../App'
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Im from './Im';





function Rou() {
  return (
    <div>
        <Routes>
        <Route exact path='/' element ={<Create/>}></Route>
        <Route  path='Read' element = {<Read/>}></Route>
        <Route  path='Update' element = {<Update/>}></Route>
        <Route  path='Im' element = {<Im/>}></Route>

</Routes>

    </div>
  )
}

export default Rou