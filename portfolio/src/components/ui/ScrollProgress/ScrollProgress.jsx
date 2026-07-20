import React, { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-slate-900/20">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-150 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};
