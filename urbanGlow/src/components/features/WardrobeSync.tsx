
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Upload, Sparkles, X, CheckCircle2, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { sampleWardrobeItems, getSuggestedOutfits, WardrobeItem, Product } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";

const WardrobeSync = () => {
  const [wardrobe, setWardrobe] = useState<WardrobeItem[]>(sampleWardrobeItems);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploadProgress(0);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setUploadedImage(event.target.result as string);
        simulateUploadProgress();
      }
    };
    reader.readAsDataURL(file);
  };
  
  const simulateUploadProgress = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // After upload completes, add item to wardrobe
        setTimeout(() => {
          setUploadProgress(0);
          setUploadedImage(null);
          
          // Add a mock new item
          const newItem: WardrobeItem = {
            id: `w${wardrobe.length + 1}`,
            name: "New Uploaded Item",
            category: "shirts",
            color: "Blue",
            image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1287&auto=format&fit=crop",
            season: ["All Season"]
          };
          
          setWardrobe(prev => [...prev, newItem]);
          
          toast.success("Item added to your wardrobe", {
            description: "Your wardrobe has been updated.",
            position: "bottom-right",
          });
        }, 500);
      }
      setUploadProgress(Math.min(Math.round(progress), 100));
    }, 200);
  };
  
  const handleAnalyzeWardrobe = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      const recommendations = getSuggestedOutfits(wardrobe);
      setSuggestions(recommendations);
      setIsAnalyzing(false);
      
      toast.success("Analysis complete", {
        description: "We've found some items that would complement your wardrobe perfectly.",
        position: "bottom-right",
      });
    }, 2000);
  };
  
  const handleRemoveItem = (id: string) => {
    setWardrobe(prev => prev.filter(item => item.id !== id));
    
    toast.success("Item removed", {
      description: "The item has been removed from your wardrobe.",
      position: "bottom-right",
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
            Wardrobe Sync
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your current wardrobe items and receive personalized recommendations that match your style.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Wardrobe Items */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-medium mb-4">Your Wardrobe</h2>
              <p className="text-muted-foreground mb-6">
                Upload photos of your clothing items to get personalized recommendations.
              </p>
              
              {/* Upload Section */}
              <div className="mb-6">
                <label 
                  htmlFor="wardrobe-upload"
                  className="block w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-urban transition-colors cursor-pointer"
                >
                  <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
                  <p className="text-muted-foreground mb-1">
                    Click to upload a clothing item
                  </p>
                  <p className="text-xs text-muted-foreground">
                    JPEG, PNG, WebP up to 5MB
                  </p>
                  <input 
                    id="wardrobe-upload"
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              
              {/* Upload Progress */}
              {uploadProgress > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Uploading...</span>
                    <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-urban h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  {uploadedImage && (
                    <div className="mt-4 flex items-center">
                      <img 
                        src={uploadedImage} 
                        alt="Uploading" 
                        className="w-16 h-16 object-cover rounded-md mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium truncate max-w-[200px]">
                          New item
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Analyzing...
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Wardrobe Items List */}
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {wardrobe.map((item) => (
                  <div key={item.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-md mr-3"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                          {item.color}
                        </span>
                      </div>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label="Remove item"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Analyze Button */}
              <Button 
                className="urban-button w-full mt-6"
                onClick={handleAnalyzeWardrobe}
                disabled={isAnalyzing || wardrobe.length === 0}
              >
                {isAnalyzing ? (
                  <>
                    <RotateCw size={18} className="mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} className="mr-2" />
                    Get Recommendations
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* Right Column - Recommendations */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-medium mb-4">
                Recommended for Your Wardrobe
              </h2>
              <p className="text-muted-foreground mb-6">
                Based on your current items, these pieces would complement your style perfectly.
              </p>
              
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-16 h-16 border-4 border-urban/30 border-t-urban rounded-full animate-spin mb-4"></div>
                  <p className="text-muted-foreground">Analyzing your wardrobe...</p>
                </div>
              ) : suggestions.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {suggestions.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : wardrobe.length > 0 ? (
                <div className="text-center py-10 px-6">
                  <Sparkles size={48} className="mx-auto text-urban-light mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    Ready to find your perfect matches?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Click "Get Recommendations" to analyze your wardrobe and discover pieces that will elevate your style.
                  </p>
                </div>
              ) : (
                <div className="text-center py-10 px-6">
                  <Upload size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    Your wardrobe is empty
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Add some items to your wardrobe to get personalized recommendations.
                  </p>
                </div>
              )}
            </div>
            
            {/* Why Use Wardrobe Sync */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">
                Why Use Wardrobe Sync?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <CheckCircle2 className="text-urban mb-3" size={24} />
                  <h3 className="font-medium mb-2">Personalized Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Get suggestions tailored to your existing wardrobe and personal style.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <CheckCircle2 className="text-urban mb-3" size={24} />
                  <h3 className="font-medium mb-2">Build Cohesive Outfits</h3>
                  <p className="text-sm text-muted-foreground">
                    Find pieces that work with what you already own for more outfit combinations.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <CheckCircle2 className="text-urban mb-3" size={24} />
                  <h3 className="font-medium mb-2">Shop Smarter</h3>
                  <p className="text-sm text-muted-foreground">
                    Make more informed purchasing decisions that complement your existing items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobeSync;
