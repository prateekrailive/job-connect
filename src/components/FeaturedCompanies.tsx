import React from 'react';
import { Building2 } from 'lucide-react';

const FeaturedCompanies = () => {
  const companies = [
    {
      name: 'Google',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      openings: 156,
      rating: 4.8
    },
    {
      name: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1642132652075-2b0bec0d0c80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      openings: 89,
      rating: 4.6
    },
    {
      name: 'Apple',
      image: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      openings: 124,
      rating: 4.7
    },
    {
      name: 'Amazon',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      openings: 234,
      rating: 4.5
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Building2 className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Featured Companies</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={company.image}
                alt={company.name}
                className="w-16 h-16 rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{company.name}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">⭐ {company.rating}</span>
                <span>|</span>
                <span className="ml-2">{company.openings} openings</span>
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                View Jobs
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompanies;