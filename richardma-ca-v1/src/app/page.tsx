import SideSocials from './Components/sideSocials';
import OpeningSection from "./Sections/openingSection";
import AboutSection from "./Sections/aboutSection";
import ExperienceSection from "./Sections/experienceSection";
import SkillsSection from "./Sections/skillsSection";
import Footer from './Sections/footer';
import ProjectSection from './Sections/projectSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <SideSocials/>
      <OpeningSection/>
      <AboutSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <ProjectSection/>
      <Footer/>
    </main>
  );
}
