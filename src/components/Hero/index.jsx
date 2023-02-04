import Github from "../../Assets/Social/github.png";
import Medium from "../../Assets/Social/medium.png";
import Twitter from "../../Assets/Social/twitter.png";
import unicorn from "../../Assets/Icons/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex justify-center font-Orbitron items-end bg-black text-white"
    >
      <div className="relative mt-[500px] max-w-screen-2xl w-full flex justify-start px-2">
        <div className="w-full px-2 sm:px-10 z-20 left-0 bottom-0 flex flex-col pb-20 justify-center items-center lg:items-start">
          {/* Image */}
          <div className="w-full lg:hidden mt-20 border mb-10">
            <img src={unicorn} alt="unicorn" />
          </div>
          {/* Title */}
          <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl text-center lg:text-start mb-7">
            Kristim Ecosystem
          </h2>
          {/* Subtext */}
          <div className="w-full flex justify-center lg:justify-start">
            <p className="sm:max-w-[60%] w-full flex justify-start text-center lg:max-w-[50%] text-md lg:text-2xl lg:text-start mb-10">
              Fully decentralized Crypto social experiment with audited contract
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start items-center gap-4 w-full flex-wrap">
            <a href="#contact">
              <button className="bg-[#8833e9] text-white hover:bg-[#5a16a7] transition-all duration-500 px-4 sm:px-8 py-3 text-[15px] sm:text-lg font-semibold rounded-xl">
                Join Us
              </button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=hN4-Uq02Qzg"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-white hover:bg-[#c4c4c4] transition-all duration-500 text-black px-4 sm:px-8 py-3 text-[15px] sm:text-lg font-semibold rounded-xl">
                Documentation
              </button>
            </a>
          </div>

          <div className="w-full flex justify-center lg:justify-start gap-4 mt-10">
            <a
              href="https://www.youtube.com/watch?v=8LVkcXA6Wxc"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="" className="h-12" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=8LVkcXA6Wxc"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Medium} alt="" className="h-12" />
            </a>
            <a
              href="https://twitter.com/KrstmTech"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="" className="h-12" />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:w-[700px] xl:w-[870px] absolute right-0 bottom-20 z-10">
          <img src={unicorn} alt="unicorn" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
