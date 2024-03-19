import React from 'react';
import CarouselItems from './CarouselItems'; 
import Carousel from 'react-bootstrap/Carousel';
import slide from '../assets/slide-1.png';

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto py-12'>
        <Carousel className='w-full'>
          <Carousel.Item>
            <CarouselItems title="First slide" subtitle="label" image={slide} />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselItems title="Second slide" subtitle="label" image={slide} />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselItems title="Third slide" subtitle="label" image={slide} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
