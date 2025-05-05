import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start sm:items-center md:text-left sm:text-center">
      <div className="mx-auto md:mx-0">
        {" "}
        {/* Center only on mobile devices */}
        <ExperienceTopLeft />
      </div>
      <div className="m-4">
        <ExperienceTopMiddle />
      </div>
      <div className="m-[10px] md:m-0">
        <ExperienceTopRight />
      </div>
    </div>
  );
};

export default ExperienceTop;
