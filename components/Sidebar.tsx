import { cn } from "@/lib/utils"; 
import { Home, List, Briefcase } from "lucide-react";

export const Sidebar = () => {
  return (
      <nav className="w-72 pt-10 h-screen border-r pr-20 hidden md:block">
        <SidebarLink href="/dashboard" icon={<Home size={20} />} label="Dashboard" />
        <SidebarLink href="/skill-test" icon={<List size={20} />} label="Skill Test" />
        <SidebarLink href="/internship" icon={<Briefcase size={20} />} label="Internship" />
      </nav>
    
  );
};

type SidebarLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center space-x-3 p-4 font-bold rounded-2xl text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
};
