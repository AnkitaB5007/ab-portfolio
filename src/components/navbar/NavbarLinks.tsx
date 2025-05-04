import { Link } from "react-scroll";
import { links } from "../../constants/navBarData";
import { useTranslation } from "react-i18next";

interface NavbarLinksProps {
  isMobile: boolean;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ isMobile }) => {
  const { t } = useTranslation();

  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col w-full items-center bg-darkCyan" : "lg:flex-row"
      } gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] ${
        isMobile ? "" : "left-[50%] -translate-x-[50%]"
      } lg:text-md sm:text-xl ${
        isMobile ? "sm:bg-cyan/30 backdrop-blur-lg py-4" : "lg:bg-black"
      }`}
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            className={`cursor-pointer text-white transition-all duration-300 
              ${isMobile ? "py-2 px-4" : ""} 
              group-hover:bg-cyan/40`}
            to={t(`navBar.${link.section}`)}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
          >
            {t(`navBar.${link.section}`)}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
