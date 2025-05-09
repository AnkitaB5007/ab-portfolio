import { FaRegSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      className="h-full flex items-center justify-center relative  mb-[5rem] md:mb-0"
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <img
        // src="/images/HexaPic.jpeg"
        src="/images/pop_pic.jpg"
        alt="arpita"
        className="w-[80%] max-w-[300px] h-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <FaRegSquare className="md:h-[60%] sm:h-[80%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_in]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
