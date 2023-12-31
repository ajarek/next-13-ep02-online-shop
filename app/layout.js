"use client"

import './globals.css'
import { Rubik } from 'next/font/google'
import { createContext, useState } from 'react'
export const AppContext = createContext()
// components
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
 
  const [dataLength,setDataLength]=useState(0)
  return (
    <html lang="en">
      <body className={rubik.className}>
      <AppContext.Provider value={{ dataLength,setDataLength}}>
        <Navbar />
        {children}
        </AppContext.Provider>
      </body>
     
    </html>
  )
}
