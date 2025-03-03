import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KeyMetrics from "@/components/KeyMetrics";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <KeyMetrics />
    <Contact />
    <Footer />
    </>
  );
}
