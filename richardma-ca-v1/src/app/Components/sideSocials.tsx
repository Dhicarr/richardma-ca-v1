import React, { ReactNode } from "react";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { LiaGithubSquare } from "react-icons/lia";

const SideSocials = (): JSX.Element => {
  return (
    <main className="fade-in-left opacity-0 fixed left-0 top-1/2">
      <div className="flex flex-col space-y-2 border-4 border-l-0">
        <a href="https://www.linkedin.com/in/maricha2/" className="hover:text-sky-700 transition-colors">
          <RiLinkedinBoxLine size={"40px"}/>
        </a>
        <a href="https://github.com/dhicarr" className="hover:text-purple-500 transition-colors">
          <LiaGithubSquare size={"40px"}/>
        </a>
      </div>
    </main>
  );
}

export default SideSocials
