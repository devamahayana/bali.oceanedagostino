import Bali from "@/components/Bali";
import Banner from "@/components/Banner";
import AvisClient from "@/components/AvisClient";
import Fitures from "@/components/Fitures";
import Form from "@/components/Form";
import PromotionText from "@/components/PromotionText";
import Realisations from "@/components/Realisations";
import Services from "@/components/Services";
import Villa from "@/components/Villa";
import VillaSpesifications from "@/components/VillaSpesifications";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

      <Header />
      <Banner />
      <PromotionText />
      <Fitures />
      <Villa />
      <VillaSpesifications />
      <Bali />
      <Realisations />
      <Services />
      <AvisClient />
      <Form />
      <Footer />
    </>
  );
}
