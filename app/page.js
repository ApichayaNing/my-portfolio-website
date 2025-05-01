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

      <div
      id="chatbot"
      className="w-full max-w-3xl mx-auto my-8 p-6 flex flex-col items-center rounded-2xl "
      >
      <h2 className="text-5xl font-Ovo mb-4 text-center">
       ☕ Cup of Care Chatbot 🌸
      </h2>
      <p className="text-center max-w-lg mb-4 text-gray-600">
      A Cup of Care ☕ is a cozy chatbot that offers warm messages to brighten your day and lift your mood 🤎. Whether you’re feeling stressed, tired, or just need a little kindness ⭐️, 
      it’s here to help with a virtual sip of comfort. 🌸
      </p>
      <iframe
      src="https://a-cup-of-care.onrender.com"
      className="w-full max-w-xl h-[500px] rounded-2xl border-0"
      title="Cup of Care Chatbot"
      ></iframe>
      </div>

      <Blog isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      </>
  );
}
