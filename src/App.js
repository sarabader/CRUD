import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import {BrowserRouter} from 'react-router-dom'

import Rot from './Co/Rot';
import C from './Co/C';
import More from './Co/More';
import Rou from './com/Rou';






function App() {
  return (
    <div className="App">
      <h1>CRUD</h1>
<Rou></Rou>
{/* <Rot></Rot> */}
    </div>
  );
}

export default App;
