import image1 from './Images/airplane-pic.png';
import SideSocials from './Components/sideSocials';
import "./dark_clouds.css";

import { TbHexagonLetterR } from "react-icons/tb";

export default function Home() {
  return (
    <main className="flex flex-col">
      <SideSocials/>
      <div className="w-full h-full" >
        <div className="background-container -z-10 box" style={{height:"110vh"}}>
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
        <div className="flex w-full h-screen z-1">
          <div className="flex basis-1/2">
            <div>
              <TbHexagonLetterR size={"40px"}/>
            </div>
            <div className="flex flex-col absolute left-36 top-36">
              <div className="text-2xl">
                Hi, my name is
              </div>
              <div className="text-8xl border-b-4">
                Richard Ma
              </div>
              <div className="mt-2">
                Software Engineer, HBSc Computer Science from University of Toronto
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center basis-1/2 w-1/3">
            <img className="h-2/3 border-4 " src={image1.src} />
          </div>
        </div>
      </div>
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
