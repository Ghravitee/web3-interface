"use client"
import { useState } from "react";
import Accordion from "@/utils/Accordion";

const Info = () => {

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  }
  const accordionData = [
    {
      title: "About $SPONGE",
      desc: "Introducing SpongeBase Squerpants, the latest token to make waves on the Base chain. Inspired by the beloved underwater icon, SpongeBob SquarePants, this token is here to bring a splash of fun, friendship, and finance to the crypto world. With SpongeBase Squerpants, you're not just investing; you're embarking on a treasure hunt in the vast ocean of decentralized finance.",
      color: "rgba(75, 192, 192, 0.8)"
    },
    {
      title: "Total Supply",
      desc: "1,000,000,000",
      color: "rgba(255, 205, 86, 0.8)"
    },
    {
      title: "Liquidity",
      desc: "Locked",
      color: "rgba(75, 192, 192, 0.8)"
    },
    {
      title: "Tax",
      desc: "3/3",
      color: "rgba(255, 205, 86, 0.8)"
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <h2 className="text-black text-5xl lg:text-6xl text-center md:self-center font1 font-bold uppercase mb-6">Learn more about Spongebase</h2>
      <div className="grid grid-cols-1 gap-4">
       {accordionData.map((item, index) => {
         return <Accordion
         key={index}
         open={index === open}
         title={item.title}
         desc={item.desc}
         color={item.color}
         toggle={() => toggle(index)}/>;
       })}
      </div>
    </div>
  );
};

export default Info;

// export default Info;
// "use client";
// import React from "react";

// import Tabs from "@/utils/Tabs";

// const Info = () => {
//   return (
//     <>
//       <h2 className="text-5xl text-center mb-6">Learn more about Spongebase</h2>
//       <div className="flex border-4 border-white">
//         <Tabs />
//       </div>
      
//     </>
//   );
// };

// export default Info;
