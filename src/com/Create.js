import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

  // localStorage.setItem(email, "email")
  // alert(localStorage.getItem("email"))
export default function Create() {
  const navigate = useNavigate();
    const [fName, setFName] = useState ('')
    const [lName, setLName] = useState ('')
    const [email, setEmail] = useState ('')
    const [pass, setPass] = useState ('')
    // function handleSubmit (e) {
    //   e.preventDefault();
    //   navigate("/Pagee")
    
    let url = "https://6362426866f75177ea2a9c61.mockapi.io/todolist"

    const postData = () => {
    axios.post(url, {
    fName,
    lName,
     email,
     pass,
    }).then(res => {
        // console.log(res);
        localStorage.setItem('fName', res.data.fName)
        localStorage.setItem('lname', res.data.lName)
        localStorage.setItem('id', res.data.id)
        // alert(localStorage.getItem("email"))
        navigate("/Read");
    })
    }
    // const login=()=>{
    //   Navigate("/Pagee")
    // }
  return (

    <div>
        <input placeholder='Fname' onChange={e => { setFName(e.target.value)}}></input>
        <input placeholder='Lname' onChange={e => { setLName(e.target.value)}}></input>
        <input placeholder='Email' onChange={e => { setEmail(e.target.value)}}></input>
        <input placeholder='pass' onChange={e => { setPass(e.target.value)}}></input>
       
       <button onClick={postData}> Login</button>
    </div>
  )
}