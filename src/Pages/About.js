import React from 'react'
import { BentoGrid, BentoGridItem } from "../Components/ui/bento-grid";
import { FaHtml5, FaCss3Alt, FaJava, FaBootstrap, FaJs, FaDatabase, FaReact } from 'react-icons/fa';

const About = () => {
  return (
    <div id='about' className='mx-12 md:mx-0'>
      <BentoGrid className="w-full py-20 text-white ">
        {items.map((item, i) => (
          <BentoGridItem
            kid={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default About

const Progress = () => (
  <div>
    <div class="space-y-5 mt-5 md:mt-36 md:w-72 w-full">
      <h2 class="uppercase font-bold italic">English</h2>
      <div class="flex w-full h-4 bg-gray-500 rounded-sm overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
        <div class="flex flex-col justify-center rounded-sm overflow-hidden bg-blue-800 font-bold text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500" style={{ width: "90%" }}>90%</div>
      </div>
      <h2 class="uppercase font-bold italic">Sinhala</h2>

      <div class="flex w-full h-4 bg-zinc-950 rounded-sm overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="flex flex-col justify-center rounded-sm overflow-hidden bg-blue-800 text-xs text-white font-bold text-center whitespace-nowrap dark:bg-blue-500 transition duration-500" style={{ width: "100%" }}>100%</div>
      </div>

    </div>
  </div>
);

const PersonalInfo = () => {
  const birthdate = "15 February 2003";
  const phone = "+94 75 709 90 55";
  const city = "Chilaw, Sri Lanka";
  const age = 21;
  const email = "devindathamel15@gmail.com";

  return (
    <div className="w-72 mt-12 text-white bg-gradient-to-r from-indigo-700  shadow-md rounded-lg p-6 ">

      <div className="mb-4">
        <span className="block text-xl font-bold uppercase dark:text-gray-400">Birthday:</span>
        <p className="text-lg  dark:text-gray-200">{birthdate}</p>
      </div>

      <div className="mb-4">
        <span className="block text-xl font-bold uppercase dark:text-gray-400">Phone:</span>
        <p className="text-lg  dark:text-gray-200">{phone}</p>
      </div>

      <div className="mb-4">
        <span className="block text-xl font-bold uppercase dark:text-gray-400">City:</span>
        <p className="text-lg  dark:text-gray-200">{city}</p>
      </div>

      <div className="mb-4">
        <span className="block text-xl font-bold uppercase dark:text-gray-400">Age:</span>
        <p className="text-lg  dark:text-gray-200">{age}</p>
      </div>

      <div>
        <span className="block text-xl font-bold uppercase dark:text-gray-400">Email:</span>
        <a
          href={`mailto:${email}`}
          className="text-lg   dark:text-blue-400 hover:underline"
        >
          {email}
        </a>
      </div>
    </div>
  );
};

const Skills = () => {

  const skills1 = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'React', level: 80 },
    { name: 'Java', level: 70 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Tailwind', level: 90 },
    { name: 'Spring Boot', level: 60 },
    { name: 'Aceternity UI', level: 75 },


  ];


  return (
    <div className=" mt-3 text-white p-4 w-full md:w-80  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg  border border-white border-opacity-30">
      <div className="md:space-y-1 space-y-2">
        {skills1.map((skill) => (
          <div key={skill.name} className="flex items-center grid md:grid-cols-2 gap-1 grid-cols-1">
            <span className="w-1/2 text-lg">{skill.name}</span>
            <div>
              <div className="relative w-3/4 bg-gray-500 rounded-full h-4">
                <div
                  className={`absolute top-0 left-0 h-full bg-blue-700 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="ml-2">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
const Interests = () => {
  return (
    <div className=" mt-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg  border border-white border-opacity-30 text-white p-1 md:w-80 w-full">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-1">
        <div className="bg-gray-800 p-2 rounded-md flex items-center">
          <FaHtml5 className="text-orange-500 text-lg mr-2" />
          <span>HTML</span>
        </div>
        <div className="bg-gray-800 p-2 rounded-md flex items-center">
          <FaCss3Alt className="text-blue-500 text-lg mr-2" />
          <span>CSS</span>
        </div>
        <div className="bg-gray-800 p-2 rounded-md flex items-center">
          <FaJava className="text-red-600 text-lg mr-2" />
          <span>Java</span>
        </div>
        <div className="bg-gray-800 p-2 rounded-md flex items-center">
          <FaBootstrap className="text-purple-600 text-lg mr-2" />
          <span>Bootstrap</span>
        </div>
        <div className="bg-gray-800 p-2 rounded-md flex items-center">
          <FaJs className="text-yellow-500 text-lg mr-2" />
          <span>JavaScript</span>
        </div>
        <div className="bg-gray-800 p-2 rounded-md flex items-center">
          <FaDatabase className="text-cyan-500 text-lg mr-2" />
          <span>MySQL</span>
        </div>
        <div className="bg-gray-800 p-2 rounded-md flex items-center">
          <FaReact className="text-blue-400 text-lg mr-2" />
          <span>React Js</span>
        </div>
        <div className="bg-gray-800 p-2 rounded-md flex items-center">
          <FaDatabase className="text-green-500 text-lg mr-2" />
          <span>Spring Boot</span>
        </div>

      </div>
    </div>
  );
};
const Email = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Devinda_Stallone_Resume.pdf";
    link.setAttribute("download", "Chathu Jayarathna Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="">
      <div className="">
        <button
          onClick={handleDownload}

          className="relative w-52 mt-5 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Download My Resume &#x1F447;
          </span>
        </button>


      </div>
    </div>
  );

};

const Education = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 w-[70rem] max-w-screen mx-auto ">
  {/* <!-- Row 1 Column 1 --> */}
  <div class="glassmorphism bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg flex flex-col justify-between">
    <h3 class="font-bold text-zinc-800 text-xl">Bachelor of Science (Hons) in Computer Science (Top-Up)</h3>
    <p class="italic">University of Roehampton | London</p>
    <span class="italic text-sky-500 ">2022-Present</span>
  </div>

  {/* <!-- Row 1 Column 2 --> */}
  <div class="glassmorphism bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg  flex flex-col justify-between">
    <h3 class="font-bold text-zinc-800 text-xl">Higher National Diploma in Software Engineering</h3>
    <p class="italic">Lithan Academy | Singapore</p>
    <span class="italic text-sky-500 ">2022-Present</span>
  </div>

  {/* <!-- Row 2 Column 1 --> */}
  <div class="glassmorphism bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg flex flex-col justify-between">
    <h3 class="font-bold text-zinc-800 text-xl">Cambridge International GCE AS Level (Math Stream)</h3>
    <p class="italic">Broad Vision International School | Mahawewa, Sri lanka</p>
    <span class="italic text-sky-500 ">2021</span>
  </div>

  {/* <!-- Row 2 Column 2 --> */}
  <div class="glassmorphism bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg flex flex-col justify-between">
    <h3 class="font-bold text-zinc-800 text-xl">Cambridge International IGCSE O Level</h3>
    <p class="italic">Broad Vision International School | Mahawewa, Sri lanka</p>
    <span class="italic text-sky-500">2019</span>
  </div>
</div>



  )
}



const items = [
  {
    id: 1,
    title: "I'm an enthusiastic, self-motivated individual with strong communication and responsibility-handling skills.",
    description: "",
    className: "lg:col-span-2  md:row-span-2 h-[50vh] md:h-full",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-end  md:top-0 top-72 relative",
    img: "/me.JPG",
    spareImg: "",

  },
  {
    id: 2,
    title: "I possess strong responsibility-handling and communication skills",
    description: <Progress />,
    className: "lg:col-span-1 md:row-span-2",
    imgClassName: "opacity-20 w-full h-full ",
    titleClassName: "justify-start",
    img: "/bg-pattern1.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Personal Details",
    description: <PersonalInfo />,
    className: "lg:col-span-1  md:row-span-2 ",
    imgClassName: "opacity-20 w-full h-full ",
    titleClassName: "justify-start",
    img: "bg-pattern2.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Skill",
    description: <Skills />,
    className: "lg:col-span-1  md:row-span-2 ",
    imgClassName: "opacity-20 h-full w-full",
    titleClassName: "justify-start",
    img: "bg-pattern3.jpg",
    spareImg: "",
  },

  {
    id: 5,
    title: "Interests",
    description: <Interests />,
    className: "lg:col-span-  md:row-span-1",
    imgClassName: "w-full h-full opacity-20",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "bg-pattern4.jpg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: <Email />,
    className: "lg:col-span-  md:row-span-1",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "bg-pattern5.png",
    spareImg: "",
  },
  {
    id: 7,
    title: "Education",
    description: <Education />,
    className: "lg:col-span-3  md:row-span-1",
    imgClassName: "opacity-50 w-full h-full ",
    titleClassName: "justify-start",
    img: "bg-pattern1.jpg",
    spareImg: "",
  },


];