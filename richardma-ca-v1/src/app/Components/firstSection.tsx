import React, { ReactNode } from "react";
import DarkSky from "./darkSky";
import Header from "./header";

const FirstSection = (): JSX.Element => {
  return (
  <main className="w-full h-full" >
    <DarkSky/>
    <Header/>
  </main>
  );
}

export default FirstSection
