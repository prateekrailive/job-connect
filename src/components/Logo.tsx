import React from 'react';
import { Briefcase } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
        <div className="relative bg-white p-2 rounded-lg">
          <Briefcase className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <div className="ml-3">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Job<span className="text-blue-600">Connect</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;