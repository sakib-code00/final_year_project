import React from 'react'
import Hero from '../Components/Hero'
import Gallery from '../Components/Gallery'
import Welcome from '../Components/Welcome'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
        <Hero></Hero>
        <Gallery></Gallery>
        <Welcome></Welcome>
    </div>
  )
}

export default Home