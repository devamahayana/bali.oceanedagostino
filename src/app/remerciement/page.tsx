import Links from "@/components/Link"
import Logo from "../../../public/image/logo-potrait.svg"
import Icon from "../../../public/image/book-cover.png"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <section className=""
        style={{
            background: `url(./image/villa/villa1.webp)`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            
        }}>
            
        <div className="bg-secondary/80 h-screen text-center flex flex-col items-center justify-center text-white gap-4 md:text-xl px-2">
            <Link href="/">
                <Image src={Logo} alt="Balimmo Logo" width={125} height={125} />
            </Link>
            <h1 className="2xl:text-5xl md:text-4xl text-2xl text-center font-medium mb-4">
                🎉 Merci pour votre demande ! 
                <br />
                Votre projet commence ici !
            </h1>
            <p>
                Votre demande a bien été prise en compte ✅ 
                <br className="sm:hidden block" />
                Un conseiller vous contactera sous 48h pour fixer un rendez-vous avec un expert.
            </p>
            <p>
                📩 En attendant, téléchargez gratuitement votre eBook 2025 :
            </p>
            <p>        
                &quot;Devenir propriétaire à Bali&quot; et découvrez tout ce qu’il faut savoir pour réussir votre investissement.
            </p>
            <p className="font-semibold">
                Profitez-en dès maintenant, c’est gratuit !
            </p>
            <div className="md:my-10 my-5">
                <Links
                    title="Télécharger mon eBook maintenant"
                    icon={<Image src={Icon} alt="Balimmo Ebook" width={25} height={25}/>}
                    variant="btn-remerciement"
                    href="https://www.balimmo.vip/ebook2025-de7bc941"                
                />
            </div>
            <p>
                💡 Astuce : Préparez vos questions dès maintenant pour maximiser votre échange avec notre expert !
            </p>
            <p>
                À très bientôt pour concrétiser votre projet ! 🚀
            </p>
        </div>
    </section>
  )
}

export default page