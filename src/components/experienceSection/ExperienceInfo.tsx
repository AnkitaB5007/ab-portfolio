import React from "react";

interface ExperienceInfoProps {
  number: number;
  text: string;
}

const ExperienceInfo: React.FC<ExperienceInfoProps> = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase -mt-4 text-center">
        {text}
      </p>
    </div>
  );
};

export default ExperienceInfo;
