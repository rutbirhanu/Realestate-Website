'use client'
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex justify-between items-center my-3 mx-4">
      <div className="text-lg font-bold ">PrimeNest</div>

      <nav className="hidden sm:flex bg-white/20 px-6 py-2 rounded-3xl">
        <ul className="flex gap-8 text-sm">
          <li className="cursor-pointer hover:text-[#0A1D37]"><a href="#about-us">About Us</a></li>
          <li className="cursor-pointer hover:text-[#0A1D37]"><a href="#property-list">Property List</a></li>
          <li className="cursor-pointer hover:text-[#0A1D37]"><a href="#contact-us">Contact Us</a></li>
          <li className="cursor-pointer hover:text-[#0A1D37]"><a href="#team">Team</a></li>

        </ul>
      </nav>

      <div className="hidden sm:block">
        <button className="bg-[#0A1D37] text-white rounded-3xl px-5 py-[5px]">
          Sign Up
        </button>
      </div>

      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-lg p-5 sm:hidden z-50">
          <ul className="flex flex-col gap-4 text-sm text-center text-black">
            <li className="cursor-pointer hover:text-[#0A1D37]"><a href="#about-us">About Us</a></li>
            <li className="cursor-pointer hover:text-[#0A1D37]"><a href="#property-list">Property List</a></li>
            <li className="cursor-pointer hover:text-[#0A1D37]"><a href="#contact-us">Contact Us</a></li>
            <li className="cursor-pointer hover:text-[#0A1D37]"><a href="#team">Team</a></li>
          </ul>
          <button className="mt-4 w-full bg-[#0A1D37] text-white rounded-3xl px-5 py-2">
            Sign Up
          </button>
        </div>
      )}
    </header>
  )
}
