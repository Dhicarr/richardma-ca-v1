"use client"
import React, { ReactNode } from "react";
import TextTransition, { presets } from 'react-text-transition';

const titles = ['Front-End','Full-Stack','Software','React','Web',];

const JobTitle = (): JSX.Element => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500, // every 1.5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <main >
        <TextTransition springConfig={presets.wobbly} inline><b>{titles[index % titles.length]}</b></TextTransition>
        <b>&nbsp;Developer</b>
    </main>
  );
}

export default JobTitle
