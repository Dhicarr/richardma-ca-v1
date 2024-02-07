import { TbHexagonLetterR } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";

import SideSocials from './Components/sideSocials';
import DarkSky from './Components/darkSky';
import Header from "./Components/header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <SideSocials/>
      {/* first section */}
      <div className="w-full h-full" >
        <DarkSky/>
        <Header/>
      </div>
      {/* second section */}
      <div id="about" className="mt-40 px-24 ">
        <div className="text-6xl border-b-4 w-fit">About Me</div>
        <div className="text-xl mt-4">
          <p>
            As a software engineer, I am fueled by my passion for technology and my 
            love for learning and solving new challenges. I have professional experience 
            building responsive React webpages, and in depth back-end knowledge on data 
            structures, algorithms, and databases gained during my undergraduate studies. 
            I am constantly seeking out new opportunities to grow my skills and knowledge, 
            and I approach each challenge with enthusiasm and curiosity.
          </p>
        </div>
      </div>
      {/* third section */}
      <div id="experience" className="mt-40 px-24">
        <div className="text-6xl border-b-4 w-fit">Experience</div>
        <div className="flex mt-4">
          <div className="basis-1/2">
            <img className="white-shadow border-4 w-3/4 h-auto" src="https://dhicarr.github.io/images/desktop_view.gif"/>
          </div>
          <div className="basis-1/2">
            <div>Intermediate Front-End Developer</div>
            <div>DeckerMed</div>
            <p>
              x x x x x
            </p>
          </div>
        </div>
      </div>
      <div id="skill">
        Skills
      </div>
      <div>
        Projects 
      </div>
      <div>
        Footer
        Dark Cloud CSS Animations by Anastasia Goodwin
      </div>
    </main>
  );
}
