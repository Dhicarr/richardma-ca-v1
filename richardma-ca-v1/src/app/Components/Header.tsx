import React, { ReactNode } from "react";
import { TbSquareLetterR } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";
import image1 from '../Images/airplane-pic.png';
import NavBar from "./navBar";

const Header = (): JSX.Element => {
  return (
    <main className="flex w-full z-1 overflow-hidden
    flex-col-reverse justify-center lg:flex-row lg:justify-normal lg:h-screen">
      <div className="fade-in-5 opacity-0 hover:text-purple-500 transition-colors h-fit absolute top-0 left-0">
        <TbSquareLetterR size={"60px"}/>
      </div>
      <div className="flex basis-1/2 h-full justify-center">
        <div className="flex flex-col justify-center mt-24 lg:ml-10">
          <div className="text-3xl ">
            <span className="fade-in-1 opacity-0">Hi</span><span className="fade-in-2 opacity-0">, my name is</span>
          </div>
          <div className="fade-in-3 opacity-0 text-7xl xl:text-7xl mt-2">
            <h1 className="w-fit border-b-4 border-purple-500">
              R<span className="neonText flickerText">i</span>chard Ma
            </h1>
          </div>
          <div className="fade-in-4 opacity-0 mt-2">
            HBSc Computer Science • University of Toronto<br/> 
            <b>Software Engineer</b>
          </div>
          <div className="fade-in-5 opacity-0 mt-20 ml-auto mr-auto">
            <div className="animate-bounce">
              <a className="hover:text-purple-500 transition-colors" href="#about">
                <BsArrowDown size={"40px"}/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col basis-1/2 justify-center fade-in-right opacity-0 h-full items-center">
        <NavBar/>
        <img className="white-shadow h-80 lg:h-80 xl:h-96 w-auto border-4" src={image1.src} />
      </div>
    </main>
  );
}

export default Header
