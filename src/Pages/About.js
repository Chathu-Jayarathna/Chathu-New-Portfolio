
import { BentoGrid, BentoGridItem } from "../Components/ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <div className="py-20 px-5 md:px-20">
      <BentoGrid className="w-full py-1">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/profile.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Personal Details",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/grid.svg",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-1 md:col-span-3 md:row-span-2 lg:min-h-[70vh]",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
    {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:min-h-[70vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/grid.svg",
  },

  {
    id: 4,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Are you interested in knowing more about me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
