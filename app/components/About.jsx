import React from 'react'
import Image from 'next/image'
import sponge1 from "../../public/sponge1.png"
import sponge2 from "../../public/sponge2.png"
import sponge3 from "../../public/sponge3.png"

const About = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row justify-center gap-10 mt-20 md:mt-0">
        <Image
        src="/sponge1.PNG"
        alt='sponge1'
        width={250}
        height={250}
        />
        <Image
        src="/sponge2.PNG"
        alt='sponge1'
        width={250}
        height={250}
        />
        <Image
        src="/sponge3.PNG"
        alt='sponge1'
        width={250}
        height={250}
        />
    </div>
    
    </>
  )
}

export default About