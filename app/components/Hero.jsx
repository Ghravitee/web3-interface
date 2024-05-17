"use client"
import React from "react";
import Image from "next/image";
import heroImage from "../../public/hero-sponge.PNG";
import { motion } from "framer-motion";
import { spring } from "@/utils/motion";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Image src="/hero-sponge.PNG" alt="hero" height={225} width={225} className="" />
      </div>
      <h1 className="text-5xl lg:text-8xl mb-10 text-[#FDFF75]">SpongeBase</h1>
      <motion.div
      variants={spring}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-3 grid-rows-3 gap-6">
        
        <a
          href="https://warpcast.com/spongebase"
          className="col-start-1 col-end-2 lg:row-span-1 lg:col-start-1 lg:col-end-2 flex justify-center items-center py-3 px-4 md:px-10 text-black cursor-pointer shadow-[2px_2px_0px_1px_#000000] bg-[#FDFF75] border-black border"
        >
          warpcast
        </a>
        <a
          href="https://t.me/SpongeBaseS"
          className="lg:col-start-2 lg:col-end-3 col-start-2 col-end-3 lg:row-span-1 row-start-2 row-end-3 flex justify-center items-center py-3 px-4 md:px-10 text-black cursor-pointer shadow-[2px_2px_0px_1px_#000000] bg-[#FDFF75] border-black border"
        >
          Telegram
        </a>
        <a
          href="https://x.com/spongebases?s=21"
          className="lg:col-start-3 lg:col-end-4 lg:row-span-1 row-start-1 row-end-2 col-start-3 col-end-4 flex justify-center items-center py-3 px-4 md:px-10 text-black cursor-pointer shadow-[2px_2px_0px_1px_#000000] bg-[#FDFF75]  border-black border"
        >
          Twitter
        </a>
        
      </motion.div>
    </div>
  );
};

export default Hero;
