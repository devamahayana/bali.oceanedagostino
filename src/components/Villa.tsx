"use client";
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type SwiperCore from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination, Thumbs  } from 'swiper/modules';
import Image from 'next/image';

import { VILLAS } from '@/constants';
const Villa = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <>
      <section className='relative villa'>
        <div className='absolute md:bottom-[35%] md:top-auto top-0 z-50 w-full text-white md:p-14 p-6'>          
          <p className='md:text-2xl drop-shadow-md'>Étude de cas réel</p>
          <h1 className='2xl:text-8xl md:text-7xl text-4xl font-medium drop-shadow-md'>
            Villa Corail
          </h1>
        </div>
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          loop={true}
          spaceBetween={0}
          navigation={true}
          pagination={{ type: 'progressbar' }}
          thumbs={{ swiper: thumbsSwiper }}          
          className="mySwiper2"
          speed={1000}
        >
          {VILLAS.map((villa) => (
            <SwiperSlide key={villa.id}>
              <Image alt='Corail Villa' width={1920} height={500} className='w-screen object-cover brightness-[0.9]' src={villa.image} />
            </SwiperSlide>
          ))}
                              
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs]}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}               
          className="mySwiper w-4/5 !absolute bottom-[15%] h-fit translate-x-10 md:!block !hidden"
        >
          {VILLAS.map((villa) => (
            <SwiperSlide key={villa.id}>
              <Image alt='Corail Villa' width={500} height={500} src={villa.image} className='w-full rounded-md hover:bg-white/50 hover:backdrop-blur-md md:p-3 p-1 md:pt-5 transition-all duration-500 cursor-pointer'/>
            </SwiperSlide>
          ))}     
        </Swiper>
      </section>
    </>
  );
}

export default Villa