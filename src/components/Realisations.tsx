"use client"
import React from 'react'
import Title from './Title'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { REALISATIONS } from '@/constants';
import Image from 'next/image';
import Links from './Link';

const Realisations = () => {
  return (
    <section className='realisations py-10 2xl:w-4/5 w-11/12 m-auto'>
      <Title
        pretitle=''
        title='Personnalisez ces bases ou réalisez votre projet sur-mesure !'
      />

      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints= {{
            1440: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 35
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
        }}
        loop={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        navigation            
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className=''
    >        
        {REALISATIONS.map((realisations) => ( 
        <SwiperSlide className="bg-white min-w-[300px] overflow-hidden shadow-xl rounded-lg pb-2" key={realisations.id}>               
            <Image src={realisations.image} alt={realisations.name} width={500} height={250} className="object-cover h-[250px] w-full object-center" />
                                
            <div className="text-center py-2 text-black">
                <p className="tracking-widest text-text uppercase sm:text-base text-sm">Villa</p>
                <h1 className="sm:text-4xl text-2xl font-bold uppercase">{realisations.name}</h1>
            </div>

            <div className="flex flex-col px-5 py-3 bg-primary text-white">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-base font-bold">ROI {realisations.roi}</h1>
                        <p className="italic text-xs">ROI Annuel</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="sm:text-base text-sm font-bold text-right">{realisations.rentabilite} Rentabilité NETTE</h1>
                        <p className="italic text-xs text-right">ROI Annuel</p>
                    </div>
                </div>
            </div>

            <div className="px-5 py-3 border-b border-border">
                <ul className="space-y-1">
                    <li className="flex gap-2 text-slate-600 italic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        {realisations.location}
                    </li>
                    <li className="flex gap-2 text-slate-600 italic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        {realisations.chambres} Chambres
                    </li>
                    <li className="flex gap-2 text-slate-600 italic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        {realisations.salles} Salles de bains
                    </li>
                    <li className="flex gap-2 text-slate-600 italic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        {realisations.terrain} m2
                    </li>
                    <li className="flex gap-2 text-slate-600 italic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        {realisations.mois} mois
                    </li>
                </ul>
            </div>

            <div className="flex flex-col justify-between items-center px-5 py-3">
                <div className="text-center mb-2">
                    <p className="text-xs">À partir de</p>
                    <h1 className="font-bold lg:text-3xl text-2xl">{realisations.price} &euro;</h1>
                </div>

                <Links
                    title={realisations.button}
                    icon=""
                    href="#form"
                    variant="btn-catalogue"                    
                />
            </div>
        
        </SwiperSlide>
        ))}
    </Swiper>
    </section>
  )
}

export default Realisations