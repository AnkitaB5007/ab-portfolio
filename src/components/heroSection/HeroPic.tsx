import { PiHexagonFill } from "react-icons/pi";

const HeroPic = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <img src='/images/HexaPic.jpeg' alt='arpita' className='w-[300px] h-[300px] w-auto'/>
            <div className="absolute -z-10 flex justify-center items-center animate-pulse">
                <PiHexagonFill className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_in]"/>
            </div>
        </div>
    );
};

export default HeroPic;
