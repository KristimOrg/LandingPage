import link from "../../Assets/PoweredBy/chainlink.svg";
import cmc from "../../Assets/PoweredBy/coinmarketcap.svg";
import handshake from "../../Assets/PoweredBy/handshake.svg";
import vercel from "../../Assets/PoweredBy/vercel.svg";
import polygon from "../../Assets/PoweredBy/polygon.svg";
import gelato from "../../Assets/PoweredBy/gelato.svg";
import ipfs from "../../Assets/PoweredBy/ipfs.svg";
import tradingview from "../../Assets/PoweredBy/tradingview.svg";
const Technologies = () => {
  return (
    <div id="partners" className="w-full flex justify-center bg-black">
      <section className="py-10 sm:py-20 max-w-screen-2xl text-gray-100">
        <div className="container p-1 mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-20">
            Powered by the industry leaders
          </h2>
        </div>
        <div className="max-w-4xl gap-2 lg:gap-5 flex flex-wrap justify-center mx-auto">
          {/* Gelato */}
          <div className="flex justify-center align-middle">
            <img
              src={gelato}
              alt=""
              className="w-44 h-32 border-2 border-gray-400 rounded-xl p-2"
            />
          </div>
          {/* IPFS */}
          <div className="flex justify-center align-middle">
            <img
              src={ipfs}
              alt=""
              className="w-44 h-32 border-2 border-gray-400 rounded-xl p-2"
            />
          </div>
          {/* Link */}
          <div className="flex justify-center align-middle">
            <img
              src={link}
              alt=""
              className="w-44 h-32 border-2 border-gray-400 rounded-xl p-2"
            />
          </div>
          {/* CMC */}
          <div className="flex justify-center align-middle">
            <img
              src={cmc}
              alt=""
              className="w-44 h-32 border-2 border-gray-400 rounded-xl p-2"
            />
          </div>
          {/* handshake */}
          <div className="flex justify-center align-middle">
            <img
              src={handshake}
              alt=""
              className="w-44 h-32 border-2 border-gray-400 rounded-xl p-2"
            />
          </div>
          {/* Vercel */}
          <div className="flex justify-center align-middle">
            <img
              src={vercel}
              alt=""
              className="w-44 h-32 border-2 border-gray-400 rounded-xl p-2"
            />
          </div>
          {/* Polygon */}
          <div className="flex justify-center align-middle">
            <img
              src={polygon}
              alt=""
              className="w-44 h-32 border-2 border-gray-400 rounded-xl p-2"
            />
          </div>
          {/* Trading view */}
          <div className="flex justify-center align-middle">
            <img
              src={tradingview}
              alt=""
              className="w-44 h-32 border-2 border-gray-400 rounded-xl p-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
