import { useTranslation } from "react-i18next";

const SubHeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden">
      {/* Background with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {t("heroSection.hero_text_subHero_1")}
              </h3>
              <p className="text-slate-400">Adaptable to new technologies</p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {t("heroSection.hero_text_subHero_2")}
              </h3>
              <p className="text-slate-400">Collaborative mindset</p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {t("heroSection.hero_text_subHero_3")}
              </h3>
              <p className="text-slate-400">Precision in every project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
