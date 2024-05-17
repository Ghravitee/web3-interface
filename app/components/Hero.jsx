import React from "react";
import Image from "next/image";
import heroImage from "../../public/hero-sponge.PNG";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Image src="/hero-sponge.PNG" alt="hero" height={350} width={350} />
      </div>
      <h1 className="text-5xl lg:text-8xl mb-6">SpongeBase</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-6">
        
        <a
          href="https://warpcast.com/spongebase"
          className="col-start-1 col-end-2 lg:row-span-1 lg:col-start-1 lg:col-end-2 flex justify-center items-center py-3 px-4 md:px-10 text-black cursor-pointer shadow-[2px_2px_0px_1px_#000000] bg-[#4bc0c0cc] border-black border"
        >
          warpcast
        </a>
        <a
          href="https://t.me/SpongeBaseS"
          className="lg:col-start-2 lg:col-end-3 col-start-3 col-end-5 lg:row-span-1 row-start-1 row-end-2 flex justify-center items-center py-3 px-4 md:px-10 text-black cursor-pointer shadow-[2px_2px_0px_1px_#000000] bg-[#4bc0c0cc] border-black border"
        >
          Telegram
        </a>
        <a
          href="https://x.com/spongebases?s=21"
          className="lg:col-start-3 lg:col-end-4 lg:row-span-1 row-start-2 row-end-3 col-start-2 col-end-4 flex justify-center items-center py-3 px-4 md:px-10 text-black cursor-pointer shadow-[2px_2px_0px_1px_#000000] bg-[#4bc0c0cc] border-black border"
        >
          Twitter
        </a>
        
      </div>
    </div>
  );
};

export default Hero;
