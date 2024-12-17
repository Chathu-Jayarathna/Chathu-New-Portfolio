import React from 'react'
import { ContainerScroll } from "../Components/ui/container-scroll-animation";
import { StickyScroll } from "../Components/ui/sticky-scroll-reveal";
import { Button } from "../Components/ui/moving-border";
import { PinContainer } from "../Components/ui/3d-pin";
import { AnimatedTooltip } from "../Components/ui/animated-tooltip";
import { ImagesSlider } from "../Components/ui/images-slider";
import { motion } from "framer-motion";


const ceylonsilkstyle = [
    {
        id: 1,
        name: "REACT",
        image: "/react.png",
    },
    {
        id: 2,
        name: "TAILWIND",
        image: "/tailwind.png",
    },
    {
        id: 3,
        name: "ACETERNITY.UI",
        image: "/ace.png",
    },
    {
        id: 4,
        name: "MONGOBD ATLAS",
        image: "/mongodb.svg",
    },
];
const ReactTailwind = [
    {
        id: 1,
        name: "REACT",
        image: "/react.png",
    },
    {
        id: 2,
        name: "TAILWIND",
        image: "/tailwind.png",
    },
    {
        id: 3,
        name: "ACETERNITY.UI",
        image: "/ace.png",
    },

];
const Api = [
    {
        id: 1,
        name: "REACT",
        image: "/react.png",
    },
    {
        id: 2,
        name: "BOOTSTRAP",
        image: "/boot.png",
    },
    {
        id: 3,
        name: "SPRING BOOT",
        image: "/spring.png",
    },
    {
        id: 4,
        name: "MySQL",
        image: "/mysql.png",
    },


];
const Spring = [
    {
        id: 1,
        name: "SPRING BOOT",
        image: "/spring.png",
    },
    {
        id: 2,
        name: "HTML",
        image: "/html.png",
    },
    {
        id: 3,
        name: "CSS",
        image: "/css.webp",
    },
    {
        id: 4,
        name: "BOOTSTRAP",
        image: "/boot.png",
    },
    {
        id: 5,
        name: "MySQL",
        image: "/mysql.png",
    },


];
const JumpstartSpring = [
    {
        id: 1,
        name: "SPRING BOOT",
        image: "/spring.png",
    },
    {
        id: 2,
        name: "AXURE",
        image: "/axure.jfif",
    },
    {
        id: 3,
        name: "MYSQL",
        image: "/mysql.png",
    },
    {
        id: 4,
        name: "BOOTSTRAP",
        image: "/boot.png",
    },


];
const Html = [
    {
        id: 1,
        name: "HTML",
        image: "/html.png",
    },
    {
        id: 2,
        name: "CSS",
        image: "/css.webp",
    },
    {
        id: 3,
        name: "JAVASCRIPT",
        image: "/js.png",
    },


];
const Liferay = [
    {
        id: 1,
        name: "HTML",
        image: "/html.png",
    },
    {
        id: 2,
        name: "CSS",
        image: "/css.webp",
    },
    {
        id: 3,
        name: "LIFERAY",
        image: "/liferay.png",
    },


];
const Ui = [
    {
        id: 1,
        name: "AXURE",
        image: "/axure.jfif",
    },
];
const Power = [
    {
        id: 1,
        name: "POWER BI",
        image: "/powerlogo.png",
    },
];
const Mysql = [
    {
        id: 1,
        name: "MySQL",
        image: "/mysql.png",
    },
];
const Java = [
    {
        id: 1,
        name: "JAVA",
        image: "/java.jpg",
    },
];

const content = [

    {
        title: "Ceylon Slik Style",
        description: (
            <div>
                <p className='mb-5'>
                    Ceylon Silk Style is an e-commerce platform where users can explore and shop a curated selection of premium silk products, showcasing the elegance and craftsmanship of Ceylonese silk artisans.
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={ceylonsilkstyle} />
                </div>
                <Button
                    borderRadius="1rem"
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                   <a href='https://ceylon-silk-style.vercel.app/'>Demo</a>
                </Button>
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/Ceylon-Silk-Style'>Source Code</a>
                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/Ceylon-Silk-Style"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0">
                    <img
                        src="ceylonsilkstyle.png"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "New Regal Fitness Club",
        description: (
            <div>
                <p className='mb-5'>
                    New Regal Fitness Club is a platform where users can explore and join premium fitness programs, focusing on health, strength, and well-being
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={ReactTailwind} />
                </div>
                <Button
                    borderRadius="1rem"
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <a href='https://new-regal-fitness-club.vercel.app/'>Demo</a>
                </Button>

                <button className="p-[3px]  relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/NewRegalFitness'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/NewRegalFitness"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/newregal.png"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "Know You Neighborhood",
        description: (
            <div>
                <p className='mb-5'>
                    Know Your Neighborhood is a platform where users can discover and post local stores, making it easy to find businesses nearby
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Api} />
                </div>
                <Button
                    borderRadius="1rem"
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <a href='https://devindastallone.github.io/KYN/'>Demo</a>
                </Button>

                <button className="p-[3px]  relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/Know-Your-Neighbourhood'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/Know-Your-Neighbourhood"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/kyn.jpg"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "Meals On Wheels",
        description: (
            <div>
                <p className='mb-5'>
                    Meals On Wheels is a platform where users can order meals online, operated by a charitable organization dedicated to providing food services.
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Api} />
                </div>
                <Button
                    borderRadius="1rem"
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <a href='https://meals-on-wheels-chi.vercel.app/'>Demo</a>
                </Button>

                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/MealsOnWheels'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/MealsOnWheels"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/mealsonwheels.jpg"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "ABC Learning Center",
        description: (
            <div>
                <p className='mb-5'>
                    ABC Learning Center is a simple website to know about the details of the University
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Html} />
                </div>
                <Button
                    borderRadius="1rem"
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <a href='https://devindastallone.github.io/ABC-Learning.github.io/'>Demo</a>
                </Button>

                <button className="p-[3px]  relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/ABC-Learning.github.io'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/ABC-Learning.github.io"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/abclearning.jpg"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "ABC Car Portal",
        description: (
            <div>
                <p className='mb-5'>

                    ABC Car Portal is a platform designed for selling cars, allowing customers to book test drives or place bids on their desired vehicles.
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Spring} />
                </div>
                

                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/ABC-Car-Portal'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/ABC-Car-Portal"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/abccar.jpg"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "ABC Job Portal",
        description: (
            <div>
                <p className='mb-5'>
                    ABC Job Portal is a web application desgin same as the LinkedIn which you can search for jobs and apply
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Spring} />
                </div>
                

                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/ABC-Jobs'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/ABC-Jobs"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/abcjobs.jpg"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>
        ),
    },
    {
        title: "AAA Hosting ",
        description: (
            <div>
                <p className='mb-5'>

                    AAA Hosting is a hosting website which supplies all kind of hosting services like domain name registration, shared hosting, reseller hosting, Cloud Hosting, VPS hosting, dedicated hosting, and colocation services.
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Liferay} />
                </div>
                

                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/AAA-Hosting-Liferay'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/AAA-Hosting-Liferay"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/aaahosting.jpg"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "Jumpstart",
        description: (
            <div>
                <p className='mb-5'>
                    Jumpstart is an e commerce website where the users can explore and buy anyitems they like, the website contains all type of items like Furnitures, Electronics, Clothes and so on.
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={JumpstartSpring} />
                </div>
                
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/Jumpstart'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/Jumpstart"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/jumpstart.png"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "Ui / Ux",
        description: (
            <div>
                <p className='mb-5'>
                    A ProtoType Developed for a Community Portal using Axure RP 10 Design and Develop
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Ui} />
                </div>
                

                <button className="p-[3px]  relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/ABCJobPortal-UI-UX-Axure'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/ABCJobPortal-UI-UX-Axure"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/ui.png"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "Power BI",
        description: (
            <div>
                <p className='mb-5'>
                    Data Analytic Dashboard created and organized using the Microsoft Power BI Data Analytic Tool
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Power} />
                </div>
                
                <button className="p-[3px]  relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/PowerBI'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/PowerBI"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/powerbi.png"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "DataBase Management",
        description: (
            <div>
                <p className='mb-5'>
                    Community portal's database system Developed using MySQL 8.0, a mainstream database application chosen for its reliability and suitability for our development needs.
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Mysql} />
                </div>
                

                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/DB-Management'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/DB-Management"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/dbmanage.png"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
    {
        title: "MCQ System",
        description: (
            <div>
                <p className='mb-5'>
                    MCQ System is a system created to complete a MCQ test of 4 different learning streams
                </p>
                <div className="flex flex-row items-center justify-start mb-5 w-full">
                    <AnimatedTooltip items={Java} />
                </div>
                

                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    <a href='https://github.com/DevindaStallone/MCQ-System'>Source Code</a>

                    </div>
                </button>
            </div>
        ),
        content: (
            <PinContainer
                title="Source Code"
                href="https://github.com/DevindaStallone/MCQ-System"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[40rem] md:h-[20rem] w-[25rem] left-2 md:ml-0 ">
                    <img
                        src="/mcq.png"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                        alt="original image"
                    />
                </div>
            </PinContainer>

        ),
    },
];

const images = [
    "/Css.png",
    "/regal.png", 
];

const Projects = () => {
    return (
        <div id='projects' className=''>
            <div className="flex flex-col overflow-hidden ">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                Recent  <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none italic">
                                    Project
                                </span>
                            </h1>
                        </>
                    }
                >
                    <ImagesSlider className="" images={images}>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -80,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="z-50 flex flex-col justify-center items-center"
                        >
                           
                        </motion.div>
                    </ImagesSlider>
                </ContainerScroll>
            </div>
            <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center">
                My  <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none italic">
                    Work
                </span>
            </h1>

            <div className="p-7 md:p-10 ">
                <StickyScroll content={content} />
            </div>
        </div>
    )
}

export default Projects  




