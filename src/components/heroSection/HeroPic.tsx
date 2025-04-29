import { PiHexagonFill } from "react-icons/pi";
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants";

const HeroPic = () => {
    return (
        <motion.div className="h-full flex items-center justify-center"
                    variants={fadeIn('left',0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: false, amount: 0}}
        >
            <img src='/images/HexaPic.jpeg' alt='arpita' className='w-[300px] h-[300px] w-auto'/>
            <div className="absolute -z-10 flex justify-center items-center animate-pulse">
                <PiHexagonFill className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_in]"/>
            </div>
        </motion.div>
    );
};

export default HeroPic;
