import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Target, Calendar, Award, Clock, Zap } from 'lucide-react';
import { TestData } from '@/app/page';

interface PerformanceTrendsProps {
  data: TestData;
}

interface TrendData {
  date: string;
  score: number;
  percentile: number;
  rank: number;
  timeSpent: number;
}

interface CategoryPerformance {
  category: string;
  averageScore: number;
  totalTests: number;
  improvement: number;
}

export const PerformanceTrends: React.FC<PerformanceTrendsProps> = ({ data }) => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('month');
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  // Mock data for trends
  const trendData: TrendData[] = [
    { date: '2024-01-01', score: 8, percentile: 65, rank: 25, timeSpent: 18 },
    { date: '2024-01-08', score: 10, percentile: 72, rank: 18, timeSpent: 15 },
    { date: '2024-01-15', score: 12, percentile: 78, rank: 12, timeSpent: 14 },
    { date: '2024-01-22', score: 11, percentile: 75, rank: 15, timeSpent: 16 },
    { date: '2024-01-29', score: 13, percentile: 82, rank: 8, timeSpent: 13 },
    { date: '2024-02-05', score: 14, percentile: 88, rank: 5, timeSpent: 12 },
    { date: '2024-02-12', score: 15, percentile: 95, rank: 2, timeSpent: 11 },
  ];

  const categoryData: CategoryPerformance[] = [
    { category: 'Web Development', averageScore: 13.2, totalTests: 8, improvement: 15 },
    { category: 'Programming', averageScore: 11.8, totalTests: 6, improvement: 8 },
    { category: 'Frontend', averageScore: 12.5, totalTests: 5, improvement: 12 },
    { category: 'Backend', averageScore: 10.3, totalTests: 4, improvement: 5 },
  ];

  const getImprovementColor = (value: number) => {
    if (value > 10) return 'text-green-600';
    if (value > 5) return 'text-blue-600';
    if (value > 0) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getImprovementIcon = (value: number) => {
    if (value > 10) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (value > 5) return <TrendingUp className="w-4 h-4 text-blue-600" />;
    if (value > 0) return <TrendingUp className="w-4 h-4 text-yellow-600" />;
    return <TrendingDown className="w-4 h-4 text-red-600" />;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Trends</h1>
          <p className="text-gray-600">Track your progress and identify improvement areas</p>
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
          
          <Button
            variant={chartType === 'line' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('line')}
          >
            Line
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

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Score Trend</p>
                <p className="text-2xl font-bold text-green-600">
                  +{trendData[trendData.length - 1].score - trendData[0].score}
                </p>
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
                <p className="text-sm font-medium text-gray-600">Percentile Gain</p>
                <p className="text-2xl font-bold text-blue-600">
                  +{trendData[trendData.length - 1].percentile - trendData[0].percentile}%
                </p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rank Improvement</p>
                <p className="text-2xl font-bold text-purple-600">
                  #{trendData[0].rank} → #{trendData[trendData.length - 1].rank}
                </p>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Time Efficiency</p>
                <p className="text-2xl font-bold text-orange-600">
                  -{trendData[0].timeSpent - trendData[trendData.length - 1].timeSpent}min
                </p>
              </div>
              <div className="p-2 bg-orange-100 rounded-lg">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Score Progression Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'line' ? (
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={formatDate}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis domain={[0, 15]} />
                  <Tooltip 
                    labelFormatter={formatDate}
                    formatter={(value: any, name: string) => [value, name === 'score' ? 'Score' : name]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              ) : (
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={formatDate}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis domain={[0, 15]} />
                  <Tooltip 
                    labelFormatter={formatDate}
                    formatter={(value: any, name: string) => [value, name === 'score' ? 'Score' : name]}
                  />
                  <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Category Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Performance by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {category.category.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{category.category}</h3>
                    <p className="text-sm text-gray-600">{category.totalTests} tests taken</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">
                      {category.averageScore.toFixed(1)}/15
                    </p>
                    <p className="text-sm text-gray-600">Avg Score</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      {getImprovementIcon(category.improvement)}
                      <span className={`text-lg font-semibold ${getImprovementColor(category.improvement)}`}>
                        +{category.improvement}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Improvement</p>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-green-800">Strong Improvement Trend</h4>
                <p className="text-sm text-green-700">
                  Your score has improved by {trendData[trendData.length - 1].score - trendData[0].score} points 
                  over the last {timeRange === 'week' ? 'week' : timeRange === 'month' ? 'month' : 'quarter'}.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-800">Rank Climbing</h4>
                <p className="text-sm text-blue-700">
                  You've moved from rank #{trendData[0].rank} to #{trendData[trendData.length - 1].rank}, 
                  showing consistent improvement in your peer group.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800">Time Efficiency</h4>
                <p className="text-sm text-yellow-700">
                  You're completing tests faster while maintaining high scores, 
                  indicating improved knowledge retention and problem-solving speed.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


