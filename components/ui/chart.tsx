// File: src/components/ui/chart.tsx
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  ResponsiveContainer,
} from "recharts";

// ChartConfig type
export type ChartConfig = Record<string, { label: string; color: string }>;

// ChartContainer component
// File: src/components/ui/chart.tsx
export const ChartContainer = ({
    data,
    config,
    width = 500,
    height = 300,
    children, // Add this line
  }: {
    data: any[];
    config: ChartConfig;
    width?: number;
    height?: number;
    children?: React.ReactNode; // Add this line
  }) => {
    return (
      <div style={{ width, height }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            {children} {/* Render children */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            {Object.keys(config).map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={config[key].color}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  

// ChartTooltip component (if needed)
export const ChartTooltip = Tooltip;

// ChartTooltipContent component (if needed)
// File: src/components/ui/chart.tsx
export const ChartTooltipContent = ({
    payload,
    hideLabel = false, // Add hideLabel with default value
  }: {
    payload?: any[];
    hideLabel?: boolean; // Define the type
  }) => {
    if (!payload || payload.length === 0) return null;
  
    return (
      <div className="bg-white p-2 border shadow-sm">
        {!hideLabel && <h4>Data:</h4>} {/* Use hideLabel */}
        {payload.map((item) => (
          <div key={item.name} style={{ color: item.color }}>
            {item.name}: {item.value}
          </div>
        ))}
      </div>
    );
  };
  