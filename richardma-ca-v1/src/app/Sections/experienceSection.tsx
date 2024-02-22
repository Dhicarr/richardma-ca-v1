import React, { ReactNode } from "react";
import deckerGif from '../Images/deckermed-slideshow.gif';

interface ComponentProps {
  sectionClass: string;
}

const ExperienceSection = ({sectionClass}:ComponentProps): JSX.Element => {
  return (
  <main id="experience" className={sectionClass}>
    <div className="text-3xl font-semibold md:font-normal md:text-4xl">Experience</div>
    <div className="flex mt-4 p-2 flex-wrap border-corner">
      <div className="md:basis-2/5 h-full m-auto">
        <img className="h-3/4 w-auto flex justify-center border-4 border-purple-500" src={deckerGif.src}/>
      </div>
      <div className="md:basis-3/5 md:p-4 mt-4 lg:mt-0">
        <div className="flex justify-between flex-col-reverse lg:flex-row">
          <div className="font-bold">Intermediate Front-End Developer</div>
          <div>Jun 2022-May 2023</div>
        </div>
        <div className="md:flex justify-between flex-col">
          <div className="text-zinc-400 hidden lg:flex-row">Junior Full-Stack Developer</div>
          <div className="italic">DeckerMed</div>
        </div>
        <p className="mt-4">
          Responsible for independently rebuilding 35% of total company web pages and 
          applications using React, utilized by over 25k unique monthly users 
          from medical programs at top universities and institutions.
        </p>
      </div>
    </div>
  </main>
  );
}

export default ExperienceSection
