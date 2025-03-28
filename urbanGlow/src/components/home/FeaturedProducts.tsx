
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 4);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("featured-products");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  return (
    <section 
      id="featured-products"
      className="py-16 md:py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-urban-ultralight px-4 py-1 text-sm font-medium text-urban-dark mb-3">
            Curated Selection
          </div>
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle mx-auto">
            Discover our hand-picked selection of this season's standout pieces, chosen for their exceptional design and versatility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/shop"
            className="urban-button-secondary inline-flex items-center gap-2"
          >
            View All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
