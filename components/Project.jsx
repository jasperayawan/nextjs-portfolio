import Image from 'next/image'
import Link from 'next/link'

export default function Project(){
    return(
        <section>
            <div className="flex flex-col gap-10 min-h-screen justify-center">
                <div className="flex flex-col gap-3 max-w-2xl">
                    <span className="uppercase">My work</span>
                    <h1 className="__title">Projects</h1>
                    <p className="__prgrp">Following projects showcases my skills and experience through real-world examples
                        of my work Each project is briefly described with links to code repositories and live demos
                        in it. It reflects my ability to solve complex problems, work with different technologies,
                        and manage projects effectively.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg'>
                        <Link href='https://jasperayawan.github.io/eLTECH/'>
                            <Image 
                                src='/assets/images/eltech.png'
                                alt='E-Learning website'
                                width={400}
                                height={200}
                            />
                        </Link>
                        <div className='p-2'>
                        <h2>E-Learning Tech</h2>
                        <p className='text-zinc-400'>Create an eLearning website for society to maintain their education 
                            through online teaching, which contains a variety of courses.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg'>
                        <Link href='https://instagram-clone-byjasper.netlify.app/'>
                            <Image 
                                src='/assets/images/insta.png'
                                alt='E-Learning website'
                                width={400}
                                height={200}
                            />
                        </Link>
                        <div className='p-2'>
                        <h2>Instagram UI clone</h2>
                        <p className='text-zinc-400'> 
                            I clone instagram To further enhance frontend Skills using Reactjs 
                        </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg'>
                        <Link href='https://jasperayawan.github.io/miniP2/'>
                            <Image 
                                src='/assets/images/harvesthub.png'
                                alt='E-Learning website'
                                width={400}
                                height={200}
                            />
                        </Link>
                        <div className='p-2'>
                        <h2>Harvest Hub</h2>
                        <p className='text-zinc-400'>To provide an online platform for farmers to sell their products directly to consumers</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}