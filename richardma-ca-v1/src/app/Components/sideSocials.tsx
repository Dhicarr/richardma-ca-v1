import React, { ReactNode } from "react";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { LiaGithubSquare } from "react-icons/lia";

const SideSocials = (): JSX.Element => {
  return (
    <main className="fixed left-0 top-1/2">
      <div className="flex flex-col space-y-2 border-4 border-l-0">
        <RiLinkedinBoxLine size={"40px"}/>
        <LiaGithubSquare size={"40px"}/>
      </div>
    </main>
  );
}

export default SideSocials
