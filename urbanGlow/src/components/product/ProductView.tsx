
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ShoppingBag, 
  Heart, 
  Share2, 
  Star, 
  RotateCw, 
  ChevronDown, 
  Shirt 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  getProductById, 
  getRelatedProducts, 
  getFrequentlyBoughtTogether, 
  Product 
} from "@/lib/data"
import VirtualTryOn from "@/components/product/VirtualTryOn";
import RelatedProducts from "@/components/product/RelatedProducts";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductView = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isVirtualTryOnOpen, setIsVirtualTryOnOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
        <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
        <p className="text-muted-foreground mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/" className="urban-button">
          Return to Home
        </Link>
      </div>
    );
  }
  
  const relatedProducts = getRelatedProducts(product);
  const frequentlyBoughtTogether = getFrequentlyBoughtTogether(product);
  
  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error("Please select a color", {
        position: "bottom-right",
      });
      return;
    }
    
    if (!selectedSize && product.sizes.length > 0 && product.sizes[0] !== "One Size") {
      toast.error("Please select a size", {
        position: "bottom-right",
      });
      return;
    }
    
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
      position: "bottom-right",
    });
  };
  
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites", {
      description: isFavorite 
        ? `${product.name} has been removed from your favorites.`
        : `${product.name} has been added to your favorites.`,
      position: "bottom-right",
    });
  };
  
  const handleShare = () => {
    toast.info("Share", {
      description: "This feature will be available soon!",
      position: "bottom-right",
    });
  };
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground mb-8">
          <ol className="flex">
            <li className="hover:text-urban transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2">/</li>
            <li className="hover:text-urban transition-colors">
              <Link to={`/${product.category}`}>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden mb-4 aspect-square relative">
              { isVirtualTryOnOpen ? (
                <VirtualTryOn 
                  product={product} 
                  onClose={() => setIsVirtualTryOnOpen(false)} 
                />
              ) : (
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                />
              )}
              
              {/* Sale Badge */}
              {product.salePrice && (
                <Badge className="absolute top-4 left-4 bg-urban text-white z-10">
                  Sale
                </Badge>
              )}
              
              {/* New Badge */}
              {product.isNew && !product.salePrice && (
                <Badge className="absolute top-4 left-4 bg-urban-dark text-white z-10">
                  New
                </Badge>
              )}
              
              {/* View Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                
                <button
                  onClick={() => setIsVirtualTryOnOpen(!isVirtualTryOnOpen)}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-urban hover:bg-urban hover:text-white transition-all duration-300"
                  aria-label="Virtual Try On"
                >
                  <Shirt size={18} />
                </button>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "rounded-lg overflow-hidden border-2 transition-all hover:opacity-80",
                    activeImage === index
                      ? "border-urban shadow-sm"
                      : "border-transparent"
                  )}
                  onClick={() => {
                    setActiveImage(index);
                    setIsVirtualTryOnOpen(false);
                  }}
                >
                  <img
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover aspect-square"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-serif font-medium mb-2">
                {product.name}
              </h1>
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={
                        index < Math.floor(product.rating)
                          ? "fill-urban-dark text-urban-dark"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating.toFixed(1)} ({product.reviews.length} reviews)
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className={product.inStock ? "text-green-600" : "text-red-500"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                {product.salePrice ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-medium text-urban mr-3">
                      ${product.salePrice.toFixed(2)}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">
                {product.shortDescription}
              </p>
            </div>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">
                Color: {selectedColor ? selectedColor : "Select a color"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center",
                      selectedColor === color
                        ? "border-urban shadow-md"
                        : "border-gray-200"
                    )}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color} color`}
                  >
                    <span
                      className="w-8 h-8 rounded-full"
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
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            {product.sizes.length > 0 && product.sizes[0] !== "One Size" && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium">
                    Size: {selectedSize ? selectedSize : "Select a size"}
                  </h3>
                  <button className="text-sm text-urban flex items-center">
                    Size Guide <ChevronDown size={14} className="ml-1" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={cn(
                        "min-w-[3rem] h-10 px-3 rounded-md border transition-all",
                        selectedSize === size
                          ? "border-urban bg-urban-ultralight text-urban-dark"
                          : "border-gray-200 hover:border-gray-300"
                      )}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex w-32 h-10 border border-gray-200 rounded-md">
                <button
                  className="w-10 flex items-center justify-center text-gray-500 hover:text-urban transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-12 text-center border-0 focus:ring-0"
                />
                <button
                  className="w-10 flex items-center justify-center text-gray-500 hover:text-urban transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                className="urban-button flex-1 sm:flex-none flex items-center gap-2"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingBag size={18} />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "w-12 h-12 p-0 flex items-center justify-center transition-all",
                  isFavorite && "text-urban fill-urban"
                )}
                onClick={handleToggleFavorite}
              >
                <Heart size={20} className={isFavorite ? "fill-urban" : ""} />
              </Button>
              <Button
                variant="outline"
                className="w-12 h-12 p-0 flex items-center justify-center"
                onClick={handleShare}
              >
                <Share2 size={20} />
              </Button>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-12 mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 h-auto">
              <TabsTrigger value="description" className="py-3">Description</TabsTrigger>
              <TabsTrigger value="specifications" className="py-3">Specifications</TabsTrigger>
              <TabsTrigger value="reviews" className="py-3">Reviews ({product.reviews.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6 px-2">
              <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6 px-2">
              <div className="max-w-3xl mx-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Brand</td>
                      <td className="py-3 text-muted-foreground">{product.brand}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Category</td>
                      <td className="py-3 text-muted-foreground">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Material</td>
                      <td className="py-3 text-muted-foreground">{product.features[0]}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Available Colors</td>
                      <td className="py-3 text-muted-foreground">{product.colors.join(", ")}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Available Sizes</td>
                      <td className="py-3 text-muted-foreground">{product.sizes.join(", ")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6 px-2">
              <div className="max-w-3xl mx-auto">
                {product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="font-medium">{review.user}</span>
                            <div className="flex items-center mt-1">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                  key={index}
                                  size={14}
                                  className={
                                    index < review.rating
                                      ? "fill-urban-dark text-urban-dark"
                                      : "text-gray-300"
                                  }
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground mb-3">{review.comment}</p>
                        {(review.userHeight || review.userWeight || review.purchasedSize) && (
                          <div className="flex flex-wrap gap-2 text-sm mb-3">
                            {review.userHeight && (
                              <span className="bg-gray-100 px-2 py-1 rounded">
                                Height: {review.userHeight}
                              </span>
                            )}
                            {review.userWeight && (
                              <span className="bg-gray-100 px-2 py-1 rounded">
                                Weight: {review.userWeight}
                              </span>
                            )}
                            {review.purchasedSize && (
                              <span className="bg-gray-100 px-2 py-1 rounded">
                                Size: {review.purchasedSize}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="flex items-center text-sm">
                          <button className="text-urban hover:underline">
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground mb-4">There are no reviews yet.</p>
                    <Button className="urban-button">Write a Review</Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif font-medium mb-8">Frequently Bought Together</h2>
          <RelatedProducts products={frequentlyBoughtTogether} />
        </div>
        
        <div>
          <h2 className="text-2xl font-serif font-medium mb-8">You May Also Like</h2>
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
