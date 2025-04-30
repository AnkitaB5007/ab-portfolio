import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants";
import {words} from "../../constants/heroData";

const HeroText = () => {
    return (
        <div className="flex w-[40%] flex-col gap-4 h-full justify-center md:text-left sm:text-center">
            <motion.h2 className="lg:text-2xl sm:text-xl uppercase text-cyan"
                       variants={fadeIn('down',0.2)}
                       initial='hidden'
                       whileInView='show'
                       viewport={{once: false, amount: 0}}
            >
                Full-Stack Web Developer
            </motion.h2>
            <motion.h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
                       variants={fadeIn('right',0.4)}
                       initial='hidden'
                       whileInView='show'
                       viewport={{once: false, amount: 0}}
            >
                Arpita Behura
            </motion.h1>
            <motion.div className="hero-text"
                        variants={fadeIn('up',0.6)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{once: false, amount: 0}}
            >
                <h1 className="md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-4 font-bold font-special text-white">Bringing
                    <span className="slide">
                        <span className="wrapper">
                            {words.map(word => <span key={word.text} className="flex items-center md:gap-3 gap:2 pb-[3px]">
                                <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full white-bg"/>
                                <span>{word.text}</span>
                            </span>)}
                        </span>
                    </span>
                </h1>
                <h1 className="md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-4 font-bold font-special text-white">to Life through</h1>
                <h1 className="md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-4 font-bold font-special text-white">Dynamic Creations!</h1>
            </motion.div>
        </div>
    );
};

export default HeroText;
