import { skills } from "../../constants/skillsData";

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center group">
            <div className="bg-slate-800 border border-slate-700 h-16 w-16 flex items-center justify-center rounded-xl group-hover:bg-slate-700 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
              <item.icon className="text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            </div>
            <p className="text-slate-300 font-medium text-sm mt-3 text-center group-hover:text-white transition-colors duration-300">
              {item.skill}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
