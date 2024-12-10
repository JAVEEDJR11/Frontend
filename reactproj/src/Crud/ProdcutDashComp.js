import React, {useEffect,useState} from 'react'
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, Outlet } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button  from 'react-bootstrap/Button';


const ProductDashComp=()=> {
    


    const[product,setProduct] = useState([]);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (val) => {
    setShow(true)
    setShow(val);
};
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=()=>{
        axios.get("http://localhost:8888/products").then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{});
        }
    
     const Deleteproduct =(id)=>{
       if(window.confirm(`are you sure want to delete theproduct with id:${id}`)){
        axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
            window.alert("product deleted successfully");
            fetchdata();
        }).catch((error)=>{});
       }
     }   

    // // useEffect(("http://localhost:8888/products")=>{
    // //     axios.get("http://localhost:8888/products").then((res)=>{
    // //         console.log(res.data);
    // //         setProduct(res.data);
    // //     }).catch((error)=>{});
    // },[])
     return (
        <div>
            <h2>This is Product Dash</h2>
            <Link to ="/MainDashboardComp/prodadd" className='btn btn-secondary'>Add</Link>
           
            <table className=' table table-hover table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th>S.No</th><th>pname</th><th>price</th><th>Company</th><th>Action</th>
                    </tr>
                    </thead>
            <tbody>

                  {
                    product.map((val,index)=>{
                      return <tr key ={val.id}>
                          <td >{index+1}</td>
                         <td >{val.pname}</td>
                         <td >{val.price}</td>
                         <td >{val.company}</td>
                          
                         <td> 
                            {/* <button type='button classname =btn btn-outline-success btn-sm'>  */}
                                <button type='button'
                                // onClick={()=>handleShow()}
                                onClick={()=>handleShow(val)}
                                ><VisibilityIcon></VisibilityIcon></button>
                                <Link to ={`/MainDashboardComp/prodedit/${val.id}`} className='btn btn-success'><EditIcon></EditIcon></Link>
                            {/* </button> */}
                            <button type='button' onClick={()=>Deleteproduct(val.id)} className='btn btn-outline success'>
                            <DeleteIcon></DeleteIcon></button>
                            
                         </td>
                         </tr>
                         
                        
                    })
                }
                    </tbody> 
                   
            </table>
           

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{show.pname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

        </div>
)
}

export default ProductDashComp