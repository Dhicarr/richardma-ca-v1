import React, { ReactNode } from "react";
import fakeStore from '../Images/fakestore.gif';
import copit from '../Images/copit.gif';
import triviagame from '../Images/triviagame.gif'
import { url } from "inspector";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ComponentProps {
  sectionClass: string;
}

const ProjectSection = ({sectionClass}:ComponentProps): JSX.Element => {
  return (
    <main id="project" className={sectionClass+" px-0"}>
      <div className="text-3xl font-semibold md:font-normal md:weight md:text-4xl ">
        <span className="title-shadow w-fit relative">Projects <span className="text-line"/></span>
      </div>
      <div className="flex flex-col justify-center align-middle content-center w-full">

        <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row mt-4 px-2 py-4 flex-wrap border-corner">
          <div className="lg:basis-3/5 md:p-4 mb-4 lg:mb-0">
            <a className="flex gap-2 justify-center md:justify-normal" href="https://main.d38xdqyw5jo4so.amplifyapp.com/">
              <div className="text-animation font-bold">Trivia Game</div>
              <FaExternalLinkAlt />
            </a>
            <div className="flex justify-between">
              <div className="text-purple-500 w-full">
                React.js, HTML, CSS, Python (Django), 
              PostgreSQL, AWS RDS, AWS Amplify, AWS Lambda
              </div>
            </div>
            <p className="mt-4">
            Stylized full-stack web application that utilizes open API to generate a new set of random questions per play.
            Features PostgreSQL database-driven leaderboard, and deployed using AWS.

            </p>
          </div>
          <div className="lg:basis-2/5 h-full m-auto ">
            <Image 
              className="flex justify-center border-4 border-purple-500"
              width={500}
              height={300}
              alt='project demo'
              src={triviagame.src}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row mt-4 px-2 py-4 flex-wrap border-corner">
          <div className="lg:basis-2/5 h-full m-auto ">
            <Image 
              className="flex justify-center border-4 border-purple-500"
              width={500}
              height={300}
              alt='project demo'
              src={fakeStore.src}
            />
          </div>
          <div className="lg:basis-3/5 md:p-4 mb-4 lg:mb-0">
            <a className="flex gap-2 justify-center md:justify-normal" href="https://master.dj8auwcidjojx.amplifyapp.com/">
              <div className="text-animation font-bold">Fake E-Commerce Store</div>
              <FaExternalLinkAlt />
            </a>
            <div className="flex justify-between">
              <div className="text-purple-500 w-full">
                React.js, HTML, CSS
              </div>
            </div>
            <p className="mt-4">
            Front-end implementation of mock e-commerce store which uses mobile-first design, pop-ups, and cookies.
            Dynamically generates shop items through pre-generated JSON data from API request.

            </p>
          </div>
        </div>
        
        <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row mt-4 px-2 py-4 flex-wrap border-corner">
          <div className="lg:basis-3/5 md:p-4 mb-4 lg:mb-0">
            <div className="font-bold flex gap-2 justify-center md:justify-normal">CopIt Android App</div>
            <div className="flex justify-between">
              <div className="text-purple-500 w-full">
                Android Studios, Java
              </div>
            </div>
            <p className="mt-4">
              Android application built with inspiration from Tinder and Craigslist.
              Fulfilled the role of UI/UX by creating layouts and UI designs in Android Studios.
            </p>
          </div>
          <div className="lg:basis-2/5 h-full m-auto ">
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
