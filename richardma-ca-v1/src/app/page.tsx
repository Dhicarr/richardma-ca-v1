import { TbHexagonLetterR } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";

import SideSocials from './Components/sideSocials';
import DarkSky from './Components/darkSky';
import Header from "./Components/header";
import Skill from "./Components/skill";

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
        <Header/>
      </div>
      {/* second section */}
      <div id="about" className="mt-40 px-24 ">
        <div className="text-5xl border-b-4 w-fit">About Me</div>
        <div className="text-xl mt-4 border-l-4 pl-2">
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
        <div className="text-5xl border-b-4 w-fit">Experience</div>
        <div className="flex mt-4 p-4 border-corner flex-wrap">
          <div className="basis-1/2 m-auto">
            <img className="h-full w-auto flex justify-center" src="https://dhicarr.github.io/images/desktop_view.gif"/>
          </div>
          <div className="bg-zinc-800 basis-1/2 p-4">
            <div className="flex justify-between">
              <div className="font-bold">Intermediate Front-End Developer</div>
              <div>Aug 2022-May 2023</div>
            </div>
            <div className="">DeckerMed</div>
            <p className="mt-4">
              Live pages demonstrating work:<br/>
              www.deckerip.com<br/>
              www.deckerip.com/products<br/>
              www.deckerip.com/pricing<br/>
              www.deckerip.com/faq
            </p>
          </div>
        </div>
      </div>
      <div id="skill" className="mt-40 px-24">
        <div className="text-5xl border-b-4 w-fit">Skills</div>
        <div className="mt-4">
          <div>Languages:</div>
          <ul className="flex flex-wrap space-x-4">
            {languages}
          </ul>
          <div>Frameworks:</div>
          <ul className="flex flex-wrap space-x-4">
            {frameworks}
          </ul>
          <div>Others:</div>
          <ul className="flex flex-wrap space-x-4">
            {otherskills}
          </ul>
        </div>
      </div>
      <div id="skill" className="mt-40 px-24">
        <div className="text-5xl border-b-4 w-fit">Projects</div>
        <div>
          Footer
          Dark Cloud CSS Animations by Anastasia Goodwin
        </div>
      </div>
    </main>
  );
}
