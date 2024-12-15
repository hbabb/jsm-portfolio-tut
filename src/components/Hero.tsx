import { Spotlight } from "@/components/ui/Spotlight";
import { IconArrowUpRight } from "@tabler/icons-react";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      {/* 
            UI: Spotlights
            Link: https://ui.aceternity.com/components/spotlight 
        */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid and Dot Background */}
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-grid-black-100/[0.2] bg-white dark:bg-black-100 dark:bg-grid-white/[0.03]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 font-bold text-4xl text-transparent sm:text-7xl">
          Backgrounds
        </p> */}
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-2-80 text-center text-blue-100 text-xs uppercase tracking-widest">
            Dynamic Web Magic with Next.js
          </p>

          {/* 
            Link: https://ui.aceternity.com/components/text-generate-effect

            change md:text-6xl, add more responsive code
          */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-4xl md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi! I&apos;m Heath, a Next.js Developer based in Greenville, South Carolina, USA.
          </p>

          <a href="#projects">
            <MagicButton title="Show my work" icon={<IconArrowUpRight />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
