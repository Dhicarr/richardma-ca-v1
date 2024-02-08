import React, { ReactNode } from "react";
import { TbHexagonLetterR } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";
import image1 from '../Images/airplane-pic.png';
import NavBar from "./navBar";
import "../animation.css";

const Header = (): JSX.Element => {
  return (
    <main className="flex w-full h-screen z-1 overflow-hidden">
      <div className="flex basis-1/2">
        <div className="fade-in-5 opacity-0 hover:text-purple-500 transition-colors h-fit absolute top-0 left-0">
          <TbHexagonLetterR size={"60px"}/>
        </div>
        <div className="flex flex-col mt-40 ml-24">
          <div className="text-2xl">
            <span className="fade-in-1 opacity-0">Hi</span><span className="fade-in-2 opacity-0">, my name is</span>
          </div>
          <div className="fade-in-3 opacity-0 text-8xl border-b-4 mt-2">
            <h1>
              R<span className="neonText flickerText">i</span>chard Ma
            </h1>
          </div>
          <div className="fade-in-4 opacity-0 mt-2">
            <b>Software Engineer</b>, HBSc Computer Science • University of Toronto
          </div>
          <div className="fade-in-5 opacity-0 mt-28 ml-auto mr-auto">
            <div className="animate-bounce">
              <a className="hover:text-purple-500 transition-colors" href="#about">
                <BsArrowDown size={"40px"}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-in-right opacity-0 flex flex-col justify-center items-center basis-1/2 w-1/3">
        <NavBar/>
        <img className="white-shadow h-2/3 border-4" src={image1.src} />
      </div>
    </main>
  );
}

export default Header
