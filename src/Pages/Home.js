import React from 'react'
import { Spotlight } from "../Components/ui/Spotlight";
import { TextGenerateEffect } from "../Components/ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../Components/ui/MagicButton";

const Home = () => {

  return (
    <div id='home'>
      <div
        className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-2 -left-20 md:-left-12 md:-top-20" fill="white" />
        <Spotlight className="-top-12 -left-20 md:left-60 md:-top-20" fill="blue" />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-44 md:pt-0">
          {/* TextGenerateEffect for the tagline */}
          <TextGenerateEffect
            words="Transforming Ideas Into Dreams Through Technology"
            className="text-center text-white text-[40px] md:text-5xl lg:text-6xl"
          />
          {/* Description text */}
          <p className="text-center md:tracking-wider my-7 text-sm md:text-lg lg:text-2xl text-white">
            Hi! I&apos;m Chathu, a Web Developer & Designer
          </p>
          
          {/* MagicButton */}
          <div className="flex justify-center items-center">
            <a href="#about">
              <MagicButton
                title="Explore"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
