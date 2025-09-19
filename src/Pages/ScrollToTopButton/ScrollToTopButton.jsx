import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    
      visible && (
            <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>

       
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`fixed bottom-6 right-6 z-50 p-2.5 rounded-full cursor-pointer bg-black text-white shadow-lg transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ChevronUp size={22} />
    </button>
     </TooltipTrigger>
      <TooltipContent side="top" className="text-xs font-medium">
          Scroll to Top
        </TooltipContent>
        </Tooltip>
        </TooltipProvider>

      )
    

  );
};

export default ScrollToTopButton;
