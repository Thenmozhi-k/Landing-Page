import React from 'react'

import oyo from '../assets/oyo.png';
import ola from '../assets/ola.png';
import makemytrip from '../assets/makemytrip.png';
import goibibo from '../assets/goibibo.png';
import naukri from '../assets/naukri.png';
import snapdeal from '../assets/snapdeal.png'; 

const Services = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h1 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h1>
            <p className='text-neutralDgray '>We have been working with some features 100+ clients</p>
        </div>

        <div className='flex my-12 flex-wrap justify-between items-center gap-8'>
            
            <img className='w-40 h-20' src={ola} alt="" />
            <img className='w-40 h-20' src={makemytrip} alt="" />
            <img className='w-40 h-20' src={snapdeal} alt="" />
            <img className='w-40 h-20' src={naukri} alt="" />
            <img className='w-40 h-20' src={goibibo} alt="" />
            <img className='w-40 h-20' src={oyo} alt="" />
        </div>
    </div>
  )
}

export default Services