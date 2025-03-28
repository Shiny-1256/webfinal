
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, ChevronUp, X, MinusCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { chatbotResponses } from '@/lib/data';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your personal stylist. Ask me anything about fashion, style advice, outfit matching, or our products!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Suggested questions
  const suggestedQuestions = [
    "What's in style this season?",
    "How do I style a blazer?",
    "What colors go well with purple?",
    "What size should I get?",
    "How can I build a capsule wardrobe?"
  ];
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
      return;
    }
    setIsOpen(!isOpen);
  };
  
  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSendMessage = (content: string = inputValue) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const response = findResponse(content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  const findResponse = (question: string): string => {
    // Find the closest matching response
    const lowerQuestion = question.toLowerCase();
    
    // Match by exact question
    const exactMatch = chatbotResponses.find(
      (item) => item.question.toLowerCase() === lowerQuestion
    );
    
    if (exactMatch) return exactMatch.answer;
    
    // Match by keywords
    for (const response of chatbotResponses) {
      const keywords = response.question.toLowerCase().split(' ');
      const matchCount = keywords.filter(word => word.length > 3 && lowerQuestion.includes(word)).length;
      if (matchCount >= 2) return response.answer;
    }
    
    // Default response
    return "I don't have specific information about that, but I'd be happy to help you with outfit suggestions, style advice, or answer questions about our products. Feel free to ask something else!";
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };
  
  return (
    <>
      <div
        className={`fixed ${isOpen ? 'bottom-6' : 'bottom-24'} right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'transform translate-y-[calc(100%-60px)]' : ''
        }`}
      >
        {isOpen && (
          <div
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform ${
              isMobile ? 'w-[calc(100vw-48px)] h-[500px]' : 'w-[400px] h-[550px]'
            }`}
          >
            {/* Chat Header */}
            <div
              className="bg-gradient-to-r from-urban-dark to-urban p-4 flex justify-between items-center cursor-pointer"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Style Assistant</h3>
                  <p className="text-white/80 text-sm">Ask me about fashion & style</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="text-white/80 hover:text-white transition-colors ml-2"
                  onClick={minimizeChat}
                >
                  <MinusCircle size={20} />
                </button>
                <button
                  className="text-white/80 hover:text-white transition-colors ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Chat Body */}
            <div className="h-[calc(100%-130px)] overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-urban text-white rounded-tr-none'
                          : 'bg-white border border-gray-200 rounded-tl-none'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 text-right ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-urban rounded-full animate-bounce delay-0"></div>
                        <div className="w-2 h-2 bg-urban rounded-full animate-bounce delay-150"></div>
                        <div className="w-2 h-2 bg-urban rounded-full animate-bounce delay-300"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Suggested Questions */}
            <div className="px-4 py-2 border-t border-gray-100 bg-white">
              <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    className="px-3 py-1 text-xs bg-urban-ultralight text-urban-dark rounded-full whitespace-nowrap hover:bg-urban-light transition-colors"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="p-3 border-t border-gray-100 bg-white">
              <div className="flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about style, fits, or colors..."
                  className="urban-input"
                />
                <button
                  className="ml-2 w-10 h-10 rounded-full bg-urban text-white flex items-center justify-center hover:bg-urban-dark transition-colors"
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
        
        <button
          className={`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
            isOpen
              ? 'hidden'
              : isMinimized
              ? 'w-full h-12 bg-white border-t border-gray-200'
              : 'w-16 h-16 bg-urban hover:bg-urban-dark'
          }`}
          onClick={toggleChat}
        >
          {isMinimized ? (
            <div className="flex items-center justify-between w-full px-4">
              <span className="text-sm font-medium">Style Assistant</span>
              <ChevronUp size={18} className="text-gray-500" />
            </div>
          ) : (
            <MessageSquare size={24} className="text-white" />
          )}
        </button>
      </div>
    </>
  );
};

export default ChatBot;
