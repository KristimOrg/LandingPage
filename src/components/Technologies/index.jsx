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
      <section className="p-6 max-w-screen-2xl dark:text-gray-100">
        <div className="container p-4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-20">
            Powered by the industry leaders
          </h2>
        </div>
        <div className="max-w-5xl gap-8 flex flex-wrap justify-center mx-auto dark:text-gray-400">
          {/* Gelato */}
          <div className="flex justify-center align-middle">
            <img
              src={gelato}
              alt=""
              className="w-44 rounded-xl p-2 h-44 border"
            />
          </div>

          {/* IPFS */}
          <div className="flex justify-center align-middle">
            <img
              src={ipfs}
              alt=""
              className="w-44 rounded-xl p-2 h-44 border"
            />
          </div>

          {/* Link */}
          <div className="flex justify-center align-middle">
            <img
              src={link}
              alt=""
              className="w-44 rounded-xl p-2 h-44 border"
            />
          </div>

          {/* CMC */}
          <div className="flex justify-center align-middle">
            <img
              src={cmc}
              alt=""
              className="w-44 border rounded-xl bg-white p-2"
            />
          </div>

          {/* handshake */}
          <div className="flex justify-center align-middle">
            <img
              src={handshake}
              alt=""
              className="w-44 border rounded-xl p-2 bg-white"
            />
          </div>

          {/* Vercel */}
          <div className="flex justify-center align-middle">
            <img
              src={vercel}
              alt=""
              className="w-44 rounded-xl border p-2 bg-white"
            />
          </div>

          {/* Polygon */}
          <div className="flex justify-center align-middle">
            <img
              src={polygon}
              alt=""
              className="w-44 border rounded-xl p-2 bg-white"
            />
          </div>

          {/* Trading view */}
          <div className="flex justify-center align-middle">
            <img
              src={tradingview}
              alt=""
              className="w-44 border rounded-xl p-2 bg-white"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
