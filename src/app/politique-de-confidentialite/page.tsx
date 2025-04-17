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
        title='Politique de Confidentialité'
      />

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 1 : PRÉAMBULE
        </h1>
        <p>
          La présente politique de confidentialité a pour objectif d`informer les utilisateurs du site de BALIMMO (https://balimmo.fr) sur la manière dont leurs données personnelles sont collectées, utilisées et protégées.
        </p>
        <br />
        <p>
          Le responsable de la gestion des données personnelles est M. Julien HOGNON, Directeur de PT BALIMMO DEVELOPMENT GROUP.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 2 : PRINCIPES RELATIFS À LA COLLECTE ET AU TRAITEMENT DES DONNÉES PERSONNELLES
        </h1>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), BALIMMO traite les données personnelles de manière licite, loyale et transparente.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES
        </h1>
        <p>
          Les données personnelles collectées incluent les informations suivantes : noms, prénoms, adresse e-mail, numéro de téléphone, adresse postale, etc. Elles sont utilisées dans le cadre des services proposés par BALIMMO, notamment pour la gestion des projets immobiliers.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 4 : DROITS DES UTILISATEURS
        </h1>
        <p>
          Conformément au RGPD, les utilisateurs disposent des droits suivants : droit d`accès, de rectification, de suppression, d`opposition et de portabilité de leurs données personnelles.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 5 : POLITIQUE SUR LES COOKIES
        </h1>
        <p>
          BALIMMO utilise des cookies pour améliorer l`expérience utilisateur et analyser le trafic du site. Les utilisateurs peuvent configurer leur navigateur pour refuser les cookies
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 6 : COORDONNÉES
        </h1>
        <p>
          Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits, vous pouvez contacter :
        </p>
        <p>
          PT BALIMMO DEVELOPMENT GROUP
        </p>
        <p>
          Adresse : Jalan Pantai Batu Bolong No.15, Canggu, 80351 BALI
        </p>
        <p>
          Téléphone : +62 85-333-777-500
        </p>
        <p>
          E-mail : hello@balimmo.fr
        </p>   
      </div>
        
    </section>
    <Footer />
    </>
  )
}

export default page