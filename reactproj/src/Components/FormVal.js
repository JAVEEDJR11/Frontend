import React , {useState} from 'react'

const FormVal= () => {
    let MyCourses =["react","Angular","Java","Php"]
    const [user,setUser] = useState({
        fname:"",
        term:false,
        Course:""
    });
    const changeInput = (event)=>{
        // console.log{event.target.type};
        // console.log{event.target.name};
        // console.log{event.target.value};
        const{type,name,value,checked} = event.target;
        setUser({...user,[name]:type==="checkbox"?checked:value});
    }
    const checkData = (event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("fullname must contain only character min-3 and max-20");
            return false;
        }
        if(user.term===false){
            window.alert("Please accept terms and conditions");
            return false;
        }
        if(user.Course==="")
            window.alert("course is requiered");
        window.alert(JSON.stringify(user));
    }
    return (
        <div>
            <h2>Welcome to Form Validation</h2>
            <form onSubmit={checkData}>
                <div>
                    <label>Enter your Firstname: </label>
                    <input type='text' name='fname' onChange={changeInput} value={user.fname}/>
                </div>
                <div>
                    <input type='checkbox' name='term' onChange={changeInput} value={user.term} />Accept the terms and Conditions
                </div>
                <div>
                    <label>Select your course</label>
                    <select name='course' onChange={(changeInput)}>
                    <option value=""> Select your course</option>
                    {
                        MyCourses.map((val,index) =>{
                          return <option  value={val} key={index}>{val}</option>                           

                        })
                        
                    }    
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormVal;