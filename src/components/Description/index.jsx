import redirect from "../../Assets/Social/redirect.png";
import ecosystem from "../../Assets/Logos/Real.svg";

const Description = () => {
  return (
    <section
      id="features"
      className="w-full flex justify-center py-20 px-2 font-ChakraPetch"
    >
      <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row gap-16 items-center justify-center">
        <ul className="flex flex-col gap-7">
          <li className="text-center lg:text-end">
            <h3 className="text-2xl font-bold">Decentralized Exchange</h3>
            <p className="max-w-2xl">
              OBXDex is a non-custody decentralized exchange with orderbooks
              fully on the Polygon Network. Part of the fees go to synthetics
              and the ecosystem's staking pool. With 0% maker fees and a max
              taker fee of 0.10%, the user can get fee reductions based on the
              amount of KRSTM tokens held.
            </p>
          </li>
          <li className="text-center lg:text-end">
            <h3 className="text-2xl font-bold">Synthetics</h3>
            <p className="max-w-2xl">
              Our synthetics assets are special mintable tokens, which track the
              price of unique assets and investment strategies using a secure
              chainlink oracle price feed. With KRSTM as main collateral, our
              sustainably programmed strategies ensure that the assets are
              always over-collateralized.
            </p>
          </li>
          <li className="text-center lg:text-end">
            <h3 className="text-2xl font-bold">Domain Zone</h3>
            <p className="max-w-2xl">
              Kristim own DNS on handshake network , our HNS .krstm or .kristim
              domains will uniform the ecosystem dapps on a decentralized and
              censorship resistant enviroment, and offer a easy start for anyone
              wanting to create their own decentralized domain trough KRSTM
              DNS's.
            </p>
          </li>
          <li className="text-center lg:text-end">
            <h3 className="text-2xl font-bold">Luckblocks</h3>
            <p className="max-w-2xl">
              A fully decentralized app that brings games like lotteries and
              dice directly to the blockchain. As a key player in the
              ecosystem's staking pool sustainability, Luckblocks is
              revolutionizing draws by activating them through a network of
              independent peers tracked by ownership of NFTNodes, a unique
              utility PFP NFT.
            </p>
          </li>
        </ul>
        <div className="flex flex-col gap-5 items-center">
          <img src={ecosystem} alt="" className="flex rounded-xl" />
          <a
            // href="/"
            // target="_blank"
            // rel="noreferrer"
            title="Coming Soon!"
          >
            <button className="bg-black flex justify-center items-center gap-2 text-white sm:text-xl font-bold  px-4 py-2 rounded-md ">
              Read more about it
              <img src={redirect} alt="redirect" className="w-7" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Description;
