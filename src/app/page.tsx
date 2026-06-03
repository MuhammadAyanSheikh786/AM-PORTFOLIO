import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CTABanner from "@/components/sections/CTABanner";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Approach from "@/components/sections/Approach";
import MovingGrid3x3 from "@/components/ui/MovingGrid3x3";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Tools from "@/components/sections/Tools";
import Expertise from "@/components/sections/Expertise";
import ProcessSection from "@/components/sections/ProcessSection";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <About />
      <Services />
      <CTABanner />
      <WhyChooseUs />
      <Approach />
      <MovingGrid3x3 />
      <Portfolio />
      <Testimonials />
      <Tools />
      <Expertise />
      <ProcessSection />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Contact />
    </>
  );
}
