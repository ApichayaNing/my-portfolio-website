
import { assets, projectData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"

const Project = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="Project" className="w-full px-[12%] py-10 scroll-mt-20"  >

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1,  }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg
      font-Ovo'>
       Project I have done...
       </motion.h4>


      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1,  }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
       My project
       </motion.h2>
        
        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I built a portfolio to show who I am 🌟, a chatbot to explore fun interactions 🤖, and a blog to share my thoughts and passions ✍️🌱. 
        These projects aren’t just tasks — they’re little milestones on a journey I never imagined I’d take 💫.  
        </motion.p>

        <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {projectData.map(({icon, title, description, link}, index)=>(
                <motion.li
                whileHover={{scale: 1.05}}
                key={index}
                className={`list-none border border-gray-400 
                bg-transparent text-gray-700 
                rounded-xl p-6 cursor-pointer 
                hover:bg-[var(--light-hover)] 
                hover:shadow-[4px_4px_0_#000] 
                hover:-translate-y-1 duration-500 transition-all 
                ${isDarkMode 
                  ? 'hover:shadow-[4px_4px_0_#fff] text-white border-white' 
                  : 'hover:shadow-[4px_4px_0_#000]'}`}  >
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                    {title}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
                    {description}</p>

                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
                    </a>
                </motion.li>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Project
