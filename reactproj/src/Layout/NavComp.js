import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

const NavComp = () => {
  const nav =useNavigate();
  const logoutUser =()=>{
    window.alert("logout successfully");
    sessionStorage.clear();
    nav("/")
  }
  return (
    <div>
            {/* <h2>This is Nav Componen</h2> */}
            <Link to="Mystate" className='btn btn-info'>Mystate</Link>{" "}
            <Link to="VirtualDom" className='btn btn-success'>VirtualDOM</Link>{" "}
            <Link to="images/:id" className='btn btn-primary'>Images</Link>
            <Link to="Myfavcolor" className='btn btn-danger'>MyfavColor</Link>
            <Link to="hooks" className='btn btn-warning'>Hooks</Link>
            <Link to="formval" className='btn btn-primary'>FormVal</Link>
            <Link to="Reactask6" className='btn btn-danger'>ReactTAsk6</Link>
            <Link to="Prodash" className='btn btn-warning'>prodash</Link>
            <Link to="Prodadd" className='btn btn-info'>prodadd</Link>
            <Link to="Prodedit" className='btn btn-secondary'>prodedit</Link>
            <Link to="Mycaruasel" className='btn btn-success'>Mycaruasel</Link>
            <Link to="Datalist" className='btn btn-danger'>MyData</Link>
            <Link    onClick={()=>logoutUser()} className='btn btn-danger btn-sm' style={{float:"right"}} >
    <LogoutIcon/>
    </Link>
            
        </div>
  )
}

export default NavComp;
