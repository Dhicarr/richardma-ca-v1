import React, { ReactNode } from "react";
import Skill from "./skill";

const FourthSection = (): JSX.Element => {
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
    <main id="skill" className="mt-40 px-40">
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
    </main>
  );
}

export default FourthSection
