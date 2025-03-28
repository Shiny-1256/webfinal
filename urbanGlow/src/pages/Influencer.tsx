
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InstaGlow from "@/components/features/InstaGlow";
import ChatBot from "@/components/ai/ChatBot";
import { Toaster } from "sonner";

const Influencer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstaGlow />
      </main>
      <Footer />
      <ChatBot />
      <Toaster />
    </div>
  );
};

export default Influencer;
