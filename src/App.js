import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Gallery from "./components/Community";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Technologies from "./components/Technologies";
import up from "./Assets/Social/arrowUp.png";

function App() {
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 2000) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Description />
      <Gallery />
      <Roadmap />
      <Technologies />
      <Contact />
      <Team />
      <Footer />

      {backTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 border-2 transition-all duration-300 hover:border-[#7E22CE] border-gray-200 bottom-3 right-3 sm:right-10 sm:bottom-10 rounded-xl p-3 sm:p-4 bg-[#000]"
          // className={
          //   backTop
          //     ? "bg-blue-600 delay-300 opacity-100 transition-opacity fixed top-0 right-0 ease-in-out duration-700"
          //     : "bg-blue-600 delay-300 opacity-0 transition-opacity fixed top-0 right-0 ease-in-out duration-700"
          // }
        >
          <img src={up} alt="" className="w-6 sm:w-8" />
        </button>
      )}
    </div>
  );
}

export default App;
