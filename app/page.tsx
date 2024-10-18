import React from 'react';
import Carousel from "@/components/carousel";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navtabs from "@/components/nav-tabs";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-20">
        <Navbar />
        <main className='bg-white'>
          <Hero />
          <Carousel />
          <Navtabs />
          <Faq />
        </main>
      </div>
      <Footer />
    </div>
  );
}