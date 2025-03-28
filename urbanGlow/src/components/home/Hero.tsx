
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = x * 40 - 20; // -20px to 20px movement
      const moveY = y * 40 - 20; // -20px to 20px movement
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        '--move-x': '0px',
        '--move-y': '0px'
      } as React.CSSProperties}
    >
      {/* Background Blobs */}
      <div className="blob w-96 h-96 bg-urban/30 rounded-full absolute -top-20 -left-20 animate-blob"></div>
      <div className="blob w-96 h-96 bg-urban-light/20 rounded-full absolute bottom-20 right-10 animate-blob animation-delay-2000"></div>
      <div className="blob w-80 h-80 bg-urban-ultralight/30 rounded-full absolute bottom-10 left-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Text */}
          <div className="md:w-1/2 space-y-6 mb-12 md:mb-0 fade-in-left">
            <div className="inline-block rounded-full bg-urban-ultralight px-4 py-1 text-sm font-medium text-urban-dark mb-4">
              New Collection 2023
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Elevate Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-urban-dark to-urban">Style & Confidence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover a curated collection of premium fashion that empowers your personal style journey. Intelligent recommendations meet exceptional quality.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                to="/shop" 
                className="urban-button group flex items-center gap-2"
              >
                Shop Collection 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link 
                to="/wardrobe" 
                className="urban-button-secondary flex items-center gap-2"
              >
                Try Wardrobe Sync
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            className="md:w-1/2 relative fade-in-right"
            style={{
              transform: 'translate(calc(var(--move-x) * 0.5), calc(var(--move-y) * 0.5))'
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-urban/20 to-urban-light/10 rounded-2xl transform -rotate-6 scale-[0.97] shadow-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1470&auto=format&fit=crop" 
                alt="Fashion Model" 
                className="rounded-2xl shadow-2xl object-cover w-full h-auto relative z-10 scale-in-center"
              />
            </div>
          </div>
        </div>
        
        {/* Hero Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-16 md:mt-24 fade-in-bottom">
          <div className="glass-panel p-6 text-center">
            <div className="w-12 h-12 bg-urban-ultralight rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">AI Style Assistant</h3>
            <p className="text-muted-foreground">Get personalized style advice and outfit recommendations from our AI fashion expert.</p>
          </div>
          
          <div className="glass-panel p-6 text-center">
            <div className="w-12 h-12 bg-urban-ultralight rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6.5C3 5.57174 3.36875 4.6815 4.02513 4.02513C4.6815 3.36875 5.57174 3 6.5 3H17.5C18.4283 3 19.3185 3.36875 19.9749 4.02513C20.6313 4.6815 21 5.57174 21 6.5V19.5C21 20.4283 20.6313 21.3185 19.9749 21.9749C19.3185 22.6313 18.4283 23 17.5 23H6.5C5.57174 23 4.6815 22.6313 4.02513 21.9749C3.36875 21.3185 3 20.4283 3 19.5V6.5Z" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 1V5" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 1V5" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9H21" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 13C10.7761 13 11 12.7761 11 12.5C11 12.2239 10.7761 12 10.5 12C10.2239 12 10 12.2239 10 12.5C10 12.7761 10.2239 13 10.5 13Z" fill="#9668E0" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 17C10.7761 17 11 16.7761 11 16.5C11 16.2239 10.7761 16 10.5 16C10.2239 16 10 16.2239 10 16.5C10 16.7761 10.2239 17 10.5 17Z" fill="#9668E0" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13Z" fill="#9668E0" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 17C14.7761 17 15 16.7761 15 16.5C15 16.2239 14.7761 16 14.5 16C14.2239 16 14 16.2239 14 16.5C14 16.7761 14.2239 17 14.5 17Z" fill="#9668E0" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Virtual Try-On</h3>
            <p className="text-muted-foreground">See how clothes look on you before buying with our advanced virtual fitting room.</p>
          </div>
          
          <div className="glass-panel p-6 text-center">
            <div className="w-12 h-12 bg-urban-ultralight rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" stroke="#9668E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Wardrobe Sync</h3>
            <p className="text-muted-foreground">Upload your current wardrobe and get personalized suggestions that match your style.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
