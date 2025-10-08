import './globals.css'
import { Inter } from 'next/font/google'
import MainLayoutWrapper from '../components/layout/MainLayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DexScreener Clone',
  description: 'A clone of DexScreener for tracking cryptocurrency tokens and pairs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayoutWrapper>
          {children}
        </MainLayoutWrapper>
      </body>
    </html>
  )
}
