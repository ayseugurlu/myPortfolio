"use client";

import useIntersectionObserver from "@/helpers/hooks/useIntersectionObserver";
import CalendarIcon from "../app/ui/svg/CalendarIcon";
import AcademicCap from "@/app/ui/svg/AcademicCap";
import BriefCase from "@/app/ui/svg/BriefCase";
import Power from "@/app/ui/svg/Power";
import Location from "@/app/ui/svg/Location";

// Simple badge component instead of importing from shadcn/ui
const SimpleBadge = ({ children, className }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}
    >
      {children}
    </div>
  );
};

const TimelineItem = ({
  startYear,
  endYear,
  title,
  subtitle,
  location,
  achievements,
  position,
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  // Determine animation classes based on position and visibility
  const animationClasses = isVisible
    ? "opacity-100 translate-x-0"
    : position === "left"
    ? "opacity-0 -translate-x-20"
    : "opacity-0 translate-x-20";

  return (
    <div className=" relative flex items-center justify-center my-8">
      <div
        ref={ref}
        className={`w-full md:w-5/12 ${
          position === "left" ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        } 
                 transition-all duration-1000 ease-out ${animationClasses}`}
      >
        <div className="bg-gradient-to-r from-secondaryBackground to-violettBackground  rounded-lg shadow-md p-6">
          <div className="flex items-center mb-2">
            <div>
              <CalendarIcon />
            </div>
            <SimpleBadge className="bg-textWhite text-secondaryBackground ml-2">
              {startYear} - {endYear}
            </SimpleBadge>
          </div>

          <div className="flex items-center mb-2">
            {position === "left" ? <AcademicCap /> : <BriefCase />}
            <h3 className="font-bold text-lg ml-2">{title}</h3>
          </div>
          <div className="flex items-center mb-2">
            <Power /> <p className="text-textWhite mb-2 ml-2">{subtitle}</p>
          </div>

          <div className="flex items-center text-sm text-textWhite/70 mb-3">
            <div className="mr-1 flex items-center justify-center">
              <Location />
            </div>
            <span>{location}</span>
          </div>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div
          className={`w-4 h-4 bg-purple-600 rounded-full z-10 transition-all duration-500 ${
            isVisible ? "scale-100" : "scale-0"
          }`}
        ></div>
        <div className="h-full w-0.5 bg-gray-300 absolute z-0"></div>
      </div>
    </div>
  );
};

export default TimelineItem;
