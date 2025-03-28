
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ChatBot from "@/components/ai/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        
        {/* Features Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-urban-ultralight px-4 py-1 text-sm font-medium text-urban-dark mb-3">
                Innovative Features
              </div>
              <h2 className="section-title">Revolutionizing Online Shopping</h2>
              <p className="section-subtitle mx-auto">
                Experience the future of fashion e-commerce with our cutting-edge features designed to make your shopping journey seamless and personalized.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Wardrobe Sync */}
              <div className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-urban-ultralight rounded-full opacity-70 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl font-serif font-medium mb-3">Wardrobe Sync</h3>
                  <p className="text-muted-foreground mb-6">
                    Upload your current wardrobe items and get AI-powered recommendations that complement your existing style.
                  </p>
                  <a href="/wardrobe" className="text-urban font-medium hover:text-urban-dark transition-colors inline-flex items-center">
                    Try Wardrobe Sync
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* SmartGlow */}
              <div className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-urban-ultralight rounded-full opacity-70 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl font-serif font-medium mb-3">SmartGlow Size Matching</h3>
                  <p className="text-muted-foreground mb-6">
                    Get precise size recommendations based on your measurements and data from similar body types.
                  </p>
                  <a href="/smartglow" className="text-urban font-medium hover:text-urban-dark transition-colors inline-flex items-center">
                    Find Your Size
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* InstaGlow */}
              <div className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-urban-ultralight rounded-full opacity-70 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl font-serif font-medium mb-3">InstaGlow Influencer Looks</h3>
                  <p className="text-muted-foreground mb-6">
                    Shop complete outfits curated by top influencers with just one click. Get the exact look from your favorite style icons.
                  </p>
                  <a href="/influencer" className="text-urban font-medium hover:text-urban-dark transition-colors inline-flex items-center">
                    Explore Looks
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Virtual Try-On Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 relative overflow-hidden">
          <div className="blob w-96 h-96 bg-urban/10 rounded-full absolute -bottom-32 -right-32"></div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block rounded-full bg-urban-ultralight px-4 py-1 text-sm font-medium text-urban-dark mb-3">
                  Revolutionary Experience
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                  Try Before You Buy with Virtual Fitting Room
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  See how clothes look on you without stepping foot in a dressing room. Our advanced 3D technology lets you visualize products on your body type for a confident purchase decision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-urban-ultralight flex items-center justify-center mr-4 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-urban">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Upload Your Photo</h3>
                      <p className="text-muted-foreground">
                        Use your webcam or upload a full-body photo to create your virtual model.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-urban-ultralight flex items-center justify-center mr-4 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-urban">
                        <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Try Different Styles</h3>
                      <p className="text-muted-foreground">
                        Instantly see how different items look on you in various colors and sizes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-urban-ultralight flex items-center justify-center mr-4 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-urban">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Get Style Advice</h3>
                      <p className="text-muted-foreground">
                        Our AI provides personalized recommendations based on what looks best on you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="/product/p1" className="urban-button inline-flex">
                    Try It Now
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 -right-10 -bottom-10 bg-gradient-to-br from-urban/5 to-transparent rounded-3xl transform rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop" 
                  alt="Virtual Try-On" 
                  className="relative z-10 rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-urban bg-opacity-5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-urban-ultralight px-4 py-1 text-sm font-medium text-urban-dark mb-3">
                Customer Stories
              </div>
              <h2 className="section-title">What Our Customers Say</h2>
              <p className="section-subtitle mx-auto">
                Hear from fashion enthusiasts who have transformed their shopping experience with urbanGlow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop" 
                    alt="Sarah J." 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium">Sarah J.</h3>
                    <p className="text-sm text-muted-foreground">Fashion Blogger</p>
                  </div>
                </div>
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The Wardrobe Sync feature has completely transformed how I shop. It's like having a personal stylist who knows exactly what will complement my existing clothes!"
                </p>
                <p className="text-sm text-urban font-medium">Verified Purchase</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop" 
                    alt="Michael T." 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium">Michael T.</h3>
                    <p className="text-sm text-muted-foreground">Architect</p>
                  </div>
                </div>
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I was skeptical about the virtual try-on, but it's surprisingly accurate! I've saved so much time and money by knowing exactly how things will look before buying."
                </p>
                <p className="text-sm text-urban font-medium">Verified Purchase</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop" 
                    alt="Emma R." 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium">Emma R.</h3>
                    <p className="text-sm text-muted-foreground">Marketing Executive</p>
                  </div>
                </div>
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The AI style assistant is like having a fashion expert in my pocket. It's helped me step out of my comfort zone with suggestions I wouldn't have considered."
                </p>
                <p className="text-sm text-urban font-medium">Verified Purchase</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
