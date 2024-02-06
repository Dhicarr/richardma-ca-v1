import image1 from './Images/airplane-pic.png';
import SideSocials from './Components/sideSocials';
import "./dark_clouds.css";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="background-container -z-10">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <SideSocials/>
      <div className="w-full h-full">
        <div className="flex w-full h-screen z-1">
          <div className="flex basis-1/2">
            main icon
            <div className="flex flex-col absolute left-36 top-36">
              <div className="text-2xl">
                Hi, my name is
              </div>
              <div className="text-8xl border-b-4">
                Richard Ma
              </div>
              <div>
                Software Engineer, HBSc Computer Science from University of Toronto
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center basis-1/2 w-1/3">
            <img className="h-2/3 border-4 " src={image1.src} />
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
