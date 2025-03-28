
import React, { useState, useRef, useEffect } from "react";
import { X, Camera, Upload, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { type Product } from "@/lib/data";

type VirtualTryOnProps = {
  product: Product;
  onClose: () => void;
};

const VirtualTryOn = ({ product, onClose }: VirtualTryOnProps) => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTryingOn, setIsTryingOn] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setUserImage(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };
  
  const handleTryOn = () => {
    if (!userImage) {
      toast.error("Please upload a photo first", {
        position: "bottom-right",
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsTryingOn(true);
    }, 2000);
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleReset = () => {
    setUserImage(null);
    setIsTryingOn(false);
  };
  
  return (
    <div className="relative w-full h-full flex flex-col bg-gray-50 rounded-2xl overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
      
      <div className="p-4 bg-white border-b">
        <h3 className="text-lg font-medium">Virtual Try-On</h3>
        <p className="text-sm text-muted-foreground">
          Upload a photo to see how this item looks on you
        </p>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
        {isProcessing ? (
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-urban/30 border-t-urban rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Processing your image...</p>
          </div>
        ) : isTryingOn ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* This would be replaced with an actual AI-generated composite image */}
            <div className="relative inline-block">
              <img
                src={userImage!}
                alt="Virtual Try On"
                className="max-w-full max-h-[400px] rounded-lg object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                  <p className="mb-2">AI virtual try-on rendering would appear here</p>
                  <p className="text-sm">This is a demo visualization</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {userImage ? (
              <div className="mb-6">
                <img 
                  src={userImage} 
                  alt="User uploaded" 
                  className="max-w-full max-h-[300px] rounded-lg object-contain" 
                />
              </div>
            ) : (
              <div 
                className="w-full max-w-md aspect-square border-2 border-dashed border-gray-300 rounded-lg mb-6 flex flex-col items-center justify-center p-6 cursor-pointer hover:border-urban transition-colors"
                onClick={handleUploadClick}
              >
                <Camera size={48} className="text-gray-400 mb-4" />
                <p className="text-muted-foreground text-center mb-2">
                  Upload a full-body photo
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  For best results, use a photo with good lighting and a neutral background
                </p>
              </div>
            )}
            
            <div className="w-full max-w-md">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              
              {userImage ? (
                <div className="flex flex-col space-y-4">
                  <div className="mb-4">
                    <label className="text-sm font-medium block mb-2">Select Color:</label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          className={`w-8 h-8 rounded-full border-2 ${
                            selectedColor === color
                              ? "border-urban"
                              : "border-gray-200"
                          }`}
                          style={{
                            backgroundColor: 
                              color === "White" ? "#ffffff" :
                              color === "Black" ? "#000000" :
                              color === "Navy" ? "#0a192f" :
                              color === "Gray" ? "#718096" :
                              color === "Camel" ? "#c19a6b" :
                              color === "Charcoal" ? "#36454f" :
                              color === "Burgundy" ? "#800020" :
                              color === "Pearl" ? "#f5f5f1" :
                              color === "Blush" ? "#ffb6c1" :
                              color === "Sage" ? "#bcbfa3" :
                              color === "Sunset" ? "#fad6a5" :
                              color === "Ocean" ? "#1e81b0" :
                              color === "Berry" ? "#993366" :
                              color === "Olive" ? "#708238" :
                              color === "Tan" ? "#d2b48c" :
                              undefined
                          }}
                          onClick={() => setSelectedColor(color)}
                          aria-label={`Select ${color} color`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      className="urban-button flex-1 gap-2"
                      onClick={handleTryOn}
                    >
                      Try It On
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={handleReset}
                    >
                      <RefreshCw size={16} />
                      Reset
                    </Button>
                  </div>
                </div>
              ) : (
                <Button 
                  className="urban-button w-full gap-2"
                  onClick={handleUploadClick}
                >
                  <Upload size={16} />
                  Upload Photo
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VirtualTryOn;
