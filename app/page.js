import { AiFillFacebook, AiFillInstagram, AiFillGithub } from 'react-icons/ai'

export default function Home(){
  return(
    <main className="lg:max-w-6xl mx-auto px-4">
      <section className="flex flex-col justify-center items-start gap-4 min-h-[65vh]">
        <h1 className="__txtnm text-4xl sm:text-5xl">Full Stack Developer</h1>
        <p className="__prgrp max-w-2xl">I'm Jasper Ayawan, an aspiring software engineer with a strong 
          passion for crafting intuitive and visually appealing user interfaces. 
          Through this portfolio, I invite you to delve into my journey, projects,
           and expertise in the world of UI development.</p>
          <div className='flex gap-4'>
            <AiFillFacebook className='text-2xl'/>
            <AiFillInstagram className='text-2xl'/>
            <AiFillGithub className='text-2xl'/>
          </div>
      </section>
    </main>
  )
}