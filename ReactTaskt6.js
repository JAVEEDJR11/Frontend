
import React, { useState } from 'react'

const ReactTask6= () => {
    const[user,setUser]= useState({
        fname:"",
       term:false,
        email:"",
        password:"",
        contact:""


    });

    const changeInput = (event) =>{
        
        const {type,name,value,checked} = event.target;
        setUser({...user,[name]:type==="checkbox"? checked:value});
        
    }

    const checkData = (event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }

        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("fname must contain characters with min:3 and max:20");
            return false;
        }
        if(user.email.trim()===""){
            window.alert("email is required");
            return false;
        }
        if(!user.email.trim().match("^[a-zA-Z0-9@.]{3,30}$")){
            window.alert("email must contain min 3 and max 30 characters");
            return false;
        }
        if(user.password.trim()===""){
            window.alert("password is required");
            return false;
        }
        if(!user.password.trim().match("^[a-zA-Z0-9@.]{3,12}$")){
            window.alert("password must contain min 3 and max 12 characters");
            return false;
        }
        if(user.contact.trim()===""){
            window.alert("contact is required");
            return false;
        }
        if(!user.contact.trim().match("^[0-9]{9,11}$")){
            window.alert("contact must contain only numbers with min:9 and max:11");
            return false;
        }
        if(user.term===false){
            window.alert("Please accept term and condition");
            return false;
        }
        window.alert(JSON.stringify(user))
    }
  return (
    <div>
        <h2>This is ValidationTask</h2>
        <form onSubmit={checkData}>
        <div>
           <labe>Enter your FirstName:</labe>
           <input type='text' name='fname' onChange={changeInput} value={user.fname} />
           </div>
           <div>
           <label>Enter your Email:</label>
           <input type='text' name='email' onChange={changeInput} value={user.email} />
           </div>
           <div>
            <label>Enter your password:</label>
           <input type='password' name='password' onChange={changeInput} value={user.password} />
           </div>
           <div>
            <label>Enter your contact:</label>
           <input type='number' name='contact' onChange={changeInput} value={user.contact} />
           </div>
           <div>
           <input type='checkbox' name='term' onChange={changeInput} value={user.term} />Accept term and Condition
           </div>
           <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ReactTask6;