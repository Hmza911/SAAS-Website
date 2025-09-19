"use client";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Pricing from "@/sections/Pricing";
import ProductShowcase from "@/sections/ProductShowcase";
import Testimonals from "@/sections/Testimonals";
import CallToActions from "@/sections/CallToActions";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Header at top */}
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonals />
      <CallToActions />
      <Footer />
    </>
  );
}
