import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar/NavbarMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import CVSection from "./components/cvSection/CVSection";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import BlogsSection from "./components/blogsSection/BlogsSection";
import FooterMain from "./components/footer/FooterMain";
import ProgressBarMain from "./components/progressbarSection/ProgressBarMain";
import BlogList from "./components/blog/BlogList";
import BlogPost from "./components/blog/BlogPost";
import "./i18n";

// Portfolio Layout Component - Blogs First Approach
const PortfolioLayout = () => (
  <>
    <ProgressBarMain />
    <NavbarMain />
    <BlogsSection />
    <AboutMeMain />
    <SkillsMain />
    <SubSkills />
    <CVSection />
    <ProjectsMain />
    <FooterMain />
  </>
);

function App() {
  return (
    <Router>
      <main className="font-body">
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
