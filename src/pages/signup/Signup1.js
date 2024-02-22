import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import "./Signup1.css";
function Signup1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType,setUserType] = useState("");
  const [secretkey,setSecretKey]=useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if(userType=="Admin" && secretkey !="Nehal123"){
      alert("Invalid Admin");
    }
    else{

      e.preventDefault();
      try {
          const result = await axiosClient.post("/auth/signup", {
              name,
              email,
              password,
              userType,
          });
          alert("user Created Successfully");
      } catch (error) {
          console.log(error);
      }
    }
}
  return (
    <div className='body'>
      <div class="card">
  <div class="card_header">
    Sign Up
  </div>
  <form class="form" onSubmit={handleSubmit}>
  <div class="input-wrappers">
      <label style={{marginBottom:"1px",fontWeight:"bolder"}} for="name">Register As:  </label>
      <input type="radio" name="userType" id="name" value="User"  onChange={(e) => setUserType(e.target.value)}/>User
      <input type="radio" name="userType" id="name" value="Admin"  onChange={(e) => setUserType(e.target.value)}/>Admin
    </div>
    {userType=="Admin"? <div class="input-wrapper">
      <label for="name">Secret Keys:</label>
      <input type="text" name="secretkey" id="secretkey"  onChange={(e) => setSecretKey(e.target.value)}/>
    </div>:null
}
       <div class="input-wrapper">
      <label for="name">Name</label>
      <input type="text" name="name" id="name"  onChange={(e) => setName(e.target.value)}/>
    </div>
    <div class="input-wrapper">
      <label for="email">Username</label>
      <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button type="submit" onSubmit={handleSubmit}>Sign Up</button>
  </form>
  <p className="subheading">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
</div>
    </div>
  )
}

export default Signup1