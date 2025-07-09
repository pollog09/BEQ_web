import React from 'react';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient-shift" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-float-delayed opacity-40" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-float-slow opacity-50" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with staggered animation */}
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block animate-slide-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Quality Build
                </span>
              </span>
              <span className="block animate-slide-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Engineering
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-slide-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              Innovación y Excelencia en Ingeniería
            </p>
          </div>

          {/* Stats with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-slide-up opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
            <div className="group cursor-pointer">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">Eléctrica</h3>
                <p className="text-gray-300">Ingeniería Eléctrica</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">Civil</h3>
                <p className="text-gray-300">Ingeniería Civil</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">Mecánica</h3>
                <p className="text-gray-300">Ingeniería Mecánica</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
            <button 
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="flex items-center space-x-2">
                <span>Comenzar Proyecto</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;