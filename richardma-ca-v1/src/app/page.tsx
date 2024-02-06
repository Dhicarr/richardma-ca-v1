import image1 from './Images/placeholder_headshot_1.jpg';
import SideSocials from './Components/sideSocials';
import "./dark_clouds.css";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <SideSocials/>
      <div className="absolute w-1/2 left-48 top-36">
        <div className="text-2xl">
          Hi, my name is
        </div>
        <div className="text-8xl">
          Richard Ma
        </div>
        <div>
          Software Engineer, HBSc Computer Science from University of Toronto
        </div>
      </div>
      <div className="container">
        <div className="flex w-full h-screen ">
          <div className="basis-1/2">
            main icon
          </div>
          <div className="basis-1/2 flex justify-end">
            <img className="h-screen w-auto border-l-white-500 border-l-4" src={image1.src} />
          </div>
        </div>
      </div>
      <div>
        About Me
      </div>
      <div>
        Experience 
      </div>
      <div>
        Projects 
      </div>
      <div>
        Footer
        Dark Cloud CSS Animations by Anastasia Goodwin
      </div>
    </main>
  );
}
