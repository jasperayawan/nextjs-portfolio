import Image from 'next/image'

export default function About(){
    return(
        <section className="min-h-[80vh] py-10">
            <h1 className='__title mb-4 text-center'>About</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className='flex justify-center items-center'>
                    <p className="__prgrp">Hi, I'm Jasper an Aspiring software Engineer I learned how to code when I was 18 and now I'm 
                    currently 21 years old when I was in 1st year college we learned with c++ then I learned Web development when
                    I was in second year college then start to learn with with HTML and CSS then next I learned Javascript through
                    <span className='text-slate-800 font-semibold'> Freecodecamp</span> then I got a cetificate</p>
                </div>

                <div className='flex justify-end items-center'>
                    <Image 
                        src="/assets/images/jasko.jpg"s
                        width={400}
                        height={400}
                        className='lg:rotate-12 rounded-md'
                        alt='about profile'/>
                </div>

            </div>
        </section>
    )
}