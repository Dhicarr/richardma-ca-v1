import React, { ReactNode } from "react";

interface SkillProps {
  name: String;
}

const Skill = ({name}:SkillProps): JSX.Element => {
  return (
    <li className="p-2 text-slate-100 bg-purple-800 m-2">
      {name}
    </li>
  );
}

export default Skill
