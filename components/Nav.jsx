'use client'

import Link from 'next/link';
import Image from 'next/image'

export default function Nav(){
    return(
        <nav className="flex justify-between f-full">
            <Link href="/">
                <Image
                    src='/assets/images/jasko.jpg'
                    alt='my profile'
                    width={50}
                    height={50}
                    className='rounded-full'
                />
            </Link>
        </nav>
    )
}