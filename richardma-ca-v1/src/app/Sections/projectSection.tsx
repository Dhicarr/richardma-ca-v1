import React, { ReactNode } from "react";
import fakeStore from '../Images/fakestore.gif';
import { url } from "inspector";
import Image from "next/image";

interface ComponentProps {
  sectionClass: string;
}

const ProjectSection = ({sectionClass}:ComponentProps): JSX.Element => {
  return (
    <main id="project" className={sectionClass}>
      <div className="text-4xl w-fit">Projects</div>

      <div className="flex mt-4 p-4 flex-wrap border-corner">
        <div className="basis-3/5 p-4">
          <div className="font-bold">Placeholder</div>
          <div className="flex justify-between">
            <div className="text-purple-500">Javascript,HTML,CSS,Placeholder</div>
          </div>
          <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat.
          </p>
        </div>
        <div className="basis-2/5 h-full m-auto ">
          <Image 
            className="flex justify-center border-4 border-purple-500"
            width={500}
            height={300}
            alt='project demo'
            src={fakeStore.src}
          />
        </div>
      </div>

      <div className="flex mt-4 p-4 flex-wrap border-corner">
        <div className="basis-2/5 h-full m-auto ">
          <Image 
            className="flex justify-center border-4 border-purple-500"
            width={500}
            height={300}
            alt='project demo'
            src={fakeStore.src}
          />
        </div>
        <div className="basis-3/5 p-4">
          <div className="font-bold">Placeholder</div>
          <div className="flex justify-between">
            <div className="text-purple-500">Javascript,HTML,CSS,Placeholder</div>
          </div>
          <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="flex mt-4 p-4 flex-wrap border-corner">
        <div className="basis-3/5 p-4">
          <div className="font-bold">Placeholder</div>
          <div className="flex justify-between">
            <div className="text-purple-500">Javascript,HTML,CSS,Placeholder</div>
          </div>
          <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat.
          </p>
        </div>
        <div className="basis-2/5 h-full m-auto ">
          <Image 
            className="flex justify-center border-4 border-purple-500"
            width={500}
            height={300}
            alt='project demo'
            src={fakeStore.src}
          />
        </div>
      </div>

    </main>
  );
}

export default ProjectSection
