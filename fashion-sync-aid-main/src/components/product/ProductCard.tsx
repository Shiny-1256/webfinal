import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Heart, ShoppingBag, RotateCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type Product } from "@/lib/data";
import { toast } from "sonner";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
      position: "bottom-right",
    });
  };
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites", {
      description: isFavorite 
        ? `${product.name} has been removed from your favorites.`
        : `${product.name} has been added to your favorites.`,
      position: "bottom-right",
    });
  };
  
  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.info("Quick view", {
      description: "This feature will be available soon!",
      position: "bottom-right",
    });
  };
  
  const handleView360 = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.info("360° View", {
      description: "View the product from all angles!",
      position: "bottom-right",
    });
  };
  
  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <div className="product-image-container">
        {/* Product Image */}
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        
        {/* Sale Badge */}
        {product.salePrice && (
          <Badge className="absolute top-3 left-3 bg-urban text-white z-10">
            Sale
          </Badge>
        )}
        
        {/* New Badge */}
        {product.isNew && !product.salePrice && (
          <Badge className="absolute top-3 left-3 bg-urban-dark text-white z-10">
            New
          </Badge>
        )}
        
        {/* Image Navigation Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentImageIndex === index
                    ? "bg-urban w-3"
                    : "bg-white/70 hover:bg-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Product Actions */}
        <div
          className={`absolute inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-urban hover:bg-urban hover:text-white transition-all duration-300 shadow-md"
            onClick={handleToggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              size={18}
              className={isFavorite ? "fill-urban text-urban" : ""}
            />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-urban hover:bg-urban hover:text-white transition-all duration-300 shadow-md"
            onClick={handleQuickView}
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-urban hover:bg-urban hover:text-white transition-all duration-300 shadow-md"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
          {product.view360Images && (
            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-urban hover:bg-urban hover:text-white transition-all duration-300 shadow-md"
              onClick={handleView360}
              aria-label="View 360"
            >
              <RotateCw size={18} />
            </button>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 group-hover:text-urban transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          {product.brand}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.salePrice ? (
              <>
                <span className="font-semibold text-urban">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-semibold">${product.price.toFixed(2)}</span>
            )}
          </div>
          <div className="flex items-center">
            <span className="text-urban-dark">★</span>
            <span className="text-sm ml-1">{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
