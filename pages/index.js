import React, { useState, useEffect } from 'react'
import Head from 'next/head'

// — ICONS as inline SVG components —
const CheckCircle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)
const Zap = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)
const BookOpen = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)
const Users = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const Award = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88" />
  </svg>
)
const Briefcase = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)
const DollarSign = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)
const X = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.215l-1.064 3.888 3.962-1.045z" />
  </svg>
)
const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

// — HeroAnimation with skill icons inline —
const HeroAnimation = () => {
  const BrainCircuitIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 12 2Z M8.5 4.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M15.5 4.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M12 8.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M4.5 8.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M19.5 8.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M8.5 12.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M15.5 12.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M12 16.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M4.5 15.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z M19.5 15.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z" />
    </svg>
  )
  const BotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
  const LayersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
  const DegreeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  )

  return (
    <div className="hero-animation-wrapper">
      <div className="bg-effects">
        <div className="bg-grid"></div>
        <div className="bg-glow"></div>
      </div>

      <div className="degree-hub-main">
        <div className="degree-icon"><DegreeIcon /></div>
        <span>Your Degree</span>
      </div>

      <svg className="connectors-svg" viewBox="0 0 450 400">
        <path className="connector-path path-1" d="M 60 70 Q 130 120 200 180" />
        <path className="connector-path path-2" d="M 390 70 Q 320 120 250 180" />
        <path className="connector-path path-3" d="M 60 330 Q 130 280 200 220" />
      </svg>

      <div className="skill-node skill-1">
        <div className="skill-icon"><BrainCircuitIcon /></div>
        <span>Prompting</span>
      </div>

      <div className="skill-node skill-2">
        <div className="skill-icon"><BotIcon /></div>
        <span>Automation</span>
      </div>

      <div className="skill-node skill-3">
        <div className="skill-icon"><LayersIcon /></div>
        <span>AI Agents</span>
      </div>

      <style jsx>{`
        .hero-animation-wrapper {
          position: relative;
          width: 100%;
          max-width: 450px;
          height: 400px;
          margin: auto;
        }
        .bg-effects {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 1rem;
        }
        .bg-grid {
          position: absolute;
          inset: -50%;
          background-image:
            linear-gradient(rgba(139, 92, 246, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.07) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: moveGrid 60s linear infinite;
          z-index: 1;
        }
        @keyframes moveGrid {
          from { background-position: 0 0; }
          to { background-position: 300px 300px; }
        }
        .bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(17, 24, 39, 0) 70%);
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        .degree-hub-main {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 170px;
          height: 85px;
          background-color: #1f2937;
          border: 1px solid #4b5563;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          animation: hubGlow 9s infinite ease-in-out;
        }
        .degree-icon { color: #e5e7eb; }
        @keyframes hubGlow {
          0%, 100% { box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 0px rgba(99, 102, 241, 0); }
          15%, 25% { box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 25px rgba(99, 102, 241, 0.5); }
          48%, 58% { box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 25px rgba(99, 102, 241, 0.5); }
          81%, 91% { box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 25px rgba(99, 102, 241, 0.5); }
        }
        .skill-node {
          position: absolute;
          width: 110px;
          padding: 8px;
          background: #283040;
          border: 1px solid #4b5563;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #d1d5db;
          font-size: 0.8rem;
          z-index: 11;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          opacity: 0;
        }
        .skill-icon { color: #a5b4fc; }
        .skill-1 { top: 50px; left: 20px; animation: node1-anim 9s infinite ease-in-out; }
        .skill-2 { top: 50px; right: 20px; animation: node2-anim 9s infinite ease-in-out; }
        .skill-3 { bottom: 50px; left: 20px; animation: node3-anim 9s infinite ease-in-out; }
        @keyframes node1-anim { 0% { opacity: 0; transform: scale(0.8); } 5%, 35% { opacity: 1; transform: scale(1); } 40%, 100% { opacity: 0; transform: scale(0.8); } }
        @keyframes node2-anim { 0%, 33% { opacity: 0; transform: scale(0.8); } 38%, 68% { opacity: 1; transform: scale(1); } 73%, 100% { opacity: 0; transform: scale(0.8); } }
        @keyframes node3-anim { 0%, 66% { opacity: 0; transform: scale(0.8); } 71%, 95% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.8); } }

        .connectors-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 9;
        }
        .connector-path {
          fill: none;
          stroke: url(#line-gradient);
          stroke-width: 2px;
          stroke-linecap: round;
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
        }
        .path-1 { animation: draw-line 9s infinite ease-in-out; animation-delay: 0s; }
        .path-2 { animation: draw-line 9s infinite ease-in-out; animation-delay: 3s; }
        .path-3 { animation: draw-line 9s infinite ease-in-out; animation-delay: 6s; }

        @keyframes draw-line {
          0% { stroke-dashoffset: 200; opacity: 0; }
          10% { opacity: 1; }
          30% { stroke-dashoffset: 0; }
          35%, 100% { opacity: 0; stroke-dashoffset: 0; }
        }
      `}</style>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgba(165, 180, 252, 0)' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(139, 92, 246, 1)' }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// — Scroll-animation hook —
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el))
    return () => document.querySelectorAll('.scroll-animate').forEach(el => observer.unobserve(el))
  }, [])
}

// — All sections inline … —

const Header = ({ onApplyNowClick }) => (
  <header className="bg-gray-900/80 backdrop-blur-lg sticky top-0 z-40">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold">edapt</div>
          <span className="text-gray-500 text-2xl">|</span>
          <div className="text-white text-lg font-semibold flex items-center">
            <span className="font-bold">IITM</span> <span className="font-light ml-1">PRAVARTAK</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#curriculum" className="text-gray-300 hover:text-white">Curriculum</a>
          <button
            onClick={onApplyNowClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </header>
)

const HeroSection = ({ onApplyNowClick }) => (
  <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-grid-pattern scroll-animate">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900 z-10"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Future-Proof Your College Degree with <span className="gradient-text">AI Skills</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            Master Prompt Engineering, AI Automation & Agent Building — certified by IIT Madras Pravartak.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={onApplyNowClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 text-lg"
            >
              Apply Now
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-6 mt-10">
            <div><p className="font-bold text-white text-xl">edapt</p></div>
            <div className="h-8 w-px bg-gray-600"></div>
            <div><p className="font-semibold text-white text-lg">IITM PRAVARTAK</p></div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <HeroAnimation />
        </div>
      </div>
    </div>
  </section>
)

const ValuePropositionSection = () => {
  const cards = [
    { icon: <Zap className="w-8 h-8 text-indigo-400" />, title: "Future-Ready Skills", description: "Master Prompt Engineering & AI Automation before you graduate." },
    { icon: <Award className="w-8 h-8 text-indigo-400" />, title: "Certification from IITM Pravartak", description: "Earn credentials that are recognized and respected by the industry." },
    { icon: <Users className="w-8 h-8 text-indigo-400" />, title: "Learn from Industry Experts", description: "Live sessions led by professionals working at the forefront of AI." },
    { icon: <BookOpen className="w-8 h-8 text-indigo-400" />, title: "Learn Alongside College", description: "Flexible schedule with two sessions per week, outside college hours." },
    { icon: <Briefcase className="w-8 h-8 text-indigo-400" />, title: "Build a Standout Portfolio", description: "Complete 5 real-world AI projects to showcase your abilities." },
    { icon: <DollarSign className="w-8 h-8 text-indigo-400" />, title: "Freelance & Earn", description: "Utilize your new skills to start earning by building tools and automating tasks." },
  ]
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Makes This Program a <span className="gradient-text">Game-Changer?</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            A unique blend of academic rigor and practical skills to set you apart.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800 hover:-translate-y-2 scroll-animate"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhoIsThisForSection = () => {
  const items = [
    "1st or 2nd year college students",
    "Ideal for B.Com, BBA, BCA and other 3-year degree students",
    "Want to earn a freelance income during college",
    "Eager to build real, practical AI tools and solutions",
    "Aim to graduate with proof of expertise and certifications",
  ]
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <img
              src="https://i.postimg.cc/CnsbMFJP/image.png"
              alt="Students learning about AI"
              className="rounded-xl w-full h-auto shadow-2xl object-cover"
            />
          </div>
          <div className="scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              This Program is for You If You Are...
            </h2>
            <ul className="space-y-4">
              {items.map((it, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const LearningJourneySection = () => (
  <section id="timeline" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 scroll-animate">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Your 3-Year <span className="gradient-text">Learning Journey</span>
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          A structured path from foundational knowledge to specialized expertise and monetization.
        </p>
      </div>
      <div className="relative">
        <div className="hidden sm:block absolute w-1 bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>
        <div className="mt-8 space-y-12 sm:space-y-0">
          {/* Year 1 */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-12 scroll-animate">
            <div className="flex justify-center sm:justify-end">
              <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 sm:mb-0">
                Year 1
              </div>
            </div>
            <div className="sm:pl-12 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Learn & Build</h3>
              <p className="text-gray-400">
                Learn AI, automation & no-code. Complete 80 live sessions, 360 hours of learning, build 5 real-world projects, and earn your triple certification.
              </p>
            </div>
          </div>
          {/* Year 2 */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-12 scroll-animate mt-12 sm:mt-0">
            <div className="sm:pl-12 text-center sm:text-right sm:col-start-1 sm:row-start-1">
              <h3 className="text-2xl font-bold text-white mb-2">Practice & Monetise</h3>
              <p className="text-gray-400">
                Engage in monthly refreshers, real-world practice, and start freelancing with your AI tools. Participate in challenges & workshops to build your brand.
              </p>
            </div>
            <div className="flex justify-center sm:justify-start sm:col-start-2">
              <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mt-4 sm:mt-0">
                Year 2
              </div>
            </div>
          </div>
          {/* Year 3 */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-12 scroll-animate mt-12 sm:mt-0">
            <div className="flex justify-center sm:justify-end">
              <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 sm:mb-0">
                Year 3
              </div>
            </div>
            <div className="sm:pl-12 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Stand Out & Specialise</h3>
              <p className="text-gray-400">
                Tackle advanced challenges, work on a capstone project, collaborate with peers, and present at the final showcase. Graduate with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const CurriculumSection = () => {
  const modules = [
    { title: 'IT Foundations', description: 'Computers, networks, cloud, APIs, & programming logic.' },
    { title: 'Prompt Engineering', description: 'Frameworks for text, image & video generation.' },
    { title: 'No-Code & Automation', description: 'Build with Zapier, Make, N8N, and more.' },
    { title: 'Small Language Models', description: 'Build, fine-tune, and deploy your own AI models.' },
    { title: 'AI Monetisation', description: 'Build a portfolio, personal brand, and explore freelance platforms.' },
    { title: 'Capstone & Graduation', description: 'Real-world final project and a 2-day IIT Madras immersion.' },
  ]
  return (
    <section id="curriculum" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Year 1 Curriculum Breakdown</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            A hands-on journey through the core pillars of modern AI development.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-1 bg-gray-700/50"></div>
          <div className="grid lg:grid-cols-2 gap-y-12 gap-x-24">
            {modules.map((mod, i) => (
              <div
                key={i}
                className={`scroll-animate relative p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-700/50 lg:w-4/5 ${i % 2 === 0 ? 'lg:justify-self-end lg:text-right' : 'lg:justify-self-start'
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-indigo-500 rounded-full ${i % 2 === 0 ? '-right-14' : '-left-14'
                    }`}
                ></div>
                <div className={`text-sm font-bold text-indigo-400 mb-2 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  MODULE {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{mod.title}</h3>
                <p className="text-gray-400">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ToolsSection = () => {
  const tools = ['ChatGPT', 'Gemini', 'Claude', 'Zapier', 'Canva', 'Runway', 'HuggingFace', 'Wix', 'Copy.ai', 'N8N', 'ElevenLabs', 'Perplexity']
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tools & Platforms You Will Master</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {tools.concat(tools).map((tool, i) => (
              <div key={i} className="flex-shrink-0 bg-gray-800 rounded-lg p-4 flex items-center justify-center w-40 h-20">
                <p className="text-white font-semibold text-lg">{tool}</p>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}

const CoreSkillsSection = () => {
  const skills = [
    'Prompt Engineering',
    'AI Automation',
    'No-Code Development',
    'Micro Language Models (SLMs)',
    'RAG Systems',
    'AI Agent Building',
    'Fine-tuning & Deployment',
    'Portfolio Development',
    'Freelance Skills',
    'AI Content Creation',
    'Personal Branding',
    'IT & Software Fundamentals',
  ]
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Core Skills You Will Acquire</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 scroll-animate">
          {skills.map((skill, i) => (
            <div key={i} className="bg-gray-700 text-white py-2 px-5 rounded-full text-lg font-medium shadow-md transition-transform transform hover:scale-110 hover:bg-indigo-600">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const LMSSection = () => (
  <section className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            A <span className="gradient-text">Gamified Platform</span> for Consistent Growth
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Our LMS isn't just a dashboard—it's where real growth happens. Earn XP, track habits, compete on leaderboards, and tackle monthly AI challenges.
          </p>
          <ul className="space-y-3">
            {['Tasks & Quizzes', 'Habit Tracker', 'Live Webinars', 'Community Leaderboard', 'Monthly AI Challenges'].map((f, i) => (
              <li key={i} className="flex items-center text-lg text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="scroll-animate">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-2xl">
            <div className="h-auto bg-gray-700 rounded-lg mb-4">
              <img
                src="https://i.postimg.cc/JGGMNTC0/111aaaa111gra-ph.png"
                alt="LMS Dashboard"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-auto bg-gray-700 rounded-lg">
                <img
                  src="https://i.postimg.cc/tYwy2h95/Screenshot-2025-06-19-163017.png"
                  alt="LMS Leaderboard"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-auto bg-gray-700 rounded-lg">
                <img
                  src="https://i.postimg.cc/dDWJZbXg/Screenshot-2025-06-19-163149.png"
                  alt="LMS Challenges"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const CertificationsSection = () => (
  <section className="py-20 bg-gray-800/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 scroll-animate">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Triple Certification for Maximum Impact</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Graduate with globally recognized credentials that open doors to new opportunities.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 lg:col-span-1 scroll-animate">
          <img
            src="https://i.postimg.cc/t74C1pqG/image.png"
            alt="AI Automation Certificate"
            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform w-full"
          />
        </div>
        <div className="lg:col-span-2 scroll-animate">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-700/50 p-6 rounded-xl flex flex-col items-center justify-center h-full">
              <img src="https://i.postimg.cc/rdq2vNz2/image.png" alt="IITM Pravartak Logo" className="h-12 object-contain" />
            </div>
            <div className="bg-gray-700/50 p-6 rounded-xl flex flex-col items-center justify-center h-full">
              <img src="https://i.postimg.cc/PCkgwQWv/image.png" alt="NSDC Logo" className="h-12 object-contain" />
            </div>
            <div className="bg-gray-700/50 p-6 rounded-xl flex flex-col items-center justify-center h-full">
              <img src="https://i.postimg.cc/jC734JdH/image.png" alt="Microsoft Azure Logo" className="h-12 object-contain" />
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-indigo-900/50 p-4 rounded-lg"><p>Trusted by Employers</p></div>
            <div className="bg-indigo-900/50 p-4 rounded-lg"><p>Global Certifications</p></div>
            <div className="bg-indigo-900/50 p-4 rounded-lg"><p>3x Credential Path</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const TrustedBySection = () => {
  const logos = ['NVIDIA', 'Startup India', 'Kerala Startup Mission', 'Azure']
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-semibold text-gray-400 mb-8 scroll-animate">
          Our Esteemed Partners & Supporters
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 scroll-animate">
          {logos.map(l => (
            <div key={l} className="text-gray-500 font-bold text-2xl opacity-70 hover:opacity-100 transition-opacity">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PricingSection = ({ onApplyNowClick }) => (
  <section id="pricing" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-indigo-500/30 scroll-animate">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Limited Time Offer</h2>
        <p className="text-lg text-gray-300 mb-8">
          Invest in your future with a special launch discount. Offer ends soon!
        </p>
        <div className="bg-gray-900 p-6 rounded-xl mb-6">
          <p className="text-xl text-gray-400 line-through">₹78,000</p>
          <p className="text-4xl md:text-5xl font-extrabold text-white my-2">₹48,000</p>
          <div className="inline-block bg-green-500 text-white text-lg font-bold py-1 px-4 rounded-full">~38% OFF</div>
        </div>
        <div className="mb-8">
          <p className="text-2xl font-semibold text-white">Bajaj EMI available</p>
        </div>
        <button
          onClick={onApplyNowClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 text-xl"
        >
          Claim This Offer Now
        </button>
      </div>
    </div>
  </section>
)

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    {
      question: "Is this program suitable for students with no coding background?",
      answer:
        "Absolutely! This program is designed from the ground up for beginners. The first year focuses on building strong IT foundations, including the basics of programming logic, before diving into more advanced AI topics. No prior coding experience is required.",
    },
    {
      question: "How are the classes conducted?",
      answer:
        "Classes are conducted live online by industry experts. We hold two sessions per week, typically scheduled in the evenings or on weekends to ensure they don't interfere with your regular college hours.",
    },
    {
      question: "What kind of projects will I work on?",
      answer:
        "You will build a portfolio of 5 real-world AI projects. These include creating automation workflows, building small AI-powered web tools, developing custom AI agents, and a final capstone project to solve a real-world problem.",
    },
    {
      question: "What is the '2-day IIT Madras immersion'?",
      answer:
        "At the end of the first year, students are invited for a 2-day immersive experience at the IIT Madras Research Park. This includes workshops, a final project showcase, networking with experts, and the certification ceremony.",
    },
    {
      question: "Can I really earn money while studying?",
      answer:
        "Yes. The second year of the program focuses on monetization. We teach you how to use your new AI skills to find freelance work, build a personal brand, and leverage platforms where you can offer your services to clients.",
    },
  ]
  const toggleFAQ = idx => setOpenIndex(openIndex === idx ? null : idx)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't see your question here, feel free to reach out.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-700 rounded-lg overflow-hidden scroll-animate" style={{ transitionDelay: `${i * 100}ms` }}>
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left p-5 bg-gray-800 hover:bg-gray-700/50 focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'transform rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-5 bg-gray-800/50 border-t border-gray-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FinalCTASection = ({ onApplyNowClick }) => (
  <section className="py-20 bg-gray-800/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight scroll-animate">
        Secure Your Spot in India’s Most Future-Focused AI Program
      </h2>
      <div className="mt-8 scroll-animate">
        <button
          onClick={onApplyNowClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 text-xl"
        >
          Join Now
        </button>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} edapt.me. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:text-white transition-colors">Contact</a>
        <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
)

const FloatingCTA = ({ onApplyNowClick }) => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
    <a href="https://wa.me/919072616500" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110">
      <WhatsAppIcon />
    </a>
    <button onClick={onApplyNowClick} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-pulse">
      Apply Now
    </button>
  </div>
)

const ApplicationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', graduationYear: '' })
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your application! We will be in touch.')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Apply for the Program</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="number" name="graduationYear" placeholder="Expected Graduation Year (e.g., 2027)" required onChange={handleChange} className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

// — Main App —
export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  useScrollAnimation()

  return (
    <>
      <Head>
        <title>Edapt AI Program</title>
        <meta name="description" content="Future-Proof Your College Degree with AI Skills" />
      </Head>
      <div className="bg-gray-900 text-gray-200 font-sans">
        <Header onApplyNowClick={() => setIsFormOpen(true)} />
        <main>
          <HeroSection onApplyNowClick={() => setIsFormOpen(true)} />
          <ValuePropositionSection />
          <WhoIsThisForSection />
          <LearningJourneySection />
          <CurriculumSection />
          <ToolsSection />
          <CoreSkillsSection />
          <LMSSection />
          <CertificationsSection />
          <TrustedBySection />
          <PricingSection onApplyNowClick={() => setIsFormOpen(true)} />
          <FAQSection />
          <FinalCTASection onApplyNowClick={() => setIsFormOpen(true)} />
        </main>
        <Footer />
        <FloatingCTA onApplyNowClick={() => setIsFormOpen(true)} />
        {isFormOpen && <ApplicationForm onClose={() => setIsFormOpen(false)} />}
      </div>
    </>
  )
}
