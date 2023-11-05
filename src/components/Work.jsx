import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "IT Support",
    duration: "1month and 30 days",
    details: "Lorem ipsum, dolor sit amet consector",
  },
  {
    year: 2011,
    title: "Network Admin (Business)",
    duration: "3years",
    details: "Lorem ipsum, dolor sit amet consector",
  },
  {
    year: 2023,
    title: "Commission",
    duration: "4months",
    details: "Lorem ipsum, dolor sit amet consector",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:plx-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
