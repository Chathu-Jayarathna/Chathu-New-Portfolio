import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "../../lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "../../data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  const leftLists = ["HTML", "CSS", "JavaScript"];
  const rightLists = ["Java", "ReactJS", "Wordpress"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "chathushi0707@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const personalDetails = [
    { label: "Name", value: "Chathushi Jayarathna" },
    { label: "Email", value: "chathushi0707@gmail.com" },
    { label: "Phone", value: "(+94) 742269976" },
    { label: "Birthday", value: "07th July 2000" },
    { label: "Location", value: "Bandarawela, Sri Lanka" },
  ];

  // Education and Courses Section
  const education = [
    {
      title: 'Bachelor of Science (Hons) in Computer Science (Top-Up)',
      duration: '2022 - Present',
      institution: 'Lithan Academy, Singapore',
    },
    {
      title: 'Higher Diploma in Software Engineering',
      duration: '2022 - 2024',
      institution: 'Lithan Academy, Singapore',
    },
    {
      title: 'GCE (O/L) - 2016 (English Medium)',
      duration: '2006 to 2016',
      institution: 'Bandarawela Central College',
    },
    {
      title: 'GCE (A/L) - 2020 (Maths Stream)',
      duration: '2017 to 2020',
      institution: 'Bandarawela Central College',
    },
  ];

  const courses = [
    {
      title: 'Information Communication Technology',
      duration: '2016 - 2017',
      institution: 'Open University, Sri Lanka',
    },
    {
      title: 'Human Resources Management',
      duration: '2022 - 2023',
      institution: 'Open University, Sri Lanka',
    },
  ];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-3 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 1 && "min-h-[400px]"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
            {title}
          </div>

          {/* Personal Details Section */}
          {id === 2 && (
            <div className="p-2 sm:p-5 h-full w-full flex items-center justify-center">
              <div className="rounded-xl shadow-lg w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="space-y-4">
                      {personalDetails.slice(0, 3).map((detail, index) => (
                        <div
                          key={index}
                          className="flex justify-between bg-[#161A31]/50 p-4 rounded-md transition-all duration-200 hover:bg-[#1F223B] border-b border-[#2a2e47]"
                        >
                          <span className="text-white font-semibold hover:text-[#5094c8]">{detail.label}:</span>
                          <span className="text-[#C1C2D3]">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="space-y-4">
                      {personalDetails.slice(3).map((detail, index) => (
                        <div
                          key={index}
                          className="flex justify-between bg-[#161A31]/50 p-4 rounded-md transition-all duration-200 hover:bg-[#1F223B] border-b border-[#2a2e47]"
                        >
                          <span className="text-white font-semibold hover:text-[#5094c8]">{detail.label}:</span>
                          <span className="text-[#C1C2D3]">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {id === 3 && (
            <div className="p-5 lg:p-10 h-full flex items-center justify-center">
              <div className="flex flex-col lg:flex-row gap-10 justify-between">
                {/* Education Section */}
                <div className="w-full lg:w-1/2 relative pl-10">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{
                      background: 'linear-gradient(to right, #6AB1D7, #007ACC)', // Custom gradient
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    EDUCATION
                  </h3>
                  <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div> {/* Timeline Line */}
                  <ul>
  {education.map((item, index) => (
    <li key={index} className="mb-5 relative">
      <div className="absolute left-[-45px] top-0 h-3 w-3 rounded-full bg-blue-500 border-2 border-white"></div>
      <p className="font-semibold text-white">{item.title}</p> {/* Set text color to white */}
      <p className="text-sm text-gray-500">{item.duration}</p>
      <p className="text-sm text-gray-500">{item.institution}</p>
    </li>
  ))}
</ul>

                </div>

                {/* Courses Section */}
                <div className="w-full lg:w-1/2 relative pl-10">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{
                      background: 'linear-gradient(to right, #6AB1D7, #007ACC)', // Custom gradient
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    COURSES FOLLOWED
                  </h3>
                  <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div> {/* Timeline Line */}
                  <ul>
  {courses.map((item, index) => (
    <li key={index} className="mb-8 relative">
      <div className="absolute left-[-45px] top-0 h-3 w-3 rounded-full bg-blue-500 border-2 border-white"></div>
      <p className="font-semibold text-white">{item.title}</p> {/* Set text color to white */}
      <p className="text-sm text-gray-500">{item.duration}</p>
      <p className="text-sm text-gray-500">{item.institution}</p>
    </li>
  ))}
</ul>

                </div>
              </div>
            </div>
          )}

          {id === 4 && (
            <div className="flex items-center justify-center w-full h-full">
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}

{id === 6 && (
  <div className="mt-5 relative">
    <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
      <Lottie options={defaultOptions} height={200} width={400} />
    </div>

    {/* Buttons container: horizontal on desktop, vertical on mobile */}
    <div className="mt-4 flex flex-col md:flex-row gap-4">
      {/* Magic Button for Resume */}
      <div className="w-full md:w-auto">
        <MagicButton
          title="Open Resume"
          icon={<IoCopyOutline />}
          position="left"
          handleClick={() => window.open('/path/to/resume.pdf', '_blank')}
          otherClasses="!bg-[#161A31] !text-white"
        />
      </div>

      {/* Magic Button for Video Introduction */}
      <div className="w-full md:w-auto">
        <MagicButton
          title="Watch Video Introduction"
          icon={<IoCopyOutline />}
          position="left"
          handleClick={() => window.open('https://link-to-video.com', '_blank')}
          otherClasses="!bg-[#161A31] !text-white"
        />
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};
