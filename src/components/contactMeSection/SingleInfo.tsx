import React from "react";

interface SingleInfoProps {
  text: string;
  Image: React.ElementType;
}

const SingleInfo: React.FC<SingleInfoProps> = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl text-white" />
      <p className="text-white">{text}</p>
    </div>
  );
};

export default SingleInfo;
