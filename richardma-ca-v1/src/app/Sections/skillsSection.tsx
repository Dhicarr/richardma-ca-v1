import React, { ReactNode } from "react";
import Skill from "../Components/skill";

interface ComponentProps {
  sectionClass: string;
}

const SkillsSection = ({sectionClass}:ComponentProps): JSX.Element => {
  const skillsList=[
    ['Typescript', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python', 'Java', 'C', 'SQL', 'Bash', 'LaTeX'],
    ['React.js','Next.js','Redux','Tailwind','Material-UI', 'Bootstrap','SaSS','PostgresQL','MongoDB'],
    ['AWS RDS', 'AWS Amplify', 'Git', 'VS Code', 'Unix']
  ]
  const languages = skillsList[0].map((skillName, _index) => (
    <Skill name={skillName} index={_index+1000} />
  ))
  const frameworks = skillsList[1].map((skillName, _index) => (
    <Skill name={skillName} index={_index+2000} />
  ))
  const otherskills = skillsList[2].map((skillName, _index) => (
    <Skill name={skillName} index={_index+3000} />
  ))
  
  return (
    <main id="skill" className={sectionClass}>
      <div className="text-4xl w-fit">Skills</div>
      <div className="mt-4 flex flex-col space-y-6">
        <div>
          <div className="text-xl">Languages:</div>
          <ul className="flex flex-wrap border-l-4 mt-1 pr-3 w-fit border-dotted">
            {languages}
          </ul>
        </div>
        <div>
          <div className="text-xl">Frameworks:</div>
          <ul className="flex flex-wrap border-l-4 mt-1 pr-3 w-fit border-dotted">
            {frameworks}
          </ul>
        </div>
        <div>
          <div className="text-xl">Others:</div>
          <ul className="flex flex-wrap border-l-4 mt-1 pr-3 w-fit border-dotted">
            {otherskills}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default SkillsSection
