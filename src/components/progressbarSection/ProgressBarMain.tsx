import {motion, useScroll} from "framer-motion";

const ProgressBarMain = () => {
    const {scrollYProgress} = useScroll();
    return (
        <motion.div
            className="w-full origin-left h-2 fixed top-0 left-0 bg-gradient-to-r from-yellow-400 to-orange-500"
            style={{
                scaleX: scrollYProgress
            }}
        >

        </motion.div>
    );
};

export default ProgressBarMain;
