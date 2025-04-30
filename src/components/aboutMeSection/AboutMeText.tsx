const AboutMeText = () => {
    return (
        <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
            <h2 className="text-6xl text-cyan mb-10">About Me</h2>
            <p className="text-white text-xl">I'm Arpita, a web developer on a mission to make the internet a bit more delightful—one line of code
                at a time! Armed with a keyboard, creativity, and a healthy appetite
                for pizza, I thrive in the world of pixels and programming while
                continuously learning and exploring. I believe that laughter can tackle any tricky bug,
                and I aim to create websites that leave users grinning. </p>
            <p className="mt-1 text-white text-xl">Let’s team up and craft something
                exceptional together, all while keeping the fun alive!</p>
            <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10
            hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white
            hover:text-cyan">My Projects</button>
        </div>
    );
};

export default AboutMeText;
