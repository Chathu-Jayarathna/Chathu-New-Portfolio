import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 py-10", // Responsive grid: 2 on mobile, 4 on tablets, 7 on large screens
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 bg-[#8f9ac742] dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            {/* Progress bar under the card */}
            <div className="w-full h-2 bg-white mt-2 rounded-full">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-4 overflow-hidden bg-[rgb(4,7,29)] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 flex flex-col items-center justify-center", // Reduced card size to fit well on all views
        "h-40 w-40", // Fixed card size for all views, ensuring the size is consistent
        className
      )}
    >
      <div className="relative z-50 flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export const CardImage = ({ src, alt }) => {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-xl mb-4"> {/* Ensure consistent image size */}
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full" // Ensure image covers the container
      />
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide text-center text-sm", className)}>
      {children}
    </h4>
  );
};
