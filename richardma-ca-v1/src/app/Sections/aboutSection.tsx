import React, { ReactNode } from "react";

interface ComponentProps {
  sectionClass: string;
}

const AboutSection = ({sectionClass}:ComponentProps): JSX.Element => {
  return (
    <main id="about" className={sectionClass}>
      <div className="text-3xl font-semibold md:font-normal md:weight md:text-4xl ">
        <span className="title-shadow w-fit relative">About Me <span className="text-line"/></span>
      </div>
      <div className="border-corner p-8 mt-4">
        <div className="md:text-lg relative">
          <p>
            From being formally trained in computer science at the University of Toronto, 
            to tackling new skills working on side-projects, to working professionally as a web developer. 
            I love solving problems in coding no matter what I'm working with!
          </p>
        </div>
        <div className="mt-12 text-center text-purple-500 italic">
          <p>
          &ldquo;A well-written piece of code is not just a program; 
            it&apos;s a work of art that reflects creativity and craftsmanship.&ldquo;
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutSection
