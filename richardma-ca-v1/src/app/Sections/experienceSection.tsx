import React, { ReactNode } from "react";
import deckerGif from '../Images/deckermed-slideshow.gif';

const ExperienceSection = (): JSX.Element => {
  return (
  <main id="experience" className="mt-40 px-40">
    <div className="text-4xl w-fit">Experience</div>
    <div className="flex mt-4 p-4 flex-wrap border-corner">
      <div className="basis-2/5 h-full m-auto">
        <img className="h-3/4 w-auto flex justify-center" src={deckerGif.src}/>
      </div>
      <div className="basis-3/5 p-4">
        <div className="flex justify-between">
          <div className="font-bold">Intermediate Front-End Developer</div>
          <div>Jun 2022-May 2023</div>
        </div>
        <div className="flex justify-between">
          <div className="text-zinc-400">Junior Full-Stack Developer</div>
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
