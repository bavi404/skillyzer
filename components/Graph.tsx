"use client";

import { TrendingUp, TrendingDown, Target, Users, Award, BarChart3 } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Area, AreaChart } from "recharts";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const chartData = [
  { per: "0", percentile: 75, score: 10, time: 18, rank: 25 },
  { per: "25", percentile: 82, score: 11, time: 16, rank: 18 },
  { per: "50", percentile: 69, score: 9, time: 20, rank: 30 },
  { per: "75", percentile: 91, score: 13, time: 14, rank: 8 },
  { per: "100", percentile: 84, score: 12, time: 15, rank: 12 },
];

const comparisonData = [
  { category: "HTML", yourScore: 12, avgScore: 10.5, improvement: "+14%" },
  { category: "CSS", yourScore: 11, avgScore: 9.8, improvement: "+12%" },
  { category: "JavaScript", yourScore: 9, avgScore: 8.2, improvement: "+10%" },
  { category: "React", yourScore: 10, avgScore: 9.5, improvement: "+5%" },
];

const chartConfig = {
  percentile: {
    label: "Your Percentile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Graph() {
  const [chartType, setChartType] = useState<'line' | 'area' | 'bar'>('line');
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('month');

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderChart = () => {
    switch (chartType) {
      case 'line':
  return (
            <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
              dataKey="per"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} labelStyle={{ color: '#374151' }} />
              <Line
              dataKey="percentile"
              type="monotone"
              stroke="#3b82f6"
              strokeWidth={3}
                dot={{
                fill: "#3b82f6",
                strokeWidth: 2,
                r: 4,
                }}
                activeDot={{
                  r: 6,
                stroke: "#3b82f6",
                strokeWidth: 2,
                }}
              />
            </LineChart>
        );
      case 'area':
        return (
          <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="per"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} labelStyle={{ color: '#374151' }} />
            <Area
              type="monotone"
              dataKey="percentile"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="#3b82f6"
              fillOpacity={0.3}
            />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="per"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} labelStyle={{ color: '#374151' }} />
            <Bar dataKey="percentile" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Chart Card */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-xl text-gray-900">Performance Comparison</CardTitle>
              <CardDescription className="text-sm text-gray-600 mt-1">
                <span className="font-semibold text-red-600">You scored 30% percentile</span> which
                is lower than the average percentile 72% of all engineers who took this assignment
              </CardDescription>
            </div>
            
            <div className="flex gap-2">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <Button
                variant={chartType === 'line' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setChartType('line')}
              >
                Line
              </Button>
              <Button
                variant={chartType === 'area' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setChartType('area')}
              >
                Area
              </Button>
              <Button
                variant={chartType === 'bar' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setChartType('bar')}
              >
                Bar
              </Button>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {renderChart()}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current Rank</p>
                <p className="text-2xl font-bold text-gray-900">#12</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Percentile</p>
                <p className="text-2xl font-bold text-green-600">84%</p>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Score</p>
                <p className="text-2xl font-bold text-purple-600">12/15</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Time Efficiency</p>
                <p className="text-2xl font-bold text-orange-600">15m</p>
              </div>
              <div className="p-2 bg-orange-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Category Performance vs Average</CardTitle>
          <CardDescription>How you compare to other test takers across different topics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {item.category.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.category}</h3>
                    <p className="text-sm text-gray-600">Your performance vs average</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">
                      {item.yourScore}/15
                    </p>
                    <p className="text-xs text-gray-600">Your Score</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-600">
                      {item.avgScore}/15
                    </p>
                    <p className="text-xs text-gray-600">Average</p>
                  </div>
                  
                  <div className="text-center">
                    <Badge variant={item.improvement.startsWith('+') ? 'default' : 'destructive'}>
                      {item.improvement}
                    </Badge>
                    <p className="text-xs text-gray-600 mt-1">Improvement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Performance Distribution</CardTitle>
          <CardDescription>See how your scores are distributed across different test attempts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Excellent (13-15)", value: 35, color: "#10b981" },
                    { name: "Good (10-12)", value: 45, color: "#3b82f6" },
                    { name: "Average (7-9)", value: 15, color: "#f59e0b" },
                    { name: "Needs Work (0-6)", value: 5, color: "#ef4444" },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { label: "Excellent", count: 8, color: "bg-green-100 text-green-800" },
              { label: "Good", count: 10, color: "bg-blue-100 text-blue-800" },
              { label: "Average", count: 3, color: "bg-yellow-100 text-yellow-800" },
              { label: "Needs Work", count: 1, color: "bg-red-100 text-red-800" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                  {item.count}
                </div>
                <p className="text-xs text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
