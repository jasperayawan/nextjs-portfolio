import '@styles/globals.css'
import Nav from '@components/Nav';

export const metadata = {
  title: 'Jasper Ayawan - Software Engineer',
  description: 'Im an aspiring software engineer and currently 4th year college IT student at Southern Mindanao Colleges',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
