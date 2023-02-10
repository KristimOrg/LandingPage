import losango from "../../Assets/Icons/losango.png";
import RoadmapItem from "../UI/RoadmapItem/indes";

const Roadmap = () => {
  return (
    <section id="roadmap" className="w-full flex justify-center bg-white">
      <div className="max-w-screen-xl w-full p-2">
        <div className="w-full flex justify-end">
          <span className="border-[2px] border-black w-[40%]"></span>
        </div>

        <div className="w-full border-[5px] border-black mt-1"></div>
        <div className="w-full flex justify-end">
          <span className="border-[10px] border-black w-[20%]"></span>
        </div>
        <h2 className="text-[50px] font-ChakraPetch font-bold">Roadmap</h2>
        <h3 className="text-xl font-bold font-ChakraPetch mb-10 mt-[-5px]">
          Targets and deadlines
        </h3>

        <ol className="w-full flex justify-center font-ChakraPetch font-semibold flex-wrap gap-5">
          {/* First */}
          <li className="max-w-sm w-full">
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col ">
                {/* Title */}
                <div className="flex justify-between">
                  <div className="flex justify-center items-center">
                    <img
                      src={losango}
                      alt=""
                      className="w-8 h-8 relative left-0"
                    />
                    <h3 className="font-bold text-xl">First Quarter</h3>
                  </div>
                  <span className="flex justify-center items-center text-gray-400">
                    2023
                  </span>
                </div>
                {/* Goals */}
                <RoadmapItem
                  done={true}
                  subtitle="First Mint"
                  content="Token contract created, tested and tokens issued successfully"
                />
                <RoadmapItem
                  done={true}
                  subtitle="Liquidity Added"
                  content="WMATIC / KRSTM pair"
                />
                <RoadmapItem
                  done={true}
                  subtitle="Landing Page"
                  content="Website created to provide an overview of the ecosystem to newcomers"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Social Media"
                  content="Github, Twitter, Youtube, Discord, Medium and Telegram"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Domain Zone"
                  content="Unique domains for the whole ecosystem"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Luckblocks Tests"
                  content="Blueprint, wireframes and contract tests executed"
                />
              </div>
            </div>
          </li>
          {/* Second */}
          <li className="max-w-sm w-full">
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col ">
                {/* Title */}
                <div className="flex justify-between">
                  <div className="flex justify-center items-center">
                    <img
                      src={losango}
                      alt=""
                      className="w-8 h-8 relative left-0"
                    />
                    <h3 className="font-bold text-xl">Second Quarter</h3>
                  </div>
                  <span className="flex justify-center items-center text-gray-400">
                    2023
                  </span>
                </div>
                {/* Goals */}
                <RoadmapItem
                  done={false}
                  subtitle="NFT utilities"
                  content="Become a random number validator by holding NFTs"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Radio Development"
                  content="Design, research and tests"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Luckblocks Launched"
                  content="Lottery Dapp fully functional and hosted"
                />
                <RoadmapItem
                  done={false}
                  subtitle="LP Rewards"
                  content="Provide liquidity and earn USDC"
                />{" "}
                <RoadmapItem
                  done={false}
                  subtitle="Documentaion"
                  content="Registry of the whole project integrations, functionalities and features to be added"
                />{" "}
                <RoadmapItem
                  done={false}
                  subtitle="Krstm Hub"
                  content="Planning, choosing the stack and testing the prototypes"
                />
              </div>
            </div>
          </li>
          {/* Third */}
          <li className="max-w-sm w-full">
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col ">
                {/* Title */}
                <div className="flex justify-between">
                  <div className="flex justify-center items-center">
                    <img
                      src={losango}
                      alt=""
                      className="w-8 h-8 relative left-0"
                    />
                    <h3 className="font-bold text-xl">Third Quarter</h3>
                  </div>
                  <span className="flex justify-center items-center text-gray-400">
                    2023
                  </span>
                </div>
                {/* Goals */}
                <RoadmapItem
                  done={false}
                  subtitle="Synthetics Dapp Tests"
                  content="Blueprint, wireframes and contract tests executed"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Synthetics Dapp Launched"
                  content="Synthetics integrated and tested by the final user, hosted and able to scale"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Radio Integration"
                  content="Deployment to production; Take feedback to integrate new features"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Order-based DEX"
                  content="Decentralized order book dapp to avoid massive liquidity hits and open arbitrage opportunities"
                />
                <RoadmapItem
                  done={false}
                  subtitle="Mint Dapp verified"
                  content="Dashboard section added and tested by the final user"
                />{" "}
              </div>
            </div>
          </li>
        </ol>

        <div className="w-full border-[3px] border-black mt-14"></div>
        <div className="w-full flex">
          <span className="border-[5px] border-black w-[15%]"></span>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
