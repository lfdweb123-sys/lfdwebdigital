import HeroBanner from "./components/HeroBanner";
import ServicesSection from "./components/ServicesSection";
import ProfileSection from "./components/ProfileSection";
import TestimonialsSlider from "./components/TestimonialsSlider";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServicesSection />
      <ProfileSection />
      <Portfolio />
      <TestimonialsSlider />
    </>
  );
}