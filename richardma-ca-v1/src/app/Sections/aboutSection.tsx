import React, { ReactNode } from "react";

interface ComponentProps {
  sectionClass: string;
}

const AboutSection = ({sectionClass}:ComponentProps): JSX.Element => {
  return (
    <main id="about" className={sectionClass}>
      <div className="text-3xl md:text-4xl">About Me</div>
      <div className="border-corner p-4 mt-4">
        <div className="md:text-lg mt-4 relative">
          <p>
            As a software engineer, I am fueled by my passion for technology and my 
            love for learning and solving new challenges. I have professional experience 
            building responsive React webpages, and in depth back-end knowledge on data 
            structures, algorithms, and databases gained during my undergraduate studies. 
            I am constantly seeking out new opportunities to grow my skills and knowledge, 
            and I approach each challenge with enthusiasm and curiosity.
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
