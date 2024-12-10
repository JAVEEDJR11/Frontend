import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAddComp = () => {
    const nav = useNavigate();
    const [product,setProduct]=useState({
        pname:"",
        price:"",
        company:""
    });
    const inputChangeHandler=(event)=>{
        const {type,name,value}=event.target;
        setProduct({...product,[name]:value});
        console.log(setProduct.pname);
    }
    const addproduct=(event)=>{ 
      event.preventDefault();
      axios.post(`http://localhost:8888/products`,product).then(()=>{
        window.alert("product added susccessfully");
        nav('/MainDashboardComp/prodash')
      }).catch((error)=>{})
      }

    
  return (
    <div>
        <h2> Adding The Data</h2>
        <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6'></div>
        <form onSubmit={addproduct}>
            <label className='form-label'>Enter Your Name</label>
            <input type='text' name="pname" onChange={inputChangeHandler}  value={product.pname} className='form-control' required style={{width:"50%"}}/>
            <label className='form-label'>Enter Your price</label>
            <input type='text' name="price" onChange={inputChangeHandler}  value={product.price} className='form-control' required style={{width:"50%"}}/>
            <label className='form-label'>Enter Your Company</label>
            <input type='text' name="company" onChange={inputChangeHandler}  value={product.company} className='form-control' required style={{width:"50%"}} />
            <button type='submit'  className='btn btn-secondary mt-2'>Add Data
         
             </button>
        </form>
        <div className='col-sm-3'></div>
    </div>
    </div>
  )
}

export default ProductAddComp;