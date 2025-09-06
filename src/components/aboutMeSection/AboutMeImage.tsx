const AboutMeImage = () => {
    return (
        <div className="relative max-w-sm mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                    src="/images/about-me.png" 
                    alt="about-me" 
                    className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
        </div>
    );
};

export default AboutMeImage;
