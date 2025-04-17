import React from 'react'
import Title from './Title'
import { FITURES } from '@/constants'
import Image from 'next/image'
import Links from './Link'

const Fitures = () => {
  return (
    <section className='py-10 2xl:w-4/5 w-11/12 m-auto'>
      <Title
            pretitle="Pourquoi investir à Bali ? Découvrez une opportunité unique !"
            title='Bali, l’île où investissement rime avec plaisir et rentabilité'
      />

      <div className='grid md:grid-cols-3 md:divide-x-2 md:divide-y-0 divide-y-2'>
        {FITURES.map((fitures) => (
          <div className='flex flex-col items-center justify-center md:px-10 md:pb-0 pb-8' key={fitures.id}>
            <Image src={fitures.image} alt={fitures.title} width={125} height={125} className='object-contain' />
            <h3 className='text-center text-xl sm:text-2xl font-medium will-change-transform'>{fitures.title}</h3>
            <p className='text-center py-4'>{fitures.desc}</p>
            <Links
              title={fitures.button}
              href='#form'
              icon=""
              variant='btn-primary'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Fitures