"use client";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PortfolioSection />
      <AboutSection />
      <SkillsSection />
      <Footer />
      <Copyright />
    </>
  );
}
