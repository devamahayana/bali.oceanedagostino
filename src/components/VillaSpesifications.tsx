import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Links from './Link';


const VillaSpesifications = () => {

    const VILLASPECIFICATIONS = [
        {
          id: 1,
          specifications: 'Nyanyi Beach',
          svg: (<i className='bx bx-map'></i>),
        },
        {
          id: 2,
          specifications: '3 chambres 3 salles de bains',
          svg: (<i className='bx bx-bed'></i>),
        },
        {
          id: 3,
          specifications: '122m² habitables',
          svg: (<i className='bx bx-building-house'></i>),
        },
        {
          id: 4,
          specifications: 'Terrain de 265m²',
          svg: (<i className='bx bx-area' ></i>),
        },
        {
          id: 5,
          specifications: 'Meublée et équipée',
          svg: (<i className='bx bx-cabinet'></i>),
        },
        {
          id: 6,
          specifications: 'Leasehold de 30 ans',
          svg: (<i className='bx bx-time-five' ></i>),
        },
    ]

    const PRICE1 = [
        {
            id: 1,
            title: 'PT PMA',
            price: '3 000€'
        },
        {
            id: 2,
            title: 'Terrain (Nyanyi, 30ans)',
            price: '90 000€'
        },
        {
            id: 3,
            title: 'Construction',
            price: '175 000€'
        },
        {
            id: 4,
            title: 'Ameublement',
            price: '20 000€'
        },
    ]
    const PRICE2 = [
        {
            id: 1,
            title: 'Taux d’occupation : ',
            price: '70%'
        },
        {
            id: 2,
            title: 'Prix / nuit :',
            price: '242€'
        },
        {
            id: 3,
            title: 'Total revenu / an :',
            price: '61 908€'
        },
        {
            id: 4,
            title: 'Frais Airbnb (15%) / an :',
            price: '9 289€'
        },
        {
            id: 5,
            title: 'Frais Management (15%) / an :',
            price: '7 893€'
        },
        {
            id: 6,
            title: 'Maintenance, élec... : (10%)/an',
            price: '6 190€'
        },
        {
            id: 7,
            title: 'Comptabilité, PT PMA Impôt / an :',
            price: '1 891€'
        },
    ]
  return (
    <section className='bg-white 2xl:w-4/5 w-11/12 flex md:flex-row flex-col m-auto 2xl:py-20 md:py-16 py-8 2xl:gap-20 gap-10'>
        
        {/* Specifications */}
        <div className='basis-1/3 md:sticky h-fit top-10'>
            <div className='text-white flex flex-col gap-4 bg-secondary 2xl:p-10 p-8'>
                <h1 className='2xl:text-4xl md:text-3xl text-2xl font-medium'>Caractéristiques</h1>
                <hr className='border' />
                <ul className='space-y-4'>
                    {VILLASPECIFICATIONS.map((spec) => (
                    <li className='flex 2xl:text-xl md:text-lg items-center gap-2 ' key={spec.id}>
                        <div className='bg-white/50 fill-white rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                            {spec.svg}
                        </div>
                        {spec.specifications}
                    </li>                    
                    ))}
                </ul>
            </div>
            
            <div className='bg-secondary text-center text-white outline outline-white -outline-offset-4 py-4 2xl:mt-5 mt-3'>
                <p>Rentabilité NETTE : </p>
                <h1 className='md:text-3xl text-2xl font-semibold'>+12.72%</h1>
            </div>
        </div>

        {/* Investissement */}
        <div className='basis-2/3'>
            <h1 className='2xl:text-4xl md:text-3xl text-2xl font-medium'>Investissement</h1>
            
            {/* Price 1 */}
            <div className='2xl:my-8 my-4'>
                <div className='grid sm:grid-cols-2 md:gap-10 gap-4 2xl:mb-8 mb-4'>
                    {PRICE1.map((price1) => (
                        <div className='flex justify-between items-center py-4 border-b-2 border-gray-400' key={price1.id}>                            
                            <h1 className='md:text-3xl text-xl font-semibold'>{price1.price}</h1>
                            <p className='2xl:text-xl md:text-lg text-sm font-medium'>{price1.title}</p>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-between bg-secondary text-white px-5 py-6 outline outline-white -outline-offset-4'>
                    <p className='2xl:text-xl md:text-lg'>Total : </p>
                    <h1 className='md:text-3xl text-2xl font-semibold'>288 000€</h1>
                </div>
            </div>

            {/* Price 2 */}
            <div className='my-8'>
                <div className='flex flex-col mb-8'>
                    {PRICE2.map((price2) => (
                        <div className='flex justify-between items-center py-6 px-2 border-b-2 border-gray-400 even:bg-white odd:bg-gray-100' key={price2.id}>                            
                            <p className='2xl:text-xl md:text-lg text-sm font-medium'>{price2.title}</p>
                            <h1 className='md:text-3xl text-xl font-semibold'>{price2.price}</h1>                            
                        </div>
                    ))}
                </div>
                <div className='flex md:flex-row flex-col items-center w-full md:gap-4 gap-2'>
                    <div className='w-full flex items-center justify-between bg-secondary text-white px-5 py-6 outline outline-white -outline-offset-4'>
                        <p className='2xl:text-xl md:text-lg'>Total Net / an : </p>
                        <h1 className='md:text-3xl text-2xl font-semibold'>36 646€</h1>
                    </div>
                    <div className='w-full flex items-center justify-between bg-secondary text-white px-5 py-6 outline outline-white -outline-offset-4'>
                        <p className='2xl:text-xl md:text-lg'>Total Net / mois : </p>
                        <h1 className='md:text-3xl text-2xl font-semibold'>3 053€</h1>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <Links
              title='Je veux profiter de cette rentabilité'
              href='#form'
              variant='btn-primary'
              icon={          
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px]' viewBox="0 0 24 24">
                    <path d="M19.071 19.071c3.898-3.899 3.898-10.244 0-14.143-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.9 3.899 10.244 3.899 14.143 0zM8.465 8.464h7.07l-2.828 2.829 3.535 3.536-1.414 1.414-3.535-3.536-2.828 2.829V8.464z"></path>
                  </svg>
                }
            />
        </div>
    </section>
  )
}

export default VillaSpesifications