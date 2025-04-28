import './App.css'
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";

function App() {


  return (
      <main className="font-body">
        <NavbarMain/>
        <HeroMain/>
        <HeroGradient/>
      </main>
  )
}

export default App;
