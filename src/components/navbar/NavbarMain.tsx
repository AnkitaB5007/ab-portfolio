import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { requiredLanguages } from "../../constants/languageSwitcherData";
import { useTranslation } from "react-i18next";
import NavbarBtn from "./NavbarBtn";

const NavbarMain = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState("en");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguageCode(lang);
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Update the isMobile state based on the current window width
  };

  useEffect(() => {
    // Set the current mobile state based on initial width
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 mt-2 fixed top-0 left-0 right-0 z-20">
      <div className="flex justify-between items-center bg-black p-4 rounded-lg rounded-l-full rounded-r-full border-orange border-[0.5px]">
        <NavbarLogo />
        <LanguageSwitcher
          requiredLanguages={requiredLanguages}
          onSelectionChange={handleLanguageChange}
          selectedLanguageCode={selectedLanguageCode}
        />

        {/* Hamburger Menu for Mobile */}
        <button className="text-2xl lg:hidden text-white" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>

        {/* Navbar Links for Medium and Large Screens */}
        <div className="hidden lg:flex">
          <NavbarLinks isMobile={isMobile} />
        </div>
        <NavbarBtn />
      </div>

      {/* Navbar Links for Mobile */}
      {menuOpen && (
        <div className="bg-black text-center rounded-lg border-orange border mt-2 flex flex-col w-full lg:hidden">
          <NavbarLinks isMobile={isMobile} />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
