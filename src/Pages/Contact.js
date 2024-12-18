import { FaLocationArrow, FaWhatsapp, FaLinkedin, FaEnvelope, FaSkype } from "react-icons/fa";
import MagicButton from "../Components/ui/MagicButton";
import { FloatingDock } from "../Components/ui/FloatingDock";
import { StarsBackground } from "../Components/ui/stars-background"; // Added StarsBackground import

const Contact = () => {
  const dockItems = [
    {
      title: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      href: "https://wa.me/+94742269976",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/chathushi-jayarathna-578098234",
    },
    {
      title: "Email",
      icon: <FaEnvelope size={24} />,
      href: "mailto:chathushi0707@gmail.com",
    },
    {
      title: "Skype",
      icon: <FaSkype size={24} />,
      href: "https://join.skype.com/invite/sneaIOJ34nBW",
    },
  ];

  return (
    <footer className="pt-20 pb-10 px-5 md:px-20 relative" id="contact">
      {/* Add the StarsBackground component here */}
      <StarsBackground />

      <div className="flex flex-col items-center">
        <h1 className="text-4xl mt-12 tracking-wider md:text-6xl font-bold text-center">
          <span className="text-white">Looking for a </span>
          <span className="text-purple-300">Creative</span>
          <span className="text-white"> Partner ?</span>
        </h1>

        {/* Text now has white color */}
        <p className="text-white md:mt-10 my-5 text-center">
          Let’s connect and create something amazing together.
        </p>

        <a href="mailto:chathushi0707@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        
        {/* FloatingDock Component */}
        <FloatingDock items={dockItems} className="my-6" />
      </div>

      {/* Full-width background for copyright with top margin and light white color */}
      <div className="w-full bg-[#95a0e116] text-white flex justify-center items-center mt-8">
        <p className="text-sm md:text-base font-light">
          Copyright © 2024 Chathu Jayarathna
        </p>
      </div>
    </footer>
  );
};

export default Contact;
