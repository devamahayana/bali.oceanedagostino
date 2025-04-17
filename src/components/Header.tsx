import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../public/image/logo.png';

const Header = () => {
  return (
    <section className='z-50 absolute left-0 right-0 pt-4 m-auto 2xl:w-4/5 w-11/12 flex justify-between items-center'>
        <Link href="/" aria-label='link'>
            <Image src={Logo} alt="Balimmo Logo" width={175} height={60} className='lg:w-[150px] w-[200px]'/>
        </Link>

    </section>
  )
}

export default Header