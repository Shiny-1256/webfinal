import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Ruler, BarChart } from "lucide-react";
import { toast } from "sonner";

type BodyMeasurements = {
  height: number;
  weight: number;
  chest: number;
  waist: number;
  hips: number;
  inseam: number;
  shoulderWidth: number;
};

type RecommendationResult = {
  topSize: string;
  bottomSize: string;
  percentage: number;
  similarUsers: number;
  fitNotes: string;
};

const SmartGlow = () => {
  const [measurements, setMeasurements] = useState<BodyMeasurements>({
    height: 175,
    weight: 70,
    chest: 98,
    waist: 82,
    hips: 94,
    inseam: 80,
    shoulderWidth: 45,
  });
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<RecommendationResult | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };
  
  const handleGetRecommendations = () => {
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      
      // Mock results
      setResults({
        topSize: "M",
        bottomSize: "32",
        percentage: 92,
        similarUsers: 1453,
        fitNotes: "Based on your measurements, we recommend a medium for most tops. You're between sizes for bottoms - size 32 will provide a comfortable fit, while size 31 will be more fitted.",
      });
      
      toast.success("Size analysis complete", {
        description: "We've analyzed your measurements and found your ideal sizes.",
        position: "bottom-right",
      });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-urban-ultralight px-4 py-1 text-sm font-medium text-urban-dark mb-3">
            AI-Powered
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
            SmartGlow Size Recommendations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get precise size recommendations based on your measurements and data from similar body types.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Measurement Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <Ruler className="text-urban mr-3" size={24} />
              <h2 className="text-2xl font-serif">Your Measurements</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Enter your measurements to get accurate size recommendations for all our products.
            </p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="height" className="block text-sm font-medium mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={measurements.height}
                    onChange={handleInputChange}
                    className="urban-input"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={measurements.weight}
                    onChange={handleInputChange}
                    className="urban-input"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="chest" className="block text-sm font-medium mb-2">
                  Chest (cm)
                </label>
                <input
                  type="number"
                  id="chest"
                  name="chest"
                  value={measurements.chest}
                  onChange={handleInputChange}
                  className="urban-input"
                />
              </div>
              
              <div>
                <label htmlFor="waist" className="block text-sm font-medium mb-2">
                  Waist (cm)
                </label>
                <input
                  type="number"
                  id="waist"
                  name="waist"
                  onChange={handleInputChange}
                  value={measurements.waist}
                  className="urban-input"
                />
              </div>
              
              <div>
                <label htmlFor="hips" className="block text-sm font-medium mb-2">
                  Hips (cm)
                </label>
                <input
                  type="number"
                  id="hips"
                  name="hips"
                  onChange={handleInputChange}
                  value={measurements.hips}
                  className="urban-input"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inseam" className="block text-sm font-medium mb-2">
                    Inseam (cm)
                  </label>
                  <input
                    type="number"
                    id="inseam"
                    name="inseam"
                    onChange={handleInputChange}
                    value={measurements.inseam}
                    className="urban-input"
                  />
                </div>
                <div>
                  <label htmlFor="shoulderWidth" className="block text-sm font-medium mb-2">
                    Shoulder Width (cm)
                  </label>
                  <input
                    type="number"
                    id="shoulderWidth"
                    name="shoulderWidth"
                    onChange={handleInputChange}
                    value={measurements.shoulderWidth}
                    className="urban-input"
                  />
                </div>
              </div>
              
              <Button 
                className="urban-button w-full flex items-center gap-2 mt-4"
                onClick={handleGetRecommendations}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Get Size Recommendations
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* Results Section */}
          <div>
            {results ? (
              <div className="bg-white rounded-xl shadow-md p-8 h-full">
                <div className="flex items-center mb-6">
                  <FileText className="text-urban mr-3" size={24} />
                  <h2 className="text-2xl font-serif">Your Size Recommendations</h2>
                </div>
                
                <div className="flex justify-center mb-8">
                  <div className="bg-urban-ultralight w-32 h-32 rounded-full flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-urban">{results.percentage}%</span>
                    <span className="text-sm text-urban-dark">Confidence</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Recommended Top Size</p>
                    <p className="text-3xl font-bold">{results.topSize}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Recommended Bottom Size</p>
                    <p className="text-3xl font-bold">{results.bottomSize}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-medium mb-3">Fit Notes</h3>
                  <p className="text-muted-foreground">{results.fitNotes}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <BarChart className="text-urban mr-3" size={20} />
                  <p className="text-sm">
                    Based on data from <span className="font-medium">{results.similarUsers}</span> customers with similar body measurements.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 h-full flex flex-col items-center justify-center text-center">
                <Sparkles className="text-urban-light mb-4" size={48} />
                <h2 className="text-2xl font-serif mb-4">Get Your Perfect Fit</h2>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Enter your measurements and our AI will analyze them to recommend your ideal size across our entire collection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-lg">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-10 h-10 bg-urban-ultralight rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-urban-dark font-medium">1</span>
                    </div>
                    <p className="text-sm">Enter your measurements</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-10 h-10 bg-urban-ultralight rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-urban-dark font-medium">2</span>
                    </div>
                    <p className="text-sm">Our AI analyzes your body type</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-10 h-10 bg-urban-ultralight rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-urban-dark font-medium">3</span>
                    </div>
                    <p className="text-sm">Get your perfect size recommendation</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-medium mb-8 text-center">Why Use SmartGlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-urban-ultralight rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-urban" size={20} />
              </div>
              <h3 className="text-lg font-medium mb-2">AI-Powered Precision</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your measurements alongside thousands of similar body types to find your perfect fit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-urban-ultralight rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-urban" size={20} />
              </div>
              <h3 className="text-lg font-medium mb-2">Data-Backed Recommendations</h3>
              <p className="text-muted-foreground">
                Recommendations based on thousands of real customer measurements and satisfaction data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-urban-ultralight rounded-full flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-urban">
                  <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.05 11C3.3 7.5 5.5 4.9 8.9 3.9C12.3 2.9 16 4.4 17.9 7.2C19.8 10 19.2 13.9 16.7 16.3C14.2 18.7 10.3 19 7.3 17C5.4 15.9 4.1 13.8 3.8 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 14L4 11.5L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fewer Returns</h3>
              <p className="text-muted-foreground">
                Customers using SmartGlow have 78% fewer fit-related returns compared to standard size charts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartGlow;
