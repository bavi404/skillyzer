import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import logoImg from '../public/logo.jpg';
import ktImg from '../public/kt.jpeg';

export const Navbar = () => {
  return (
    <nav className="bg-white p-4 border-b flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-3">
        <Image 
          src={logoImg} 
          alt="Skillyzer Logo" 
          width={40} 
          height={40} 
          className="rounded-md" 
          priority 
        />
        <div>
          <h1 className="text-2xl text-black font-bold">Skillyzer</h1>
          <p className="text-xs text-gray-600">Skill Assessment Dashboard</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 border rounded-lg shadow-sm p-2 bg-gray-50">
        <Avatar className="w-10 h-10">
          <AvatarImage 
            src={ktImg.src} 
            alt="User Avatar" 
            className="rounded-full object-cover" 
          />
          <AvatarFallback delayMs={600}>KT</AvatarFallback>
        </Avatar>
        <div className="text-right">
          <h2 className='font-semibold text-sm text-gray-900'>Bavishya Sankaranarayanan</h2>
          <p className="text-xs text-gray-600">Student</p>
        </div>
      </div>
    </nav>
  );
};