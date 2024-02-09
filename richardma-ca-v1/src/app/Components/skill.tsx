import React, { ReactNode } from "react";

interface SkillProps {
  name: String;
  index: number;
}

const Skill = ({name, index}:SkillProps): JSX.Element => {
  return (
    <li className="p-2 text-slate-100 bg-purple-800 m-2" key={index}>
      {name}
    </li>
  );
}

export default Skill
