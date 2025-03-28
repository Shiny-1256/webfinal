
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ai/ChatBot";
import { Toaster } from "sonner";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Favorites = () => {
  // In a real app, this would be fetched from an API or context
  const favoriteItems = [];
  const isEmpty = favoriteItems.length === 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-serif font-medium mb-6">My Favorites</h1>
          
          {isEmpty ? (
            <div className="text-center py-16">
              <div className="mb-6 inline-flex justify-center items-center w-24 h-24 rounded-full bg-gray-100">
                <Heart size={32} className="text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-4">No favorites yet</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                You haven't added any items to your favorites yet. Browse our collections and save items you love!
              </p>
              <Link to="/">
                <Button className="bg-urban hover:bg-urban-dark text-white">
                  Explore Products
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* This would display favorite items in a real implementation */}
              <p className="col-span-full text-center py-12 text-muted-foreground">
                Your favorite items will appear here.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ChatBot />
      <Toaster />
    </div>
  );
};

export default Favorites;
