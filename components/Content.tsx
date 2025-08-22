import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import htmll from "@/public/htmll.png";
import tick from "@/public/tick.jpeg";
import trophy from "@/public/trophy.jpeg";
import notes from "@/public/notes.jpeg";
import { Dispatch, SetStateAction } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Target, Award, TrendingUp, BookOpen } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface dataTypes {
  rank: number;
  percentile: number;
  currentScore: number;
  totalQuestions: number;
  timeSpent: number;
  dateCompleted: string;
  testName: string;
  category: string;
}

export const Content = ({
  data,
  setData,
}: {
  data: dataTypes;
  setData: (newData: Partial<dataTypes>) => void;
}) => {
  const scorePercentage = (data.currentScore / data.totalQuestions) * 100;
  const timeEfficiency = ((data.totalQuestions * 1.5) - data.timeSpent) / (data.totalQuestions * 1.5) * 100;

  return (
    <>
      <div className="w-full space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Skill Test Dashboard</h1>
            <p className="text-gray-600">Monitor your performance and track progress</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Study Materials
            </Button>
            <Button variant="outline" size="sm">
              <Target className="w-4 h-4 mr-2" />
              Set Goals
            </Button>
          </div>
        </div>

        {/* Main Test Card */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={htmll.src} alt="HTML Logo" className="h-16 w-16 rounded-lg shadow-sm" />
                  <Badge className="absolute -top-2 -right-2 bg-green-500 text-white">
                    Completed
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">{data.testName}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(data.dateCompleted).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {data.timeSpent} mins
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="sm:ml-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Update Scores
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[600px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-bold text-xl">Update Performance Scores</DialogTitle>
                      <DialogDescription className="text-gray-600">
                        Keep your dashboard up to date with your latest test results
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                              1
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Update your Rank</p>
                              <p className="text-sm text-gray-600">Your current position among peers</p>
                            </div>
                          </div>
                          <input
                            value={data.rank}
                            onChange={(e) =>
                              setData({ rank: parseInt(e.target.value) || 0 })
                            }
                            type="number"
                            placeholder="Rank"
                            className="border p-3 rounded-lg w-32 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">
                              2
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Update your Percentile</p>
                              <p className="text-sm text-gray-600">Your performance relative to others</p>
                            </div>
                          </div>
                          <input
                            value={data.percentile}
                            onChange={(e) =>
                              setData({ percentile: parseFloat(e.target.value) || 0 })
                            }
                            type="number"
                            placeholder="Percentile"
                            className="border p-3 rounded-lg w-32 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">
                              3
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Update your Score</p>
                              <p className="text-sm text-gray-600">Correct answers out of {data.totalQuestions}</p>
                            </div>
                          </div>
                          <input
                            value={data.currentScore}
                            type="number"
                            onChange={(e) =>
                              setData({ currentScore: parseInt(e.target.value) || 0 })
                            }
                            placeholder="Score"
                            className="border p-3 rounded-lg w-32 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-3 pt-4">
                        <Button variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50">
                          Cancel
                        </Button>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Score Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Score Progress</span>
                  <span className="text-sm font-semibold text-gray-900">{scorePercentage.toFixed(1)}%</span>
                </div>
                <Progress value={scorePercentage} className="h-3" />
                <p className="text-xs text-gray-600">
                  {data.currentScore} out of {data.totalQuestions} questions correct
                </p>
              </div>
              
              {/* Time Efficiency */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Time Efficiency</span>
                  <span className="text-sm font-semibold text-gray-900">{timeEfficiency.toFixed(1)}%</span>
                </div>
                <Progress value={Math.max(0, timeEfficiency)} className="h-3" />
                <p className="text-xs text-gray-600">
                  {data.timeSpent} mins vs. {Math.round(data.totalQuestions * 1.5)} min target
                </p>
              </div>
              
              {/* Performance Level */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Performance Level</span>
                  <Badge variant={scorePercentage >= 80 ? "default" : scorePercentage >= 60 ? "secondary" : "destructive"}>
                    {scorePercentage >= 80 ? "Excellent" : scorePercentage >= 60 ? "Good" : "Needs Improvement"}
                  </Badge>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      scorePercentage >= 80 ? 'bg-green-500' : scorePercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${scorePercentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600">
                  {scorePercentage >= 80 ? "Outstanding performance!" : scorePercentage >= 60 ? "Good work, keep improving!" : "Focus on weak areas"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export const QuickStatistics = ({ data }: { data: dataTypes }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Quick Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <img src={trophy.src} className="h-12 w-8 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-800">#{data.rank}</h3>
              <p className="text-sm font-medium text-yellow-700">YOUR RANK</p>
              <p className="text-xs text-yellow-600">Among all test takers</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <img src={notes.src} className="h-12 w-8 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800">{data.percentile}%</h3>
              <p className="text-sm font-medium text-blue-700">PERCENTILE</p>
              <p className="text-xs text-blue-600">Better than {100 - data.percentile}%</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <img src={tick.src} className="h-10 w-10 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-800">{data.currentScore}/{data.totalQuestions}</h3>
              <p className="text-sm font-medium text-green-700">CORRECT ANSWERS</p>
              <p className="text-xs text-green-600">{(data.currentScore / data.totalQuestions * 100).toFixed(1)}% accuracy</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
