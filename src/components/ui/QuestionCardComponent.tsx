import { IoIosArrowDropdownCircle } from "react-icons/io"

export const QuestionCardComponent = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <div className='border-[1px] border-gray-200 rounded-xl mx-6 text-black px-5 py-4 my-2 shadow-xl flex justify-between items-center'>
            <div>
                <p className='text-[16px] text-gray-700 font-medium'>{question}</p>
                <p className='text-sm mt-2 text-gray-500'>{answer}</p>
            </div>
            <div>
                <IoIosArrowDropdownCircle size={22} />
            </div>
        </div>
    )
}