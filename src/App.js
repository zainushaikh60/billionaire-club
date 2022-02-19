import { useState } from "react";
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/hero/HeroSection";
import NFTSection from "./components/nft/NFTSection";
import BannerSection from "./components/Banner/BannerSection";
import NewsletterSection from "./components/Newsletter/NewsletterSection";
import Footer from "./components/navigation/Footer";

import NavbarMenu from "./components/navigation/NavbarMenu";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full w-full flex flex-col">
      {open ? (
        <NavbarMenu setOpen={setOpen} />
      ) : (
        <>
          <Navbar setOpen={setOpen} />
          <HeroSection />
          <NFTSection />
          <BannerSection />
          <NewsletterSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
