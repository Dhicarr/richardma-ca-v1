import React, { ReactNode } from "react";
import DarkSky from "../Components/darkSky";
import Header from "./header";

const OpeningSection = (): JSX.Element => {
  return (
  <main className="w-full h-full mx-10" >
    {/* <DarkSky/> */}
    <Header/>
  </main>
  );
}

export default OpeningSection
