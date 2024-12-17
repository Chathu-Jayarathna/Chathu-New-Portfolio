"use client";

import React from "react";
import { HoverEffect } from "../Components/ui/CardHoverEffect"; // Import HoverEffect component

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="py-20 w-full">
        <h1 className="text-4xl mt-12 tracking-wider md:text-6xl font-bold text-center">
          <span className="text-white">Professional </span>
          <span className="text-purple-300">Skills</span>
        </h1>

      <h2 className="subheading text-lg text-center text-gray-700 mt-4">
        Languages, Frameworks, Tools, and Other Technologies Used
      </h2>

      {/* Add HoverEffect component here */}
      <HoverEffect
        items={[
          { title: "HTML", image: "/1.png", link: "#", percentage: 90 },
          { title: "CSS", image: "/2.png", link: "#", percentage: 90 },
          { title: "JavaScript", image: "/3.png", link: "#", percentage: 80 },
          { title: "Bootstrap", image: "/4.png", link: "#", percentage: 85 },
          { title: "Tailwind CSS", image: "/25.svg", link: "#", percentage: 80 },
          { title: "Java", image: "/5.png", link: "#", percentage: 75 },
          { title: "Angular", image: "/6.png", link: "#", percentage: 80 },
          { title: "React", image: "/7.png", link: "#", percentage: 85 },
          { title: "Spring Boot", image: "/8.png", link: "#", percentage: 75 },
          { title: "PHP", image: "/19.png", link: "#", percentage: 70 },
          { title: "Wordpress", image: "/20.png", link: "#", percentage: 70 },
          { title: "Webflow", image: "/26.png", link: "#", percentage: 80 },
          { title: "VS Code", image: "/11.png", link: "#", percentage: 90 },
          { title: "Postman", image: "/9.png", link: "#", percentage: 80 },
          { title: "Eclipse IDE", image: "/10.png", link: "#", percentage: 60 },
          { title: "Liferay", image: "/13.png", link: "#", percentage: 65 },
          { title: "IntelliJ IDEA", image: "/12.png", link: "#", percentage: 65 },
          { title: "Figma", image: "/14.png", link: "#", percentage: 80 },
          { title: "xampp", image: "/21.png", link: "#", percentage: 85 },
          { title: "Micorsoft 365", image: "/24.png", link: "#", percentage: 90 },
          { title: "Lightroom", image: "/18.png", link: "#", percentage: 90 },
          // Add more items here as necessary
        ]}
      />
</div>
    </section>
  );
};

export default Skills;
