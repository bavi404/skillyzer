"use client";

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Content, QuickStatistics } from "@/components/Content";
import { Analysis } from "@/components/Analysis";
import { Graph } from "@/components/Graph";
import { QuestionAnalysis } from "@/components/QuestionAnalysis";
import { TestHistory } from "@/components/TestHistory";
import { PerformanceTrends } from "@/components/PerformanceTrends";
import { useState, useEffect } from "react";

export interface TestData {
  rank: number;
  percentile: number;
  currentScore: number;
  totalQuestions: number;
  timeSpent: number;
  dateCompleted: string;
  testName: string;
  category: string;
}

export default function Home() {
  const [data, setData] = useState<TestData>({
    rank: 1,
    percentile: 90,
    currentScore: 10,
    totalQuestions: 15,
    timeSpent: 12,
    dateCompleted: "2024-01-15",
    testName: "Hyper Text Markup Language",
    category: "Web Development"
  });

  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'history' | 'trends'>('overview');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate data loading
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleDataUpdate = (newData: Partial<TestData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <Content data={data} setData={handleDataUpdate} />
            <div className="pt-4">
              <QuickStatistics data={data} />
            </div>
            <div>
              <Graph />
            </div>
          </>
        );
      case 'analytics':
        return (
          <div className="space-y-6">
            <Analysis />
            <QuestionAnalysis percent={data.percentile} currentScore={data.currentScore} />
          </div>
        );
      case 'history':
        return <TestHistory />;
      case 'trends':
        return <PerformanceTrends data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm mb-6">
              {[
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'analytics', label: 'Analytics', icon: '📈' },
                { id: 'history', label: 'Test History', icon: '📚' },
                { id: 'trends', label: 'Performance Trends', icon: '📉' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {renderContent()}
              </div>
              <div className="space-y-6">
                {activeTab === 'overview' && (
                  <>
                    <Analysis />
                    <QuestionAnalysis percent={data.percentile} currentScore={data.currentScore} />
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
