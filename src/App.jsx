import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { 
  Mail, 
  ExternalLink, 
  Download,
  ArrowRight,
  Code2,
  Terminal,
  Database,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Handle background blur on scroll
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // 2. Intersection Observer to track which section is currently on screen
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Triggers when section hits the upper-middle part of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Renewaly",
      badge: "Intern Project",
      description: "Spearheaded frontend UI for a centralized FinOps platform. Built interactive dashboards for real-time cloud cost tracking and multi-tenant management.",
      tech: ["React.js", "Tailwind CSS", "UI/UX"],
      link: "" // Removed link for company secrets
    },
    {
      title: "VIZORA",
      badge: "AI & Data",
      description: "AI-based, privacy-focused data visualization platform featuring a chat-based insight generator to extract meaningful dataset patterns.",
      tech: ["React", "Python", "Flask", "PostgreSQL"],
      link: "https://github.com/PravinKumar22005/VIZORA-JP" 
    },
    {
      title: "InnovNutri-Bite",
      badge: "Web Dev",
      description: "AI-powered nutrition assistant for personalized meal guidance. Features robust Firebase authentication and an interactive UI.",
      tech: ["React.js", "Tailwind CSS", "Gemini AI"],
      link: "https://github.com/pravin22kumar/innovnutri-bite" 
    }
  ];

  const skills = [
    "React.js", "Tailwind CSS", "HTML/CSS", "Python", "Java", 
    "SQL", "Power BI", "Tableau", "PostgreSQL", "Firebase", "Gemini AI"
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 relative">
      
      {/* Enables smooth scrolling across the entire page and prevents navbar overlap */}
      <style>{`
        html { scroll-behavior: smooth; }
        section { scroll-margin-top: 120px; }
      `}</style>

      {/* Subtle Background Grid & Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-100/40 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-100/40 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-multiply"></div>
      </div>

      {/* Floating Pill Navigation with Animations */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
        <div className={`flex items-center space-x-1 md:space-x-4 px-6 py-3 rounded-full border transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-slate-200 shadow-md scale-100' : 'bg-white/50 backdrop-blur-md border-slate-200/50 scale-105'}`}>
          <a href="#home" className="flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900 mr-4 md:mr-8 hover:text-indigo-600 transition-colors">
            <img
              src="https://agno.blob.core.windows.net/dream-images/9922004070.jpeg"
              alt="pravin's-portfolio logo"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200 shadow-sm"
            />
            <span>pravin's-portfolio</span>
          </a>
          <div className="hidden md:flex items-center space-x-2 text-sm font-medium text-slate-500 p-1">
            {['About', 'Projects', 'Experience'].map((item) => {
              const lowerItem = item.toLowerCase();
              const isActive = activeSection === lowerItem;
              return (
                <a 
                  key={item} 
                  href={`#${lowerItem}`} 
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${isActive ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm' : 'hover:text-indigo-600 hover:bg-slate-50'}`}
                >
                  {item}
                </a>
              );
            })}
          </div>
          <a href="#contact" className="ml-4 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
            Let's Talk
          </a>
        </div>
      </nav>

      <main className="relative z-10 px-6 max-w-5xl mx-auto pb-32">
        
        {/* Hero Section */}
        <section id="home" className="pt-48 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Open to new roles</span>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] font-extrabold tracking-tighter text-slate-900 leading-[1.05] mb-6 max-w-4xl">
            Building digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">experiences</span> & decoding data.
          </h1>
          
          <p className="text-xl text-slate-500 font-light max-w-2xl mb-10 leading-relaxed">
            I'm Pravin Kumar A, a Software Developer & Data Analyst. I bridge the gap between clean frontend engineering and actionable analytics.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="https://agno.blob.core.windows.net/dream-images/Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
              <Download size={18} className="text-slate-400" />
              <span>Resume PDF</span>
            </a>
          </div>

          <div className="flex items-center gap-6 mt-16 pt-8 border-t border-slate-200/60 w-full max-w-md justify-center">
            <a href="https://github.com/pravin22kumar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <FaGithub size={24} aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/pravin-kumar-a-4aa3712a0/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
              <FaLinkedinIn size={24} aria-hidden="true" />
            </a>
            <a href="mailto:pravinkumar22005@gmail.com?subject=Reaching%20out%20from%20your%20portfolio" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </section>

        {/* About & Skills Bento Box */}
        <section id="about" className="py-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-[2rem] p-10 md:p-12 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Terminal className="text-indigo-500" size={24}/>
                About Me
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                I am a passionate developer specializing in building scalable, AI-powered web applications and extracting insights from complex datasets. Currently pursuing my B.Tech in CSE (Data Science) at Kalasalingam Academy.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                I thrive at the intersection of frontend architecture and analytics, focusing on writing clean code and designing intuitive user interfaces that solve real-world problems.
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-[2rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-white flex flex-col justify-center">
              <h2 className="text-xl font-bold tracking-tight mb-8 text-white flex items-center gap-3">
                <Code2 className="text-cyan-400" size={24}/>
                Core Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm font-medium text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Selected Work</h2>
            <p className="text-slate-500 mt-3 font-light text-lg">A showcase of my recent platforms and applications.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const CardTag = project.link ? "a" : "div";
              return (
                <CardTag 
                  {...(project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                  key={index} 
                  className={`group bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 block ${!project.link ? 'cursor-default' : ''}`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                      {project.badge}
                    </span>
                    {project.link && (
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                        <ExternalLink size={18} />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardTag>
              );
            })}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-20">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Experience Card */}
            <div className="bg-white rounded-[2rem] p-10 md:p-12 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <Briefcase className="text-indigo-500" size={24} />
                Experience
              </h2>
              
              <div className="relative pl-6 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-white bg-indigo-500 shadow-sm"></div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1 block">07/2025 - Present</span>
                <h3 className="text-xl font-bold text-slate-900">Software Development Intern</h3>
                <p className="text-sm text-slate-500 mb-6 font-medium">Agiliz Tech • Madurai, India</p>
                
                <ul className="space-y-4 text-slate-600 text-sm font-light leading-relaxed">
                  <li className="flex items-start"><span className="mr-3 text-indigo-400 font-bold">·</span> Designed and engineered the UI for Renewaly, centralizing AWS/Azure billing.</li>
                  <li className="flex items-start"><span className="mr-3 text-indigo-400 font-bold">·</span> Built responsive React.js dashboards to visualize cost anomalies.</li>
                  <li className="flex items-start"><span className="mr-3 text-indigo-400 font-bold">·</span> Contributed to AI-driven workflows improving intelligent decision flows.</li>
                </ul>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-[2rem] p-10 md:p-12 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <GraduationCap className="text-cyan-500" size={24} />
                Education
              </h2>
              
              <div className="relative pl-6 border-l-2 border-slate-100 mb-10">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-white bg-cyan-500 shadow-sm"></div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-1 block">2022 - Present</span>
                <h3 className="text-xl font-bold text-slate-900">B.Tech CSE (Data Science)</h3>
                <p className="text-sm text-slate-500 mt-1">Kalasalingam Academy</p>
                <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-bold border border-cyan-100">
                  CGPA: 7.69
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Certifications & Awards</h3>
              <div className="space-y-3 flex-grow">
                {[
                  { title: "Deloitte - Data Analytics", year: "2025", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_hQMtkuWPyzR89cHFY_1750691279820_completion_certificate.pdf" },
                  { title: "Quantium - Data Analytics", year: "2025", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_hQMtkuWPyzR89cHFY_1750912924938_completion_certificate.pdf" },
                  { title: "IBM - SQL 101", year: "2025", url: "https://courses.yl-ptech.skillsnetwork.site/certificates/14da737cccd140d5997d3c125f96db28" },
                  { title: "IEEE Hackathon", year: "2025", url: "https://www.linkedin.com/posts/pravin-kumar-a-4aa3712a0_hackathon-ai-innovnutribite-activity-7300517739348049923-40XR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEirJIIB-NYVKI5A1P9Fhj8XxT07H3m4dL4" }
                ].map((cert, idx) => (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" key={idx} className="group p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-cyan-200 hover:bg-cyan-50/50 transition-all block cursor-pointer">
                    <span className="font-medium text-slate-700 text-sm group-hover:text-cyan-700 transition-colors flex items-center gap-2">
                      {cert.title}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-cyan-600 transition-colors">{cert.year}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-600/20">
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Let's build something.</h2>
              <p className="text-indigo-100 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
                Currently open for Web Development, SDE, Data Science, or Analyst Trainee roles. I'm always open to discussing product design work or partnership opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="mailto:pravinkumar22005@gmail.com?subject=Reaching%20out%20from%20your%20portfolio" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-indigo-600 font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
                  <Mail size={20} />
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-light border-t border-slate-200/60">
          <p>© {new Date().getFullYear()} Pravin Kumar A. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="https://github.com/pravin22kumar" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2">
              <FaGithub size={16} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/pravin-kumar-a-4aa3712a0/" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2">
              <FaLinkedinIn size={16} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}