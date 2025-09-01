import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between items-center relative px-6 gap-12 md:gap-20">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
