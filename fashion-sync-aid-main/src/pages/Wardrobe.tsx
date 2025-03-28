
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WardrobeSync from "@/components/features/WardrobeSync";
import ChatBot from "@/components/ai/ChatBot";
import { Toaster } from "sonner";

const Wardrobe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <WardrobeSync />
      </main>
      <Footer />
      <ChatBot />
      <Toaster />
    </div>
  );
};

export default Wardrobe;
