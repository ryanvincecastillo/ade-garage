import MotionProvider from "@/components/motion/MotionProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ShopYourWay from "@/components/sections/ShopYourWay";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";

export default function HomePage() {
  return (
    <MotionProvider>
      <Header />
      <main>
        <Hero />
        <ShopYourWay />
        <Categories />
        <FeaturedProducts />
        <HowItWorks />
        <SocialProof />
      </main>
      <Footer />
    </MotionProvider>
  );
}
