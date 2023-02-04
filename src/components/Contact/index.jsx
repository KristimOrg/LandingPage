import twitter from "../../Assets/Social/twitter.png";
import medium from "../../Assets/Social/medium.png";
import discord from "../../Assets/Social/discord.png";
import github from "../../Assets/Social/github.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center py-5 sm:py-20 text-gray-100 bg-[#121212]"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="py-4 text-3xl font-bold text-center">Stay tuned</h2>
        <div className="flex justify-center flex-wrap max-w-2xl">
          <div className="p-4 flex flex-col gap-7 border w-[300px] justify-center items-center">
            <div className="flex justify-center items-center lg:col-span-1 col-span-full">
              <img src={github} alt="github" className="h-20" />
            </div>
            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                Verify the code
              </span>
              <span className="text-xl font-bold md:text-2xl">
                Github Repository
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-7 border w-[300px] justify-center items-center">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <img src={medium} alt="github" className="h-20" />
            </div>
            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                News and updates
              </span>
              <span className="text-xl font-bold md:text-2xl">
                Medium posts
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-7 border w-[300px] justify-center items-center">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <img src={discord} alt="github" className="h-20" />
            </div>
            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                Have a chat
              </span>
              <span className="text-xl font-bold md:text-2xl">
                Discord Community
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-7 border w-[300px] justify-center items-center">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <a
                href="https://twitter.com/KrstmTech"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="github" className="h-20" />
              </a>
            </div>
            <div className="flex flex-col items-center justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                Trending topics
              </span>
              <span className="text-xl font-bold md:text-2xl">
                <a
                  href="https://twitter.com/KrstmTech"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  Twitter updates
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
