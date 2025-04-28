import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";

function App() {


  return (
      <main className="font-body">
        <NavbarMain/>
        <HeroMain/>
        <HeroGradient/>
        <SubHeroSection/>
      </main>
  )
}

export default App;
