import { Github, Linkedin, Mail, Newspaper, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Angus-Sun",
    colorClass: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/angussun/",
    colorClass: "hover:text-primary-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:a86sun@uwaterloo.ca",
    colorClass: "hover:text-primary-foreground",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://www.twitter.com/_angussun_",
    colorClass: "hover:text-primary-foreground"
  }
];

export const Footer = () => {
  return (
    <footer className="py-10 border-border">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="w-full flex justify-center">
          <div className="h-0.5 w-32 bg-primary/40 rounded" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <div className="flex gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white
                    bg-card/60 border border-border ${s.colorClass}`}
                >
                  <Icon className="w-6 h-6 text-foreground dark:text-primary transition-colors duration-300 hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};