import twitter from "../../Assets/Social/twitter.png";
import medium from "../../Assets/Social/medium.png";
import discord from "../../Assets/Social/discord.png";
import github from "../../Assets/Social/github.png";
import telegram from "../../Assets/Social/telegram.png";
import youtuber from "../../Assets/Social/youtube.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center py-5 sm:py-20 text-gray-100 bg-[#121212]"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="py-4 text-4xl font-bold text-center mb-10">
          Stay tuned
        </h2>
        <div className="flex justify-center flex-wrap max-w-5xl">
          {/* github */}
          <div className="p-4 flex flex-col gap-4 w-[170px] sm:w-[300px] justify-center items-center">
            <a
               href="https://github.com/KristimOrg"
               target="_blank"
               rel="noreferrer"
              // title="Coming Soon!"
            >
              <div className="flex justify-center items-center lg:col-span-1 col-span-full">
                <img src={github} alt="github" className="h-12 sm:h-20" />
              </div>
            </a>

            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracking-wider uppercase bg-violet-500 py-1 px-2 rounded-lg flex flex-col justify-center items-center text-white font-bold">
                Verify the code
              </span>
              <span className="text-md font-bold md:text-2xl">Source Code</span>
            </div>
          </div>

          {/* Medium */}
          <div className="p-4 flex flex-col gap-4 w-[170px] sm:w-[300px] justify-center items-center">
            <a
              // href="/"
              // target="_blank"
              // rel="noreferrer"
              title="Coming Soon!"
            >
              <div className="flex justify-center items-center lg:col-span-1 col-span-full">
                <img src={medium} alt="github" className="h-12 sm:h-20" />
              </div>
            </a>

            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs uppercase bg-violet-500 py-1 px-2 rounded-lg flex flex-col justify-center items-center text-white font-bold">
                News / updates
              </span>
              <span className="text-md font-bold md:text-2xl">
                Medium posts
              </span>
            </div>
          </div>

          {/* Discord */}
          <div className="p-4 flex flex-col gap-4 w-[170px] sm:w-[300px] justify-center items-center">
            <a
              href="https://discord.gg/MxmQkXdj"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex justify-center items-center lg:col-span-1 col-span-full">
                <img src={discord} alt="github" className="h-12 sm:h-20" />
              </div>
            </a>

            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracking-wider uppercase bg-violet-500 py-1 px-2 rounded-lg flex flex-col justify-center items-center text-white font-bold">
                Have a chat
              </span>
              <span className="text-md font-bold md:text-2xl">
                Discord Channel
              </span>
            </div>
          </div>

          {/* Twitter */}
          <div className="p-4 flex flex-col gap-4 w-[170px] sm:w-[300px] justify-center items-center">
            <a
              href="https://twitter.com/KrstmTech"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex justify-center items-center lg:col-span-1 col-span-full">
                <img src={twitter} alt="github" className="h-12 sm:h-20" />
              </div>
            </a>

            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracking-wider uppercase bg-violet-500 py-1 px-2 rounded-lg flex flex-col justify-center items-center text-white font-bold">
                Trending topics
              </span>
              <span className="text-md font-bold md:text-2xl">
                Twitter updates
              </span>
            </div>
          </div>

          {/* Youtube */}
          <div className="p-4 flex flex-col gap-4 w-[170px] sm:w-[300px] justify-center items-center">
            <a
              // href="/"
              // target="_blank"
              // rel="noreferrer"
              title="Coming Soon!"
            >
              <div className="flex justify-center items-center lg:col-span-1 col-span-full">
                <img src={youtuber} alt="github" className="h-12 sm:h-20" />
              </div>
            </a>

            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs uppercase bg-violet-500 py-1 px-2 rounded-lg flex flex-col justify-center items-center text-white font-bold">
                Check our Videos
              </span>
              <span className="text-md font-bold md:text-2xl">
                Youtube Channel
              </span>
            </div>
          </div>

          {/* Telegram */}
          <div className="p-4 flex flex-col gap-4 w-[170px] sm:w-[300px] justify-center items-center">
            <a
              href="https://t.me/wecryptohere"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex justify-center items-center lg:col-span-1 col-span-full">
                <img src={telegram} alt="github" className="h-12 sm:h-20" />
              </div>
            </a>

            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs uppercase bg-violet-500 py-1 px-2 rounded-lg flex flex-col justify-center items-center text-white font-bold">
                Talk to investors
              </span>
              <span className="text-md font-bold md:text-2xl">
                Telegram Group
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
