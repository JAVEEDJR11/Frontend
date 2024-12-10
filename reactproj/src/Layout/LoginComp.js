
import React, {useRef}from 'react'
import './LoginComp.css'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
const LoginComp = () => {
  const nav=useNavigate();
  const uidref=useRef();
  const upassRef=useRef();
  const checkUser =()=>{
    let uid=uidref.current.value;
    let upass=upassRef.current.value;


    axios.get("http://localhost:8888/Users").then((res)=>{


      let currentUser=res.data.filter((val,index)=>{ return val.userid===uid && val.userpass===upass})
      console.log(currentUser.length);
      
      if(currentUser.length>0){
        console.log(res.data)
        window.alert("login sucess");
        sessionStorage.setItem("Users",uid);
        nav("/MainDashboardComp");}
        else{
          window.alert("wrong");
          uidref.current.value="";
          upassRef.current.value="";
        }
      
      // console.log(res.data);
      // sessionStorage.setItem("userid","userpass");
      
    }).catch((error)=>{})
  }
  return (
   
      <div className='loginContainer'>
        {/* This is login Component */}
        <form className='loginForm'>
          <label>Enter user id :</label>
          <input type='text' name='uid' ref={uidref} className='form-control mb-2 mt-2'></input>
          <label>Enter user password : :</label>
          <input type='text' name='upass' ref={upassRef} className='form-control mb-2 mt-2'></input>
          <button type='button' onClick={()=>checkUser()} className='btn btn-primary'>Login</button>
        </form>
      </div>
  )
}

export default LoginComp