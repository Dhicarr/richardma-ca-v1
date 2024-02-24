import React, { ReactNode } from "react";
import fakeStore from '../Images/fakestore.gif';
import copit from '../Images/copit.gif';
import triviagame from '../Images/triviagame.gif'
import { url } from "inspector";
import Image from "next/image";

interface ComponentProps {
  sectionClass: string;
}

const ProjectSection = ({sectionClass}:ComponentProps): JSX.Element => {
  return (
    <main id="project" className={sectionClass+" px-0"}>
      <div className="text-3xl font-semibold md:font-normal md:text-4xl">Projects</div>

      <div className="flex flex-col justify-center align-middle content-center w-full">

        <div className="flex mt-4 p-2 flex-wrap border-corner">
          <div className="md:basis-3/5 md:p-4 mb-4 lg:mb-0">
            <div className="font-bold">Trivia Game</div>
            <div className="flex justify-between">
              <div className="text-purple-500 w-full">
                React.js, HTML, CSS, Python (Django), 
              PostgreSQL, AWS RDS, AWS Amplify, AWS Lambda
              </div>
            </div>
            <p className="mt-4">
            • Stylized full-stack web application that utilizes open API to generate a new set of random questions per play.<br/>
            • Features PostgreSQL database-driven leader board system that sorts by descending point value per category.<br/>
            • Deployed React website using AWS Amplify, Django server using AWS Lambda, and Postgresql database using
            AWS RDS.

            </p>
          </div>
          <div className="md:basis-2/5 h-full m-auto ">
            <Image 
              className="flex justify-center border-4 border-purple-500"
              width={500}
              height={300}
              alt='project demo'
              src={triviagame.src}
            />
          </div>
        </div>

        <div className="flex mt-4 p-2 flex-wrap border-corner">
          <div className="md:basis-2/5 h-full m-auto ">
            <Image 
              className="flex justify-center border-4 border-purple-500"
              width={500}
              height={300}
              alt='project demo'
              src={fakeStore.src}
            />
          </div>
          <div className="md:basis-3/5 md:p-4 mb-4 lg:mb-0">
            <div className="font-bold">Fake E-Commerce Store</div>
            <div className="flex justify-between">
              <div className="text-purple-500 w-full">
                React.js, HTML, CSS
              </div>
            </div>
            <p className="mt-4">
            • Stylized full-stack web application that utilizes open API to generate a new set of random questions per play.<br/>
            • Features PostgreSQL database-driven leader board system that sorts by descending point value per category.<br/>
            • Deployed React website using AWS Amplify, Django server using AWS Lambda, and Postgresql database using
            AWS RDS.

            </p>
          </div>
        </div>
        
        <div className="flex mt-4 p-2 flex-wrap border-corner">
          <div className="md:basis-3/5 md:p-4 mb-4 lg:mb-0">
            <div className="font-bold">CopIt Android App</div>
            <div className="flex justify-between">
              <div className="text-purple-500 w-full">
                Android Studios, Java
              </div>
            </div>
            <p className="mt-4">
            • Contributed to android application built with the likeness of Tinder and Craigslist. <br/>
            • Fulfilled the role of UI/UX by creating layouts and UI designs in Android Studios.

            </p>
          </div>
          <div className="md:basis-2/5 h-full m-auto ">
            <Image 
              className="flex justify-center border-4 border-purple-500"
              width={500}
              height={300}
              alt='project demo'
              src={copit.src}
            />
          </div>
        </div>

      </div>
    </main>
  );
}

export default ProjectSection
