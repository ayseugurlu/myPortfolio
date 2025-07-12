"use client";

import { timelineData } from "@/helpers/data/timelineData";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <section className="bg-primaryBackground py-12 px-4 mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold uppercase text-white mb-8">
            My Journey
          </h1>
          <div className="flex text-nowrap justify-between">
            <p className="text-textWhite/80 uppercase">Education</p>
            <p className="text-textWhite/80 uppercase">
              Professional Experience
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute h-full w-0.5 bg-gray-300 left-1/2 transform -translate-x-1/2 z-0"></div>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
