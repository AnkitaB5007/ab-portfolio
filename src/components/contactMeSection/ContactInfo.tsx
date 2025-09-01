import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="hidden sm:flex flex-col gap-4">
      {" "}
      {/* Hide on small devices */}
      <SingleInfo text="ankitabehura@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+49 155 10209356" Image={FiPhone} />
      <SingleInfo text="Riegelsberg, 66292, Germany" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
