import React, { ReactNode } from "react";
import DarkSky from "../Components/darkSky";
import Header from "../Components/header";

const OpeningSection = (): JSX.Element => {
  return (
  <main className="w-full h-full max-w-7xl" >
    <DarkSky/>
    <Header/>
  </main>
  );
}

export default OpeningSection
