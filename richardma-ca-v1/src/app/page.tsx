import { TbHexagonLetterR } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";

import SideSocials from './Components/sideSocials';
import DarkSky from './Components/darkSky';
import Header from "./Components/header";
import Skill from "./Components/skill";

import deckerGif from './Images/deckermed-slideshow.gif';
import brush1 from './Images/brush-1.png'
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  const skillsList=[
    ['Typescript', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python', 'Java', 'C', 'SQL', 'Bash', 'LaTeX'],
    ['React.js','Next.js','Redux','Tailwind','Material-UI', 'Bootstrap','SaSS','PostgresQL','MongoDB'],
    ['AWS RDS', 'AWS Amplify', 'Git', 'VS Code', 'Unix']
  ]
  const languages = skillsList[0].map((skillName) => (
    <Skill name={skillName} />
  ))
  const frameworks = skillsList[1].map((skillName) => (
    <Skill name={skillName} />
  ))
  const otherskills = skillsList[2].map((skillName) => (
    <Skill name={skillName} />
  ))

  

  return (
    <main className="flex flex-col">
      <SideSocials/>
      {/* first section */}
      <div className="w-full h-full" >
        <DarkSky/>
        <span className={raleway.className}>
        <Header/>
        </span>
      </div>
      {/* second section */}
      <div id="about" className="mt-20 pt-20 px-40">
        <div className="text-4xl w-fit">About Me</div>
        <div className="text-lg mt-4 relative ">
          <p>
            As a software engineer, I am fueled by my passion for technology and my 
            love for learning and solving new challenges. I have professional experience 
            building responsive React webpages, and in depth back-end knowledge on data 
            structures, algorithms, and databases gained during my undergraduate studies. 
            I am constantly seeking out new opportunities to grow my skills and knowledge, 
            and I approach each challenge with enthusiasm and curiosity.
          </p>
        </div>
        <div className="mt-12 text-center">
          <p>
            "A well-written piece of code is not just a program; 
            it's a work of art that reflects creativity and craftsmanship."
          </p>
        </div>
      </div>
      {/* third section */}
      <div id="experience" className="mt-40 px-40">
        <div className="text-4xl w-fit">Experience</div>
        <div className="flex mt-4 p-4 flex-wrap border-corner">
          <div className="basis-2/5 h-full m-auto border-corner ">
            <img className="h-3/4 w-auto flex justify-center" src={deckerGif.src}/>
          </div>
          <div className="basis-3/5 p-4">
            <div className="flex justify-between">
              <div className="font-bold">Intermediate Front-End Developer</div>
              <div>Jun 2022-May 2023</div>
            </div>
            <div className="flex justify-between">
              <div className="text-zinc-400">Junior Full-Stack Developer</div>
              <div className="italic">DeckerMed</div>
            </div>
            <p className="mt-4">
              Responsible for independently rebuilding 35% of total company web pages and 
              applications using React, utilized by over 25k unique monthly users 
              from medical programs at top universities and institutions.
            </p>
          </div>
        </div>
      </div>
      <div id="skill" className="mt-40 px-40">
        <div className="text-4xl w-fit">Skills</div>
        <div className="mt-4 flex flex-col space-y-6">
          <div>
            <div className="text-xl">Languages:</div>
            <ul className="flex flex-wrap space-x-4 border-r-4 mt-1 pr-3 w-fit border-dotted">
              {languages}
            </ul>
          </div>
          <div>
            <div className="text-xl">Frameworks:</div>
            <ul className="flex flex-wrap space-x-4 border-r-4 mt-1 pr-3 w-fit border-dotted">
              {frameworks}
            </ul>
          </div>
          <div>
            <div className="text-xl">Others:</div>
            <ul className="flex flex-wrap space-x-4 border-r-4 mt-1 pr-3 w-fit border-dotted">
              {otherskills}
            </ul>
          </div>
        </div>
      </div>
      <div id="project" className="mt-40 px-40">
        <div className="text-5xl border-b-4 w-fit">Projects</div>
        <div>
          x
        </div>
      </div>
      <div id="footer" className="mt-40">
        <div>
          Footer
          Dark Cloud CSS Animations by Anastasia Goodwin
        </div>
      </div>
    </main>
  );
}
