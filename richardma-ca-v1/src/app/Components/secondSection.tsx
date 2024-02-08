import React, { ReactNode } from "react";

const SecondSection = (): JSX.Element => {
  return (
    <main id="about" className="mt-20 pt-20 px-40">
      <div className="text-4xl w-fit">About Me</div>
      <div className="text-lg mt-4 relative ">
        <p>
          As a software engineer, I am fueled by my passion for technology and my 
          love for learning and solving new challenges. I have professional experience 
          building responsive React webpages, and in depth back-end knowledge on data 
          structures, algorithms, and databases gained during my undergraduate studies. 
          I am constantly seeking out new opportunities to grow my skills and knowledge, 
          and I approach each challenge with enthusiasm and curiosity.
        </p>
      </div>
      <div className="mt-12 text-center">
        <p>
          "A well-written piece of code is not just a program; 
          it's a work of art that reflects creativity and craftsmanship."
        </p>
      </div>
    </main>
  );
}

export default SecondSection
