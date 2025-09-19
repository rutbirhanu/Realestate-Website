import Image from "next/image"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"

export const OurTeamSection = () => {
    return (
        <div className="mb-20 mx-10 flex gap-20 justify-center relative">

            <div className="bg-yellow-300 h-70 w-1/5 rounded-xl p-4 flex flex-col gap-7">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                        src="/g1_house.jpg"
                        alt="Team Member"
                        width={100}
                        height={100}
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="font-bold text-xl">Aleena Jonathan</p>
                    <p>Prouduct designer</p>
                </div>

                <div className="flex gap-5 mt-1 mx-5">
                    <button className="border-[1px] border-gray-700 rounded-full bg-transparent p-2">
                        <FaArrowLeftLong />
                    </button>
                    <button className="border-[1px] border-gray-700 rounded-full bg-transparent p-2">
                        <FaArrowRightLong />
                    </button>
                </div>

            </div>

            <div className="flex flex-col justify-between">

                <div className="flex mx-10 gap-10 mt-5">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={90}
                            height={90}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={90}
                            height={90}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={90}
                            height={90}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={90}
                            height={90}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={90}
                            height={90}
                            className="object-cover"
                        />
                    </div>

                </div>

                <div className="bg-yellow-300 h-25 rounded-xl p-4 flex justify-evenly items-center">
                    <div>
                        <p className="text-gray-600 text-[15px]">Years of Experience</p>
                        <p className="font-semibold text-[16px]">10 + Years</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-[15px]">Location</p>
                        <p className="font-semibold text-[16px]">Dubai</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-[15px]">Email address</p>
                        <p className="font-semibold text-[16px]">1aleenajonathan@gmail.com</p>
                    </div>

                </div>
            </div>
            <div className="absolute left-1/4 bottom-10 w-1/6 h-1 bg-yellow-300"></div>
        </div>
    )
}