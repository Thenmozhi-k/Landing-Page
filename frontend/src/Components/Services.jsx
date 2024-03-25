import React from 'react';

import oyo from '../assets/oyo.png';
import ola from '../assets/ola.png';
import makemytrip from '../assets/makemytrip.png';
import goibibo from '../assets/goibibo.png';
import naukri from '../assets/naukri.png';
import snapdeal from '../assets/snapdeal.png'; 
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

const Services = () => {
  const service = [
    { id: 1, title: "Membership Organization", description: "Our membership management software provides full automation of membership renewals and payments", image: pic1 },
    { id: 2, title: "Membership Organization", description: "Our membership management software provides full automation of membership renewals and payments", image: pic2 },
    { id: 3, title: "Membership Organization", description: "Our membership management software provides full automation of membership renewals and payments", image: pic3 },
  ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h1 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h1>
        <p className='text-neutralDGray'>We have been working with some features 100+ clients</p>
      </div>

      <div className='flex my-12 flex-wrap justify-between items-center gap-8'>
        <img className='w-40 h-20' src={ola} alt="Ola" />
        <img className='w-40 h-20' src={makemytrip} alt="MakeMyTrip" />
        <img className='w-40 h-20' src={snapdeal} alt="Snapdeal" />
        <img className='w-40 h-20' src={naukri} alt="Naukri" />
        <img className='w-40 h-20' src={goibibo} alt="Goibibo" />
        <img className='w-40 h-20' src={oyo} alt="Oyo" />
      </div>

      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGray font-semibold mb-3'>Manage your entire community in a single system</h2>
        <p className='text-neutralDGray'>Who is suitable for?</p>
      </div>

      <div className='mt-34 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {service.map(item => (
          <div key={item.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center'>
            <div className='bg-[#E8F5E9] mb-4 w-full h-auto rounded-tl-3xl rounded-br-3xl'>
              <img className="  mx-auto h-14" src={item.image} alt="" />
              <h4 className='text-2xl font-bold text-neutralDGray mb-2'>{item.title}</h4>
              <p className='text-sm text-neutralDGray px-2'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
