import { Link } from "react-scroll";
import { links } from "../../constants/navBarData";
import { useTranslation } from "react-i18next";

interface NavbarLinksProps {
  isMobile: boolean;
  onLinkClick: () => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ isMobile, onLinkClick }) => {
  const { t } = useTranslation();

  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col w-full items-center py-4" : "flex-row"
      } gap-8 text-white font-medium`}
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            className={`cursor-pointer text-slate-300 hover:text-white transition-all duration-300 
              ${isMobile ? "py-3 px-4 text-base" : "text-sm"} 
              relative`}
            to={t(`navBar.${link.section}`)}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            onClick={onLinkClick}
          >
            {t(`navBar.${link.section}`)}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
