import React from 'react'
import balloon from '../../../../assets/Images/balloon-88 2.png'

const DownloadEmpty = () => {
  return (
    <div>
        <div className='bg-white p-6 rounded-xl flex flex-col items-center justify-center gap-3'>
            <div>
                <img src={balloon} alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-gray-700 text-xl font-bold'>No Downloads yet!</h1>
                <p className='text-base text-gray-400'>No downloads yet! Be the first to grab this amazing content.</p>
            </div>
            <div>
                <button className='bg-black rounded-xl font-semibold px-3 py-2 text-white mt-3'>Explore Images</button>
            </div>
        </div>
    </div>
  )
}

export default DownloadEmpty