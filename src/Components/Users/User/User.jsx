import React from 'react'
import Titlebar from './Titlebar'
import SideNav from './SideNav'
import Footer from '../../Footer'
import { Outlet } from 'react-router-dom'


const User = () => {
  return (
    <div className='w-full bg-gray-100'>
        <Titlebar></Titlebar>
        <div className=' flex items-start justify-center gap-6'>
          <SideNav></SideNav>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default User