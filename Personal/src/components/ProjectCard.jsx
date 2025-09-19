import { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    title,
    description,
    image,
    imageAlt,
    technologies = [],
    github,
    demo,
    href,
  } = project;

  return (
    <div 
      className="group relative bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 md:h-56 lg:h-64 bg-muted/5 overflow-hidden">
           {image ? (
             <img
               src={image}
               alt={imageAlt || title}
               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
               style={{ objectPosition: "center" }}
             />
           ) : (
             <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
               <Code size={36} className="text-primary/40" />
             </div>
           )}
        
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${ 
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors" 
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} className="text-white" />
            </a>
          )}
          {(demo || href) && (
            <a
              href={demo || href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors" 
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} className="text-white" /> 
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-2"> 
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-3 leading-relaxed text-sm"> 
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3"> 
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium hover:bg-primary/20 transition-colors" 
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2"> 
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg text-foreground transition-colors duration-200 text-sm" 
            >
              <Github size={14} /> 
              Code
            </a>
          )}
          {(demo || href) && (
            <a
              href={demo || href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-200 text-sm" 
            >
              <ExternalLink size={14} /> 
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};