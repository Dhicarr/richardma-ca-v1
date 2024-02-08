import React, { ReactNode } from "react";
import "../Css/dark_clouds.css";

const DarkSky = (): JSX.Element => {
  return (
    <main className="background-container -z-10 box" style={{minHeight:"110vh"}}>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
    </main>
  );
}

export default DarkSky
