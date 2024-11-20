import { useState, useEffect } from 'react';

interface Job {
  id: string;
  company: string;
  logo: string;
  position: string;
  location: string;
  salary: string;
  type: string;
  tags: string[];
  engagement: {
    views: number;
    saves: number;
    applies: number;
  };
  postedAt: string;
}

export const useInfiniteJobs = (initialPage = 1) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Simulate fetching jobs with engagement metrics
  const fetchJobs = async (pageNum: number) => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newJobs = Array.from({ length: 10 }, (_, i) => ({
      id: `job-${pageNum}-${i}`,
      company: ['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta'][Math.floor(Math.random() * 5)],
      logo: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?fit=crop&w=100&q=80`,
      position: ['Software Engineer', 'Product Manager', 'UX Designer', 'Data Scientist'][Math.floor(Math.random() * 4)],
      location: ['Remote', 'New York, NY', 'San Francisco, CA'][Math.floor(Math.random() * 3)],
      salary: `$${Math.floor(Math.random() * 50 + 100)}K - $${Math.floor(Math.random() * 50 + 150)}K`,
      type: ['Full-time', 'Contract', 'Part-time'][Math.floor(Math.random() * 3)],
      tags: ['React', 'Node.js', 'Python', 'AWS'].sort(() => Math.random() - 0.5).slice(0, 3),
      engagement: {
        views: Math.floor(Math.random() * 1000),
        saves: Math.floor(Math.random() * 100),
        applies: Math.floor(Math.random() * 50),
      },
      postedAt: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(),
    }));

    setJobs(prev => [...prev, ...newJobs]);
    setHasMore(pageNum < 5); // Limit to 5 pages for demo
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return { jobs, loading, hasMore, loadMore };
};