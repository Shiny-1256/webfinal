
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ai/ChatBot";
import { Toaster } from "sonner";
import { getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";

const Women = () => {
  const products = getProductsByCategory("women");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">Women's Collection</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of women's fashion, from elegant dresses to comfortable casual wear.
            </p>
          </div>

          {/* Filters and Sorting (can be expanded later) */}
          <div className="flex flex-wrap justify-between items-center mb-8 pb-4 border-b">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <span className="text-sm font-medium">Filter by:</span>
              <button className="text-sm px-3 py-1 rounded-full border hover:bg-gray-50">
                New Arrivals
              </button>
              <button className="text-sm px-3 py-1 rounded-full border hover:bg-gray-50">
                Best Sellers
              </button>
              <button className="text-sm px-3 py-1 rounded-full border hover:bg-gray-50">
                Sale
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Sort by:</span>
              <select className="text-sm border rounded-md px-2 py-1">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Best Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center py-12 text-muted-foreground">
                No products found. Please check back soon for our updated collection.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
      <Toaster />
    </div>
  );
};

export default Women;
