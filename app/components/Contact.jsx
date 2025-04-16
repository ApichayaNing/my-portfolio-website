import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Contact = ({isDarkMode, setIsDarkMode}) => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9b78f56e-a52d-4701-9e9d-e8a7b4a9d8e4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/
    footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      
      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1,  }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-center mb-2 text-lg font-Ovo">
        Let's connect!!!
      </motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1,  }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="text-center text-5xl font-Ovo">Get in touch with me</motion.h2>
      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
      Whether it’s tech talk, collaboration ideas, or good vibes — my inbox is always open 💌.
      </motion.p>

      <motion.form 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-6
        mt-10 mb-8'>
            <motion.input 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text" 
            placeholder="Enter your name" 
            required 
            name="name"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white text-gray-800 placeholder-gray-500
             dark:text-black dark:placeholder-black transition duration-300`} 
            />
            <motion.input 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,  }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="email" 
            placeholder='Enter your email' 
            required 
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white text-gray-800 placeholder-gray-500
             dark:text-black dark:placeholder-black transition duration-300`} 
             />

        </div>
            <motion.textarea 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1,  }}
            transition={{ delay: 1.3, duration: 0.6 }}
            rows='6' placeholder='Enter your message' required
            className={`w-full p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white text-gray-800 placeholder-gray-500
             dark:text-black dark:placeholder-black transition duration-300`} 
            ></motion.textarea>

        <motion.button 
        whileInView={{ opacity: 1.05 }}
        transition={{ duration: 0.3 }}
        type='submit'
        className={`w-max flex items-center gap-2 text-gray-700 border-[0.5px]
        border-gray-700 rounded-full py-3 px-8 mx-auto bg-transparent
        p-6 cursor-pointer hover:bg-[var(--light-hover)] hover:shadow-[4px_4px_0_#000]
        hover:-translate-y-1 duration-500 
        ${isDarkMode 
            ? 'hover:shadow-[4px_4px_0_#fff] text-white border-white' 
            : 'hover:shadow-[4px_4px_0_#000]'}`}  >
            Submit now <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' 
            className='w-4'/>
        </motion.button>

        <p className='mt-4'>
            {result}
        </p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
