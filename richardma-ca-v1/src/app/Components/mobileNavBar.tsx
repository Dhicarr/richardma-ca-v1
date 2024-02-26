import React, { ReactNode } from "react";
import NavBar from "./navBar";

const MobileNavBar = (): JSX.Element => {
  return (
    <nav className="md:hidden fixed top-0 z-50 bg-zinc-950 p-2">
      <ul className="flex w-screen justify-evenly">
        <li className="hover:text-purple-500 transition-colors">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-purple-500 transition-colors">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-purple-500 transition-colors">
          <a href="#skill">Skills</a>
        </li>
        <li className="hover:text-purple-500 transition-colors">
          <a href="#project">Project</a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavBar
