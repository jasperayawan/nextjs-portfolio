'use client'
import About from '@components/About'
import Contact from '@components/Contact'
import Project from '@components/Project'
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { motion, useScroll } from "framer-motion"
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'


export default function Home(){
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set the desired timeout value in milliseconds
  
    return () => clearTimeout(timeout); // Cleanup the timeout when component unmounts
  }, []);
  

  return(
    <>
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[8px] z-50 bg-slate-950 origin-[0%]"
      style={{ scaleX: scrollYProgress }} />
      <main className="lg:max-w-6xl mx-auto px-4">

      <div>

      {loading ? (
      <Skeleton count={5} /> // Adjust the count or other props as needed
    ) : (
      // Your actual content here
      <div>
        <section className="flex flex-col justify-center items-start gap-4 min-h-[80vh]">
      <h2 className='text-slate-700 font-bold text-2xl flex gap-2'>Hi, I'm Jasper</h2>
        <h1 className="__txtnm text-4xl sm:text-5xl">Full Stack Developer</h1>
        <p className="__prgrp max-w-2xl text-base">I'm Jasper Ayawan, an aspiring software engineer with a strong 
          passion for crafting intuitive and visually appealing user interfaces. 
          Through this portfolio, I invite you to delve into my journey, projects,
           and expertise in the world of UI development.</p>
           <Link href="#contact" className='__cntct rounded-md py-2 px-5' type='button'>
            Contact me
           </Link>
          <div className='flex gap-4'>
            <AiFillFacebook className='text-2xl'/>
            <AiFillInstagram className='text-2xl'/>
            <AiFillGithub className='text-2xl'/>
          </div>
      </section>

      <About />
      <Project/>
      <Contact/>
      </div>
    )}
      </div>


    </main>
    </>
  )
}