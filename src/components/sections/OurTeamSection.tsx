import Image from "next/image"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"

export const OurTeamSection = () => {
    return (
        <div className="mb-20 mx-10 flex gap-20 justify-center relative text-white">

            <div className="bg-[#014421] h-70 w-1/5 rounded-xl p-4 flex flex-col gap-7">
                <div className="w-25 h-25 rounded-full overflow-hidden">
                    <Image
                        src="/team_2.jpg"
                        alt="Team Member"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <p className="font-bold text-xl">Aleena Jonathan</p>
                    <p>Prouduct designer</p>
                </div>

                <div className="flex gap-5 mt-1 mx-5">
                    <button className="border-[1px] rounded-full bg-transparent p-2">
                        <FaArrowLeftLong />
                    </button>
                    <button className="border-[1px] rounded-full bg-transparent p-2">
                        <FaArrowRightLong />
                    </button>
                </div>

            </div>

            <div className="flex flex-col justify-between">

                <div className="flex mx-10 gap-10 mt-5">
                    <div className=" w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/team_1.jpg"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/team_2.jpg"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/team_3.jpg"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/team_4.jpg"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/team_5.jpg"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

                <div className="bg-[#014421] h-25 rounded-xl p-4 flex justify-evenly items-center">
                    <div>
                        <p className="text-gray-300 text-[15px]">Years of Experience</p>
                        <p className="font-semibold text-[16px] text-white">10 + Years</p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-[15px]">Location</p>
                        <p className="font-semibold text-[16px] text-white">Dubai</p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-[15px]">Email address</p>
                        <p className="font-semibold text-[16px] text-white">1aleenajonathan@gmail.com</p>
                    </div>

                </div>
            </div>
            <div className="absolute left-85 bottom-10 w-1/12 h-1 bg-[#014421]"></div>
        </div>
    )
}