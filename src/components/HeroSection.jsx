import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-textWhite mb-4 text-4xl lg:text-6xl">
            Hello, I'm Ayse
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl mb-6 ">
            I am a Full Stack Developer.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-blueButton/80 text-textWhite hover:bg-blueButton">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-blueButton/20 hover:bg-blueButton/50 text-textWhite">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg_mt-0">
          <div className="rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-icon.png"
              width={500}
              height={500}
              alt="hero-icon"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
