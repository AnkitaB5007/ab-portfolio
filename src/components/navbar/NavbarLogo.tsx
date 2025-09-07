const NavbarLogo = () => {
  return (
    <div>
      {/* This will be visible on medium screens and up */}
      <h1 className="text-white font-bold text-2xl hidden md:block font-mono tracking-wider">
        <span className="text-cyan-400">{"<"}</span>
        Ankita
        <span className="text-cyan-400">{"/>"}</span>
      </h1>
      {/* This will be visible on small screens only */}
      <h1 className="text-white font-bold text-2xl block md:hidden font-mono">
        <span className="text-cyan-400">{"<"}</span>
        AB
        <span className="text-cyan-400">{"/>"}</span>
      </h1>
    </div>
  );
};

export default NavbarLogo;
