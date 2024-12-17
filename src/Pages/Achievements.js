import React from "react";
import { AnimatedTestimonials } from "../Components/ui/AnimatedTesto"; // Adjust the path as needed

function Achievements() {
  const testimonials = [
    {
      quote: "",
      name: "Analyzin Your Web Site to Improve SEO",
      designation: "Web Development & Designing",
      src: "/C1 (1).png", // Replace with your image path
    },
   {
      quote: "",
      name: "Axure RP for UX Design",
      designation: "Web Development & Designing",
      src: "/C1 (2).png", // Replace with your image path
    },
      {
      quote: "",
      name: "Dreameweaver CC Essential Training",
      designation: "Web Development & Designing",
      src: "/C1 (3).png", // Replace with your image path
    },
      {
      quote: "",
      name: "Improve SEO for Your Website",
      designation: "Web Development & Designing",
      src: "/C1 (4).png", // Replace with your image path
    },
      {
      quote: "",
      name: "IntelliJ IDEA Community Edition Essential Training",
      designation: "Web Development & Designing",
      src: "/C1 (5).png", // Replace with your image path
    },
      {
      quote: "",
      name: "Introduction to Web Design and Development",
      designation: "Web Development & Designing",
      src: "/C1 (6).png", // Replace with your image path
    },
   {
      quote: "",
      name: "Java EE:Servlets and JavaServer Pages (JSP)",
      designation: "Web Development & Designing",
      src: "/C1 (8).png", // Replace with your image path
    },
      {
      quote: "",
      name: "Junit5",
      designation: "Web Development & Designing",
      src: "/C1 (9).png", // Replace with your image path
    },
      {
      quote: "",
      name: "Lightroom: Get Professional Result",
      designation: "Other",
      src: "/C1 (10).png", // Replace with your image path
    },
      {
      quote: "",
      name: "Project Management",
      designation: "Web Development & Designing",
      src: "/C1 (11).png", // Replace with your image path
    },
      {
      quote: "",
      name: "SED:Keyword Strategy",
      designation: "Web Development & Designing",
      src: "/C1 (12).png", // Replace with your image path
    },
   {
      quote: "",
      name: "Spring MVC",
      designation: "Web Development & Designing",
      src: "/C1 (13).png", // Replace with your image path
    },
      {
      quote: "",
      name: "UX Design",
      designation: "Web Development & Designing",
      src: "/C1 (14).png", // Replace with your image path
    },
      {
      quote: "",
      name: "Lightroom Classic Essential Training",
      designation: "Other",
      src: "/C1 (15).png", // Replace with your image path
    },

  ];

  return (
    <section id="achievements" className="py-1">
      <div className="py-20 w-full">
        <h1 className="text-4xl mt-12 tracking-wider md:text-6xl font-bold text-center">
          <span className="text-white">Achieved </span>
          <span className="text-purple-300">Certificates</span>
        </h1>

        {/* Add the AnimatedTestimonials component here */}
        <div className="mt-12">
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </section>
  );
}

export default Achievements;
