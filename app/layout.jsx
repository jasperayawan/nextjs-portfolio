import '@styles/globals.css'
import Nav from '@components/Nav';
import Head from 'next/head'
import Footer from '@components/Footer';

export const metadata = {
  title: 'Jasper Ayawan - Software Engineer',
  description: "I'm an aspiring software engineer and currently 4th year college IT student at Southern Mindanao Colleges",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <Head>
        <title>{metadata.title}</title>
        <meta name='descrition' content={metadata.description}/>
      </Head>
      <body>
        <main className='app'>
          <Nav />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
