import React, { ReactNode } from "react";
import { TbSquareLetterR } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";
import image1 from '../Images/airplane-pic.png';
import NavBar from "../Components/navBar";
import JobTitle from "../Components/jobTitle";
import DarkSky from "../Components/darkSky";

const TitleSection = (): JSX.Element => {
  return (
    <main className="box relative flex w-full z-1 overflow-hidden justify-center mb-4 p-12 text-center md:text-left
     lg:justify-normal lg:mb-0 lg:p-0 h-screen md:h-[110vh]" >
      <DarkSky/>
      <div className="flex flex-col-reverse w-full lg:flex-row mt-0 md:mt-0 lg:mt-0">
        <div className="flex lg:basis-1/2 h-full justify-center">
          <div className="flex flex-col justify-start md:justify-center lg:ml-10">
            <span className="border-4 py-12 px-2 md:border-none md:p-0">
            <div className="text-xl md:text-3xl ">
              <span className="fade-in-1 opacity-0">Hi</span><span className="fade-in-2 opacity-0">, my name is</span>
            </div>
            <div className="fade-in-3 opacity-0 text-4xl md:text-7xl xl:text-7xl mt-2">
              <h1 className="w-full border-b-4 border-purple-500">
                R<span className="neonText flickerText">i</span>chard Ma
              </h1>
            </div>
            <div className="fade-in-4 opacity-0 mt-2">
              <h3>HBSc Computer Science • University of Toronto</h3>
              <JobTitle/>
            </div>
            </span>
            <div className="fade-in-5 opacity-0 mt-8 lg:mt-20 ml-auto mr-auto">
              <div className="animate-bounce">
                <a className="hover:text-purple-500 transition-colors" href="#about">
                  <BsArrowDown size={"40px"}/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:-mt-16 lg:flex lg:basis-1/2 flex-col justify-center fade-in-right opacity-0 h-full items-center">
          <NavBar/>
          <img className="white-shadow h-80 lg:h-80 xl:h-96 w-auto border-4" src={image1.src} />
        </div>
      </div>
    </main>
  );
}

export default TitleSection
