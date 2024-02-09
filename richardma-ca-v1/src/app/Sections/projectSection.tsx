import React, { ReactNode } from "react";
import deckerGif from '../Images/deckermed-slideshow.gif';

interface ComponentProps {
  sectionClass: string;
}

const ProjectSection = ({sectionClass}:ComponentProps): JSX.Element => {
  return (
    <main id="project" className={sectionClass}>
      <div className="text-4xl w-fit">Projects</div>

      <div className="flex mt-4 p-4 flex-wrap border-corner">
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
        <div className="basis-2/5 h-full m-auto ">
          <img className="h-3/4 w-auto flex justify-center border-4 border-purple-500" src={deckerGif.src}/>
        </div>
      </div>

      <div className="flex mt-4 p-4 flex-wrap border-corner">
        <div className="basis-2/5 h-full m-auto">
          <img className="h-3/4 w-auto flex justify-center border-4 border-purple-500" src={deckerGif.src}/>
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

      <div className="flex mt-4 p-4 flex-wrap border-corner">
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
        <div className="basis-2/5 h-full m-auto">
          <img className="h-3/4 w-auto flex justify-center border-4 border-purple-500" src={deckerGif.src}/>
        </div>
      </div>
    </main>
  );
}

export default ProjectSection
