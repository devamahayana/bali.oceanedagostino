import React from 'react'
import Image from 'next/image'
import Logo from '../../public/image/logo.png'
import Link from 'next/link'

const Footer = () => {

  return (
    <>

      <div className='bg-primary'>
        <div className='py-16 2xl:w-4/5 w-11/12 m-auto flex flex-col gap-10'>
          <Image src={Logo} alt='Balimmo Logo' width={200} height={200} className='m-auto'/>
          <div className='text-white flex justify-between'>
            <div>
              <h3 className='text-2xl mb-4'>Social media</h3>
              <div className='flex flex-col justify-center gap-3 fill-white'>             
              <Link href="https://www.instagram.com/oceane.dagostino" aria-label='socialmedia' target='_blank' className='flex items-center gap-2'>
                <div className='fill-white flex items-center justify-center text-white bg-white/20 text-center w-[40px] h-[40px] rounded-full hover:bg-secondary hover:-translate-y-2 duration-500 transition-all'>          
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                </div>
                Instagram
              </Link>
              <Link href="https://www.linkedin.com/in/oc%C3%A9ane-d%E2%80%99agostino-b973662a1" aria-label='socialmedia' target='_blank' className='flex items-center gap-2'>
                <div className='fill-white flex items-center justify-center text-white bg-white/20 text-center w-[40px] h-[40px] rounded-full hover:bg-secondary hover:-translate-y-2 duration-500 transition-all'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                </div>
                Linkedin
              </Link>
              <Link href="https://wa.me/33646761667" aria-label='socialmedia' target='_blank' className='flex items-center gap-2'>
                <div className='fill-white flex items-center justify-center text-white bg-white/20 text-center w-[40px] h-[40px] rounded-full hover:bg-secondary hover:-translate-y-2 duration-500 transition-all'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                </div>
                Whatsapp
              </Link>
              <Link href="https://t.me/CEO_Invest_consultancy_Dubai" aria-label='socialmedia' target='_blank' className='flex items-center gap-2'>
                <div className='fill-white flex items-center justify-center text-white bg-white/20 text-center w-[40px] h-[40px] rounded-full hover:bg-secondary hover:-translate-y-2 duration-500 transition-all'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                </div>
                Telegram
              </Link>
             
            </div> 
            </div>
            <div>
              <h3 className='text-2xl mb-4'>Gallery</h3>
              <div className='grid grid-cols-2 gap-2'>
                <Image src="image/gallery/img1.avif" alt="" width={800} height={800} className='w-[100px] h-[100px] object-cover '/>
                <Image src="image/gallery/img2.avif" alt="" width={800} height={800} className='w-[100px] h-[100px] object-cover '/>
                <Image src="image/gallery/img3.webp" alt="" width={800} height={800} className='w-[100px] h-[100px] object-cover '/>
                <Image src="image/gallery/img4.webp" alt="" width={800} height={800} className='w-[100px] h-[100px] object-cover '/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer