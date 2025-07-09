import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient-shift" />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-float-delayed opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-float-slow opacity-80" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-green-400 rounded-full animate-float-delayed opacity-50" />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 border border-cyan-400/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-20 right-20 w-12 h-12 border border-blue-400/20 animate-pulse" />
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full animate-bounce-slow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </div>
  );
};

export default AnimatedBackground;