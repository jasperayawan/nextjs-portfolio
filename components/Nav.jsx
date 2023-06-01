'use client'

import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';

export default function Nav(){
    const [toggleDropDown, setToggleDropDown] = useState(false)

    return(
        <nav className="flex justify-between flex-center items-center py-4 f-full lg:max-w-6xl mx-auto px-4">
            <Link href="/">
                <Image
                    src='/assets/images/jasko.jpg'
                    alt='my profile'
                    width={50}
                    height={50}
                    className='rounded-full'
                />
            </Link>

            <ul className='hidden md:flex gap-4'>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/project">Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            {/**modile nav */}

            <div className='sm:flex md:hidden'>
                <Image
                    src='/assets/images/jasko.jpg'
                    alt='my profile'
                    width={50}
                    height={50}
                    className='rounded-full'
                    onClick={() => setToggleDropDown((prev) => !prev)}
                />

                {toggleDropDown && (
                    <div className='flex relative'>
                        <ul className='sm:hidden dropdown'>
                            <li>
                                <Link href="/home" className='dropdown_link'>Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className='dropdown_link'>About</Link>
                            </li>
                            <li>
                                <Link href="/project" className='dropdown_link'>Projects</Link>
                            </li>
                            <li>
                                <Link href="/contact" className='dropdown_link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                )} 
            </div>
        </nav>
    )
}