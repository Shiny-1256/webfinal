
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { SendHorizonal, User, Image, Paperclip, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden h-[calc(100vh-250px)] flex flex-col">
            <div className="p-4 border-b">
              <h2 className="font-medium">Style Assistant</h2>
              <p className="text-sm text-muted-foreground">
                Chat with our AI stylist for personalized fashion advice
              </p>
            </div>
            
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {/* Initial Message */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-urban flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                </div>
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    Hi there! I'm your personal style assistant. How can I help you today?
                  </p>
                </div>
              </div>
              
              {/* Placeholder for messages */}
              <div className="text-center text-muted-foreground text-sm py-8">
                Start chatting with the Style Assistant to get personalized fashion advice.
              </div>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex items-center">
                <div className="flex space-x-2 mr-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Image size={20} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Paperclip size={20} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Smile size={20} />
                  </button>
                </div>
                <input
                  type="text"
                  className="flex-grow px-4 py-2 border rounded-full"
                  placeholder="Type your message..."
                />
                <Button className="ml-2 rounded-full w-10 h-10 p-0 bg-urban hover:bg-urban-dark">
                  <SendHorizonal size={18} className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Chat;
