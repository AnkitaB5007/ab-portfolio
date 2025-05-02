import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="hidden sm:flex gap-4 mt-4">
      {" "}
      {/* Hide on small devices */}
      <SingleContactSocial
        link="https://www.linkedin.com/in/arpita-behura-11299823/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/arpita009"
        Icon={FiGithub}
      />
    </div>
  );
};

export default ContactSocial;
