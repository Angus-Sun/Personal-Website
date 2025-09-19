import { Search } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectList } from "../components/ProjectList";
import DotGrid from "../components/DotGrid";
import { useState, useEffect } from "react";

export const Projects = () => {

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

  const projects = [
    {
      title: "Squat Showdown",
      href: "https://squat-showdown.vercel.app",
      description:
        "Squat detection game using MediaPipe + WebSockets. Real-time multiplayer fitness challenge. Best AI Hack at Boost Hacks II (1200+ participants).",
      image: "/assets/projects/Squat_Showdown.png",
      imageAlt: "Squat Showdown",
      technologies: [
        "MediaPipe",
        "Express",
        "React",
        "Javascript",
        "HTML",
        "CSS"
      ],
      github: "https://github.com/Angus-Sun/Squat-Showdown/",
      demo: "https://squat-showdown.vercel.app",
    },
    {
      title: "Skync",
      href: "https://skync-frontend.vercel.app/",
      description:
        "Collaborative whiteboard with real-time drawing, text, and image editing. Built with Socket.IO + React, featuring dynamic tools and undo/redo.",
      image: "/assets/projects/Skync.jpg",
      imageAlt: "Skync",
      technologies: ["React", "Socket.io", "Websockets", "Express.js"],
      github: "https://github.com/Angus-Sun/skync",
      demo: "https://skync-frontend.vercel.app/",
    },
    {
      title: "Nanopeas Online Shop",
      href: "https://nanopeas.vercel.app/",
      description:
        "Full-stack e-commerce platform with PayPal integration, real-time cart + inventory, and responsive UI for a Vancouver nonprofit.",
      image: "/assets/projects/Nanopeas.jpg",
      imageAlt: "Nanopeas",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "PayPal API",
        "localStorage",
        "Next.js"
      ],
      demo: "https://nanopeas.vercel.app",
    },
    {
      title: "Chess Climb",
      href: "https://github.com/Angus-Sun/Chess-Climb",
      description:
        "Interactive chess-based puzzle game built with Python + SimpleGUI. Features OOP-based game entities, audio, movement validation, collision detection, and a guided tutorial.",
      image: "/assets/projects/chessclimbdemo1.gif",
      imageAlt: "Chess Climb",
      technologies: [
        "Python",
        "SimpleGUI",
        "Object-Oriented Design",
      ],
      github: "https://github.com/Angus-Sun/Chess-Climb",
      demo: "https://github.com/Angus-Sun/Chess-Climb",
    },
    {
      title: "Echoblock",
      href: "https://www.youtube.com/watch?v=ISp11LBiZbk&feature=youtu.be",
      description:
        "Raspberry Pi–powered musical memory game. Real-time audio processing with LEDs. Features pitch detection using FFTS, tuning feedback, and progressive difficulty.",
      image: "/assets/projects/Echoblock Demo.png",
      imageAlt: "Echoblock",
      technologies: [
        "Python",
        "SciPy",
        "Pygame",
        "Pyaudio",
        "Numpy"
      ],
      github: "https://github.com/Angus-Sun/EchoBlock",
      demo: "https://www.youtube.com/watch?v=ISp11LBiZbk&feature=youtu.be",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="text-foreground bg-background overflow-x-hidden relative z-10">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
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
      <Navbar />
      
       <div className="container mx-auto px-4 pt-24 pb-16 overflow-visible fade-in">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="relative z-20 text-4xl md:text-6xl font-bold mb-4 leading-[1.15] pb-1 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of projects I've built using various technologies and frameworks.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute top-2.5 left-3 size-6 text-muted-foreground" />
          <input
            type="text"
            placeholder="search for a project, technology, etc."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-4 border border-border rounded-md bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary pl-10"
          />
        </div>

        {/* Projects */}
        <ProjectList projects={filteredProjects} />

        {/* Additional Projects Link */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            You can check out the rest of my projects{" "}
            <a 
              href="https://github.com/Angus-Sun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};