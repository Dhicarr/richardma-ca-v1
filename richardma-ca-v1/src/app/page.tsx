import SideSocials from './Components/sideSocials';
import FirstSection from "./Components/firstSection";
import SecondSection from "./Components/secondSection";
import ThirdSection from "./Components/thirdSection";
import FourthSection from "./Components/fourthSection";
import Footer from './Components/footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <SideSocials/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/>
    </main>
  );
}
