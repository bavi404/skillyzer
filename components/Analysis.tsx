import React, { useState } from "react";
import { Progress } from "../components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { TrendingUp, TrendingDown, Target, BookOpen, AlertCircle, CheckCircle } from "lucide-react";

export const Analysis = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const syllabusData = [
    { 
      topic: "HTML Tools, Forms, History", 
      progress: 80, 
      color: "bg-blue-500",
      questions: 12,
      correct: 10,
      timeSpent: 8,
      difficulty: "medium",
      lastAttempted: "2024-01-15",
      improvement: "+15%"
    },
    {
      topic: "Tags & References in HTML",
      progress: 60,
      color: "bg-orange-500",
      questions: 8,
      correct: 5,
      timeSpent: 6,
      difficulty: "hard",
      lastAttempted: "2024-01-10",
      improvement: "+8%"
    },
    { 
      topic: "Tables & References in HTML", 
      progress: 24, 
      color: "bg-red-500",
      questions: 6,
      correct: 2,
      timeSpent: 4,
      difficulty: "easy",
      lastAttempted: "2024-01-05",
      improvement: "-5%"
    },
    { 
      topic: "Tables & CSS Basics", 
      progress: 96, 
      color: "bg-green-500",
      questions: 10,
      correct: 9,
      timeSpent: 7,
      difficulty: "medium",
      lastAttempted: "2024-01-12",
      improvement: "+22%"
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return <CheckCircle className="w-4 h-4" />;
      case 'medium': return <Target className="w-4 h-4" />;
      case 'hard': return <AlertCircle className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-600';
    if (progress >= 60) return 'text-yellow-600';
    if (progress >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getProgressIcon = (progress: number) => {
    if (progress >= 80) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (progress >= 60) return <TrendingUp className="w-4 h-4 text-yellow-600" />;
    if (progress >= 40) return <TrendingDown className="w-4 h-4 text-orange-600" />;
    return <TrendingDown className="w-4 h-4 text-red-600" />;
  };

  const overallProgress = syllabusData.reduce((acc, item) => acc + item.progress, 0) / syllabusData.length;

  return (
    <Card className="min-w-[500px]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-gray-900">Syllabus Wise Analysis</CardTitle>
            <p className="text-sm text-gray-600 mt-1">Track your progress across different topics</p>
          </div>
          <Badge variant="outline" className="text-sm">
            Overall: {overallProgress.toFixed(0)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {syllabusData.map((item, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md ${
              selectedCategory === item.topic 
                ? 'border-blue-300 bg-blue-50' 
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            onClick={() => setSelectedCategory(selectedCategory === item.topic ? null : item.topic)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-semibold text-gray-900">{item.topic}</h3>
                <Badge className={`text-xs ${getDifficultyColor(item.difficulty)}`}>
                  <div className="flex items-center gap-1">
                    {getDifficultyIcon(item.difficulty)}
                    {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
                  </div>
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${getProgressColor(item.progress)}`}>
                  {item.progress}%
                </span>
                {getProgressIcon(item.progress)}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="relative w-full h-3 rounded-full overflow-hidden bg-gray-200">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${item.color}`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{item.correct}/{item.questions}</p>
                  <p>Questions</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{item.timeSpent}m</p>
                  <p>Time</p>
                </div>
                <div className="text-center">
                  <p className={`font-semibold ${
                    item.improvement.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.improvement}
                  </p>
                  <p>Progress</p>
                </div>
              </div>
            </div>

            {/* Expanded Details */}
            {selectedCategory === item.topic && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Attempted:</span>
                  <span className="font-medium">{new Date(item.lastAttempted).toLocaleDateString()}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Study Topic
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Target className="w-3 h-3 mr-1" />
                    Practice Test
                  </Button>
                </div>
                
                <div className="text-xs text-gray-600">
                  {item.progress >= 80 ? (
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      Excellent! You've mastered this topic.
                    </div>
                  ) : item.progress >= 60 ? (
                    <div className="flex items-center gap-2 text-yellow-700">
                      <Target className="w-4 h-4" />
                      Good progress! Keep practicing to improve.
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-700">
                      <AlertCircle className="w-4 h-4" />
                      This topic needs more attention. Focus on fundamentals.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
