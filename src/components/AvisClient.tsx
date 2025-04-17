import React from 'react'
import Title from './Title'
import Image from 'next/image'

const AvisClient = () => {
  const ICON = [
    {
      id: 1,
      text: 'Suivi 24/24h grâce à votre accès sécurisé de notre logiciel',
      icon: '/image/avisclients/1.svg'
    },
    {
      id: 2,
      text: '100 % de nos clients satisfaits de nos services',
      icon: '/image/avisclients/2.svg'
    },
    {
      id: 3,
      text: 'Nous assurons une garantie qualité Premium',
      icon: '/image/avisclients/3.svg'
    },
  ]
  return (
    <section 
      style={{
        background: `url(./image/villa/Ruby/img1.webp)`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`
      }}>
      <div className='bg-secondary/80'>
        <div className='py-10 pb-16 2xl:w-4/5 w-11/12 m-auto'>
          <Title
            pretitle=""
            title="<div class='text-primary'>Avis Clients</div>"
          />

          <div className='flex items-center justify-center p-4 gap-4 border-2 w-fit m-auto mb-10'>
            <h1 className='md:text-4xl text-2xl font-medium text-white uppercase'>Google Reviews</h1>
            <div className='text-yellow-600 sm:text-4xl flex gap-2'>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
          </div>
          
          <div className='grid md:grid-cols-3 gap-4'>
            {ICON.map((icon) => (
            <div className='border border-white/80 flex items-center gap-4 text-white px-4 py-3' key={icon.id}>
              <Image src={icon.icon} alt='Balimmo Avis Clients' width={100} height={100} className='md:w-[70px] w-[50px]'/>
              <h3>{icon.text}</h3>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvisClient