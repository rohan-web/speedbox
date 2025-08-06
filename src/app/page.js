
import Navbar from "../components/Navbar";
import Hero from "@/sections/Hero";
import DeliveryServices from "@/sections/DeliveryServices";
import DeliveryZones from "@/sections/DeliveryZones";
import HowItWorks from "@/sections/HowItWorks";
import WhyChooseUs from "@/sections/WhyChooseUs";
import BookingCTA from "@/sections/BookingCTA";
import StatsSection  from "@/sections/stats";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />






      {/* Other Sections */}
      <DeliveryServices />
      
      <HowItWorks />
      <WhyChooseUs />
      <StatsSection />
      <BookingCTA />
      <Footer />
    </>
  );
}
