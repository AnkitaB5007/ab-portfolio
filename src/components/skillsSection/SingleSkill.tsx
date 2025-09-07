import React, { ReactNode } from "react";

interface SingleSkillProps {
  text: string;
  imgSvg: ReactNode;
}

const SingleSkill: React.FC<SingleSkillProps> = ({ text, imgSvg }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="bg-slate-800 border border-slate-700 h-20 w-20 flex items-center justify-center rounded-xl group-hover:bg-slate-700 group-hover:border-cyan-500/50 transition-all duration-300 text-4xl shadow-lg">
        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
          {imgSvg}
        </div>
      </div>
      <p className="text-slate-300 font-medium text-sm mt-3 group-hover:text-white transition-colors duration-300">
        {text}
      </p>
    </div>
  );
};

export default SingleSkill;
