import { assets, blogData } from '@/assets/assets';
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import { motion } from "motion/react"

const Blog = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="blog" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1,  }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-center mb-2 text-lg font-Ovo">
        A space where I share about everything that inspires me...
      </motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1,  }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="text-center text-5xl font-Ovo">My Blogs</motion.h2>
      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        This is my little corner of the internet where I document what I’m
        learning, what I’m loving, and where I’ve been wandering. A mix of tech,
        personal growth, and "why did I think hiking in Samba was a good idea?"
        😅
      </motion.p>

      <motion.div 
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ delay: 0.9, duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
  {blogData.map((blog) => (
    <motion.div
    whileHover={{scale: 1.05}}
    transition={{ duration: 0.3 }}
    key={blog.title}
    className="group aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer"
    style={{ backgroundImage: `url(${blog.bgImage.src})` }}
  >
    <div
      className="bg-white dark:bg-white w-fit rounded-md absolute bottom-5 left-5 
      py-3 px-5 flex items-center justify-between gap-3 shadow-md 
      transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-lg"
    >
      <div>
        <h2 className="font-semibold text-sm text-gray-900 dark:text-black">{blog.title}</h2>
        <p className="text-xs text-gray-700 dark:text-gray-800">{blog.description}</p>
      </div>
      <div
        className="border rounded-full border-black w-9 aspect-square 
        flex items-center justify-center shadow-[2px_2px_0_#000] 
        transition duration-300 group-hover:bg-lime-300"
      >
        <Image src={assets.send_icon} alt="send icon" className="w-4" />
      </div>
    </div>
  </motion.div>
  
  ))}
</motion.div>

      <motion.a 
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ delay: 1.1, duration: 0.5 }}
      href="" className={`w-max flex items-center gap-2 text-gray-700 border-[0.5px]
      border-gray-700 rounded-full py-3 px-10 mx-auto my-20 bg-transparent
      p-6 cursor-pointer hover:bg-[var(--light-hover)] hover:shadow-[4px_4px_0_#000]
      hover:-translate-y-1 duration-500 
      ${isDarkMode 
        ? 'hover:shadow-[4px_4px_0_#fff] text-white border-white' 
        : 'hover:shadow-[4px_4px_0_#000]'}`}  >
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' 
        className='w-4'/>
      </motion.a>
    </motion.div>
  );
};

export default Blog;
