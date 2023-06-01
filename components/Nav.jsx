'use client'

import Link from 'next/link';
import Image from 'next/image'

export default function Nav(){
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

            <ul className='flex gap-4'>
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
        </nav>
    )
}