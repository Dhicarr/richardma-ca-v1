import React, { ReactNode } from "react";

const NavBar = (): JSX.Element => {
  return (
    <main className="absolute top-0 right-0 border-b-4 border-l-4 p-2">
      <ul className="flex space-x-2">
        <li className="hover:text-sky-500 transition-colors">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-sky-500 transition-colors">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-sky-500 transition-colors">
          <a href="#project">Project</a>
        </li>
        <li className="hover:text-sky-500 transition-colors">
          <a href="#skill">Skills</a>
        </li>
      </ul>
    </main>
  );
}

export default NavBar
