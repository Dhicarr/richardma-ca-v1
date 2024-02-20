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
    <Skill name={skillName} key={_index+1000} index={_index+1100} />
  ))
  const frameworks = skillsList[1].map((skillName, _index) => (
    <Skill name={skillName} key={_index+2000} index={_index+2100} />
  ))
  const otherskills = skillsList[2].map((skillName, _index) => (
    <Skill name={skillName} key={_index+3000} index={_index+3100} />
  ))
  const skillsClass="flex flex-wrap border-l-4 mt-1 pr-3 w-fit border-dotted justify-center md:justify-normal"
  return (
    <main id="skill" className={sectionClass}>
      <div className="text-4xl">Skills</div>
      <div className="mt-4 flex flex-col space-y-6">
        <div>
          <div className="text-xl">Languages:</div>
          <ul className={skillsClass}>
            {languages}
          </ul>
        </div>
        <div>
          <div className="text-xl">Frameworks:</div>
          <ul className={skillsClass}>
            {frameworks}
          </ul>
        </div>
        <div>
          <div className="text-xl">Others:</div>
          <ul className={skillsClass}>
            {otherskills}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default SkillsSection
