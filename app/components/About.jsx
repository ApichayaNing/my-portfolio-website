import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h4 
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className='text-center mb-2 text-lg
      font-Ovo'>
        I guees if you are here, you might need to know about me...</motion.h4>
     
      <motion.h2
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className='text-center text-5xl font-Ovo'>
        About me</motion.h2>

        <motion.div 
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row item-center gap-20 my-20'>
            <motion.div 
            initial={{ opacity: 0,scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user'
                className='w-full rounded-3xl'/>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay:0.8 }}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                    I’m on a mission to learn everything my younger self thought was impossible 🚀. 
                    I love design that speaks, code that behaves 💻, and teamwork that actually feels like fun 🤝. 
                    If you need someone who codes, cares 🤎, 
                    and occasionally smashes tennis balls like bugs in production 🎾🐞 — I’m your girl⭐️.</p>

                    <motion.ul 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className={`border border-gray-400 
                bg-transparent text-gray-700 
                rounded-xl p-6 cursor-pointer 
                hover:bg-[var(--light-hover)] 
                hover:shadow-[4px_4px_0_#000] 
                hover:-translate-y-1 duration-500 transition-all 
                ${isDarkMode 
                  ? 'hover:shadow-[4px_4px_0_#fff] text-white border-white' 
                  : 'hover:shadow-[4px_4px_0_#000]'}`}  key={index}>
                    
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                {title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
                {description}</p>

              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <h4 className={`my-6 font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Tools I use</h4>

          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className={`flex items-center justify-center 
                w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer 
                bg-transparent 
                hover:bg-[var(--light-hover)] 
                hover:-translate-y-1 duration-500 transition-all
                 ${isDarkMode 
                  ? 'text-white border-white hover:shadow-[4px_4px_0_#fff] bg-[var(--dark-hover)]' 
                : 'text-black border-gray-400 hover:shadow-[4px_4px_0_#000]'}`}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
