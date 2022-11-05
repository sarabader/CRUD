// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from "axios"

// function Update() {
           
//             const [id, setId] = useState('');
//             useEffect(() => {
//                 setId (localStorage.getItem("id"));
               
//             }, []);

//              const updateData = () => {
//                axios.put(`https://rickandmortyapi.com/api/character/${id}`, {
//                 fName,
//                 lName,
//                }).then(res => {
//                 console.log(res.id);
//                 navigate("/R");
//                }).catch(err => {
//                 console.log(err);
//                })
//               }
//         return(
//         <div>
          
//            <input placeholder="Name" onChange={(e) => {
//            setLName(e.target.value);
//           } }></input>
//           <button onClick={updateData}>update</button>
//     </div>
//   )
// }


// export default Ud;