'use client'
import { useState } from "react"
import { IoIosArrowDropdownCircle } from "react-icons/io"

export const QuestionCardComponent = ({ question, answer }: { question: string, answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl mx-2 text-black px-5 py-4 my-2 shadow-xl">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <p className="text-[16px] text-gray-700 font-medium">{question}</p>
        <button className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <IoIosArrowDropdownCircle size={22} />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-500">{answer}</p>
      </div>
    </div>
  )
}
