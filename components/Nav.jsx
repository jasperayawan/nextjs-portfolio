'use client'

import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscVerifiedFilled } from 'react-icons/vsc'

export default function Nav(){
    const [toggleDropDown, setToggleDropDown] = useState(false)

    return(
        <nav className="flex justify-between flex-center items-center py-4 f-full lg:max-w-6xl mx-auto px-4">
            <Link href="/" className='flex'>
                <Image
                    src='/assets/images/jasko.jpg'
                    alt='my profile'
                    width={50}
                    height={50}
                    className='rounded-full'
                />
                <VscVerifiedFilled />
            </Link>

            <ul className='hidden md:flex gap-4'>
                <li>
                    <Link href="/home" className='text-zinc-500 font-semibold'>Home</Link>
                </li>
                <li>
                    <Link href="/about" className='text-zinc-500 font-semibold'>About</Link>
                </li>
                <li>
                    <Link href="/project" className='text-zinc-500 font-semibold'>Projects</Link>
                </li>
                <li>
                    <Link href="/contact" className='text-zinc-500 font-semibold'>Contact</Link>
                </li>
            </ul>

            {/**modile nav */}

            <div className='sm:flex md:hidden'>
                <RxHamburgerMenu onClick={() => setToggleDropDown((prev) => !prev)}/>

                {toggleDropDown && (
                    <div className='flex relative'>
                        <ul className='sm:hidden dropdown ring-1 ring-zinc-300'>
                            <li>
                                <Link href="/home" className='dropdown_link text-zinc-700 font-semibold'>Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className='dropdown_link text-zinc-700 font-semibold'>About</Link>
                            </li>
                            <li>
                                <Link href="/project" className='dropdown_link text-zinc-700 font-semibold'>Projects</Link>
                            </li>
                            <li>
                                <Link href="/contact" className='dropdown_link text-zinc-700 font-semibold'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                )} 
            </div>
        </nav>
    )
}