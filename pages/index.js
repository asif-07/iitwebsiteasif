import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Linkedin, Star, BookOpen, UserCheck, Award, Languages, MessageSquare, Globe, Zap, LineChart, BrainCircuit, Phone, Mail, Clock, BarChart2, Users, HelpCircle, Shield, TrendingUp, Briefcase, PlusCircle, Calendar, CreditCard, Coffee, CheckCircle } from 'lucide-react';

// --- Helper for Animations ---
const AnimatedSection = ({ children, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className={`py-20 sm:py-28 ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.section>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


// --- Mock Data from Brochure ---
const trustedByLogos = [
  { name: "TCS", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=TCS" },
  { name: "Aramco", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Aramco" },
  { name: "Emaar", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Emaar" },
  { name: "Infosys", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Infosys" },
  { name: "FedEx", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=FedEx" },
  { name: "EY", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=EY" },
  { name: "Wipro", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Wipro" },
  { name: "Hyundai", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Hyundai" },
  { name: "Airbus", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Airbus" },
];

const highlights = [
  { icon: <Clock className="h-8 w-8 text-[#F2C94C]" />, title: "6 Hrs/Week Commitment", description: "Flexible evening live classes designed for working professionals." },
  { icon: <UserCheck className="h-8 w-8 text-[#F2C94C]" />, title: "Expert Mentors", description: "Learn from practitioners at Microsoft, PwC, and Fortune 500 companies." },
  { icon: <Award className="h-8 w-8 text-[#F2C94C]" />, title: "IIT-M Pravartak Certified", description: "Earn a globally-recognized certificate from a top institution." },
  { icon: <Zap className="h-8 w-8 text-[#F2C94C]" />, title: "Hands-On & No-Code", description: "Build real AI agents and workflows you can use the next day." },
  { icon: <Users className="h-8 w-8 text-[#F2C94C]" />, title: "Lifetime Community", description: "Get lifetime access to a network of peers and experts on Slack." },
  { icon: <BookOpen className="h-8 w-8 text-[#F2C94C]" />, title: "Lifetime Recordings", description: "Access all class recordings and materials forever." },
];

const syllabus = [
  { module: "Module 1", title: "AI Foundations & Prompt Mastery", weeks: "Weeks 1-2 (Lives 1-4)", details: ["Master core AI concepts and advanced prompting patterns.", "Create multi-turn prompts that cut research time by 60%.", "Understand and apply ethical AI use-cases and guardrails."] },
  { module: "Module 2", title: "GenAI Productivity Toolkit", weeks: "Weeks 3 & 6 (Lives 5-6, 11-12)", details: ["Get hands-on with top GenAI tools like ChatGPT, Claude, & Synthesia.", "Build a personal AI 'Swiss-army knife' for your daily workflow.", "Leverage Power BI's AI features for data visualization."] },
  { module: "Module 3", title: "AI for Business Functions", weeks: "Weeks 4-5 (Lives 7-10)", details: ["Automate tasks in Marketing, Operations, HR, and Finance.", "Build ROI calculators to measure the impact of your automations.", "Deploy 3 job-specific automations by the end of the module."] },
  { module: "Module 4", title: "No-Code AI Apps & Sites", weeks: "Weeks 7-8 (Lives 13-16)", details: ["Build and publish a live AI microsite using Bubble or Softr.", "Understand Bubble logic and connect to APIs.", "Implement RAG-lite search for your no-code applications."] },
  { module: "Module 5", title: "Autonomous Agents & Automation", weeks: "Weeks 9-10 (Lives 17-20)", details: ["Agentic AI building with n8n, Zapier, and Make.", "Design and build agents that operate in complex chains.", "Launch an end-to-end agent that reduces a repetitive task by ≥40%."] },
  { module: "Module 6", title: "Capstone & Impact Lab", weeks: "4-Week Sprint", details: ["Work on a mentor-guided project to solve a real-world problem.", "Develop a portfolio piece that showcases your skills and ROI.", "Present your project's business impact to mentors and peers."] },
];

const projects = [
    { title: "AI-Powered No-Code Chatbot", kpi: "KPI: 40% drop in support emails", tools: ["Zapier", "ChatGPT"], skills: "Deployed on a live website in 48 hours to provide 24/7 support." },
    { title: "Workflow Automation Suite", kpi: "KPI: 5+ hours/week saved per team", tools: ["Make", "GPT"], skills: "Automate multi-step business processes for maximum efficiency." },
    { title: "AI-Driven Content Campaign", kpi: "KPI: 3x engagement, 20% CPL reduction", tools: ["Claude", "Canva"], skills: "Auto-generate and schedule blogs, reels, and social media posts." },
    { title: "AI Microsite in Bubble", kpi: "KPI: Idea-to-launch in 6 days", tools: ["Bubble", "GPT"], skills: "Build a functional web app with GPT-powered search and RAG-lite." },
];

const tools = [
  { name: "ChatGPT", logo: "https://i.imgur.com/v1kMhV4.png" }, { name: "Claude", logo: "https://i.imgur.com/tG2z4aF.png" },
  { name: "Synthesia", logo: "https://placehold.co/48x48/1A3A69/EAF3FF?text=S" }, { name: "Power BI", logo: "https://placehold.co/48x48/1A3A69/EAF3FF?text=PB" },
  { name: "Bubble", logo: "https://i.imgur.com/O1Z2w8H.png" }, { name: "Softr", logo: "https://i.imgur.com/R3e4w7B.png" },
  { name: "Zapier", logo: "https://i.imgur.com/6XyJgQ1.png" }, { name: "Make", logo: "https://i.imgur.com/J3B1w2A.png" },
  { name: "n8n", logo: "https://placehold.co/48x48/1A3A69/EAF3FF?text=n8n" },
];

const mentors = [
  { name: "Dr. Ananya Rao", role: "Head of AI Research", company: "IIT M Pravartak", image: "https://placehold.co/150x150/1A3A69/EAF3FF?text=AR" },
  { name: "Girish Menon", role: "Automation Lead", company: "Fortune 500 Logistics", image: "https://placehold.co/150x150/1A3A69/EAF3FF?text=GM" },
  { name: "Umer Mohammed", role: "CEO & AI Educator", company: "Edapt", image: "https://placehold.co/150x150/1A3A69/EAF3FF?text=UM" },
  { name: "Megha V", role: "GenAI Product PM", company: "Microsoft", image: "https://placehold.co/150x150/1A3A69/EAF3FF?text=MV" },
];

const faqData = [
    { q: "When are the live sessions?", a: "Live sessions are held on Tuesdays & Thursdays from 7:00 PM to 8:30 PM IST. All sessions are recorded and posted within 4 hours." },
    { q: "I'm non-technical. Can I cope?", a: "Absolutely. 70% of our alumni had no prior coding background. The program is designed to be no-code friendly." },
    { q: "What tools will I need?", a: "You'll need a laptop with a stable internet connection. We will primarily use free accounts on platforms like ChatGPT, Claude, Zapier, and Bubble." },
    { q: "Is the certificate recognized?", a: "Yes, it is issued by the IIT Madras Pravartak Centre for AI and includes a verifiable QR code, making it globally recognized." },
    { q: "Can my employer sponsor me?", a: "Yes. A GST invoice is automatically generated upon enrollment, which you can use for company reimbursement." },
];

// --- Reusable Components ---
const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-blue-800/50">
    <button onClick={onClick} className="w-full flex justify-between items-start text-left p-6 hover:bg-[#1A3A69]/30 transition-colors duration-300">
      <div className="flex items-center">
        <span className="text-[#F2C94C] font-bold text-lg mr-4"><HelpCircle className="h-6 w-6" /></span>
        <span className="text-white font-semibold text-lg">{item.q}</span>
      </div>
      <ChevronDown className={`h-6 w-6 text-blue-300 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} mt-1 flex-shrink-0`} />
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-6 pt-0 pl-16 text-blue-200">
        <p>{item.a}</p>
      </div>
    </div>
  </div>
);

// --- Page Sections ---
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F2C59]/80 backdrop-blur-lg border-b border-blue-800/30">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <img src="https://edapt.me/images/logo-white.png" alt="Edapt Logo" className="h-8 w-auto" />
      <a href="#form" className="hidden sm:inline-block bg-[#00DB77] text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
        Apply Now
      </a>
    </div>
  </header>
);

const HeroSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', education: '', profile: '', gradYear: '' });
    const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const handleApplyNow = () => {
        const message = `Hello Edapt, I'm interested in the AI course.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEducation: ${formData.education}\nProfile: ${formData.profile}\nGraduation Year: ${formData.gradYear}`;
        window.open(`https://wa.me/919072616500?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
      <section className="relative min-h-screen flex items-center bg-[#0F2C59] pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-grid-blue-900/50 [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(38,70,128,0.3),_transparent_70%)]"></div>
        <div className="container mx-auto px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-white">
              <div className="inline-flex items-center bg-blue-900/50 text-blue-200 px-4 py-1 rounded-full text-sm mb-6 border border-blue-700">
                <Star className="h-4 w-4 text-yellow-400 mr-2" />
                Certified by IIT Madras Pravartak
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Double Your Productivity in 10 Weeks with <span className="text-[#F2C94C]">AI Automation</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-10">
                A hands-on program by IIT Madras Pravartak for working professionals to master AI, Automation, No-Code, and Agents.
              </p>
              <div className="flex items-center space-x-8 text-blue-200">
                  <div className="flex items-center space-x-3">
                      <Calendar className="h-7 w-7 text-[#F2C94C]" />
                      <span>Evening Live<br/>Classes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                      <Coffee className="h-7 w-7 text-[#F2C94C]" />
                      <span>Lifetime Community<br/>Access</span>
                  </div>
              </div>
            </motion.div>
            
            <motion.div id="form" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-900/20">
              <h2 className="text-2xl font-bold text-white mb-1 text-center">Start Your AI Journey</h2>
              <p className="text-center text-blue-300 mb-6">Next cohort starts soon. Limited seats.</p>
              <div className="space-y-4">
                <input name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]" type="text" placeholder="Full Name" required />
                <input name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]" type="email" placeholder="Email Address" required />
                <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]" type="tel" placeholder="Phone Number" required />
                <select name="education" value={formData.education} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]">
                  <option value="">Highest Education</option><option value="B.Tech">B.Tech</option><option value="MBA">MBA</option><option value="Other">Other</option>
                </select>
                <input name="profile" value={formData.profile} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]" type="text" placeholder="Current Profile (e.g., Student)" />
                <input name="gradYear" value={formData.gradYear} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]" type="text" placeholder="Year of Graduation" />
                <button type="button" onClick={handleApplyNow} className="w-full bg-[#00DB77] text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 text-lg">
                  Apply Now & Get Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

const TrustedBySection = () => (
    <div className="bg-[#0A1F44] py-12">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-blue-300 text-lg mb-8">400+ professionals from leading companies have up-skilled with us</h3>
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee-rtl">
                    {[...trustedByLogos, ...trustedByLogos].map((company, index) => (
                        <div key={index} className="flex-shrink-0 w-48 flex items-center justify-center mx-4">
                            <img src={company.logo} alt={company.name} className="h-10 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const ProductivityGapSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Productivity Gap Professionals Can't Ignore</h2>
                    <p className="text-lg text-blue-200 mb-8">Repetitive tasks and information overload are costing you hours every day. Our program turns manual processes into autonomous AI workflows, so you can focus on high-impact strategy, not busywork.</p>
                    <div className="space-y-4">
                        <div className="flex items-start"><BarChart2 className="h-6 w-6 text-[#F2C94C] mr-4 mt-1 flex-shrink-0" /><p className="text-blue-100"><strong className="text-white">34% of daily tasks</strong> can be automated with today's AI. (McKinsey)</p></div>
                        <div className="flex items-start"><Clock className="h-6 w-6 text-[#F2C94C] mr-4 mt-1 flex-shrink-0" /><p className="text-blue-100"><strong className="text-white">2.6 hours per day</strong> are wasted just searching for information. (IDC)</p></div>
                    </div>
                </div>
                <div className="bg-[#1A3A69]/50 p-8 rounded-2xl border border-blue-800/50">
                    <h3 className="text-xl font-bold text-[#F2C94C] mb-4">Transformation Narrative</h3>
                    <p className="text-white text-2xl font-semibold mb-6 italic">"Imagine reclaiming an entire work-day each week."</p>
                    <div className="border-t border-blue-700 pt-4">
                        <p className="font-bold text-white">Case Snapshot: Kiran, Product Manager</p>
                        <ul className="list-disc list-inside text-blue-200 mt-2 space-y-1">
                            <li>Automated user-feedback analysis, saving 5+ hrs/week.</li>
                            <li>Deployed a no-code GPT-powered FAQ bot in 3 days.</li>
                            <li>Landed a 12% salary bump for AI initiative leadership.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const ImpactSection = () => (
    <AnimatedSection className="bg-[#0A1F44]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Real-World Impact & ROI in 10 Weeks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div variants={itemVariants} className="bg-[#1A3A69]/50 p-6 rounded-2xl border border-blue-800/50 text-center">
                    <TrendingUp className="h-12 w-12 text-[#F2C94C] mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-white mb-2">6.4 <span className="text-2xl">hrs</span></h3>
                    <p className="text-blue-200">Average weekly time-savings reported by our alumni.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-[#1A3A69]/50 p-6 rounded-2xl border border-blue-800/50 text-center">
                    <Zap className="h-12 w-12 text-[#F2C94C] mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-white mb-2">42%</h3>
                    <p className="text-blue-200">Faster project turnaround on AI-enabled tasks.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-[#1A3A69]/50 p-6 rounded-2xl border border-blue-800/50 text-center">
                    <Briefcase className="h-12 w-12 text-[#F2C94C] mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-white mb-2">₹2.1L</h3>
                    <p className="text-blue-200">Median annual cost-saving from automated workflows.</p>
                </motion.div>
                 <motion.div variants={itemVariants} className="bg-[#1A3A69]/50 p-6 rounded-2xl border border-blue-800/50 text-center">
                    <Star className="h-12 w-12 text-[#F2C94C] mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-white mb-2">90 <span className="text-2xl">days</span></h3>
                    <p className="text-blue-200">Average time to promotion after showcasing AI skills.</p>
                </motion.div>
            </div>
        </div>
    </AnimatedSection>
);


const HighlightsSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">A Program Designed for Immediate Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="bg-[#1A3A69]/50 p-6 rounded-2xl border border-blue-800/50 hover:border-[#F2C94C] hover:scale-105 transition-all duration-300">
                        <div className="flex items-center mb-4">{item.icon}<h3 className="text-xl font-bold text-white ml-4">{item.title}</h3></div>
                        <p className="text-blue-200">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const SyllabusSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeModule = syllabus[activeTab];

  return (
    <AnimatedSection className="bg-[#0A1F44]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Explore Our Industry-Aligned Curriculum ✨
        </h2>
        <div className="max-w-5xl mx-auto bg-[#1A3A69]/30 backdrop-blur-md p-4 sm:p-8 rounded-2xl border border-blue-800/50">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Panel: Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:w-1/3">
              {syllabus.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-left w-full p-4 rounded-lg transition-all duration-300 flex-shrink-0 md:flex-shrink-1 ${
                    activeTab === index
                      ? 'bg-[#F2C94C] text-[#0F2C59] font-bold shadow-lg'
                      : 'text-white hover:bg-blue-900/50'
                  }`}
                >
                  {item.module}
                </button>
              ))}
            </div>

            {/* Right Panel: Content */}
            <div className="md:w-2/3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-8 rounded-xl border border-blue-700/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{activeModule.title}</h3>
                  <span className="bg-[#F2C94C]/20 text-[#F2C94C] text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">{activeModule.weeks}</span>
                </div>
                <ul className="space-y-3 text-blue-200">
                  {activeModule.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-1 text-[#00DB77] flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectsSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Build a Portfolio That Speaks ROI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants} className="bg-[#1A3A69]/50 p-8 rounded-2xl border border-blue-800/50 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-lg font-semibold text-[#00DB77] mb-4">{project.kpi}</p>
                        <p className="text-blue-200 mb-4 flex-grow">{project.skills}</p>
                        <div className="border-t border-blue-800/50 pt-4 mt-auto">
                            <p className="text-sm text-blue-300 mb-2 font-semibold">Tools Used:</p>
                            <div className="flex space-x-2"><span className="text-sm text-white">{project.tools.join(', ')}</span></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const ToolsSection = () => (
    <AnimatedSection className="bg-[#0A1F44]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Tools & Platforms You'll Master</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-5 gap-8">
                {tools.map((tool) => (
                    <motion.div key={tool.name} variants={itemVariants} className="group relative flex flex-col items-center justify-center text-center">
                        <div className="bg-white/10 p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                           <img src={tool.logo} alt={`${tool.name} logo`} className="h-12 w-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/48x48/1A3A69/EAF3FF?text=${tool.name.substring(0,1)}`; }}/>
                        </div>
                        <p className="text-white mt-3 text-sm">{tool.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const MentorsSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Learn from Practitioners</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {mentors.map((mentor, index) => (
                    <motion.div key={index} variants={itemVariants} className="bg-[#1A3A69]/50 p-6 rounded-2xl border border-blue-800/50 text-center transform hover:scale-105 transition-transform duration-300">
                        <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#F2C94C]"/>
                        <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                        <p className="text-blue-200">{mentor.role}</p>
                        <p className="text-sm text-blue-300 mb-4">{mentor.company}</p>
                        <a href="#" className="text-[#F2C94C] hover:text-white transition-colors"><Linkedin className="h-6 w-6 mx-auto" /></a>
                    </motion.div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const CertificateSection = () => (
    <AnimatedSection className="bg-[#0A1F44]">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Certified by <span className="text-[#F2C94C]">IIT Madras Pravartak</span></h2>
                    <p className="text-lg text-blue-200 mb-8">Receive proof of your AI mastery, issued from a government-recognized innovation hub, boosting your career profile.</p>
                    <div className="flex items-center space-x-6">
                        <img src="https://i.imgur.com/uF2o05i.png" alt="IIT Madras Pravartak Logo" className="h-16 w-auto bg-white p-2 rounded-md" />
                        <img src="https://edapt.me/images/logo-white.png" alt="Edapt Logo" className="h-10 w-auto" />
                    </div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-500">
                    <img src="https://placehold.co/600x420/1A3A69/F2C94C?text=Certificate+Preview" alt="Sample Certificate" className="rounded-lg shadow-2xl shadow-blue-900/50 border-2 border-[#F2C94C]" />
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const InvestmentSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Your Investment, Made Simple</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                <motion.div variants={itemVariants} className="bg-[#1A3A69]/50 p-8 rounded-2xl border border-blue-800/50 h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">Program Fee</h3>
                    <p className="text-4xl font-bold text-[#F2C94C] mb-2">₹XX,XXX <span className="text-lg text-blue-200 font-normal">+ GST</span></p>
                    <p className="text-blue-200 mb-6">Includes IIT Madras Pravartak certificate, lifetime Slack access, and all future content updates.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-green-900/20 p-8 rounded-2xl border border-[#00DB77]/50">
                    <h3 className="text-2xl font-bold text-white mb-4">Limited-Time Bonuses</h3>
                    <ul className="space-y-3 text-blue-100">
                        <li className="flex items-start"><PlusCircle className="h-5 w-5 mr-3 mt-1 text-[#00DB77] flex-shrink-0" /><span><strong className="text-white">50+ Prompt Templates Pack</strong> (₹4,999 value)</span></li>
                        <li className="flex items-start"><PlusCircle className="h-5 w-5 mr-3 mt-1 text-[#00DB77] flex-shrink-0" /><span><strong className="text-white">Zapier "Quick-Start" Video Course</strong> (₹2,999 value)</span></li>
                        <li className="flex items-start"><PlusCircle className="h-5 w-5 mr-3 mt-1 text-[#00DB77] flex-shrink-0" /><span><strong className="text-white">Lifetime Workshop Replays Library</strong> (₹6,999 value)</span></li>
                    </ul>
                    <p className="text-sm text-green-200 mt-4">All free when you enrol before the deadline.</p>
                </motion.div>
            </div>
            <motion.div variants={itemVariants} className="max-w-5xl mx-auto mt-8 bg-yellow-900/20 p-6 rounded-2xl border border-[#F2C94C]/50 flex items-center">
                <Shield className="h-10 w-10 mr-6 text-[#F2C94C] flex-shrink-0" />
                <div>
                    <h4 className="text-xl font-bold text-white">7-Day "Love it or Leave it" Guarantee</h4>
                    <p className="text-yellow-200">Join, attend the first two live sessions, and if it's not the right fit, we'll refund 100%, no questions asked.</p>
                </div>
            </motion.div>
        </div>
    </AnimatedSection>
);

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(-1);
    return (
        <AnimatedSection className="bg-[#0A1F44]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto bg-[#1A3A69]/50 rounded-2xl border border-blue-800/50 overflow-hidden">
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} item={item} isOpen={openIndex === index} onClick={() => setOpenIndex(index === openIndex ? -1 : index)} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

const CtaSection = () => (
    <section className="py-20 bg-cover bg-center bg-[#0F2C59]">
        <div className="container mx-auto px-6 text-center bg-[#0F2C59]/70 backdrop-blur-sm py-16 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Productivity - Start Today</h2>
            <p className="text-blue-200 max-w-2xl mx-auto mb-10">Only 20 seats available for the next cohort. Apply in 2 minutes to secure your spot.</p>
            <a href="#form" className="bg-[#00DB77] text-gray-900 font-bold py-4 px-10 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 text-xl inline-block">
                Enrol Now
            </a>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-[#0A1F44] text-blue-200">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <img src="https://edapt.me/images/logo-white.png" alt="Edapt Logo" className="h-10 w-auto mb-4" />
                    <p className="max-w-xs">Empowering professionals with the skills of tomorrow, today. Join us to future-proof your career.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><Mail className="h-5 w-5 mr-3 text-[#F2C94C]" /><a href="mailto:support@edapt.me" className="hover:text-white">support@edapt.me</a></li>
                        <li className="flex items-center"><Phone className="h-5 w-5 mr-3 text-[#F2C94C]" /><a href="tel:+919072616500" className="hover:text-white">+91 9072 6165 00</a></li>
                        <li className="flex items-center"><Globe className="h-5 w-5 mr-3 text-[#F2C94C]" /><a href="https://edapt.me" target="_blank" rel="noopener noreferrer" className="hover:text-white">edapt.me</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4"><a href="#" className="text-blue-200 hover:text-white"><Linkedin size={24} /></a></div>
                </div>
            </div>
            <div className="mt-12 border-t border-blue-800/50 pt-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Edapt. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


export default function App() {
  return (
    <div className="bg-[#0F2C59] font-sans text-white">
      <style>
        {`
          @keyframes marquee-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-rtl {
            animation: marquee-rtl 25s linear infinite;
          }
        `}
      </style>
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ProductivityGapSection />
        <ImpactSection />
        <HighlightsSection />
        <SyllabusSection />
        <ProjectsSection />
        <ToolsSection />
        <MentorsSection />
        <CertificateSection />
        <InvestmentSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
