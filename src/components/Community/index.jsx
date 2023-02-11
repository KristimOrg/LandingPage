import BluryButton from "../UI/BluryButton";

const Gallery = () => {
  return (
    <div className="bg-[#161616] flex justify-center items-start py-2 sm:py-20 font-ChakraPetch">
      <div className="max-w-screen-xl w-full relative py-10">
        <h2 className="font-bold text-4xl sm:text-[60px] text-white text-center mb-10 sm:mb-16">
          Join the community
        </h2>
        <div className="flex flex-wrap gap-0 sm:gap-10 xl:gap-20 px-3 sm:p-0 justify-center items-center">
          {/* map */}
          <section className="max-w-xl  py-10">
            <div>
              <div className="flex flex-row">
                <div className="hidden md:flex flex-col items-center">
                  {/* step1 */}
                  <div className="w-32 py-5 border-2 border-white rounded mr-4 uppercase flex flex-col items-center justify-center">
                    <div className="text-3xl font-black text-white">Step 1</div>
                    <div className="text-white text-sm">Idea</div>
                  </div>

                  <div className="h-full border-l-4 border-transparent">
                    <div className="border-l-4 mr-4 h-full border-white border-dashed"></div>
                  </div>
                </div>
                {/* next */}
                <div className="flex-auto border-2 rounded border-white">
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="flex-auto">
                      <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-100">
                        <span className="">Step 1</span> - Idea
                      </div>
                      <div className="p-3 text-3xl text-white font-bold">
                        Find your best idea
                      </div>
                      <div className="px-3 pb-6 text-white">
                        Don't just let your ideas die in a piece of paper!
                        Elaborate them, find a good use case and the tools to
                        bring it to life.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-row">
                <div className="border-t-4 border-r-4 border-transparent">
                  <div className="w-16 ml-16 h-16 border-l-4 border-white border-dashed border-b-4 rounded-bl-full"></div>
                </div>
                <div className="border-t-4 border-transparent flex-auto">
                  <div className="h-16 border-b-4 border-white border-dashed"></div>
                </div>
                <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-white border-dashed border-t-4 rounded-tr-full"></div>
              </div>

              {/* last */}
              <div className="flex flex-row-reverse">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-32 py-5 border-2 border-white rounded ml-4 uppercase flex flex-col items-center justify-center">
                    <div className="text-3xl font-black text-white">Step 2</div>
                    <div className="text-white text-sm">Collaboration</div>
                  </div>
                </div>
                <div className="flex-auto border-2 rounded border-white">
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="flex-auto">
                      <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-100">
                        <span className="">Step 1</span> - Idea
                      </div>
                      <div className="p-3 text-3xl text-white font-bold">
                        Join the team
                      </div>
                      <div className="px-3 pb-6 text-white">
                        The community is the backbone of our project, join
                        Kristim by proposing new solutions and integrating them
                        into the ecosystem.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* text */}
          <div className=" lg:max-w-xl">
            <p className="text-base font-Orbitron leading-6 text-[#7100E2] font-semibold uppercase">
              Collaboration
            </p>
            <h4 className="mt-2 text-2xl leading-8 font-extrabold text-white sm:text-3xl sm:leading-9">
              Collaboration and contribution between holders is the key of the
              success.
            </h4>

            <ul className="mt-8 font-Orbitron md:grid md:grid-cols-2 gap-6 mb-10">
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base leading-6 font-medium text-gray-200">
                    Holders from all over the world
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base leading-6 font-medium text-gray-200">
                    Different areas of expertise
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base leading-6 font-medium text-gray-200">
                    Different ages, languages and nationalities
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base leading-6 font-medium text-gray-200">
                    One mutual goal to create a 1B unirorn
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base leading-6 font-medium text-gray-200">
                    Community driven development
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base leading-6 font-medium text-gray-200">
                    Open source projects, no obscurity
                  </span>
                </div>
              </li>
            </ul>

            <div className="w-full flex justify-center lg:justify-start">
              <a
                href="https://t.me/wecryptohere"
                target="_blank"
                rel="noreferrer"
              >
                <BluryButton />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
