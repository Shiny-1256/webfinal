
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, ShoppingBag, Heart, Share2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { influencers, getProductById, Influencer, InfluencerLook, Product } from "@/lib/data";

const InstaGlow = () => {
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const [selectedLook, setSelectedLook] = useState<InfluencerLook | null>(null);
  const [lookProducts, setLookProducts] = useState<Product[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    // Reset animation state when component mounts
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSelectInfluencer = (influencer: Influencer) => {
    setSelectedInfluencer(influencer);
    setSelectedLook(null);
    setLookProducts([]);
  };
  
  const handleSelectLook = (look: InfluencerLook) => {
    setSelectedLook(look);
    
    // Get products for this look
    const products = look.products.map(id => getProductById(id)).filter(p => p) as Product[];
    setLookProducts(products);
  };
  
  const handleAddAllToCart = () => {
    toast.success("All items added to cart", {
      description: `${lookProducts.length} items from this look have been added to your cart.`,
      position: "bottom-right",
    });
  };
  
  const handleShare = () => {
    toast.info("Share look", {
      description: "Share options will appear here.",
      position: "bottom-right",
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-urban-ultralight px-4 py-1 text-sm font-medium text-urban-dark mb-3">
            Influencer Approved
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
            InstaGlow
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Shop complete looks curated by your favorite influencers with just one click.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Influencers List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-medium mb-4 flex items-center">
                <Instagram className="mr-2 text-urban" size={20} />
                Featured Influencers
              </h2>
              
              <div className="space-y-4">
                {influencers.map((influencer) => (
                  <button
                    key={influencer.id}
                    className={`w-full flex items-center p-3 rounded-lg transition-all ${
                      selectedInfluencer?.id === influencer.id
                        ? "bg-urban-ultralight"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => handleSelectInfluencer(influencer)}
                  >
                    <img
                      src={influencer.image}
                      alt={influencer.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <h3 className="font-medium">{influencer.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {influencer.followers} followers
                      </p>
                    </div>
                    <ChevronRight className="ml-auto text-muted-foreground" size={18} />
                  </button>
                ))}
              </div>
            </div>
            
            {/* How It Works */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-medium mb-4">How InstaGlow Works</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-urban-ultralight flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-urban-dark font-medium">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Select your favorite influencer to browse their curated looks
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-urban-ultralight flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-urban-dark font-medium">2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Choose a look that matches your style and see all the products used
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-urban-ultralight flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-urban-dark font-medium">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Add the entire look to your cart with one click or select individual items
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Looks Display */}
          <div className="lg:col-span-2">
            {selectedInfluencer ? (
              <div>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h2 className="text-xl font-medium mb-6">
                    {selectedInfluencer.name}'s Looks
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedInfluencer.looks.map((look) => (
                      <div 
                        key={look.id}
                        className={`relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                          selectedLook?.id === look.id
                            ? "ring-2 ring-urban shadow-md"
                            : ""
                        }`}
                        onClick={() => handleSelectLook(look)}
                      >
                        <div className="relative aspect-[3/4]">
                          <img
                            src={look.image}
                            alt={look.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="font-medium">{look.title}</h3>
                            <p className="text-sm opacity-80">{look.products.length} items</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedLook && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-medium">
                        {selectedLook.title} Look
                      </h2>
                      <div className="flex gap-2">
                        <button
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-muted-foreground hover:border-urban hover:text-urban transition-colors"
                          onClick={handleShare}
                        >
                          <Share2 size={16} />
                        </button>
                        <button
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-muted-foreground hover:border-urban hover:text-urban transition-colors"
                        >
                          <Heart size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden">
                          <img
                            src={selectedLook.image}
                            alt={selectedLook.title}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <h3 className="font-medium mb-3">Complete the Look</h3>
                        <div className="space-y-4 mb-6">
                          {lookProducts.map((product) => (
                            <div key={product.id} className="flex items-center">
                              <div className="w-16 h-16 rounded-md overflow-hidden mr-3">
                                <img
                                  src={product.images[0]}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <Link 
                                  to={`/product/${product.id}`}
                                  className="font-medium hover:text-urban transition-colors"
                                >
                                  {product.name}
                                </Link>
                                <p className="text-sm text-muted-foreground">
                                  ${product.salePrice || product.price}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="ml-2"
                                onClick={() => {
                                  toast.success("Added to cart", {
                                    description: `${product.name} has been added to your cart.`,
                                    position: "bottom-right",
                                  });
                                }}
                              >
                                <ShoppingBag size={14} />
                              </Button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Total for look:
                            </p>
                            <p className="font-medium text-lg">
                              ${lookProducts.reduce((sum, product) => sum + (product.salePrice || product.price), 0).toFixed(2)}
                            </p>
                          </div>
                          <Button
                            className="urban-button flex items-center gap-2"
                            onClick={handleAddAllToCart}
                          >
                            <ShoppingBag size={16} />
                            Add All to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 h-full">
                <div className={`text-center py-10 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-20 h-20 mx-auto bg-urban-ultralight rounded-full flex items-center justify-center mb-6">
                    <Instagram size={32} className="text-urban" />
                  </div>
                  <h2 className="text-2xl font-serif mb-4">
                    Discover Influencer Looks
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Select an influencer to explore their curated collections and shop complete looks in just one click.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {influencers.map((influencer) => (
                      <button
                        key={influencer.id}
                        className="flex items-center bg-gray-50 px-4 py-2 rounded-full hover:bg-urban-ultralight transition-colors"
                        onClick={() => handleSelectInfluencer(influencer)}
                      >
                        <img
                          src={influencer.image}
                          alt={influencer.name}
                          className="w-8 h-8 rounded-full object-cover mr-2"
                        />
                        <span>{influencer.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaGlow;
