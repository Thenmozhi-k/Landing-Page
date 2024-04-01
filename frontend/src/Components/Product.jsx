import React from 'react'
import product from '../assets/product.png';
import stat1 from '../assets/download 1.png';
import stat2 from '../assets/download 2.png';
import stat3 from '../assets/download 8.png';
import stat4 from '../assets/download 5.png';
import stat5 from '../assets/download 7.png';
import stat6 from '../assets/images 1.png';
import arrow from '../assets/pajamas_long-arrow.png';
import stat7 from '../assets/Airpod_pro_imprints 1.png';

const Product = () => {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-20'>
                <div>
                    <img className=" h-96"src={product} alt="" />
                </div>

                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                    <p className='md:w-3/5 text-sm text-neutralDGray mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Molestias, velit natus quaerat vero repellendus magni minus hic. 
                        Reprehenderit laudantium illo, neque deleniti delectus exercitationem 
                        laborum magnam architecto dolorem praesentium quis.

                    </p>
                    <button className='btn-primary'>Learn more</button>
                </div>
            </div>
        </div>

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 '>
            <div className='md:w-1/3'>
                    <img src={stat7} alt="" />
                    
                </div>
       {/*-------------------------------- stats----------------- */}
           <div className='md:w-2/3 mx-auto' id='testimonial'>
             <div >
              <p className='md:w-4/5 text-sm text-neutralDGray mb-8 leading'> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quibusdam quia? Deserunt, sed laborum nulla dolores numquam architecto ex modi error, necessitatibus, voluptatem asperiores? Placeat tempore rerum aliquid nemo ut.</p>
              <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
              <p className='text-base text-neutralGray mb-8'>British Dragon Boat Racing Association</p>
              <div className='flex'>
                <div className='flex items-center gap-8 flex-wrap'>
                  <img  className="w-20 h-20" src={stat1} alt="" />
                  <img  className="w-20 h-20" src={stat2} alt="" />
                  <img  className="w-20 h-20" src={stat3} alt="" />
                  <img  className="w-20 h-20" src={stat4} alt="" />
                  <img  className="w-20 h-20" src={stat5} alt="" />
                  <img  className="w-20 h-20"  src={stat6} alt="" />
                </div>
                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700 mt-6'>Meet all customers 
                 </a>
                 <img  className="w-10 h-8 mt-6 ml-3" src={arrow} alt="" />
              </div>

             </div>
           </div>

            </div>
        </div>
    </div>
  )
}

export default Product