const HeroText = () => {
    return (
        <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
            <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">Full-Stack Developer</h2>
            <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">Arpita Behura</h1>
            <p className="text-lg mt-4 text-white">Bringing Dreams to Life <br/>through Dynamic Web Creations</p>
        </div>
    );
};

export default HeroText;
