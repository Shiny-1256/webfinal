
import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

type View360Props = {
  images: string[];
  onClose: () => void;
};

const View360 = ({ images, onClose }: View360Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleDrag(e.clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleDrag(e.touches[0].clientX);
  };
  
  const handleDrag = (clientX: number) => {
    const deltaX = clientX - startX;
    
    if (Math.abs(deltaX) > 5) {
      // Calculate how many images to move based on drag distance
      const imagesCount = images.length;
      const moveCount = Math.floor((deltaX / (containerRef.current?.offsetWidth || 300)) * imagesCount / 2);
      
      let newIndex = currentIndex - moveCount;
      
      // Ensure the index wraps around
      newIndex = ((newIndex % imagesCount) + imagesCount) % imagesCount;
      
      setCurrentIndex(newIndex);
      setStartX(clientX);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center bg-gray-50 rounded-2xl select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`360 View - Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          draggable="false"
        />
      </div>
      
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <div className="text-sm font-medium bg-white/80 backdrop-blur-sm py-1 px-3 rounded-full">
          Drag to Rotate • Frame {currentIndex + 1}/{images.length}
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full py-1 px-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full animate-pulse bg-urban"></div>
          <span className="text-sm">Drag to rotate</span>
        </div>
      </div>
    </div>
  );
};

export default View360;
