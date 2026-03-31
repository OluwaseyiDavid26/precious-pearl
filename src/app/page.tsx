import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoWeAreSection from "../components/WhoWeAreSection";
import Programs from "../components/Programs";
import ImpactSection from "../components/impactSection";
import GetInvolvedSection from "../components/GetInvolvedSection";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAreSection />
      <Programs />
      <ImpactSection />
      <GetInvolvedSection />
      <Contacts />
      <Footer />
    </main>
  );
}
