import type { Metadata } from 'next'
import { Inter, EB_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' // Import the Footer component

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-gotham',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Marco Sukhatme | Quantitative Finance & Machine Learning',
  description: "Marco Sukhatme's personal portfolio website. Explore projects in quantitative finance, machine learning, and software development.",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body className="bg-uchicago-dark-gray text-uchicago-light-greystone selection:bg-uchicago-maroon selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 flex-grow flex flex-col">
          {children}
        </main>
        <Footer /> {/* Add the Footer component here, mt-auto will push it down */}
      </body>
    </html>
  )
}
