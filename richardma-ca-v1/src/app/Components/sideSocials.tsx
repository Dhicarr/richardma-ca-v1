import React, { ReactNode } from "react";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { LiaGithubSquare } from "react-icons/lia";

const SideSocials = (): JSX.Element => {
  return (
    <main className="fixed left-0 top-1/2">
      <div className="flex flex-col space-y-2">
      <RiLinkedinBoxLine />
      <LiaGithubSquare />
      </div>
    </main>
  );
}

export default SideSocials
