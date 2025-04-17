import Accent1 from '../../public/image/services/accent-1.png';
import Accent2 from '../../public/image/services/accent-2.png';
import Image from 'next/image';
import Title from './Title';
import { SERVICES } from '@/constants';

const Services = () => {

  return (
    <section className="h-auto w-full bg-primary md:py-16 py-8 2xl:px-80 xl:px-10 px-5 relative overflow-hidden">
        <Image src={Accent1} className="absolute -left-40 opacity-20" alt="" />
        <Image src={Accent2} className="absolute -right-60 -top-40 opacity-20" alt="" />
        <Title
            pretitle="Services Balimmo"
            title='<span class="text-white">Un service de A à Z</span>'
        />

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-0 sm:space-y-0 space-y-5 z-10">
            {SERVICES.map((services) => (
            <div className="flex flex-col items-start gap-3 border border-white text-white py-5 px-4 rounded-md" key={services.id}>
                <Image src={services.image} alt={services.title} className="" width={50} height={50} />
                <h1 className="sm:text-xl text-lg uppercase text-white font-semibold">{services.title} {services.secondtitle}</h1>                    
                <ul className="text-sm list-disc list-inside" dangerouslySetInnerHTML={{ __html: services.list }}>
                    
                </ul>
            </div>
            ))};
        </div>

    </section>
  )
}

export default Services