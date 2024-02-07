import { TbHexagonLetterR } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";

import SideSocials from './Components/sideSocials';
import DarkSky from './Components/darkSky';
import Header from "./Components/Header";
import NavBar from "./Components/navBar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <SideSocials/>
      {/* first section */}
      <div className="w-full h-full" >
        <NavBar/>
        <DarkSky/>
        <Header/>
      </div>
      {/* second section */}
      <div className="mt-20">
        <div>About Me</div>
        <div>
          Hello, my name is Richard!
          As a software engineer, I am fueled by my passion for technology and my 
          love for learning and solving new challenges. I have professional experience 
          building responsive React webpages, and in depth back-end knowledge on data 
          structures, algorithms, and databases gained during my undergraduate studies. 
          I am constantly seeking out new opportunities to grow my skills and knowledge, 
          and I approach each challenge with enthusiasm and curiosity.
        </div>
      </div>
      <div>
        Experience 
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
