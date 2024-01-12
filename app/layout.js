import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TSCZ-S4F3-CHAT',
  description: 'CHATROOM',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster position="bottom-center " />
        {children}
      </body>
    </html>
  )
}
