import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './working/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Popovers from a sticky table header',
  description: 'Popovers from a sticky table header',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
