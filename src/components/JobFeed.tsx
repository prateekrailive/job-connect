import React, { useRef, useCallback } from 'react';
import { useInfiniteJobs } from '../hooks/useInfiniteJobs';
import { Heart, Bookmark, Share2, Eye } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const JobFeed = () => {
  const { jobs, loading, hasMore, loadMore } = useInfiniteJobs();
  
  const observer = useRef<IntersectionObserver>();
  const lastJobElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {jobs.map((job, index) => (
        <div
          key={job.id}
          ref={index === jobs.length - 1 ? lastJobElementRef : undefined}
          className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center">
              <img
                src={job.logo}
                alt={job.company}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <h3 className="font-semibold text-gray-900">{job.company}</h3>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Job Details */}
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{job.position}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{job.type}</span>
              <span>{job.salary}</span>
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>{job.engagement.saves}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-1 text-gray-500">
                <Eye className="w-5 h-5" />
                <span>{job.engagement.views}</span>
              </div>
            </div>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
            </span>
          </div>

          {/* Apply Button */}
          <div className="p-4 border-t">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now • {job.engagement.applies} applied
            </button>
          </div>
        </div>
      ))}
      
      {loading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default JobFeed;