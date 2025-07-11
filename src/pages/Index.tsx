
import Hero from "@/components/Hero";
import TypewriterSection from "@/components/TypewriterSection";
import MenuPreview from "@/components/MenuPreview";
import Menu from "@/components/Menu";
import WineSection from "@/components/WineSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Hero />
      <TypewriterSection />
      <MenuPreview />
      <div id="menu">
        <Menu />
      </div>
      <WineSection />
      <div id="shop">
        {/* Shop section placeholder */}
      </div>
      <Footer />
    </>
  );
};

export default Index;
