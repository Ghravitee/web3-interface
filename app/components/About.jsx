import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center gap-10 mt-20 md:mt-0">
        <Image
        src="/sponge1.PNG"
        alt='sponge1'
        width={250}
        height={250}
        className='mx-auto'
        />
        <Image
        src="/sponge2.PNG"
        alt='sponge1'
        width={250}
        height={250}
        className='mx-auto'
        />
        <Image
        src="/sponge3.PNG"
        alt='sponge1'
        width={250}
        height={250}
        className='mx-auto'
        />
    </div>
    
    </>
  )
}

export default About