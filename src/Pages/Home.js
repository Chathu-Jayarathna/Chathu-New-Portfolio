import React from 'react'
import { Spotlight } from "../Components/ui/Spotlight";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { FlipWords } from "../Components/ui/FlipWords";




const heading = ` Turning ideas into intuitive digital solutions`;

const Home = () => {

  const flipewords = ["Frontend Developer", "Full-Stack Developer", "Backend Developer", "Web Developer"];
  

  return (
    <div id='home'>
      <div
        className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-2 -left-20 md:-left-12 md:-top-20" fill="white" />
        <Spotlight className="-top-12 -left-20 md:left-60 md:-top-20" fill="blue" />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-44 md:pt-0">
          <h1
            className="text-4xl tracking-wider md:text-6xl uppercase font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <TextGenerateEffect words={heading} />
          </h1>
          <h3
            className="text-lg md:text-2xl tracking-wider font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 my-7">
            Hi! I'm Chathu Jayarathna, a <FlipWords words={flipewords} />
          </h3>
        </div>
      </div>
    </div>
  );
}
 
export default Home
