import React, { ReactNode } from "react";
import { TbHexagonLetterR } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";
import image1 from '../Images/airplane-pic.png';

const Header = (): JSX.Element => {
  return (
    <main className="flex w-full h-screen z-1">
      <div className="flex basis-1/2">
        <div className="hover:text-sky-500 transition-colors h-fit">
          <TbHexagonLetterR size={"60px"}/>
        </div>
        <div className="flex flex-col absolute left-36 top-36">
          <div className="text-2xl">
            Hi, my name is
          </div>
          <div className="text-8xl border-b-4">
            Richard Ma
          </div>
          <div className="mt-2">
            <b>Software Engineer</b>, HBSc Computer Science from University of Toronto
          </div>
          <div className="animate-bounce mt-32 ml-auto mr-auto">
            <a href="#about">
              <BsArrowDown size={"40px"}/>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/2 w-1/3">
        <img className="h-2/3 border-4 " src={image1.src} />
      </div>
    </main>
  );
}

export default Header
