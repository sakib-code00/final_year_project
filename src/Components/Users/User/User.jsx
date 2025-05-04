import React from 'react'
import Titlebar from './Titlebar'
import SideNav from './SideNav'
import Profilesetting from '../MainContent/Profilesetting'
import DownloadEmpty from '../MainContent/Download/DownloadEmpty'
import EmptyWishlist from '../MainContent/Wishlist/EmptyWishlist'
import Wishlist from '../MainContent/Wishlist/Wishlist'
import DownloadHistory from '../MainContent/Download/DownloadHistory'
import Billing from '../MainContent/Billing'
import Profile from '../MainContent/Profile'


const User = () => {
  return (
    <div className='w-full bg-gray-100'>
        <Titlebar></Titlebar>
        <div className=' flex items-start justify-center gap-6'>
          <SideNav></SideNav>
          <div>
            <Profilesetting></Profilesetting>
            <DownloadEmpty></DownloadEmpty>
            <EmptyWishlist></EmptyWishlist>
            <Wishlist></Wishlist>
            <DownloadHistory></DownloadHistory>
            <Billing></Billing>
            <Profile></Profile>
          </div>
        </div>
    </div>
  )
}

export default User