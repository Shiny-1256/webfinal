
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductView from "@/components/product/ProductView";
import ChatBot from "@/components/ai/ChatBot";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProductView />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Product;
