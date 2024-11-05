/** @format */
'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { SlArrowRightCircle, SlArrowLeftCircle } from 'react-icons/sl';

const Presence = () => {
  const swiperRef = useRef(null);

  return (
    <div className=' text-black mx-6 md:mx-auto py-12'>
      <div className='flex flex-col md:flex-row px-2 md:px-12 gap-6'>
        <div className='flex flex-col justify-between md:w-1/4 w-full rounded-2xl bg-green-600 h-96 p-12 text-white'>
          <h1 className='text-3xl font-bold'>Industry Wide Presence</h1>
          <div className=' flex justify-between items-end gap-6 px-4'>
            <button
              className=' text-white'
              onClick={() => swiperRef.current?.slidePrev()}>
              {' '}
              <SlArrowLeftCircle size={48} className='mx-2' />
            </button>
            <button
              className='rounded-full text-white'
              onClick={() => swiperRef.current?.slideNext()}>
              <SlArrowRightCircle size={48} className='mx-2' />
            </button>
          </div>
        </div>
        <div className='md:w-3/4 w-full'>
          <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 10 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}>
            {data.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className='group relative w-full h-96 hover:bg-green-500/20 transition duration-200 ease-in-out flex flex-col text-left text-white rounded-2xl'>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className='w-full h-full object-cover rounded-2xl'
                  />
                  <div className='absolute top-0 left-0 w-full h-full p-6 flex justify-between'>
                    <p className='text-4xl font-bold'>{slide.number}</p>

                    <div className='relative flex-grow flex flex-col justify-end'>
                      <p className='text-xl font-bold absolute bottom-0 transition-transform duration-300 ease-in-out transform group-hover:opacity-0'>
                        {slide.category}
                      </p>

                      <p className='text-sm md:text-md font-medium transition-transform duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-green-600/80 p-2 rounded-md'>
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <div className='h-96 w-full rounded-2xl bg-green-800'>1</div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Presence;

const data = [
  {
    category: 'Automobile Industry',
    number: '01',
    description:
      'Our advanced pneumatic systems are designed to enhance efficiency and precision in the automobile industry. From assembly lines to automotive maintenance, our solutions ensure optimal performance, reducing downtime and improving overall productivity.',
    image: '/images/presence/SDP_Automobile_Industry_Img.png',
  },
  {
    category: 'Machinery Industry',
    number: '02',
    description:
      'We provide high-performance pneumatic tools and components that are essential for the machinery industry. Our products are engineered for durability and reliability, enabling smooth operations and enhancing the capabilities of industrial machinery.',
    image: '/images/presence/SDP_Machinery_Industry_Updated.png',
  },
  {
    category: 'Printing Industry',
    number: '03',
    description:
      'Our pneumatic solutions play a crucial role in the printing industry by ensuring precise control and smooth operation of printing machinery. From material handling to automated printing processes, our systems help improve print quality, enhance efficiency, and reduce production downtime.',
    image: '/images/presence/SDP_Printing_Industry.png',
  },
  {
    category: 'Pharmaceutical Industry',
    number: '04',
    description:
      'Our pneumatic systems are vital for the pharmaceutical industry, offering reliable and contamination-free solutions for manufacturing, packaging, and processing. Designed to meet stringent hygiene standards, our products ensure precision, efficiency, and safety in handling sensitive pharmaceutical materials and equipment.',
    image: '/images/presence/SDP_Pharmaceutical_Industry_Updated.png',
  },
  {
    category: 'Mining Industry',
    number: '05',
    description:
      'In the mining industry, our robust pneumatic solutions are built to withstand harsh environments and demanding operations. From powering drilling equipment to material extraction and transportation, our systems ensure safety, reliability, and efficiency, helping to streamline mining processes and reduce operational costs.',
    image: '/images/presence/SDP_Mining_Industry_Updated.png',
  },
  {
    category: 'Solar Industry',
    number: '06',
    description:
      'Our pneumatic solutions support the solar industry by enhancing the efficiency of manufacturing processes for solar panels and related components. From assembly automation to precision handling, our systems help optimize production, reduce downtime, and improve the overall quality and reliability of solar energy solutions.',
    image: '/images/presence/SDP_Solar_Industry.png',
  },
  {
    category: 'Packaging Industry',
    number: '07',
    description:
      'In the packaging industry, our pneumatic systems play a crucial role in automating processes such as filling, sealing, labeling, and material handling. Offering speed, precision, and durability, our solutions help streamline operations, reduce waste, and ensure consistent packaging quality across various industries.',
    image: '/images/presence/SDP_Packaging_Industry.png',
  },
  {
    category: 'Textile Industry',
    number: '08',
    description:
      'Our pneumatic systems in the textile industry ensure smooth operation in processes like weaving, spinning, dyeing, and material handling. By delivering precision and efficiency, our solutions help improve production speed, reduce energy consumption, and maintain the high-quality standards necessary for textile manufacturing.',
    image: '/images/presence/SDP_Textile_Industry.png',
  },
  {
    category: 'Food Industry',
    number: '09',
    description:
      'In the food industry, our pneumatic solutions provide reliable and hygienic automation for processes such as packaging, sorting, and material handling. Designed to meet strict safety and sanitation standards, our systems help optimize efficiency, minimize contamination risks, and ensure consistent product quality across all stages of food production.',
    image: '/images/presence/SDP_Food_Industry.png',
  },
];
