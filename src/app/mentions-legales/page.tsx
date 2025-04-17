import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Title from '@/components/Title'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <section className='pb-5 pt-20 2xl:w-4/5 w-11/12 m-auto'>
      <Title
        pretitle=""
        title='MENTIONS LÉGALES​'
      />

      <div className='mb-8'>
        <h1 className='text-2xl font-semibold mb-4'>
          PT BALIMMO DEVELOPMENT GROUP
        </h1>
        <ul>
          <li className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='min-w-[24px]'><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>
            BALIMMO DEVELOPMENT GROUP, Jalan Pantai Batu Bolong No.15, Canggu, 80351 BALI
          </li>
          <li className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8l8-8V5a2 2 0 0 0-2-2zm-7 16v-7h7l-7 7z"></path></svg>
            NPWP: 99.667.909.8-906.000
          </li>
          <li className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
            +62 85-333-777-500
          </li>
        </ul>
      </div>

      <div className="mb-8">
          <h2 className="sm:text-2xl text-xl font-semibold mb-4">Et le marketing</h2>
          <ul className="">
              <li className="flex gap-4">
                  BALIMMO LLC
              </li>
              <li className="flex gap-4">
                  2105 VISTA OESTE ST NW, 87120 ALBUQUERQUE, USA
              </li>
              <li className="flex gap-4">
                  REG: 7950802                    
              </li>
          </ul>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          PROPRIÉTÉ INTELLECTUELLE
        </h1>
        <p>
          Toute reproduction ou distribution non autorisée de tout ou partie des éléments et informations de ce site est interdite. Le contenu est disponible pour un usage privé et non collectif. Le code de la propriété intellectuelle n’autorisant, aux termes de l’article L. 122-5.2° et 3°a, d’une part, que les « copies ou reproductions strictement réservées à l’usage privé du copiste et non destinées à une utilisation collective » et, d’autre part, que les analyses et les courtes citations dans un but d’exemple et d’illustration, « toute représentation ou reproduction intégrale ou partielle faite sans le consentement de l’auteur ou de ses ayants droit ou ayants cause est illicite » (art. L. 122-4). Cette représentation ou reproduction, par quelque procédé que ce soit constituerait donc une contrefaçon sanctionnée par les articles L. 335-2 et suivants du code de la propriété intellectuelle.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          INFORMATIQUES ET LIBERTÉS
          <br />
          Protection et utilisation des données
        </h1>
        <p>
          Les utilisateurs ayant déposé dans le site des informations nominatives peuvent demander la communication des informations nominatives les concernant à l’administrateur du site et les faire rectifier le cas échéant. Ils peuvent exercer ces droits en adressant un courrier à :
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          PT BALIMMO DEVELOPMENT GROUP
        </h1>
        <p>
          Jalan Pantai Batu Bolong No.15
        </p>
        <p>
          Canggu
        </p>
        <p>
          80351 BALI
        </p>
        <br />
        <p>
          Les informations nominatives peuvent être utilisées par les sociétés du groupe Balimmo pour proposer ses services et/ou produits et faire connaître ceux de ses partenaires. Elles ne seront communiquées aux tiers que pour permettre la gestion des opérations ou pour satisfaire aux obligations légales. Chaque utilisateur peut s’y opposer en adressant un courrier à l’adresse ci-dessus.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          MARQUES ET LOGOS, LIENS HYPERTEXTES
        </h1>
        <p>
          Toute utilisation quelle qu’elle soit des noms de marques et logos de ce site est interdite sans l’autorisation du groupe Balimmo. De même tous liens hypertextes visant ce site sont soumis à autorisation préalable
        </p>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default page