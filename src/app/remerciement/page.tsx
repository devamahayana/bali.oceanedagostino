
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
      
            <h1 className="2xl:text-5xl md:text-4xl text-2xl text-center font-medium mb-4">
                🎉 Merci pour votre demande ! 
                <br />
                Votre projet commence ici !
            </h1>        
   
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