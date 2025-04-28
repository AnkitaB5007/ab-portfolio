import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";

const NavbarMain = () => {
    return (
        <nav>
            <div>
                <NavbarLogo/>
                <NavbarLinks/>
                <NavbarBtn/>
            </div>
        </nav>
    );
};

export default NavbarMain;
