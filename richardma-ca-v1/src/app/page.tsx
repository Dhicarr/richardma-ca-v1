import SideSocials from './Components/sideSocials';
import OpeningSection from "./Sections/openingSection";
import AboutSection from "./Sections/aboutSection";
import ExperienceSection from "./Sections/experienceSection";
import SkillsSection from "./Sections/skillsSection";
import Footer from './Sections/footer';
import ProjectSection from './Sections/projectSection';

export default function Home() {
  const sectionClass="mt-40 px-10 md:px-20 lg:px-40"
  return (
    <main className="flex flex-col items-center">
      <SideSocials/>
      <OpeningSection/>
      <span className="max-w-7xl xl:max-w-none mx-20">
        <AboutSection sectionClass={sectionClass}/>
        <ExperienceSection sectionClass={sectionClass}/>
        <SkillsSection sectionClass={sectionClass}/>
        <ProjectSection sectionClass={sectionClass}/>
      </span>
      <Footer/>
    </main>
  );
}
