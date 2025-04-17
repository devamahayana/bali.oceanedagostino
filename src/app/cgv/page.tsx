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
        title='Conditions Générales de Vente - Balimmo Development Group'
      />

      <div className='mb-8'>
        <h1 className='text-2xl font-semibold mb-4'>
          PRÉAMBULES
        </h1>
        <p>
          Les présentes conditions générales de vente (CGV) régissent les droits et obligations de Balimmo Development Group, société indonésienne, et de son client (personne physique ou morale) dans le cadre de la vente des prestations proposées par Balimmo Development Group. Ces CGV s`appliquent à toutes les commandes de prestations de service effectuées auprès de notre société.
        </p>
        <br />
        <p>
          Les présentes CGV sont rédigées conformément aux dispositions applicables en Indonésie et aux bonnes pratiques commerciales internationales.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 1 : ACCESSIBILITÉ
        </h1>
        <p>
          Les présentes CGV sont systématiquement adressées et accessibles à chaque client sur notre site internet www.balimmo.fr.
        </p>
        <br />
        <p>
          La commande d`une prestation implique l`adhésion totale du client à ces CGV pour toute la durée du mandat. Aucune condition particulière ne peut prévaloir contre celles-ci, sauf accord exprès et écrit de Balimmo Development Group.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 2 : HONORAIRES
        </h1>
        <p>
          Les honoraires sont fixés en interne par l`agence. Pour toutes les transactions conclues par l’intermédiaire de Balimmo Development Group, les honoraires d`agence sont, sauf cas particulier, à la charge du vendeur.
        </p>
        <br />
        <p>
          Les honoraires d`agence sont inclus dans le prix de vente affiché sur les annonces. Vous pouvez consulter nos honoraires détaillés dans la section correspondante des présentes CGV ou sur simple demande.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 3 : PAIEMENT
        </h1>
        <p>
          Toutes les transactions effectuées par l`intermédiaire de Balimmo Development Group se réalisent via un notaire agréé en Indonésie ou tout autre acteur légalement habilité conformément à la législation indonésienne
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 4 : CAS DE FORCE MAJEURE
        </h1>
        <p>
          L’exécution des obligations de Balimmo Development Group est suspendue en cas de survenance d’un cas fortuit ou de force majeure empêchant leur réalisation. L`agence informera le client dès que possible de la survenance d’un tel événement et prendra toutes les mesures raisonnables pour limiter les conséquences.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 5 : DROIT DE RÉTRACTATION
        </h1>
        <p>
          Si le mandat est conclu en dehors des locaux de notre agence ou à distance, le client dispose d’un droit de rétractation dans un délai de 14 jours suivant la signature du mandat.
        </p>
        <br />
        <p>
          Pour exercer ce droit, le client doit notifier sa décision par écrit (par e-mail ou courrier) à Balimmo Development Group. Ce droit de rétractation met fin aux obligations contractuelles entre les parties.
        </p>
        <br />
        <p>
          Toute rétractation après l`expiration de ce délai devra respecter les conditions prévues par le mandat signé.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 6 : MISE EN RELATION AVEC DES PARTENAIRES
        </h1>
        <p>
          Balimmo Development Group peut mettre en relation ses clients avec des partenaires (architectes, entrepreneurs, diagnostiqueurs, courtiers, etc.) susceptibles d’offrir des services adaptés à leurs besoins.
        </p>
        <br />
        <p>
          La responsabilité des prestations fournies par ces partenaires incombe exclusivement à ces derniers. Balimmo Development Group n’intervient pas dans l`exécution des prestations fournies par ces partenaires.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 7 : DROIT APPLICABLE - RÈGLEMENT DES LITIGES
        </h1>
        <p>
          Les présentes CGV sont régies par le droit indonésien. En cas de litige, le client et Balimmo Development Group s`engagent à tenter de résoudre le différend à l’amiable.
        </p>
        <br />
        <p>
          Si aucune solution n`est trouvée, les litiges seront soumis à la juridiction compétente en Indonésie.
        </p>
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 8 : BLOG
        </h1>
        <p>
          Le site internet www.balimmo.fr propose des contenus informatifs sur le marché immobilier, les tendances et actualités. Ces informations sont données à titre purement informatif et ne sauraient engager la responsabilité de Balimmo Development Group.
        </p>        
      </div>

      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-4'>
          ARTICLE 9 : PROPRIÉTÉ INTELLECTUELLE
        </h1>
        <p>
          Tous les éléments figurant sur le site (textes, images, vidéos, graphiques) sont protégés par les lois internationales en matière de propriété intellectuelle. Toute reproduction ou diffusion non autorisée est strictement interdite sans l’accord préalable de Balimmo Development Group.        
        </p>        
      </div>
    
    </section>
    <Footer />
    </>
  )
}

export default page