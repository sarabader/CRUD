import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Update() {
             const navigate = useNavigate();
             const [fName, setFName] = useState ('')
             const [lName, setLName] = useState ('')
            const [id, setId] = useState('');
            useEffect(() => {
                setId (localStorage.getItem("id"));
                setFName (localStorage.getItem("firstName"));
                setLName (localStorage.getItem("lastName"));
            }, []);

             const updateData = () => {
               axios.put(`https://6362426866f75177ea2a9c61.mockapi.io/todolist/${id}`, {
                fName,
                lName,
               }).then(res => {
                console.log(res);
                navigate("/Read");
               }).catch(err => {
                console.log(err);
               })
        return(
        <div>
          <input placeholder="firstName" onChange={(e) => {
           setFName(e.target.value);
          } }></input>
           <input placeholder="lasttName" onChange={(e) => {
           setLName(e.target.value);
          } }></input>
          <button onClick={updateData}>update</button>
    </div>
  )
}
}

export default Update;