import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
const ProductEditComp = () => {
    const {id} = useParams();
    const nav =useNavigate();

    const [product,setProduct] = useState({
       
        pname:"",
        price:"",
        company:""
        
    })
    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            console.log(res.data);
            
            setProduct(res.data);
        }).catch((error)=>{})
    },[]);
    const inputChangeHandlar = (event) => {
        const { type, name, value } = event.target;
        setProduct({ ...product, [name]: value });
    }
    const editProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8888/products/${id}`, product).then(() => {
            window.alert("Product edited successfully");
            nav('/MainDashboardComp/prodash');
        }).catch((error) => {})

    }
  return (
    <div>
        <h2>ProductEditComp</h2>
        <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={editProduct}>
                        <label className='form-label'>Enter Product Name :</label>
                        <input type='text' name='pname' onChange={inputChangeHandlar} value={product.pname} className='form-control'></input>
                        <label className='form-label'>Enter Product price :</label>
                        <input type='text' name='price' onChange={inputChangeHandlar} value={product.price} className='form-control'></input>
                        <label className='form-label'>Enter Product Company :</label>
                        <input type='text' name='company' onChange={inputChangeHandlar} value={product.company} className='form-control'></input>
                        
                        <button type='submit' className='btn btn-primary mt-2'>Add Data</button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
    </div>
  )
}

export default ProductEditComp