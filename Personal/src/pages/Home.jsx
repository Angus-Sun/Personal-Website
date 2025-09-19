import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import DotGrid from "../components/DotGrid";
import { useState, useEffect } from "react";
export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const getDotColors = () => {
    if (isDarkMode) {
      return {
        baseColor: "#362f43ff",
        activeColor: "#25026aff"
      };
    } else {
      return {
        baseColor: "#d1d5db", 
        activeColor: "#6366f1"  
      };
    }
  };

  const colors = getDotColors();

  return (
    <div className="min-h-screen text-foreground bg-background overflow-x-hidden relative">
      <div className="absolute h-1 h-full w-full z-0">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor={colors.baseColor}
          activeColor={colors.activeColor}
          proximity={0}
          shockRadius={0}
          shockStrength={0}
          resistance={0}
          returnDuration={0}
          speedTrigger={99999}
        />
      </div>
    <div className="relative z-10">
    <Navbar />
    <main>
    <AboutSection />
    </main>
    <Footer />
    </div>
  </div>
  );
};