import { Link } from "react-scroll";
import { links } from "../../constants/navBarData";
import { useTranslation } from "react-i18next";

const NavbarLinks = () => {
  const { t } = useTranslation();
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        console.log("PRINT ", t(`navBar.${link.section}`));
        return (
          <li key={index} className="group">
            <Link
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
              // to={link.section}
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
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
