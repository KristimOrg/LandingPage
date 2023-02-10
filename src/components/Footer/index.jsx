import kristim from "../../Assets/Logos/HeaderLogo.png";

const Footer = () => {
  return (
    <div>
      <footer
        aria-label="Site Footer"
        className="bg-black text-white font-ChakraPetch"
      >
        <div className="mx-auto max-w-screen-xl sm:px-4 px-1 pt-16 pb-6 lg:px-8 lg:pt-24">
          <div className="flex flex-col gap-10 items-center lg:flex-row lg:items-start justify-between">
            <div className="font-ChakraPetch p-2">
              <h2 className="text-[50px] flex justify-center lg:justify-start gap-2 text-center lg:text-start font-bold">
                <img src={kristim} alt="" className="w-16 h-14" /> Kristim
              </h2>
              <p className="mt-2 text-center lg:text-start leading-relaxed sm:mx-0 sm:max-w-xs">
                The Unicorn symbolizes uniqueness, purity, rarity, freedom and
                growth.
              </p>
            </div>

            <div className="max-w-[650px] w-full flex justify-center sm:gap-2 flex-wrap">
              {/* About */}
              <div className="text-center sm:text-left max-w-[150px] mb-10 w-full">
                <p className="text-2xl font-bold cursor-pointer">About</p>

                <nav aria-label="Footer Services Nav" className="mt-4">
                  <ul className="space-y-4 text-sm">
                    <li className="cursor-pointer hover:text-gray-400">
                      <a
                        // href="/"
                        // target="_blank"
                        // rel="noreferrer"
                        title="Coming Soon!"
                      >
                        Documentation
                      </a>
                    </li>
                    <li className="cursor-pointer hover:text-gray-400">
                      <a
                        // href="/"
                        // target="_blank"
                        // rel="noreferrer"
                        title="Coming Soon!"
                      >
                        Lottery
                      </a>
                    </li>
                    <li className="cursor-pointer hover:text-gray-400">
                      <a
                        // href="/"
                        // target="_blank"
                        // rel="noreferrer"
                        title="Coming Soon!"
                      >
                        Github
                      </a>
                    </li>
                    <li className="cursor-pointer hover:text-gray-400">
                      <a
                        // href="/"
                        // target="_blank"
                        // rel="noreferrer"
                        title="Coming Soon!"
                      >
                        Synthetics
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Sections */}
              <div className="text-center sm:text-left max-w-[150px] mb-10 w-full">
                <p className="text-2xl font-bold cursor-pointer">Sections</p>

                <nav aria-label="Footer Services Nav" className="mt-4">
                  <ul className="space-y-4 text-sm">
                    <ul className="space-y-4 text-sm">
                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#about">About</a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#features">Features</a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#roadmap">Roadmap</a>
                      </li>

                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>

              {/* Contact */}
              <div className="text-center sm:text-left max-w-[150px] mb-10 w-full">
                <p className="text-2xl font-bold cursor-pointer">Contact</p>

                <nav aria-label="Footer Services Nav" className="mt-4">
                  <ul className="space-y-4 text-sm">
                    <li className="cursor-pointer hover:text-gray-400">
                      <a
                        href="https://t.me/wecryptohere"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Telegram
                      </a>
                    </li>
                    <li className="cursor-pointer hover:text-gray-400">
                      <a
                        href="https://twitter.com/KrstmTech"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </li>

                    <li className="cursor-pointer hover:text-gray-400">
                      <a
                        href="https://discord.gg/MxmQkXdj"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discord
                      </a>
                    </li>
                    <li className="cursor-pointer hover:text-gray-400">
                      <a
                        // href="/"
                        // target="_blank"
                        // rel="noreferrer"
                        title="Coming Soon!"
                      >
                        Youtube
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Ecosystem */}
              <div className="text-center sm:text-left max-w-[150px] mb-10 w-full">
                <p className="text-2xl font-bold cursor-pointer">Ecosystem</p>

                <nav aria-label="Footer Services Nav" className="mt-4">
                  <ul className="space-y-4 text-sm">
                    <ul className="space-y-4 text-sm">
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          // href="/"
                          // target="_blank"
                          // rel="noreferrer"
                          title="Coming Soon!"
                        >
                          NFT Nodes
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          // href="/"
                          // target="_blank"
                          // rel="noreferrer"
                          title="Coming Soon!"
                        >
                          OBX Exchange
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          // href="/"
                          // target="_blank"
                          // rel="noreferrer"
                          title="Coming Soon!"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          // href="/"
                          // target="_blank"
                          // rel="noreferrer"
                          title="Coming Soon!"
                        >
                          Provide Liquidity
                        </a>
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* trade marks */}
          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-white">
                <span className="block sm:inline">All rights reserved.</span>

                <span className="inline-block text-[#c08ef1]  underline transition hover:text-[#8e31ea]">
                  Terms & Conditions
                </span>

                <span>&middot;</span>

                <span className="inline-block text-[#c08ef1] underline transition hover:text-[#8e31ea]">
                  Privacy Policy
                </span>
              </p>

              <p className="mt-4 text-sm text-[#8a21f2] sm:order-first sm:mt-0">
                &copy; 2023 Kristim
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
