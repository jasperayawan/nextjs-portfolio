import Link from 'next/link'

export default function Footer(){
    return(
        <footer className='flex flex-col md:flex-row md:justify-between items-center max-w-5xl mx-auto py-4 border-t-[1px]'>
            <div>
                <ul className='flex gap-4'>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/">Project</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                 © 2023 Jasper Ayawan. All rights reserved.
            </div>
        </footer>
    )
}