import SVGIcon from "../UI/SVGIcon";
import fee from "../../Assets/Icons/fee.png";
import link from "../../Assets/Icons/link.png";
import upchart from "../../Assets/Icons/upchart.png";
import income from "../../Assets/Icons/income.png";
import unicorn from "../../Assets/Icons/unicorn.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex justify-center py-20 bg-[#0b0b0b] text-white"
    >
      <section className="max-w-screen-2xl px-3 w-full gap-5 xl:gap-0 flex flex-wrap justify-center items-center">
        <div className="w-[450px] shadow-xl">
          <img src={unicorn} alt="" className="bg-cover border-2 rounded-3xl" />
        </div>

        <div className="flex flex-col">
          {/* top */}
          <div className="lg:max-w-4xl w-full flex flex-col justify-center items-center mb-5">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              Decentralized Ecosystem
            </h2>
            <p className="px-8 my-4 lg:max-w-[60%] text-center">
              KRSTM is created as a hub for fully independent and decentralized
              projects with community support.
            </p>
          </div>
          {/* paragraphs */}
          <div className="flex justify-center">
            <div className="max-w-3xl w-full flex flex-wrap justify-center gap-5 p-4">
              <div className="flex flex-col items-center justify-center space-y-3 max-w-xs md:justify-start md:items-start">
                <img src={fee} alt="" className="w-7 h-7 text-[#e61616]" />
                <h5 className="text-xl font-semibold">There are no taxes</h5>
                <p className="text-center sm:text-start">
                  The main token has no taxes and is fully supported and moved
                  by the minds and ideas of developers and other members of
                  community
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 max-w-xs md:justify-start md:items-start">
                <img src={income} alt="" className="w-7 h-7 text-[#e61616]" />

                <h5 className="text-xl font-semibold">Income for holders</h5>
                <p className="text-center sm:text-start">
                  Each project is focused to contribute into rewards pool for
                  holders and/or dapp specific perks for holding KRSTMs.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 max-w-xs md:justify-start md:items-start">
                <img src={upchart} alt="" className="w-7 h-7 text-[#e61616]" />

                <h5 className="text-xl font-semibold">
                  From zero to 1B marketcap
                </h5>
                <p className="text-center sm:text-start">
                  Fully independent and decentralized unicorn is created as a
                  social experiment, growing from zero to 1B with the energy and
                  force of minds of the holders.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 max-w-xs md:justify-start md:items-start">
                <img src={link} alt="" className="w-7 h-7 text-[#e61616]" />

                <h5 className="text-xl font-semibold">
                  Supported by each other
                </h5>
                <p className="text-center sm:text-start">
                  KRSTM holders are developers and experts of different areas,
                  this helps development and promotion of each part of the
                  system, adding value to their own investments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
