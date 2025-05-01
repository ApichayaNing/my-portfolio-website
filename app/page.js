'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    }

    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');

    if (isDarkMode) {
      html?.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html?.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  if (!mounted) return null;

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Project isDarkMode={isDarkMode} />

      {/* 🌸 Embedded Chatbot section */}
      <div
      id="chatbot"
       style={{
       maxWidth: '900px',
       margin: '2rem auto',
       padding: '2rem',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center'
        }}
      >
      <h2
       style={{
        fontSize: '2rem',
        marginBottom: '1rem',
        textAlign: 'center'
        }}
      >
      ☕ Cup of Care Chatbot 🌸
      </h2>
      <iframe 
      src="https://a-cup-of-care.onrender.com"
      style={{
        width: '60%',
        height: '500px',
        border: 'none',
        borderRadius: '20px',   
        
      }}
      title="Cup of Care Chatbot"
      ></iframe>
      </div>


      <Blog isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
