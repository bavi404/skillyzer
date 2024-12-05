import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import logoImg from '../public/logo.jpg';
import ktImg from '../public/kt.jpeg';

export const Navbar = () => {
  return (
    <nav className="bg-white p-4 border-b flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image 
          src={logoImg} 
          alt="Logo" 
          width={40} 
          height={40} 
          className="rounded-md" 
          priority 
        />
        <h1 className="text-3xl text-black font-bold">WhatBytes</h1>
      </div>
      <div className="flex items-center space-x-2 border-b rounded-lg shadow-xl p-2">
        <Avatar className="w-10 h-10">
          <AvatarImage 
            src={ktImg.src} 
            alt="User Avatar" 
            className="rounded-full object-cover" 
          />
          <AvatarFallback delayMs={600}>KT</AvatarFallback>
        </Avatar>
        <h1 className='font-bold'>Bavishya Sankaranarayanan</h1>
      </div>
    </nav>
  );
};