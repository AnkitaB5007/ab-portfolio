import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="max-w-6xl mx-auto w-full px-6 py-4 fixed top-0 left-0 right-0 z-20">
      <div className="flex justify-between items-center bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-xl border border-slate-700/50">
        <NavbarLogo />
        
        {/* Hamburger Menu for Mobile */}
        <button className="text-xl lg:hidden text-white hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>

        {/* Navbar Links for Medium and Large Screens */}
        <div className="hidden lg:flex">
          <NavbarLinks
            isMobile={isMobile}
            onLinkClick={() => setMenuOpen(false)}
          />
        </div>
      </div>

      {/* Navbar Links for Mobile */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="bg-slate-900/95 backdrop-blur-md rounded-xl border border-slate-700/50 mt-2 flex flex-col w-full lg:hidden"
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
