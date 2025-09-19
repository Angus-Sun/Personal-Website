import { useState, useEffect } from "react";
import TextType from "./TextType";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const AboutSection = () => {
  const [showSecondText, setShowSecondText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 2900);

    return () => clearTimeout(timer);
  }, []);

  const BoldUnderline = ({ children }) => (
    <span className="font-bold relative bold-underline text-foreground">
      <span className="relative z-10">{children}</span>
      <span
        className="
          absolute left-0 -bottom-1 h-0.5 w-0
          transition-all duration-300
          group-hover:w-full
          bg-primary
        "
        aria-hidden="true"
      />
    </span>
  );

  const aboutPoints = [
    <>
      Software Engineering @ <BoldUnderline>University of Waterloo</BoldUnderline>
    </>,
    <>
      Interested in <BoldUnderline>web development &amp; AI/ML</BoldUnderline> and building scalable, innovative applications
    </>,
    "1st year from Vancouver passionate about building apps, music, and photography"
  ];

  const previousExperience = [
    <>
      Built <BoldUnderline>Squat Showdown</BoldUnderline>, a web app which leverages AI to detect human poses
    </>,
    <>
      Interned <BoldUnderline> @ Falcon Technologies</BoldUnderline>, developing secure APIs & scalable systems
    </>,
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/yourusername", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yourusername", color: "hover:text-blue-600" },
    { name: "Email", icon: Mail, href: "mailto:your.email@example.com", color: "hover:text-red-500" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/yourusername", color: "hover:text-blue-400" },
  ];

  return (
    <div className="px-4 sm:px-6 xl:px-12 " style={{ transform: 'scale(0.95)' }}>
      <section className="max-w-4xl xl:max-w-6xl mx-auto pt-20 md:pt-32 lg:pt-13 pb-4 md:pb-14 lg:pb-4 md:min-h-[60vh] lg:min-h-0">
        <div className="mb-6 lg:mb-6 2xl:mb-16 text-center">
          <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold">
            <TextType
              as="span"
              text="Hi there! I'm "
              typingSpeed={125}
              initialDelay={1000}
              showCursor={!showSecondText}
              loop={false}
              cursorClassName="text-foreground"
              className="inline text-foreground"
            />
            
            {showSecondText && (
              <TextType
                as="span"
                text={["Angus Sun", "a UW student", "a developer"]}
                typingSpeed={125}
                deletingSpeed={40}
                pauseDuration={5000}
                loop={true}
                showCursor={true}
                cursorClassName="text-white"
                className="inline text-primary"
              />
            )}
          </h1>
        </div>

        <div className="max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto w-full text-center">
          <div className="space-y-5 xl:space-y-8 2xl:space-y-12">
            <div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-6xl font-semibold mb-4 xl:mb-6 2xl:mb-10 text-foreground group cursor-pointer">
                <span className="relative
                  before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:bg-primary before:w-0 before:transition-all before:duration-300 group-hover:before:w-full">
                  About me:
                </span>
              </h3>
              <ul className="list-disc md:list-none space-y-2 xl:space-y-4 2xl:space-y-6 pl-4 md:pl-0 text-center">
                {aboutPoints.map((point, index) => (
                  <li
                     key={index}
                     className="group text-muted-foreground cursor-pointer animate-slide-in"
                     style={{ animationDelay: `${index * 0.1}s` }}
                   >
                     <span className="block text-base xl:text-lg 2xl:text-2xl transition-colors transition-transform duration-200 group-hover:text-foreground group-hover:translate-x-1">
                       {point}
                     </span>
                   </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-6xl font-semibold mb-4 xl:mb-6 2xl:mb-10 text-foreground group cursor-pointer">
                <span className="relative
                  before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:bg-primary before:w-0 before:transition-all before:duration-300 group-hover:before:w-full">
                  Previously I've:
                </span>
              </h3>
              <ul className="list-disc md:list-none space-y-2 xl:space-y-4 2xl:space-y-6 pl-4 md:pl-0 text-center">
                {previousExperience.map((experience, index) => (
                  <li 
                    key={index} 
                    className="group text-muted-foreground cursor-pointer animate-slide-in"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <span className="block text-base xl:text-lg 2xl:text-2xl transition-colors transition-transform duration-200 group-hover:text-foreground group-hover:translate-x-1">
                      {experience}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-4xl xl:max-w-6xl mx-auto py-8 md:py-12 lg:py-8">
        <div className="flex w-full justify-center">
          <button
            onClick={() => navigate("/projects")}
            className="fancy-btn group relative inline-flex items-center gap-2 px-12 py-5 rounded-xl font-semibold text-lg
                       text-foreground bg-muted/70 backdrop-blur border border-primary/30
                       transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              See what else I've built
            </span>
            <span className="arrow relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>

            <span className="gradient-ring pointer-events-none absolute inset-0 rounded-xl"></span>
            <span className="fill-layer pointer-events-none absolute inset-0 scale-x-0 origin-left rounded-xl bg-primary
                             transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            <span className="shine pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-shine" />
          </button>
        </div>
      </section>
    </div>
  );
};