import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import BloodAvailability from "./components/BloodAvailability";
import EmergencyRequest from "./components/EmergencyRequest";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function Landing() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <BloodAvailability />
      <EmergencyRequest />
      <Stats />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;