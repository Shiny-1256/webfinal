
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ai/ChatBot";
import { Toaster } from "sonner";
import { ShoppingBag, Trash2, X, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cart = () => {
  // This would normally come from a cart context or API
  const [cartItems, setCartItems] = React.useState([]);
  const isEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-serif font-medium mb-6">Your Shopping Cart</h1>
          
          {isEmpty ? (
            <div className="text-center py-16">
              <div className="mb-6 inline-flex justify-center items-center w-24 h-24 rounded-full bg-gray-100">
                <ShoppingBag size={32} className="text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Looks like you haven't added anything to your cart yet. Browse our collections to find your perfect style!
              </p>
              <Link to="/">
                <Button className="bg-urban hover:bg-urban-dark text-white">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* This would display actual cart items in a real implementation */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <p className="text-center text-muted-foreground py-8">
                    Your cart items will appear here.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
                  <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$0.00</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-urban hover:bg-urban-dark text-white">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
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

export default Cart;
