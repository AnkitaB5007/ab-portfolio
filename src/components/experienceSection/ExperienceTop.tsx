import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="flex flex-col md:flex-row sm:items-center md:text-left sm:text-center md:items-center">
      <div className="mx-auto md:mx-0 md:flex-1">
        <ExperienceTopLeft />
      </div>
      <div className="m-4 md:flex-1">
        <ExperienceTopMiddle />
      </div>
      <div className="m-[10px] md:m-0 md:flex-1">
        <ExperienceTopRight />
      </div>
    </div>
  );
};

export default ExperienceTop;
