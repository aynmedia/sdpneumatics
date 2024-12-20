/** @format */

import Productcard from './productcard.astro';
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
import React, { useRef } from 'react';
import { Icon } from 'astro-icon/components';

const ProductSlider = ({ products }) => {
  const swiperRef = useRef(null);

  return (
    <div class='flex flex-col gap-6 py-6 justify-center'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={5}
        spaceBetween={40}
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
        grabCursor
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}>
        {products.map((product) => (
          <SwiperSlide>
            <Productcard product={product.data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div class='max-w-7xl md:mx-auto mx-6 px-4'>
        <div class='w-16 flex my-12 gap-6'>
          <button
            class='p-4 rounded-full shadow-md bg-green text-white'
            onClick={() => swiperRef.current?.slideNext()}>
            <Icon name='mdi:arrow-left' class='mx-2' />
          </button>
          <button
            class='p-4 rounded-full shadow-md bg-green text-white'
            onClick={() => swiperRef.current?.slidePrev()}>
            <Icon name='mdi:arrow-left' class='mx-2' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
