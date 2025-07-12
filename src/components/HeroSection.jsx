import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="m-auto max-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 m-10 mt-28 bg-gradient-to-r from-secondaryBackground via-violettBackground to-blueButton p-5 rounded-[30px]">
        <div className="col-span-7 py-24 m-auto p-4">
          <h1 className="text-textWhite mb-4 text-4xl lg:text-6xl typewriter">
            Hello, I'm Ayse !
          </h1>
          <p className="text-textWhite/90 text-lg lg:text-xl mb-4 p-4">
            As a passionate Software Developer, I create clean, dynamic, and
            user-focused web experiences. With expertise in Specializations,{" "}
            <strong>React, JavaScript, TypeScript, Next.js and Node.js</strong>.
            I transform ideas into interactive digital solutions. Driven by
            innovation and quality, I’m always looking to push the boundaries of
            what’s possible on the web.
          </p>
          <div>
            <Link href="/contact">
              <button className="px-6 py-3 rounded-full mr-4 bg-blueButton/80 text-textWhite hover:bg-blueButton">
                Contact Me
              </button>
            </Link>

            <a href="/files/AyseUgurlu_Lebenslauf.pdf" download>
              <button className="px-6 py-3 rounded-full mr-4 bg-blueButton/30 text-textWhite hover:bg-blueButton">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg_mt-0">
          <div className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]  relative container-center">
            <div className="shape animate-morph w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
              <Image
                src="/images/hero-icon.png"
                width={400}
                height={400}
                alt="hero-icon"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
