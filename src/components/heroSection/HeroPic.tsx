import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      className="h-full flex items-center justify-center relative mb-20 md:mb-0 md:w-[40%]"
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="relative">
        {/* Profile Image */}
        <div className="relative z-10">
          <img
            src="/images/folio_web.jpg"
            alt="Ankita Behura"
            className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl border-4 border-slate-700/50"
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-2xl">✨</span>
        </div>
        
        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-2xl">🚀</span>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent rounded-2xl"></div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
