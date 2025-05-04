import { useTranslation } from "react-i18next";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  const { t } = useTranslation();
  return (
    <button
      className="px-6 py-3 rounded-full text-2xl font-bold text-white border-cyan border hidden lg:flex
        items-center gap-2 bg-gradient-to-r from-cyan to-orange hover:border-orange
        hover:scale-110 hover:shadow-cyan
        transition-all duration-500"
    >
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to={t("contactMeSection.contact")}
      >
        {t("navBar.nav_btn_hire")}
      </Link>
      <LuArrowDownRight />
    </button>
  );
};

export default NavbarBtn;
