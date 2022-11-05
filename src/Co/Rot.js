import React from 'react'
import { Routes, Route } from "react-router-dom"
import App from '../App'
import Ud from './Ud';
import C from './C';
import More from './More';


function Rot() {
  return (
    <div>
       
<Routes>
<Route exact path='/' element ={<C/>}></Route>
<Route  path='/More' element = {<More/>}></Route>

</Routes>
    </div>
  )
}

export default Rot