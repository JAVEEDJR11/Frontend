import React, { useState,useEffect} from 'react'
 const UseEffectHooksComp = () => {
  const[age,setage]=useState(18);
  const[sal,setsal]=useState(20292);
      // // //case1:no dependancy values  
      // //   useEffect(()=>{
      // //     setage(age+1);

        
      // //   });
      //   //case 2;when we pass dependencies values as blank array
      //   useEffect(()=>{
      //     setage(age+1);
      //   },[])
//case 3: when we have to execute useefect hook as we want
        useEffect(()=>{
          setage(age+0);
        },[sal]);
      


  return (
    <div>UseEffectHooksComp

      <p> Age is:{age}</p>
      <p> salary is;{sal}</p>
      <button type='button' onClick={()=>setsal(sal+8000)} className='btn btn-primary'>Increment sal

      </button>
    </div>
  );
}
 
export default UseEffectHooksComp;