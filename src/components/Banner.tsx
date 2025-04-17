import React from 'react';
import Links from './Link';
import Image from 'next/image';
import Line from '../../public/image/line.svg';
import AccentLine from '../../public/image/accent-line.svg';
import AccentRound from '../../public/image/accent-round.svg';

const Banner = () => {
  return (
    <section className='bg-secondary h-auto py-20 w-full text-center flex flex-col lg:gap-0 gap-4 items-center justify-center relative overflow-hidden'>
        <Image src={AccentRound} alt='Accent Balimmo' width={1000} height={1000} className='absolute -left-[30vw]'/>
        <Image src={AccentRound} alt='Accent Balimmo' width={1000} height={1000} className='absolute -right-[30vw] md:-top-[35vh] top-[50vh]'/>
        <div className='w-fit flex flex-col text-center items-center justify-center px-8 mt-6'>
            <h1 className='lg:text-5xl sm:text-4xl text-3xl font-semibold text-white w-fit will-change-transform'>Investissez à Bali et obtenez</h1>
            <h1 className='lg:text-5xl sm:text-4xl text-3xl font-semibold italic text-white relative text-center w-fit will-change-transform'>+ de 20% de rentabilité brut annuelle !
                <Image src={AccentLine} width={25} height={10} alt='Go Balimmo' className='absolute -right-7 -top-5'/>
            </h1>
            <Image src={Line} alt='' width={1000} height={5} />
        </div>
        
        <div className='flex gap-2 z-50'>
            <Links
                title="Je veux investir maintenant"
                icon=""
                variant="btn-primary"
                href="#form"
            />            
        </div>
    
    </section>
  )
}

export default Banner