/** @format */
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { FaArrowCircleRight, FaSearch } from 'react-icons/fa';
import 'swiper/css';
import { Image } from 'astro:assets';
import { Button } from '../ui/button';

const Hero = () => {
  const slides = [
    {
      image: "images/SDP_Banner2_Img2.webp",
      title:
        "Leading Experts in Pneumatics - Understanding Your Needs, Delivering Precision Solutions",
      description:
        "One of the expert leaders in pneumatics, strives to understand customer needs thoroughly and offers customized solutions after fully understanding the requirements.",
    },
    {
      image: "images/slide1.jpg",
      title: "Innovating Pneumatic Solutions for a Better Tomorrow",
      description:
        "We deliver high-performance pneumatic systems that drive industrial efficiency and innovation. With a focus on reliability, sustainability, and cutting-edge technology, we ensure your business operates at peak performance.",
    },
    {
      image: "images/slide3.jpg",
      title: "Empowering Industries with Precision Pneumatics",
      description:
        "Explore our innovative solutions tailored for your business needs.",
    },
  ];

  return (
    <div className='relative flex items-center font-spaceGrotesk min-h-screen -pt-20'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        freeMode
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-screen min-h-screen'>
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className='w-full h-full object-cover absolute'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent '></div>
              {/* Slide content */}
              <div className='absolute flex flex-col md:flex-row justify-center items-center text-white w-screen h-full max-w-screen mx-4 md:mx-12 z-10'>
                {/* First Column */}
                <div className='md:w-1/2 w-full text-left p-12 flex flex-col gap-6'>
                  <h2 className='text-3xl md:text-5xl font-bold font-poppins'>
                    {slide.title}
                  </h2>
                  <p className='text-md md:text-lg font-spaceGrotesk'>
                    {slide.description}
                  </p>
                  <div className='flex gap-4'>
                    {' '}
                    <a href='/products'>
                      <Button
                        size='lg'
                        className='px-6 py-6 bg-green-600 hover:bg-green-900 font-bold'>
                        <FaSearch className='mr-2 h-4 w-4' />
                        Explore Our Products
                      </Button>
                    </a>
                    <a href='/about'>
                      <Button
                        variant='outline'
                        size='lg'
                        className='px-6 py-6 text-slate-900 hover:text-green font-bold'>
                        More About Us
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Second Column */}
                <div className='hidden md:flex md:w-1/2 w-full justify-center items-center p-4'>
                  <div className='flex flex-col bg-white text-slate-900 p-8 w-64 gap-2 rounded-sm shadow-md '>
                    <p className='text-center font-bold'>
                      Lubricated Screw Type Air Compressor
                    </p>
                    <img
                      src='images/products/lubricated-screw-type-air-compressor.jpeg'
                      alt='lubricated-screw-type-air-compressor'
                      className='w-full h-full object-cover rounded-sm'
                      width={400}
                      height={400}
                    />
                    <p className='text-sm text-gray-700 text-center'>
                      Boost Your Productivity with SD pneumatics’s Rotary Screw
                      Air Compressors
                    </p>
                    <a
                      href='#enquire'
                      className='flex justify-center items-center font-bold hover:text-green-600'>
                      Get a Quote
                      <FaArrowCircleRight size={24} className='pl-2' />
                    </a>
                    {/* <ProductDialog triggerText='Get A Quote' /> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
