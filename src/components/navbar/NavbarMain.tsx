import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { requiredLanguages } from "../../constants/languageSwitcherData";
import { useTranslation } from "react-i18next";
import NavbarBtn from "./NavbarBtn";

const NavbarMain = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState("en");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClickOutsideMenu = (event: MouseEvent) => {
    // Check if the click was outside the menu
    if (
      menuOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
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

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      window.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [menuOpen]);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 sm:px-0 mt-2 fixed top-0 left-0 right-0 z-20">
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
          <NavbarLinks
            isMobile={isMobile}
            onLinkClick={() => setMenuOpen(false)}
          />
        </div>
        <NavbarBtn />
      </div>

      {/* Navbar Links for Mobile */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="bg-black text-center rounded-lg border-orange border mt-2 flex flex-col w-full lg:hidden"
        >
          <NavbarLinks
            isMobile={isMobile}
            onLinkClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
