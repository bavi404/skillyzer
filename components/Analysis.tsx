import React from "react";
import { Progress } from "../components/ui/progress";

export const Analysis = () => {
  const syllabusData = [
    { topic: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500" },
    {
      topic: "Tags & References in HTML",
      progress: 60,
      color: "bg-orange-500",
    },
    { topic: "Tables & References in HTML", progress: 24, color: "bg-red-500" },
    { topic: "Tables & CSS Basics", progress: 96, color: "bg-green-500" },
  ];

  return (
    <div className="p-6 rounded-md border min-w-[500px]">
      <h1 className="font-bold text-xl mb-6">Syllabus Wise Analysis</h1>
      {syllabusData.map((item, index) => (
        <div key={index} className="mb-4 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold">{item.topic}</h2>
            <span className="text-sm font-medium">{item.progress}%</span>
          </div>
          <div className="relative w-full h-2 mt-2 rounded-md overflow-hidden bg-gray-200">
            <div
              className={`absolute top-0 left-0 h-full rounded-md ${item.color}`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
