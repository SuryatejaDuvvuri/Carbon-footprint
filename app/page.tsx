'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <div className = "flex-col p-6 max-w-sm mx-auto ">
          {/* Carbon calculator */}
          <div className = "container mx-9 bg-black">
          {/* Drop down menu */}
              <input placeholder='anything'
              className="border rounded w-full py-2 px-3"
              type="text"></input>
                <input placeholder='anything'
              className="border rounded w-full py-2 px-3"
              type="text"></input>
                <input placeholder='anything'
              className="border rounded w-full py-2 px-3"
              type="text"></input>
              <button className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Calculate</button>
          </div>
        </div>
    </main>
  )
}
