import React, { ReactNode } from "react";

const NavBar = (): JSX.Element => {
  return (
    <main className="mb-1">
      <ul className="flex space-x-8 w-fit ">
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
    </main>
  );
}

export default NavBar
