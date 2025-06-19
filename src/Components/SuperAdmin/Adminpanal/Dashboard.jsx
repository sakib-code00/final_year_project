import React from 'react'
import AdminHeader from './AdminHeader'
import AdminNavBar from './AdminNavBar'
import UploadContent from '../UploadContent'
import ContentSubmission from '../ContentSubmission'
import AddContent from '../AddContent'
import ImageDetails from '../ImageDetails'
import GeneralUsers from '../GeneralUsers'
import Contents from '../Contents'
import GeneralSettings from '../GeneralSettings'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <AdminHeader></AdminHeader>
        <div className='flex items-start justify-start gap-5 w-full'>
            <AdminNavBar></AdminNavBar>
            <div className='bg-slate-100 w-10/12 pl-4 h-full'>
            <Outlet></Outlet>
                {/* <UploadContent></UploadContent>
                <ContentSubmission></ContentSubmission>
                <AddContent></AddContent>
                <ImageDetails></ImageDetails>
                <GeneralUsers></GeneralUsers>
                <Contents></Contents>
                <GeneralSettings></GeneralSettings> */}
            </div>
        </div>
    </div>
  )
}

export default Dashboard