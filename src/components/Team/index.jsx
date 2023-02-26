import styles from "./styles.module.css";
import Irina from "../../Assets/team/irina.png";
import Wallace from "../../Assets/team/wallace.png";
import Rebeca from "../../Assets/team/rebeca.png";
import Emelea from "../../Assets/team/emelea.png";

const Team = () => {
  return (
    <div id="team" className="w-full flex justify-center bg-[#161616]">
      <section className="">
        <div className="max-w-screen-2xl w-full px-2 py-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold text-center  capitalize lg:text-4xl text-white">
            <span className={styles.marquerEffect}>Check Out Our Team</span>
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-lg text-center text-gray-300">
            Developer and executive personal. You can be redirected to their
            preferred social media/portfolio link by clicking on their profile
            picture.
          </p>

          <div className="flex flex-wrap max-w-3xl justify-center gap-4 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {/* Irina */}
            <div className="flex flex-col items-center p-2 transition-colors duration-300 transform cursor-pointer group hover:bg-[#45454561] rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full animate-border bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 bg-[length:400%_400%] p-1 transition "
                src={Irina}
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-white group-hover:text-white">
                Irina
              </h1>

              <p className=" text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Cofounder
              </p>
              <p className="mt-1 font-bold text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Digital marketing
              </p>
            </div>

            {/* Emelea */}
            <a
              href="https://www.linkedin.com/in/iura-cep-45b994160/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center p-2 transition-colors duration-300 transform cursor-pointer group hover:bg-[#45454561] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full animate-border bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 bg-[length:400%_400%] p-1 transition "
                  src={Emelea}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-white group-hover:text-white">
                  Emelea
                </h1>

                <p className=" text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Cofounder
                </p>
                <p className="mt-1 font-bold text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Python Developer
                </p>
              </div>
            </a>

            {/* Wallace */}
            <a
              href="https://www.linkedin.com/in/wallace-pinheiro-b96a6519a/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center p-2 transition-colors duration-300 transform cursor-pointer group hover:bg-[#45454561] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full animate-border bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 bg-[length:400%_400%] p-1 transition "
                  src={Wallace}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-white group-hover:text-white">
                  Wallace
                </h1>

                <p className=" text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Cofounder
                </p>
                <p className="mt-1 font-bold text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Solidity developer
                </p>
              </div>
            </a>

            {/* Robert */}
            <div className="flex flex-col items-center p-2 transition-colors duration-300 transform cursor-pointer group hover:bg-[#45454561] rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full animate-border bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 bg-[length:400%_400%] p-1 transition "
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-white group-hover:text-white">
                Robert
              </h1>

              <p className=" text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Project Advisor
              </p>
              <p className="mt-1 font-bold text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Entrepreneur
              </p>
            </div>

            {/* Rebeca */}
            <a
              href="https://github.com/rebecagrn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center p-2 transition-colors duration-300 transform cursor-pointer group hover:bg-[#45454561] rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full animate-border bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 bg-[length:400%_400%] p-1 transition "
                  src={Rebeca}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-white group-hover:text-white">
                  Rebeca
                </h1>

                <p className=" text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Builder
                </p>
                <p className="mt-1 font-bold text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Frontend Developer
                </p>
              </div>
            </a>

            {/* David Ama */}
            <div className="flex flex-col items-center p-2 transition-colors duration-300 transform cursor-pointer group hover:bg-[#45454561] rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full animate-border bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 bg-[length:400%_400%] p-1 transition "
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-white group-hover:text-white">
                David Ama
              </h1>

              <p className=" text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Builder
              </p>
              <p className="mt-1 font-bold text-gray-400 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Marketing
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
