import { cn } from "@/lib/utils"; 
import { Home, List, Briefcase, BarChart3, History, TrendingUp } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const navigationItems = [
    { id: 'overview', icon: <Home size={20} />, label: 'Dashboard', description: 'Overview of your performance' },
    { id: 'analytics', icon: <BarChart3 size={20} />, label: 'Analytics', description: 'Detailed performance analysis' },
    { id: 'history', icon: <History size={20} />, label: 'Test History', description: 'View all your test results' },
    { id: 'trends', icon: <TrendingUp size={20} />, label: 'Performance Trends', description: 'Track your progress over time' },
  ];

  return (
    <nav className="w-72 pt-10 h-screen border-r pr-6 hidden md:block bg-white">
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Navigation</h2>
        <p className="text-sm text-gray-600">Track your learning journey</p>
      </div>
      
      <div className="space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full text-left p-4 rounded-xl font-medium transition-all duration-200 group",
              activeTab === item.id
                ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm"
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border hover:border-gray-200"
            )}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className={cn(
                "p-2 rounded-lg transition-colors duration-200",
                activeTab === item.id
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600"
              )}>
                {item.icon}
              </div>
              <span className="font-semibold">{item.label}</span>
            </div>
            <p className={cn(
              "text-xs transition-colors duration-200",
              activeTab === item.id
                ? "text-blue-600"
                : "text-gray-500 group-hover:text-gray-600"
            )}>
              {item.description}
            </p>
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 px-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-blue-700">Tests Taken</span>
              <span className="font-semibold text-blue-900">24</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-blue-700">Avg Score</span>
              <span className="font-semibold text-blue-900">12.8/15</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-blue-700">Best Rank</span>
              <span className="font-semibold text-blue-900">#2</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
