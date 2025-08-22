import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, TrendingUp, Award, Filter } from 'lucide-react';

interface TestRecord {
  id: string;
  testName: string;
  category: string;
  score: number;
  totalQuestions: number;
  percentile: number;
  rank: number;
  timeSpent: number;
  dateCompleted: string;
  status: 'passed' | 'failed' | 'incomplete';
}

export const TestHistory: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'passed' | 'failed'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'score' | 'percentile'>('date');

  const mockData: TestRecord[] = [
    {
      id: '1',
      testName: 'HTML Fundamentals',
      category: 'Web Development',
      score: 14,
      totalQuestions: 15,
      percentile: 95,
      rank: 2,
      timeSpent: 12,
      dateCompleted: '2024-01-15',
      status: 'passed'
    },
    {
      id: '2',
      testName: 'CSS Styling',
      category: 'Web Development',
      score: 12,
      totalQuestions: 15,
      percentile: 78,
      rank: 15,
      timeSpent: 14,
      dateCompleted: '2024-01-10',
      status: 'passed'
    },
    {
      id: '3',
      testName: 'JavaScript Basics',
      category: 'Programming',
      score: 8,
      totalQuestions: 15,
      percentile: 45,
      rank: 45,
      timeSpent: 18,
      dateCompleted: '2024-01-05',
      status: 'failed'
    },
    {
      id: '4',
      testName: 'React Fundamentals',
      category: 'Frontend',
      score: 11,
      totalQuestions: 15,
      percentile: 72,
      rank: 22,
      timeSpent: 16,
      dateCompleted: '2023-12-28',
      status: 'passed'
    }
  ];

  const filteredData = mockData.filter(record => {
    if (filter === 'all') return true;
    return record.status === filter;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime();
      case 'score':
        return b.score - a.score;
      case 'percentile':
        return b.percentile - a.percentile;
      default:
        return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'failed':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'incomplete':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <Award className="w-4 h-4" />;
      case 'failed':
        return <TrendingUp className="w-4 h-4" />;
      case 'incomplete':
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Test History</h1>
          <p className="text-gray-600">Track your learning progress over time</p>
        </div>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Tests</option>
              <option value="passed">Passed</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Sort by Date</option>
            <option value="score">Sort by Score</option>
            <option value="percentile">Sort by Percentile</option>
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tests</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.length}</p>
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
                <p className="text-sm font-medium text-gray-600">Pass Rate</p>
                <p className="text-2xl font-bold text-green-600">
                  {Math.round((mockData.filter(t => t.status === 'passed').length / mockData.length) * 100)}%
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
                <p className="text-sm font-medium text-gray-600">Avg Score</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(mockData.reduce((acc, t) => acc + t.score, 0) / mockData.length)}/15
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
                <p className="text-sm font-medium text-gray-600">Best Rank</p>
                <p className="text-2xl font-bold text-gray-900">
                  #{Math.min(...mockData.map(t => t.rank))}
                </p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Records */}
      <div className="space-y-4">
        {sortedData.map((record) => (
          <Card key={record.id} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{record.testName}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(record.status)}
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </div>
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{record.category}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(record.dateCompleted).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {record.timeSpent} mins
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Rank #{record.rank}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {record.score}/{record.totalQuestions}
                    </p>
                    <p className="text-sm text-gray-600">Score</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-semibold text-blue-600">
                      {record.percentile}%
                    </p>
                    <p className="text-sm text-gray-600">Percentile</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="text-xs">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


