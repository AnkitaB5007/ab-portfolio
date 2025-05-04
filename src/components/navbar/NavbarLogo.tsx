const NavbarLogo = () => {
  return (
    <div>
      {/* This will be visible on medium screens and up */}
      <h1 className="text-white font-special font-extrabold text-4xl hidden md:block">
        Arpita Behura
      </h1>
      {/* This will be visible on small screens only */}
      <h1 className="text-white font-special font-extrabold text-4xl block md:hidden">
        AB
      </h1>
    </div>
  );
};

export default NavbarLogo;
