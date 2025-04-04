
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ai/ChatBot";
import { Toaster } from "sonner";
import { getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";

const Accessories = () => {
  const products = getProductsByCategory("accessories");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">Accessories Collection</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete your look with our stunning accessories, from statement jewelry to functional bags and more.
            </p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-wrap justify-between items-center mb-8 pb-4 border-b">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <span className="text-sm font-medium">Filter by:</span>
              <button className="text-sm px-3 py-1 rounded-full border hover:bg-gray-50">
                Jewelry
              </button>
              <button className="text-sm px-3 py-1 rounded-full border hover:bg-gray-50">
                Bags
              </button>
              <button className="text-sm px-3 py-1 rounded-full border hover:bg-gray-50">
                Hats
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

export default Accessories;
