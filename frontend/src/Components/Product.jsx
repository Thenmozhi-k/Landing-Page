import React from 'react'

const Product = () => {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-20'>
                <div>
                    <img className=" h-96"src={pic2} alt="" />
                </div>

                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
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
            <div className='md:w-1/2'>
                    <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3'>Helping a local <br /><span className='text-brandPrimary'> business reinvent itself</span></h2>
                    <p className='md:w-3/5 text-sm text-neutralDGray mb-8'>
                        We reached here with our hand work and dedication
                    </p>
                    
                </div>
       {/*-------------------------------- stats----------------- */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img  className="w-20 h-20"src={user} alt="" />
                        <div>
                            <h4 className='text-2xl text text-neutralDGray font-semibold'>2,245,341</h4>
                            <p>Members</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <img className="w-20 h-19" src={cube} alt="" />
                        <div>
                            <h4 className='text-2xl text text-neutralDGray font-semibold'>46,32</h4>
                            <p>club</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img className="w-20 h-19" src={goi} alt="" />
                        <div>
                            <h4 className='text-2xl text text-neutralDGray font-semibold'>835,820</h4>
                            <p>Event Bookings</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <img className="w-20 h-20" src={wallet} alt="" />
                        <div>
                            <h4 className='text-2xl text text-neutralDGray font-semibold'>1,965,230</h4>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>

            </div>

            </div>
        </div>
    </div>
  )
}

export default Product