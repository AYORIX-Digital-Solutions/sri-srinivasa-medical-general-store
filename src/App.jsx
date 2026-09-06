import { useEffect, useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const isNotFound = window.location.pathname !== "/";

  useEffect(() => {
    if (isNotFound) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNotFound]);

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <>
      <LoadingScreen />

      <div
        className="fixed left-0 top-0 z-[10000] h-[2px] bg-[#31543D] transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Navbar />

      <main>
        <Hero />
        <Highlights />
        <About />
        <Categories />
        <WhyChooseUs />
        <Contact />
        <Location />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;