import SideSocials from './Components/sideSocials';
import AboutSection from "./Sections/aboutSection";
import ExperienceSection from "./Sections/experienceSection";
import SkillsSection from "./Sections/skillsSection";
import Footer from './Sections/footer';
import ProjectSection from './Sections/projectSection';
import MobileNavBar from './Components/mobileNavBar';
import TitleSection from './Sections/titleSection';
import CursorGlow from './Components/cursorGlow';

export default function Home() {
  const sectionClass="mt-20 px-5 overflow-x-hidden md:px-20 lg:px-40 w-full lg:max-w-7xl text-center md:text-left lg:mt-20"
  return (
    <main className={"flex flex-col items-center max-w-none overflow-x-hidden"}>
      <CursorGlow/>
      <MobileNavBar/>
      <SideSocials/>
      <TitleSection/>
      <AboutSection sectionClass={sectionClass}/>
      <ExperienceSection sectionClass={sectionClass}/>
      <SkillsSection sectionClass={sectionClass}/>
      <ProjectSection sectionClass={sectionClass}/>
      <Footer/>
    </main>
  );
}
