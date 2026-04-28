import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Process />
        <About />
      </main>
      <Footer />
    </>
  );
}
