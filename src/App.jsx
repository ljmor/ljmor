import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Database, 
  Terminal, 
  ChevronDown, 
  Send, 
  Menu, 
  X,
  Cpu,
  Layers,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

/* ------------------------------------------------------------------------------------------
 * CONFIGURATION
 * ------------------------------------------------------------------------------------------ */

const FORMSPREE_ID = "xdkqlank"; 

const PERSONAL_INFO = {
  name: "Luis Mora",
  role: "Software Developer | AI Engineer | Machine Learning Engineer",
  location: "Loja, Ecuador",
  email: "ljmora004@outlook.com",
  linkedin: "https://www.linkedin.com/in/ljmor/",
  github: "https://github.com/ljmor",
  heroTagline: "Building the next generation of AI-driven software solutions.",
  aboutSummary: "I am a Software Developer and AI Engineer with over 2 years of experience delivering data-driven solutions across healthcare, fintech, and e-commerce. My expertise lies in LLM evaluation, Reinforcement Learning (RLHF/RLAIF), and building robust analytic pipelines. Currently at ScaleAI, I design complex evaluation environments and validate model behavior using Python-based ground truth logic.",
  availability: "Open for AI/ML Engineer roles, LLM-related work, and remote-friendly positions."
};

const SKILLS = [
  { category: "AI & ML", items: ["Python", "TensorFlow", "Scikit-learn", "LangChain", "RLHF/RLAIF", "LLM Evaluation", "Computer Vision", "Prompt Engineering"] },
  { category: "Development", items: ["JavaScript", "React", "Node.js", "FastAPI", "HTML/CSS", "Git", "REST APIs"] },
  { category: "Data & Cloud", items: ["SQL", "Pandas", "NumPy", "AWS", "Docker", "Power BI", "Data Pipelines"] },
  { category: "Methodologies", items: ["Agile", "Scrum", "Design Thinking", "Model Alignment", "MCP Compliance"] }
];

const EXPERIENCE = [
  {
    company: "ScaleAI",
    role: "AI Research & Evaluation Engineer",
    period: "Jul 2025 – Present",
    description: "Focused on LLM evaluation, reinforcement learning pipelines, and model alignment.",
    achievements: [
      "Designed and executed LLM evaluation pipelines (reasoning, safety, factuality, MCP compliance).",
      "Performed RLHF/RLAIF evaluations and produced high-quality alignment data (GTFA).",
      "Applied advanced prompt engineering (CoT, self-refine) to stress-test LLMs.",
      "Built programmatic evaluation frameworks using Python-based data science scripts."
    ],
    tech: ["Python", "Pandas", "RLHF/RLAIF", "JSON Schema", "APIs"]
  },
  {
    company: "Clipp",
    role: "Machine Learning Engineer",
    period: "Oct 2024 – Aug 2025",
    description: "Developed comprehensive data analytics solutions for Clipp's product suite (Taxis, Buses, Events).",
    achievements: [
      "Developed clustering algorithms (K-Means, DBSCAN) to segment user behavior.",
      "Engineered features from raw event logs to enable effective ML models.",
      "Interpreted predictive linear regression results to guide marketing strategies."
    ],
    tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "PowerBI"]
  },
  {
    company: "Anyone AI",
    role: "Machine Learning Engineer",
    period: "Mar 2025 – Jul 2025",
    description: "Specialized machine learning development focused on fintech and e-commerce.",
    achievements: [
      "Predicted home credit repayment capability using DecisionTree, XGBoost, and LightGBM (ROC AUC > 0.72).",
      "Built ELT pipelines to analyze revenue and delivery data for a major Latam e-commerce platform.",
      "Built an image classification model (CNN) for vehicles and deployed as an API on AWS."
    ],
    tech: ["Python", "XGBoost", "PyTorch", "Docker", "AWS"]
  },
  {
    company: "Clínica San Jose",
    role: "Full Stack Developer",
    period: "Oct 2024 – Feb 2025",
    description: "Full-stack web development for healthcare management.",
    achievements: [
      "Developed a Clinic Management System using React + Redux and Node.js + Express.",
      "Reduced administrative workload by an estimated 40% through process automation.",
      "Deployed solution using DigitalOcean, Render, and Netlify."
    ],
    tech: ["JavaScript", "React", "Node.js", "MySQL", "Express"]
  }
];

const PROJECTS = [
  {
    title: "Insurance Policy AI Assistant",
    description: "An intelligent, multi-tool AI agent designed to optimize insurance workflows using RAG to query policy databases and perform live web searches.",
    tech: ["LangChain", "Gemini API", "FastAPI", "Docker", "Streamlit", "RAG"],
    year: "2025"
  },
  {
    title: "Credit Risk Predictor",
    description: "A supervised learning system to predict home credit repayment capabilities, trained on 350K+ transactions achieving ROC AUC > 0.72.",
    tech: ["XGBoost", "LightGBM", "Scikit-learn", "Python"],
    year: "2025"
  },
  {
    title: "Vehicle Classifier API",
    description: "Convolutional Neural Network (CNN) capable of identifying vehicle makes and models from e-commerce images, deployed as a containerized API.",
    tech: ["PyTorch", "CNN", "Docker", "AWS", "Rest API"],
    year: "2025"
  }
];

const EDUCATION = [
  {
    institution: "Private Technical University of Loja",
    degree: "Computer Science Engineering",
    period: "2023 – 2026"
  },
  {
    institution: "AnyoneAI",
    degree: "Machine Learning Engineer Specialization",
    period: "2025"
  }
];

/* ------------------------------------------------------------------------------------------
 * VISUAL UTILITIES
 * ------------------------------------------------------------------------------------------ */

const SectionHeading = ({ children, align = "center" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mb-12 ${align === "left" ? "text-left" : "text-center"}`}
  >
    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white inline-block">
      {children}
    </h2>
    <div className={`h-1 w-24 bg-blue-500 rounded-full mt-4 ${align === "left" ? "" : "mx-auto"}`} />
  </motion.div>
);

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
  <motion.div
    whileHover={hoverEffect ? { scale: 1.02, boxShadow: "0px 10px 30px -10px rgba(59, 130, 246, 0.3)" } : {}}
    className={`bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

/* ------------------------------------------------------------------------------------------
 * MAIN COMPONENT
 * ------------------------------------------------------------------------------------------ */

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Form State
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  // --- CURSOR LOGIC ---
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      border: "1px solid rgba(59, 130, 246, 0.5)",
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      border: "1px solid rgba(59, 130, 246, 0.8)",
      mixBlendMode: "screen"
    },
    text: {
        x: mousePosition.x - 2,
        y: mousePosition.y - 16,
        height: 32,
        width: 4,
        backgroundColor: "rgba(255, 255, 255, 1)",
        border: "none"
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const linkEnter = () => setCursorVariant("hover");
  const linkLeave = () => setCursorVariant("default");

  // --- NAVIGATION LOGIC ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // --- FORMSPREE LOGIC ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setFormStatus("success");
            e.target.reset();
        } else {
            setFormStatus("error");
        }
    } catch (error) {
        setFormStatus("error");
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    // md:cursor-none HIDES system cursor on medium screens and up
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans overflow-x-hidden md:cursor-none">
      
      {/* --- CUSTOM CURSOR --- */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter text-white cursor-pointer group select-none relative z-50"
            onClick={() => scrollToSection('home')}
            onMouseEnter={linkEnter} onMouseLeave={linkLeave}
          >
            <span className="text-blue-500">&lt;</span>
            LM
            <span className="text-blue-500">/&gt;</span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                className={`relative z-50 text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === link.id ? 'text-blue-400' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href="./resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="relative z-50 text-sm font-medium px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-none md:cursor-pointer"
              onMouseEnter={linkEnter} onMouseLeave={linkLeave}
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden absolute w-full z-40"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-lg font-medium text-slate-300 hover:text-blue-400 p-2"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 pt-20">
        
        {/* --- HERO --- */}
        <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-6">
          <div className="absolute inset-0 z-0 pointer-events-none">
             {/* Abstract Background Animation */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse" />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide mb-6">
                HELLO, I'M LUIS MORA
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight select-none" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Developer</span> & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI Engineer</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                {PERSONAL_INFO.heroTagline} <br/>
                Specializing in LLM evaluation, machine learning pipelines, and scalable data solutions.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-20">
                <button 
                  onClick={() => scrollToSection('projects')}
                  onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                  className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-blue-50 transition-all flex items-center gap-2 group cursor-none md:cursor-pointer"
                >
                  View Projects
                  <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                  className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all flex items-center gap-2 cursor-none md:cursor-pointer"
                >
                  Contact Me
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-500 to-transparent mx-auto mb-2" />
          </motion.div>
        </section>

        {/* --- ABOUT --- */}
        <section id="about" className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>About Me</SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-white/10 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center">
                     <BrainCircuit className="text-blue-500/20 w-32 h-32 group-hover:text-blue-500/40 transition-colors duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-blue-400">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full border border-blue-500/30 rounded-2xl -z-10" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-slate-300 leading-relaxed mb-6 cursor-text" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  {PERSONAL_INFO.aboutSummary}
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  I combine a strong foundation in <span className="text-blue-400 font-medium">Computer Science Engineering</span> with specialized expertise in <span className="text-purple-400 font-medium">Machine Learning</span>.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="p-4 bg-slate-900/50 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                      <div className="text-blue-400 mb-1"><Code2 size={20} /></div>
                      <h4 className="font-semibold text-white text-sm">{edu.institution}</h4>
                      <p className="text-xs text-slate-400">{edu.degree}</p>
                      <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SKILLS --- */}
        <section id="skills" className="py-24 px-6 bg-slate-900/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <SectionHeading>Technical Arsenal</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((skillGroup, idx) => (
                <GlassCard key={idx} className="h-full">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    {idx === 0 && <BrainCircuit className="text-blue-400" size={20}/>}
                    {idx === 1 && <Terminal className="text-purple-400" size={20}/>}
                    {idx === 2 && <Database className="text-green-400" size={20}/>}
                    {idx === 3 && <Layers className="text-orange-400" size={20}/>}
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                        onMouseEnter={textEnter} onMouseLeave={textLeave}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>Professional Experience</SectionHeading>
            
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />
              
              <div className="space-y-12">
                {EXPERIENCE.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-950 border-2 border-blue-500 rounded-full z-10 mt-6 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <div className="hidden md:block w-1/2" />
                    <div className="w-full md:w-1/2 pl-8 md:pl-0">
                      <div className={`bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-colors ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">{exp.period}</span>
                        </div>
                        <h4 className="text-lg text-slate-400 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-500"/>
                          {exp.company}
                        </h4>
                        <p className="text-slate-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.slice(0, 2).map((achievement, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                              <span className="mt-1 min-w-[4px] h-[4px] rounded-full bg-slate-500" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                          {exp.tech.map((t, tIdx) => (
                            <span key={tIdx} className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="py-24 px-6 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <SectionHeading>Featured Projects</SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-6">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                  className="bg-slate-900 border border-white/10 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-300 shadow-xl cursor-none md:cursor-pointer"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Cpu size={24} />
                      </div>
                      {/* <ExternalLink className="text-slate-600 group-hover:text-white transition-colors" size={20} /> */}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 text-xs text-slate-500 border border-slate-800 rounded bg-slate-950">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950/20 pointer-events-none" />
           
           <div className="max-w-4xl mx-auto relative z-10 text-center">
             <SectionHeading>Let's Work Together</SectionHeading>
             <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
               {PERSONAL_INFO.availability} <br/> 
               Currently based in {PERSONAL_INFO.location} and available for global remote opportunities.
             </p>

             <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Contact Links */}
                <div className="flex flex-col gap-4">
                  <GlassCard className="flex items-center gap-4 text-left p-4 cursor-none md:cursor-pointer">
                    <div className="bg-blue-500/20 p-3 rounded-full text-blue-400"><Mail size={24}/></div>
                    <div>
                      <h4 className="text-sm text-slate-400">Email</h4>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-medium hover:text-blue-400 transition-colors cursor-none md:cursor-pointer">{PERSONAL_INFO.email}</a>
                    </div>
                  </GlassCard>
                  
                  <GlassCard className="flex items-center gap-4 text-left p-4 cursor-none md:cursor-pointer">
                     <div className="bg-blue-500/20 p-3 rounded-full text-blue-400"><Linkedin size={24}/></div>
                    <div>
                      <h4 className="text-sm text-slate-400">LinkedIn</h4>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-white font-medium hover:text-blue-400 transition-colors cursor-none md:cursor-pointer">Connect on LinkedIn</a>
                    </div>
                  </GlassCard>

                  <GlassCard className="flex items-center gap-4 text-left p-4 cursor-none md:cursor-pointer">
                     <div className="bg-blue-500/20 p-3 rounded-full text-blue-400"><Github size={24}/></div>
                    <div>
                      <h4 className="text-sm text-slate-400">GitHub</h4>
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-white font-medium hover:text-blue-400 transition-colors cursor-none md:cursor-pointer">Follow my Code</a>
                    </div>
                  </GlassCard>
                </div>

                {/* Formspree Form */}
                <form className="text-left space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-none md:cursor-text" 
                      placeholder="Your Name" 
                      onMouseEnter={textEnter} onMouseLeave={textLeave}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-none md:cursor-text" 
                      placeholder="you@email.com" 
                      onMouseEnter={textEnter} onMouseLeave={textLeave}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
                    <textarea 
                      name="message"
                      rows="4" 
                      required
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-none md:cursor-text" 
                      placeholder="Tell me about your project..." 
                      onMouseEnter={textEnter} onMouseLeave={textLeave}
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    className={`w-full py-3 font-bold rounded-lg shadow-lg transition-all flex justify-center items-center gap-2 cursor-none md:cursor-pointer
                      ${formStatus === "success" ? "bg-green-600 cursor-default" : "bg-blue-600 hover:bg-blue-500 shadow-blue-500/30"}
                      ${formStatus === "submitting" ? "opacity-70 cursor-wait" : "opacity-100"}
                    `}
                    onMouseEnter={linkEnter} onMouseLeave={linkLeave}
                  >
                    {formStatus === "idle" && <>Send Message <Send size={16}/></>}
                    {formStatus === "submitting" && "Sending..."}
                    {formStatus === "success" && <>Sent! <CheckCircle size={16}/></>}
                    {formStatus === "error" && <>Error, try again <AlertCircle size={16}/></>}
                  </button>
                </form>
             </div>
           </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-8 bg-slate-950 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Luis Mora. All rights reserved.</p>
      </footer>

    </div>
  );
}