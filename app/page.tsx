import Approach from "@/components/Approach";
import Capabilities from "@/components/Capabilities";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Process />
        <Work />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
