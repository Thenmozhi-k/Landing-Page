import React from 'react';

const CarouselItems = ({title, subtitle, image}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-32">
      <div className="md:w-1/2 md:order-2 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title} <span className="text-primary">{subtitle}</span></h1>
        <p className="text-gray-600">Where to grow your business as a photographer: site or social media</p>
        <button className="btn-primary mt-4">Register</button>
      </div>
      <div className="md:w-1/2 md:order-1">
        <img src={image} alt="" className="w-full md:w-4/5 lg:w-3/4 mx-auto" />
      </div>
    </div>
  );
};

export default CarouselItems;

