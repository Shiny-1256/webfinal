
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmartGlow from "@/components/features/SmartGlow";
import ChatBot from "@/components/ai/ChatBot";
import { Toaster } from "sonner";

const SmartGlowPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SmartGlow />
      </main>
      <Footer />
      <ChatBot />
      <Toaster />
    </div>
  );
};

export default SmartGlowPage;
