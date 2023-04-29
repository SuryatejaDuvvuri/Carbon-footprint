'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillHome } from "react-icons/ai";
import { IoShareSocialSharp } from 'react-icons/io5'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className = "flex-col p-6 max-w-sm mx-auto ">
          {/* <div className = "flex-row items-center space-x-4">
            <AiFillHome href = "/"/>
            <IoShareSocialSharp />
          </div> */}
        {/* Social sharing & Icons */}
        {/* Carbon calculator */}
        {/* Results based on user-input - button event listener */}
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </main>
  )
}
