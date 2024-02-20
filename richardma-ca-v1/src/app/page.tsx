import SideSocials from './Components/sideSocials';
import OpeningSection from "./Sections/openingSection";
import AboutSection from "./Sections/aboutSection";
import ExperienceSection from "./Sections/experienceSection";
import SkillsSection from "./Sections/skillsSection";
import Footer from './Sections/footer';
import ProjectSection from './Sections/projectSection';
import Header from './Sections/header';
import MobileNavBar from './Components/mobileNavBar';

export default function Home() {
  const sectionClass="mt-40 px-5 overflow-x-hidden md:px-20 lg:px-40 lg:max-w-7xl text-center md:text-left"
  
  return (
    <main className="flex flex-col items-center max-w-none overflow-x-hidden">
      <MobileNavBar/>
      <SideSocials/>
      <Header/>
      <AboutSection sectionClass={sectionClass}/>
      <ExperienceSection sectionClass={sectionClass}/>
      <SkillsSection sectionClass={sectionClass}/>
      <ProjectSection sectionClass={sectionClass}/>
      <Footer/>
    </main>
  );
}
