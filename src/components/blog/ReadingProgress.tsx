
import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollTop / docHeight;
      setProgress(scrollPercent * 100);
    };
    
    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-campus-primary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
