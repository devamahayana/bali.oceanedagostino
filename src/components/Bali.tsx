import React from 'react'
import Title from './Title'
import Banner from '../../public/image/bali/banner.png'
import Image from 'next/image'
import { BALI } from '@/constants'
import Links from './Link'

const Bali = () => {
  return (
    <section className='bg-primary'>
      <div className='py-10 2xl:w-4/5 w-11/12 m-auto'>
        <Title
          pretitle=""
          title="<div class='text-white'>Pourquoi Bali est le choix idéal pour votre nouvelle vie ?</div>"
        />

        <div className='flex md:flex-row flex-col md:gap-20 gap-10 items-center'>
          <div className='basis-2/5'>
            <Image src={Banner} width={300} height={300} alt='Bali' className='w-full'/>
          </div>
          <div>
            <div className='grid grid-cols-2 md:gap-20 gap-5 mb-10'>
              {BALI.map((bali) => (
                <div className='flex flex-col' key={bali.id}>
                  <Image src={bali.image} alt='Balimmo Icon' width={50} height={50} className='md:w-[50px] w-[40px]'/>
                  <h1 className='text-white md:text-2xl text-xl font-medium'>{bali.title}</h1>
                  <p className='text-white md:text-base text-sm'>{bali.desc}</p>
                </div>
              ))}
            </div>
            <Links
              title='Je veux ma villa à Bali'
              href='#form'
              variant='btn-primary'
              icon={          
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px]' viewBox="0 0 24 24">
                    <path d="M19.071 19.071c3.898-3.899 3.898-10.244 0-14.143-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.9 3.899 10.244 3.899 14.143 0zM8.465 8.464h7.07l-2.828 2.829 3.535 3.536-1.414 1.414-3.535-3.536-2.828 2.829V8.464z"></path>
                  </svg>
                }
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Bali