import React from 'react'
import image9 from '../MainContent/Wishlist/images/image 9.png'
import image3 from '../MainContent/Wishlist/images/image 3 (1).png'
import { CiLocationOn } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { PiFileArrowDown } from "react-icons/pi";

const Profile = () => {
  return (
    <div>
        <div>
            {/*------Profile Head------- */}
            <div className='bg-white rounded-xl p-6'>

              <div>
                {/*------ user name and image------- */}
                <div>
                  <img className='rounded-xl' src={image9} alt="" />
                </div>
                <div className='relative bottom-20 left-10'>
                  <div className='flex items-end justify-between w-11/12'>
                        <div className='flex items-end justify-center gap-2'>
                          <img className='bg-gray-400 border rounded-full p-1' src={image3} alt="" />
                          <div>
                            <h1>Eric Clark</h1>
                            <p>@eric-clark06379</p>
                          </div>
                        </div>
                        <div className='flex items-center justify-center gap-1'>
                          <CiLocationOn></CiLocationOn>
                          <p>Sylhet, Bangladesh</p>
                        </div>
                        <button className='flex items-center justify-center gap-1 bg-gray-200 py-2 px-3 rounded-xl'>
                          <TbEdit></TbEdit>
                          <p>Edit profile</p>
                        </button>
                    
                  </div>
                </div>
                {/*------ user name and image end here------- */}
                


              </div>
            </div>
            {/*------Profile Head------- */}


            {/*------Profile Main Content------- */}
            <div className='mt-6 flex items-start justify-between gap-6'>

                {/*------Personal Information------- */}
                <div className='bg-white p-4 rounded-xl w-1/3'>
                  <div  className='flex items-center justify-between'>
                    <h1>Personal information</h1>
                    <TbEdit></TbEdit>
                  </div>
                  <div>
                    <p>Email:</p>
                    <p>eric-clark@gmail.com</p>
                    <hr className='border mt-4 mb-4' />
                  </div>
                  <div>
                    <p>Phone Number:</p>
                    <p>eric-clark@gmail.com</p>
                    <hr className='border mt-4 mb-4' />
                  </div>
                  <div>
                    <p>Facebook:</p>
                    <p>eric-clark@gmail.com</p>
                    <hr className='border mt-4 mb-4' />
                  </div>
                  <div>
                    <p>Website:</p>
                    <p>eric-clark@gmail.com</p>
                    <hr className='border mt-4 mb-4' />
                  </div>
                  <div>
                    <p>LinkedIn:</p>
                    <p>eric-clark@gmail.com</p>
                    <hr className='border mt-4 mb-4' />
                  </div>
                </div>
                {/*------Personal Information End------- */}

                {/*------Activity Overview------- */}
                <div className='p-6 bg-white rounded-xl w-2/3'>
                  <h1>Activity Overview</h1>
                  <div className='my-6 flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-1 p-4 border border-gray-400 rounded-xl'>
                      <PiFileArrowDown></PiFileArrowDown>
                      <div>
                        <p>Total Downloads</p>
                        <h1>142</h1>
                      </div>
                    </div>
                    <div className='flex items-center justify-center gap-1 p-4 border border-gray-400 rounded-xl'>
                      <PiFileArrowDown></PiFileArrowDown>
                      <div>
                        <p>Total Downloads</p>
                        <h1>142</h1>
                      </div>
                    </div>
                    <div className='flex items-center justify-center gap-1 p-4 border border-gray-400 rounded-xl'>
                      <PiFileArrowDown></PiFileArrowDown>
                      <div>
                        <p>Total Downloads</p>
                        <h1>142</h1>
                      </div>
                    </div>                    
                  </div>
                  <h1>Recent Activities</h1>
                  <div>
                    <div className='flex items-center justify-between my-3 mx-2 '>
                      <p>Downloaded "Sunset at the Beach"</p>
                      <p>2 hours ago</p>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className='flex items-center justify-between my-3 mx-2 '>
                      <p>Downloaded "Sunset at the Beach"</p>
                      <p>2 hours ago</p>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className='flex items-center justify-between my-3 mx-2 '>
                      <p>Downloaded "Sunset at the Beach"</p>
                      <p>2 hours ago</p>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className='flex items-center justify-between my-3 mx-2 '>
                      <p>Downloaded "Sunset at the Beach"</p>
                      <p>2 hours ago</p>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className='flex items-center justify-between my-3 mx-2 '>
                      <p>Downloaded "Sunset at the Beach"</p>
                      <p>2 hours ago</p>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className='flex items-center justify-between my-3 mx-2 '>
                      <p>Downloaded "Sunset at the Beach"</p>
                      <p>2 hours ago</p>
                    </div>
                    <hr />
                  </div>
                </div>
                {/*------Activity Overview End------- */}
            </div>
            {/*------Profile Main content End------- */}
        </div>
    </div>
  )
}

export default Profile