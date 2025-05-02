import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex items-center justify-center gap-12">
      <img
        src="/images/email-image.png"
        alt="email image"
        className="hidden sm:block max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
