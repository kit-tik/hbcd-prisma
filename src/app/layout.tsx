import Navbar from '@/components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Kanit, Sarabun } from "next/font/google";
// import Notification from '@/components/Notification';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
export const sarabun = Sarabun({
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-sarabun",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Pops Recording System',
  description: 'Created using next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/apple-icon.png"
        />
      </head>
      <body className={`${kanit.className}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
