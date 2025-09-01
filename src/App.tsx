import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import CVSection from "./components/cvSection/CVSection";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import BlogsSection from "./components/blogsSection/BlogsSection";
import FooterMain from "./components/footer/FooterMain";
import ProgressBarMain from "./components/progressbarSection/ProgressBarMain";
import "./i18n";

function App() {
  return (
    <main className="font-body">
      <ProgressBarMain />
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <CVSection />
      <ProjectsMain />
      <BlogsSection />
      <FooterMain />
    </main>
  );
}

export default App;
