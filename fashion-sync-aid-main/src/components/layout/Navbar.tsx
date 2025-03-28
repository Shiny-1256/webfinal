
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, User, Heart, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-50 font-serif text-2xl font-bold tracking-tighter"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-urban-dark to-urban">
            urbanGlow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-urban transition-colors">Home</Link>
          <Link to="/women" className="text-foreground hover:text-urban transition-colors">Women</Link>
          <Link to="/men" className="text-foreground hover:text-urban transition-colors">Men</Link>
          <Link to="/accessories" className="text-foreground hover:text-urban transition-colors">Accessories</Link>
          <Link to="/wardrobe" className="text-foreground hover:text-urban transition-colors">Wardrobe Sync</Link>
          <Link to="/influencer" className="text-foreground hover:text-urban transition-colors">InstaGlow</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="hover:text-urban transition-colors">
            <Search size={20} />
          </button>
          <Link to="/favorites" className="hover:text-urban transition-colors">
            <Heart size={20} />
          </Link>
          <Link to="/account" className="hover:text-urban transition-colors">
            <User size={20} />
          </Link>
          <Link to="/chat" className="hover:text-urban transition-colors">
            <MessageSquareText size={20} />
          </Link>
          <Link to="/cart" className="relative hover:text-urban transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-urban text-white">
                {cartCount}
              </Badge>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 p-1" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col space-y-6 text-lg">
              <Link 
                to="/" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/women" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Women
              </Link>
              <Link 
                to="/men" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link 
                to="/accessories" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accessories
              </Link>
              <Link 
                to="/wardrobe" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wardrobe Sync
              </Link>
              <Link 
                to="/influencer" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                InstaGlow
              </Link>
            </nav>

            <div className="mt-auto mb-8 flex justify-around py-4">
              <Link 
                to="/search" 
                className="p-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search size={24} />
              </Link>
              <Link 
                to="/favorites" 
                className="p-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart size={24} />
              </Link>
              <Link 
                to="/account" 
                className="p-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User size={24} />
              </Link>
              <Link 
                to="/chat" 
                className="p-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquareText size={24} />
              </Link>
              <Link 
                to="/cart" 
                className="p-3 relative"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingBag size={24} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-urban text-white">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
