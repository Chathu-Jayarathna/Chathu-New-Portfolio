import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class="bg-[#0A0C1C] text-white py-4 px-6 flex justify-between items-center">
  <div class="text-xl font-light">
    <p>Copyright © 2024 Chathu Jayarathna</p>
  </div>

  <div class="flex space-x-4">
    <a href="https://github.com/DevindaStallone" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-8 h-8 rounded-md border border-white hover:bg-white hover:text-black transition-colors duration-300">
    <FaGithub className="text-blue-800 text-xl " />
    </a>
    <a href="https://www.linkedin.com/in/devinda-stallone-a164a5250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BswsgdR6LQYWiMja8Si5RLg%3D%3D" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-8 h-8 rounded-md border border-white hover:bg-white hover:text-black transition-colors duration-300">
    <FaLinkedin className="text-blue-800 text-xl " />
    </a>
    <a href="https://www.facebook.com/devinda.stallone.5?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-8 h-8 rounded-md border border-white hover:bg-white hover:text-black transition-colors duration-300">
    <FaFacebook className="text-blue-800 text-xl " />
    </a>

    <a href="https://www.instagram.com/_devinda_stallone_/profilecard/?igsh=aDVoazUzenN4MjI5" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-8 h-8 rounded-md border border-white hover:bg-white hover:text-black transition-colors duration-300">
    <FaInstagram className="text-blue-800 text-xl " />
    </a>
    <a href="https://wa.me/+94757099055" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-8 h-8 rounded-md border border-white hover:bg-white hover:text-black transition-colors duration-300">
    <FaWhatsapp className="text-blue-800 text-xl " />
    </a>
  </div>
</footer>

  )
}

export default Footer
