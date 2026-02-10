// @ts-nocheck
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const handleConsultClick = () => {
    // Simple direct navigation or confirm
    if (window.confirm("카카오톡 채널로 이동하여 무료 상담을 진행합니다.")) {
        window.location.href = "http://pf.kakao.com/_PKavxd/chat";
    }
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('showcase');
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0a0a0f] text-white flex flex-col justify-center items-center py-20 md:py-0">
      
      {/* 1. Ultra-Premium Background */}
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-80 z-0 pointer-events-none"></div>
      
      {/* Aurora Effects - Added pointer-events-none */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-hema-purple opacity-20 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-hema-mint opacity-10 rounded-full blur-[150px] animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600 opacity-20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', 
            backgroundSize: '60px 60px' 
        }}
      ></div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center h-full justify-center">
        
        {/* New Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-hema-mint font-bold text-sm md:text-base mb-6 animate-fade-in shadow-[0_0_10px_rgba(80,227,194,0.2)]">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hema-mint opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-hema-mint"></span>
            </span>
           AI로 만드는 나만의 뮤직비디오!
        </div>

        {/* Main Title - Updated with Sophisticated Gradients & Fix for Italic Clipping */}
        <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black leading-[1.1] md:leading-tight tracking-tighter mb-8 italic w-full drop-shadow-2xl py-2">
          <span className="block md:inline md:whitespace-nowrap">
            {/* Gradient 1: Mint to Blue - Added pr-4 to prevent clipping */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#50E3C2] via-[#4579F5] to-[#4579F5] pr-4">Make</span>{" "}
            
            {/* White with Glow */}
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">My M/V</span>
            
            <span className="hidden md:inline">&nbsp;</span>
            <br className="md:hidden" />
            
            {/* Gradient 2: Blue to Purple - Added pr-4 to prevent clipping */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4579F5] via-[#7F5AF0] to-[#9F7AEA] pr-4">with AI</span>
            
            {/* Star Icon - Mint Glow */}
            <span className="text-[#50E3C2] align-top text-3xl md:text-6xl ml-1 relative -top-2 md:-top-4 animate-spin-slow inline-block drop-shadow-[0_0_15px_rgba(80,227,194,0.8)]">✦</span>
          </span>
        </h1>

        {/* 2. "Audio -> AI -> Video" Transformation Graphic */}
        <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[180%] md:w-full max-w-none md:max-w-[1000px] md:h-auto
            opacity-60 md:opacity-100 
            z-0 
            pointer-events-none
            
            md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0
            md:mb-10 md:px-0
        `}>
             
             {/* Center Glow Behind SVG */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] md:w-[300px] h-[30%] md:h-[300px] bg-hema-blue/20 rounded-full blur-[60px]"></div>

             <svg 
                viewBox="0 0 900 350" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="drop-shadow-2xl w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
             >
                <defs>
                    {/* Gradients */}
                    <linearGradient id="audioGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#7F5AF0" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#7F5AF0" stopOpacity="0.8"/>
                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="1"/>
                    </linearGradient>
                    <linearGradient id="videoGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#FFFFFF" stopOpacity="1"/>
                        <stop offset="0.3" stopColor="#50E3C2" stopOpacity="0.8"/>
                        <stop offset="1" stopColor="#50E3C2" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="coreGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#1a1a2e" />
                        <stop offset="1" stopColor="#16213e" />
                    </linearGradient>
                    
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* =========================================
                    PART 1: INPUT (Music Notes Flow) - Left Side
                   ========================================= */}
                <g transform="translate(50, 175)">
                    
                    {/* Dynamic Audio Waves Stream */}
                    <path d="M0 0 C 60 -40, 120 40, 180 0 C 240 -40, 300 40, 360 0" stroke="url(#audioGradient)" strokeWidth="1.5" fill="none" opacity="0.4">
                        <animate attributeName="d" 
                            values="M0 0 C 60 -40, 120 40, 180 0 C 240 -40, 300 40, 360 0; 
                                    M0 0 C 60 40, 120 -40, 180 0 C 240 40, 300 -40, 360 0; 
                                    M0 0 C 60 -40, 120 40, 180 0 C 240 -40, 300 40, 360 0" 
                            dur="4s" repeatCount="indefinite" />
                    </path>

                    {/* Musical Note 1 (Single) */}
                    <g transform="translate(0, -20)">
                        <path d="M10 25 V5 Q10 0 15 2 L25 8" stroke="#7F5AF0" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <circle cx="8" cy="25" r="5" fill="#7F5AF0" />
                        <animateTransform attributeName="transform" type="translate" values="0 -20; 300 10" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                    </g>

                    {/* Musical Note 2 (Beamed) */}
                    <g transform="translate(50, 20)">
                        <path d="M5 25 V5 L25 0 V20" stroke="#7F5AF0" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <path d="M5 5 L25 0" stroke="#7F5AF0" strokeWidth="4" />
                        <circle cx="3" cy="25" r="5" fill="#7F5AF0" />
                        <circle cx="23" cy="20" r="5" fill="#7F5AF0" />
                        <animateTransform attributeName="transform" type="translate" values="50 20; 350 -10" dur="4s" repeatCount="indefinite" delay="1s"/>
                        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" delay="1s" />
                    </g>
                    
                    {/* Small particles */}
                    <circle cx="50" cy="0" r="2" fill="#7F5AF0" opacity="0.6">
                         <animate attributeName="cx" values="50;350" dur="2.5s" repeatCount="indefinite" />
                         <animate attributeName="cy" values="0;-30" dur="2.5s" repeatCount="indefinite" />
                         <animate attributeName="opacity" values="1;0" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* =========================================
                    PART 2: AI CORE PROCESSOR - Center
                   ========================================= */}
                <g transform="translate(450, 175)">
                    
                    {/* Outer Rings (Spinning) */}
                    <circle cx="0" cy="0" r="65" stroke="#333" strokeWidth="1" strokeDasharray="10 5" opacity="0.5">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="50" stroke="#50E3C2" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
                        <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="8s" repeatCount="indefinite" />
                    </circle>

                    {/* The Chip / Prism */}
                    <path d="M-30 -30 L30 -30 L40 0 L30 30 L-30 30 L-40 0 Z" fill="url(#coreGradient)" stroke="#50E3C2" strokeWidth="2" filter="url(#glow)" />
                    
                    {/* Pulse Effect */}
                    <circle cx="0" cy="0" r="10" fill="#fff" opacity="0.8" filter="url(#glow)">
                        <animate attributeName="r" values="5;20;5" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Data Processing Lines inside Chip */}
                    <line x1="-20" y1="-10" x2="20" y2="-10" stroke="#50E3C2" strokeWidth="1" opacity="0.5">
                         <animate attributeName="x1" values="-20;0;-20" dur="1s" repeatCount="indefinite" />
                         <animate attributeName="x2" values="20;0;20" dur="1s" repeatCount="indefinite" />
                    </line>
                    <line x1="-20" y1="10" x2="20" y2="10" stroke="#50E3C2" strokeWidth="1" opacity="0.5">
                         <animate attributeName="x1" values="-20;0;-20" dur="1s" repeatCount="indefinite" delay="0.5s"/>
                         <animate attributeName="x2" values="20;0;20" dur="1s" repeatCount="indefinite" delay="0.5s"/>
                    </line>
                </g>

                {/* =========================================
                    PART 3: OUTPUT (Video Play Buttons) - Right Side
                   ========================================= */}
                <g transform="translate(500, 175)">

                    {/* Projection Beam (Background) */}
                    <path d="M0 0 L 350 -80 L 350 80 Z" fill="url(#videoGradient)" opacity="0.05" />

                    {/* Connecting Stream Lines */}
                    <line x1="0" y1="0" x2="350" y2="-80" stroke="#50E3C2" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                    <line x1="0" y1="0" x2="350" y2="80" stroke="#50E3C2" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />

                    {/* --- Generated Video Play Icons --- */}
                    
                    {/* Icon 1: Simple Play Button */}
                    <g transform="translate(50, 0)">
                        <circle cx="0" cy="0" r="25" fill="#16161A" stroke="#50E3C2" strokeWidth="2">
                           <animate attributeName="opacity" values="0.1;1;0.1" dur="3s" repeatCount="indefinite" />
                           <animateTransform attributeName="transform" type="translate" values="50 0; 250 -40" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <path d="M-5 -8 L10 0 L-5 8 Z" fill="#50E3C2">
                           <animate attributeName="opacity" values="0.1;1;0.1" dur="3s" repeatCount="indefinite" />
                           <animateTransform attributeName="transform" type="translate" values="50 0; 250 -40" dur="3s" repeatCount="indefinite" />
                        </path>
                    </g>

                    {/* Icon 2: Floating Screen with Play */}
                    <g transform="translate(80, 20)">
                        <rect x="-20" y="-15" width="40" height="30" rx="4" fill="#16161A" stroke="#fff" strokeWidth="2" opacity="0.8">
                            <animate attributeName="opacity" values="0.1;1;0.1" dur="3.5s" repeatCount="indefinite" delay="1s" />
                            <animateTransform attributeName="transform" type="translate" values="80 20; 280 50" dur="3.5s" repeatCount="indefinite" delay="1s" />
                        </rect>
                        <path d="M-2 -5 L6 0 L-2 5 Z" fill="#fff">
                             <animate attributeName="opacity" values="0.1;1;0.1" dur="3.5s" repeatCount="indefinite" delay="1s" />
                             <animateTransform attributeName="transform" type="translate" values="80 20; 280 50" dur="3.5s" repeatCount="indefinite" delay="1s" />
                        </path>
                    </g>

                     {/* Icon 3: Another Play Circle */}
                    <g transform="translate(60, -20)">
                        <circle cx="0" cy="0" r="15" fill="#16161A" stroke="#4579F5" strokeWidth="2">
                           <animate attributeName="opacity" values="0.1;1;0" dur="4s" repeatCount="indefinite" delay="0.5s" />
                           <animateTransform attributeName="transform" type="translate" values="60 -20; 200 0" dur="4s" repeatCount="indefinite" delay="0.5s" />
                        </circle>
                        <path d="M-3 -5 L5 0 L-3 5 Z" fill="#4579F5">
                           <animate attributeName="opacity" values="0.1;1;0" dur="4s" repeatCount="indefinite" delay="0.5s" />
                           <animateTransform attributeName="transform" type="translate" values="60 -20; 200 0" dur="4s" repeatCount="indefinite" delay="0.5s" />
                        </path>
                    </g>

                </g>
             </svg>
        </div>

        {/* Buttons */}
        <div className="relative z-30 flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-[220px] md:mt-0">
          <button 
            onClick={handleConsultClick}
            className="bg-hema-mint text-hema-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-[#3CD4B0] transition-all shadow-[0_0_20px_rgba(80,227,194,0.4)] hover:shadow-[0_0_30px_rgba(80,227,194,0.6)] transform hover:-translate-y-1 cursor-pointer active:scale-95"
          >
            무료 상담 신청하기
          </button>
          <button 
            onClick={handlePortfolioClick}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            포트폴리오 보기
            <ChevronRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .animate-spin-slow {
            animation: spin 8s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;