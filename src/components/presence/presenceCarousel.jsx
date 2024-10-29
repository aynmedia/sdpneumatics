/** @format */

import React, { useRef } from 'react';
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
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PresenceCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className='relative flex flex-row md:flex-col items-center justify-center gap-6 bg-white'>
      <img
        className='object-cover'
        src='/images/worker.jpg'
        alt='Industry Presence'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-slate-900/90'></div>
      <div className='absolute max-w-7xl mx-12 md:mx-32 py-12'>
        <h1 className='md:text-5xl text-3xl font-bold text-left text-white'>
          Industry Wide Presence
        </h1>
        <p className='w-full md:max-w-3xl text-lg text-left my-6 justify-start text-white'>
          Global expertise, trusted solutions across diverse industries,
          delivering consistent performance and innovation worldwide.
        </p>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={5}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            480: { slidesPerView: 2, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 0 },
            1024: { slidesPerView: 5, spaceBetween: 0 },
          }}
          freeMode
          freeModeMomentum
          grabCursor
          direction={'horizontal'}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}>
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='group relative border border-gray-400/50 w-full h-[400px] md:h-[450px] p-6  md:hover:scale-110 transition duration-200 ease-in-out flex flex-col text-left text-white'>
                <img
                  src={slide.image}
                  alt={slide.category}
                  width={200}
                  height={200}
                  className='object-cover absolute flex'
                />
                {/* Slide Number */}
                <p className='text-4xl font-bold'>{slide.number}</p>

                {/* Title and Description Wrapper */}
                <div className='relative flex-grow flex flex-col justify-end'>
                  {/* Category - Positioned at Bottom */}
                  <p className='text-xl font-bold absolute bottom-0 transition-transform duration-300 ease-in-out transform group-hover:opacity-0'>
                    {slide.category}
                  </p>

                  {/* Description - Slide In from Bottom */}
                  <p className='text-sm font-medium transition-transform duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-between my-12'>
          <div className='w-16 flex justify-between gap-6 px-4'>
            <button
              className='bg-white hover:bg-green-600 p-3 rounded-full shadow-md hover:text-white text-black'
              onClick={() => swiperRef.current?.slidePrev()}>
              <FaArrowLeft className='mx-2' />
            </button>
            <button
              className='bg-white hover:bg-green-600 p-3 rounded-full shadow-md hover:text-white text-black'
              onClick={() => swiperRef.current?.slideNext()}>
              <FaArrowRight className='mx-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresenceCarousel;

const data = [
  {
    category: 'Automobile Industry',
    number: '01',
    description:
      'Our advanced pneumatic systems are designed to enhance efficiency and precision in the automobile industry. From assembly lines to automotive maintenance, our solutions ensure optimal performance, reducing downtime and improving overall productivity.',
    image: '/images/SDP_Automobile_Industry_Img.webp',
  },
  {
    category: 'Machinery Industry',
    number: '02',
    description:
      'We provide high-performance pneumatic tools and components that are essential for the machinery industry. Our products are engineered for durability and reliability, enabling smooth operations and enhancing the capabilities of industrial machinery.',
    image: '/images/SDP_Machinery_Industry_Updated.webp',
  },
  {
    category: 'Printing Industry',
    number: '03',
    description:
      'Our pneumatic solutions play a crucial role in the printing industry by ensuring precise control and smooth operation of printing machinery. From material handling to automated printing processes, our systems help improve print quality, enhance efficiency, and reduce production downtime.',
    image: '/images/SDP_Printing_Industry.webp',
  },
  {
    category: 'Pharmaceutical Industry',
    number: '04',
    description:
      'Our pneumatic systems are vital for the pharmaceutical industry, offering reliable and contamination-free solutions for manufacturing, packaging, and processing. Designed to meet stringent hygiene standards, our products ensure precision, efficiency, and safety in handling sensitive pharmaceutical materials and equipment.',
    image: '/images/SDP_Pharmaceutical_Industry_Updated.webp',
  },
  {
    category: 'Mining Industry',
    number: '05',
    description:
      'In the mining industry, our robust pneumatic solutions are built to withstand harsh environments and demanding operations. From powering drilling equipment to material extraction and transportation, our systems ensure safety, reliability, and efficiency, helping to streamline mining processes and reduce operational costs.',
    image: '/images/SDP_Mining_Industry_Updated.webp',
  },
  {
    category: 'Solar Industry',
    number: '06',
    description:
      'Our pneumatic solutions support the solar industry by enhancing the efficiency of manufacturing processes for solar panels and related components. From assembly automation to precision handling, our systems help optimize production, reduce downtime, and improve the overall quality and reliability of solar energy solutions.',
    image: '/images/SDP_Solar_Industry.webp',
  },
  {
    category: 'Packaging Industry',
    number: '07',
    description:
      'In the packaging industry, our pneumatic systems play a crucial role in automating processes such as filling, sealing, labeling, and material handling. Offering speed, precision, and durability, our solutions help streamline operations, reduce waste, and ensure consistent packaging quality across various industries.',
    image: '/images/SDP_Packaging_Industry.webp',
  },
  {
    category: 'Textile Industry',
    number: '08',
    description:
      'Our pneumatic systems in the textile industry ensure smooth operation in processes like weaving, spinning, dyeing, and material handling. By delivering precision and efficiency, our solutions help improve production speed, reduce energy consumption, and maintain the high-quality standards necessary for textile manufacturing.',
    image: '/images/SDP_Textile_Industry.webp',
  },
  {
    category: 'Food Industry',
    number: '09',
    description:
      'In the food industry, our pneumatic solutions provide reliable and hygienic automation for processes such as packaging, sorting, and material handling. Designed to meet strict safety and sanitation standards, our systems help optimize efficiency, minimize contamination risks, and ensure consistent product quality across all stages of food production.',
    image: '/images/SDP_Food_Industry.webp',
  },
];
