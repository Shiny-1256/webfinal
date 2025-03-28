
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold text-urban mb-4">404</h1>
          <p className="text-2xl font-medium mb-6">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8">
            We can't seem to find the page you're looking for. The page might have been moved, deleted, or never existed.
          </p>
          <Link to="/">
            <Button className="bg-urban hover:bg-urban-dark text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default NotFound;
