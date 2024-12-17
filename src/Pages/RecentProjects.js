"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../Components/ui/Pin";

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: "ABC Car Portal",
      des: "Developed a web app for buying and selling used cars, featuring vehicle browsing and bidding at discounted prices.",
      img: "/adp.png",
      iconLists: ["/5.png", "/8.png", "/3.png", "/23.png"],
      link: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%209%20-%20ADP/Project%20-%20ABC%20Car%20Portal",
      newLink: "", // New link added
    },
    {
      id: 2,
      title: "Meals on Wheels",
      des: "Designed and developed a secure, user-friendly website for MerryMeal to streamline operations and support growth",
      img: "/dea.png",
      iconLists: ["/7.png", "/5.png", "/8.png", "/3.png", "/23.png"],
      link: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%2011%20-%20DEA/Project%20-%20MerryMeals",
      newLink: "https://dea-meerymeals.vercel.app/", // New link added
    },
    {
      id: 3,
      title: "Know Your Neighborhood",
      des: "Built a neighborhood info app with OAuth2 login, user profiles, and store search.",
      img: "/api.jpg",
      iconLists: ["/re.svg", "/25.svg", "/8.png", "/23.png", "/11.png"],
      link: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%2010%20-%20API/Project%20-%20Know%20Your%20Neighborhood",
      newLink: "https://adp-kyn.vercel.app/", // New link added
    },
    {
      id: 4,
      title: "Jumstart - Ecommerce Website",
      des: "Simplified e-commerce with easy signup, secure login, smooth browsing, and robust admin tools",
      img: "/cpj.png",
      iconLists: ["/5.png", "/8.png", "/3.png", "/23.png"],
      link: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%2012%20-%20CPL/Project%20-%20Jumpstart%20E-Commerce%20Site",
      newLink: "", // New link added
    },
    {
      id: 5,
      title: "AAA Hosting",
      des: "Developed a hosting services website for AAA, managing customer data for promotions and delivery",
      img: "/wfs.jpg",
      iconLists: ["/13.png", "/23.png"],
      link: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%208%20-%20WFS/Project%20-%20AAA%20Hosting",
      newLink: "", // New link added
    },
    {
      id: 6,
      title: "ABC Jobs",
      des: "Built a job portal with user registration, job search, profile editing, forums, and admin bulk emails",
      img: "/cpj.jpg",
      iconLists: ["/5.png", "/8.png", "/3.png", "/23.png"],
      link: "https://github.com/Chathu-Jayarathna/Lithan-Projects/tree/main/Module%209%20-%20ADP/Project%20-%20ABC%20Car%20Portal",
      newLink: "", // New link added
    },
  ];

  return (
    <section id="projects" className="py-1">
      <div className="py-20 w-full">
        <h1 className="text-4xl mt-12 tracking-wider md:text-6xl uppercase font-bold text-center">
          <span className="text-white">A small seclection of </span>
          <span className="text-purple-300">Recent Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title="Resources" href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-[#95a0e116] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center relative"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <div className="absolute inset-0 border-2 border-white rounded-full"></div> {/* Adding the background border */}
                        <img src={icon} alt="icon5" className="p-2 relative z-10" />
                      </div>
                    ))}
                  </div>

                  {/* Conditionally render the Visit Website button */}
                  {item.newLink && (
                    <a
                      href={item.newLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white bg-gradient-to-r from-[rgb(0,17,82)] via-[rgba(0,17,82,0.6)] to-[rgba(0,17,82,0.3)] px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[rgb(0,17,82)] hover:via-[rgba(0,17,82,0.8)] hover:to-[rgba(0,17,82,0.5)] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 active:scale-95"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
