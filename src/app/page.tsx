// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import WhoWeAreSection from "../components/WhoWeAreSection";
// import Programs from "../components/Programs";
// import ImpactSection from "../components/impactSection";
// import GetInvolvedSection from "../components/GetInvolvedSection";
// import EventsSection from "../components/EventsSection";
// import Contacts from "../components/Contacts";
// import Footer from "../components/Footer";

// export default function Home() {
//   return (
//     <main>
//       <Navbar />
//       <Hero />
//       <WhoWeAreSection />
//       <Programs />
//       <ImpactSection />
//       <GetInvolvedSection />
//       <EventsSection />
//       <Contacts />
//       <Footer />
//     </main>
//   );
// }

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoWeAreSection from "../components/WhoWeAreSection";
import Programs from "../components/Programs";
import ImpactSection from "../components/impactSection";
import GetInvolvedSection from "../components/GetInvolvedSection";
import EventsSection from "../components/EventsSection";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: events } = await supabase
    .from("events")
    .select(`*, event_images(image_url, sort_order)`)
    .eq("is_published", true)
    .order("event_date", { ascending: false })
    .limit(6);

  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAreSection />
      <Programs />
      <ImpactSection />
      <GetInvolvedSection />
      <EventsSection events={events ?? []} />
      <Contacts />
      <Footer />
    </main>
  );
}
