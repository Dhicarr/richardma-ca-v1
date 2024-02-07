import React, { ReactNode } from "react";

const NavBar = (): JSX.Element => {
  return (
    <main className="absolute top-0 right-0 border-b-4 border-l-4 p-2">
      <ul className="flex space-x-2">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
      </ul>
    </main>
  );
}

export default NavBar
