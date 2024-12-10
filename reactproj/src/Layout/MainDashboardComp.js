import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterComp from '../Layout/FooterComp'
import NavComp from '../Layout/NavComp'

const MainDashboardComp = () => {
  return (
    <div className='container'>
        <div className='card border-primary'>
            <div className='card-header border-primary'>
            <NavComp></NavComp>
            </div>
            <div className='card-body border-primary'>     
            <Outlet></Outlet>
            </div>
    
           <div className='card-footer border-primary'>
           <FooterComp></FooterComp>
           </div>
        </div>
    </div>
  )
}

export default MainDashboardComp;
