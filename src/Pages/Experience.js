import React from "react";
import { Button } from "../Components/ui/MovingBorders";

const Experience = () => {
  return (
    <section id="workExperience" className="py-1">
      <div className="px-5 md:px-20">
        <h1 className="text-4xl mt-12 tracking-wider md:text-6xl font-bold text-center">
          <span className="text-white">My </span>
          <span className="text-purple-300">Work Experience</span>
        </h1>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                    {card.title}
                  </h1>
                  <p className="text-start text-gray-500 text-sm mt-1">
                    {card.duration}
                  </p>
                  <ul className="text-start text-blue-300 mt-3 font-semibold list-disc pl-5">
                    {card.desc.map((item, index) => (
                      <li key={index} className="text-blue-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering - HIP, Malaysia",
    desc: [
      "Built responsive websites using Webflow, WordPress, and Elementor.",
      "Utilized Webflow CMS and Elementor widgets for dynamic content management.",
      "Integrated Advanced Custom Fields (ACF) with WordPress for custom data.",
      "Enhanced site interactivity with custom JavaScript and CSS.",
      "Experienced in GitLab version control, including branching and merging.",
    ],
    duration: "From Oct 2024 to Jan 2025",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer - Edelosoft, Singapore",
    desc: [
      "Developed and customized WordPress themes using PHP.",
      "Integrated and utilized Advanced Custom Fields (ACF) for flexible content management.",
      "Connected WordPress ACF fields with PHP to dynamically display custom data.",
      "Gained significant experience in GitLab, including version control, branching, and merging",
      "Demonstrated strong customer handling abilities",
    ],
    duration: "From May 2024 to Sep 2024",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer - Cenozai, Malaysia",
    desc: [
      "Developed new features including referral code implementation.",
      "Recommended and documented suitable testing methodologies.",
      "Created comprehensive test cases covering unit and integration testing.",
      "Updated project dependencies to preferred versions.",
      "Demonstrated proficiency in managing complex systems and enhancing project functionality.",
    ],
    duration: "From July 2023 to Jan 2024",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "IT Trainee - Ceylon Electricity Board",
    desc: [
      "Proficient in database management.",
      "Provided technical support.",
      "Documented processes and procedures.",
      "Skilled in Microsoft Office applications.",
      "Demonstrated strong customer handling abilities.",
    ],
    duration: "Feb 2023 - Present",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
