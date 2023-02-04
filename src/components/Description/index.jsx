const Description = () => {
  return (
    <section
      id="features"
      className="w-full flex justify-center py-20 px-2 font-ChakraPetch"
    >
      <div className="max-w-screen-2xl w-full flex gap-20 flex-wrap justify-center">
        <ul className="flex flex-col gap-7">
          <li className="text-center lg:text-end">
            <h3 className="text-2xl font-bold">
              Lorem ipsum dolor, sit amet consectetur
            </h3>
            <p className="max-w-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              illum vitae corporis dolores ipsam, dolorum omnis ducimus
              perferendis. At necessitatibus voluptate, totam dolore debitis
              recusandae nobis? Excepturi cumque rerum velit.
            </p>
          </li>
          <li className="text-center lg:text-end">
            <h3 className="text-2xl font-bold">
              Lorem ipsum dolor, sit amet consectetur
            </h3>
            <p className="max-w-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              illum vitae corporis dolores ipsam, dolorum omnis ducimus
              perferendis. At necessitatibus voluptate, totam dolore debitis
              recusandae nobis? Excepturi cumque rerum velit.
            </p>
          </li>
          <li className="text-center lg:text-end">
            <h3 className="text-2xl font-bold">Telegram Tip Bot</h3>
            <p className="max-w-2xl">
              Added to your TG Chat it allows anyone to tip any comment in any
              crypto if both people are connected to the bot. This can improve
              social connections among the members of your community and provide
              a tool for authors to receive anonymous donations for their
              content and engage the community to create and share their content
            </p>
          </li>
          <li className="text-center lg:text-end">
            <h3 className="text-2xl font-bold">Radio Under Development</h3>
            <p className="max-w-2xl">
              Radio (or TV) is going to be connected from telegram to Youtube
              and will include both entertaining content (music, fun podcasts),
              and educative and innovative content.
            </p>
          </li>
        </ul>
        <div className="bg-purple-700 rounded-xl w-[400px] h-[400px] sm:h-[500px]"></div>
      </div>
    </section>
  );
};

export default Description;
