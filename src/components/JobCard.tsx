import React from 'react';
import { MapPin, DollarSign, Clock } from 'lucide-react';

interface JobCardProps {
  company: string;
  logo: string;
  position: string;
  location: string;
  salary: string;
  type: string;
  tags: string[];
}

const JobCard = ({ company, logo, position, location, salary, type, tags }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <img
          src={logo}
          alt={company}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{position}</h3>
          <p className="text-gray-600 mb-2">{company}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              {salary}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {type}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <button className="ml-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;