import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

interface QuestionAnalysisProps {
  percent: number; 
  currentScore: number
}

export const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({ percent, currentScore }) => {
  
  const data = [
    { name: "Correct", value: percent },
    { name: "Incorrect", value: 1 - percent },
  ];

  const renderActiveShape = (props: PieSectorDataItem) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
    } = props;

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill={fill}
          className="text-sm font-medium"
        >
          {`${(percent)}%`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <div className="rounded-md border mt-4 p-6 max-w-xl w-full">
      <h2 className="flex justify-end min-w-4 font-extrabold text-[#8884d8]">{currentScore}/15</h2>
      <h2 className="text-lg font-bold mb-4">Question Analysis</h2>
      
      <p className="text-sm text-gray-600  mb-4">
     <span className="font-bold">You answered {currentScore} out of 15 questions correctly.</span> However it <br/>still needs improvement.
      </p>

      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              activeIndex={0}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
