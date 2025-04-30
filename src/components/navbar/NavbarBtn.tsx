import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const NavbarBtn = () => {
    return (
        <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border
        flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange
        hover:scale-110 hover:shadow-cyan
        transition-all duration-500">
            <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
                Hire Me
            </Link>
            <div className='sm:hidden md:block'>
                <LuArrowDownRight />
            </div>
        </button>
    );
};

export default NavbarBtn;
