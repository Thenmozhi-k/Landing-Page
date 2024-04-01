import React from 'react';
import arrow from '../assets/pajamas_long-arrow.png';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

const Blog = () => {
    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRne", image: blog1 },
        { id: 2, title: "What are your Safeguarding responsibilities and how can you manage them?", image: blog2 },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 }
    ];
    
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-4'>Carring is the new marketing</h2>
                <p className='md:w-3/4 text-sm text-neutralDGray mb-8 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi cum earum iure totam reprehenderit ducimus odit nihil deserunt nobis, quae sed similique praesentium maxime, mollitia doloremque neque, iusto eum!</p>
            </div>

            {/* all blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1gap-8 items-center justify-between'>
                {blogs.map(blog => (
                    <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img className="w-80 h-72 rounded-xl hover:scale-95 transition-all duration-300"src={blog.image} alt="" />
                        <div className='text-center text-sm px-2 py-4 bg-white shadow-lg rounded-2xl justify-center md:w-3/4 mx-auto absolute left-0 right-0 bottom-0'>
                            <h3 className='mb-3 text-neutralDGray font-semibold'>{blog.title}</h3>
                            <div className='flex items-center gap-2 justify-center'>
                                <a href="/" className='font-bold text-sm text-brandPrimary hover:text-neutral-700 mt-2'>Read More</a>
                                <img className="w-6 h-6 mt-3 " src={arrow} alt="Arrow" /> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
