import React from 'react';
import Navbar from './components/Navbar';
import JobFeed from './components/JobFeed';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <JobFeed />
    </div>
  );
}

export default App;