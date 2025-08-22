import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Clock, Target, TrendingUp, BookOpen } from "lucide-react";

interface QuestionAnalysisProps {
  percent: number; 
  currentScore: number;
}

export const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({ percent, currentScore }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const totalQuestions = 15;
  const incorrectAnswers = totalQuestions - currentScore;
  const accuracy = (currentScore / totalQuestions) * 100;
  
  const data = [
    { name: "Correct", value: currentScore, color: "#10b981" },
    { name: "Incorrect", value: incorrectAnswers, color: "#ef4444" },
  ];

  const questionBreakdown = [
    { type: "Easy", correct: 6, total: 6, percentage: 100, color: "bg-green-500" },
    { type: "Medium", correct: 3, total: 6, percentage: 50, color: "bg-yellow-500" },
    { type: "Hard", correct: 1, total: 3, percentage: 33, color: "bg-red-500" },
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
          className="text-lg font-bold"
        >
          {accuracy.toFixed(1)}%
        </text>
        <text
          x={cx}
          y={cy}
          dy={25}
          textAnchor="middle"
          fill="#6b7280"
          className="text-sm"
        >
          Accuracy
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

  const getPerformanceLevel = (accuracy: number) => {
    if (accuracy >= 90) return { level: "Excellent", color: "bg-green-100 text-green-800 border-green-200", icon: <CheckCircle className="w-4 h-4" /> };
    if (accuracy >= 75) return { level: "Good", color: "bg-blue-100 text-blue-800 border-blue-200", icon: <Target className="w-4 h-4" /> };
    if (accuracy >= 60) return { level: "Average", color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: <Clock className="w-4 h-4" /> };
    return { level: "Needs Improvement", color: "bg-red-100 text-red-800 border-red-200", icon: <XCircle className="w-4 h-4" /> };
  };

  const performanceLevel = getPerformanceLevel(accuracy);

  return (
    <div className="space-y-6">
      {/* Main Score Card */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-gray-900">Question Analysis</CardTitle>
              <p className="text-sm text-gray-600 mt-1">Detailed breakdown of your test performance</p>
            </div>
            <Badge className={`text-sm ${performanceLevel.color}`}>
              <div className="flex items-center gap-1">
                {performanceLevel.icon}
                {performanceLevel.level}
              </div>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pie Chart */}
            <div className="space-y-4">
              <div className="h-64">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      onMouseEnter={(_, index) => setActiveIndex(index)}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {currentScore}/{totalQuestions} Questions
                </p>
                <p className="text-sm text-gray-600">
                  You answered <span className="font-semibold text-green-600">{currentScore}</span> out of {totalQuestions} questions correctly.
                </p>
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Performance Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Correct Answers</span>
                    </div>
                    <span className="text-lg font-bold text-green-700">{currentScore}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span className="text-sm font-medium text-red-800">Incorrect Answers</span>
                    </div>
                    <span className="text-lg font-bold text-red-700">{incorrectAnswers}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Accuracy Rate</span>
                    </div>
                    <span className="text-lg font-bold text-blue-700">{accuracy.toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">By Difficulty Level</h3>
                {questionBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">{item.type}</span>
                      <span className="font-semibold text-gray-900">
                        {item.correct}/{item.total} ({item.percentage}%)
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Insights and Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accuracy >= 80 ? (
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">Outstanding Performance!</h4>
                  <p className="text-sm text-green-700">
                    You've demonstrated excellent understanding of the material. Consider taking more advanced tests 
                    or helping others improve their skills.
                  </p>
                </div>
              </div>
            ) : accuracy >= 60 ? (
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Good Progress, Keep Improving!</h4>
                  <p className="text-sm text-blue-700">
                    You're on the right track! Focus on the areas where you made mistakes and practice 
                    similar questions to strengthen your understanding.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800">Focus on Fundamentals</h4>
                  <p className="text-sm text-yellow-700">
                    This test revealed some knowledge gaps. Review the basic concepts, practice with 
                    simpler questions first, and gradually increase difficulty.
                  </p>
                </div>
              </div>
            )}

            {/* Action Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <BookOpen className="w-4 h-4 mr-2" />
                Review Study Materials
              </Button>
              <Button variant="outline" className="w-full">
                <Target className="w-4 h-4 mr-2" />
                Take Practice Test
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Improvement Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Improvement Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {questionBreakdown.map((item, index) => (
              <div key={index} className={`p-4 rounded-lg border ${
                item.percentage >= 80 ? 'bg-green-50 border-green-200' :
                item.percentage >= 60 ? 'bg-yellow-50 border-yellow-200' :
                'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{item.type} Questions</h4>
                  <Badge variant={item.percentage >= 80 ? "default" : item.percentage >= 60 ? "secondary" : "destructive"}>
                    {item.percentage}%
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">
                  {item.percentage >= 80 
                    ? `Excellent! You've mastered ${item.type.toLowerCase()} questions.`
                    : item.percentage >= 60
                    ? `Good progress on ${item.type.toLowerCase()} questions. Keep practicing to improve.`
                    : `${item.Type} questions need more attention. Focus on understanding the fundamentals.`
                  }
                </p>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Study {item.type}
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Practice {item.type}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
