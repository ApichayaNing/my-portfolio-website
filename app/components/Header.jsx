import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"

const Header = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
        items-center justify-center gap-4 pt-24">
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
        </motion.div>
      <motion.h3 
      initial={{ y: -20, opacity:0 }}
      animate={{ y: 0, opacity: 1}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='flex item-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hello, world!!! 🌏 I’m Ning ⭐️.</motion.h3>
    <motion.h1 
    initial={{ y: -30, opacity:0 }}
    animate={{ y: 0, opacity: 1}}
    transition={{ duration: 0.6, delay: 0.5 }}
    className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
    💻CS student from Thailand 🇹🇭, now coding my way through life in Perth 🇦🇺. </motion.h1> 
    
    <motion.p 
    initial={{ opacity:0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.6, delay: 0.7 }}
    className='max-w-2xl mx-auto font-Ovo'> Welcome to version 1.0 🌱— fully launched, kind of functional, emotionally stable (on most weekdays).
    If you’re seeing this, congrats… the code didn’t break (yet)🙏🏼
    </motion.p>
   
    <div className='flex flec-col sm:flex-row items-center gap-4 mt-4'>
   
    <motion.a
    initial={{ y: 30, opacity:0 }}
    animate={{ y: 0, opacity: 1}}
    transition={{ duration: 0.6, delay: 1 }}
    href="#contact"
    className="px-10 py-3 rounded-full border 
    border-white text-white bg-black flex items-center gap-2 ">contact me
     <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
    alt="Arrow icon"
    className="w-4"
    />
    </motion.a>

    <motion.a 
    initial={{ y: 30, opacity:0 }}
    animate={{ y: 0, opacity: 1}}
    transition={{ duration: 0.6, delay: 1.2 }}
    href="/apichaya-resume.pdf" download 
    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
    >my resume <Image src={assets.download_icon} alt=''
    className='w-4'/></motion.a>
    </div>
    </div>
    
  )
}

export default Header
