'use client'
import Image from "next/image"
import { useState } from "react"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"

export const OurTeamSection = () => {

    const members = [
        {
            "image": "/team_1.jpg",
            "name": "Emma Davis",
            "experience": "6 years",
            "location": "San Francisco, USA",
            "email": "emma.davis@primenest.com",
            "role": "Marketing Specialist"
        }, {
            "image": "/team_3.jpg",
            "name": "James Carter",
            "experience": "10+ years ",
            "location": "New York, USA",
            "email": "james.carter@primenest.com",
            "role": "Senior Consultant"
        },
        {
            "image": "/team_2.jpg",
            "name": "Sophia Martinez",
            "experience": "8 years ",
            "location": "Los Angeles, USA",
            "email": "sophia.martinez@primenest.com",
            "role": "Sales Manager"
        },
        {
            "image": "/team_4.jpg",
            "name": "Michael Johnson",
            "experience": "12 years",
            "location": "Chicago, USA",
            "email": "michael.johnson@primenest.com",
            "role": "Investment Advisor"
        },
        {
            "image": "/team_5.jpg",
            "name": "Olivia Brown",
            "experience": "7 years ",
            "location": "Miami, USA",
            "email": "olivia.brown@primenest.com",
            "role": "Client Relations Specialist"
        },
        // {
        //     "image": "/team_5.jpg",
        //     "name": "Daniel Wilson",
        //     "experience": "9 years in commercial property management",
        //     "location": "Houston, USA",
        //     "email": "daniel.wilson@primenest.com",
        //     "role": "Property Manager"
        // },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const member = members[currentIndex];

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
    };

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % members.length);
    };

    return (
        <div className="mb-20 mx-10 flex gap-20 justify-center relative text-white">

            <div className="bg-[#014421] h-70 w-1/5 rounded-xl p-4 flex flex-col gap-7">
                <div className="w-25 h-25 rounded-full overflow-hidden">
                    <Image
                        src={member.image}
                        alt="Team Member"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <p className="font-bold text-xl">{member.name}</p>
                    <p>{member.role}</p>
                </div>

                <div className="flex gap-5 mt-1 mx-5">
                    <button className="border-[1px] rounded-full bg-transparent p-2" onClick={handlePrev}>
                        <FaArrowLeftLong />
                    </button>
                    <button className="border-[1px] rounded-full bg-transparent p-2" onClick={handleNext}>
                        <FaArrowRightLong />
                    </button>
                </div>

            </div>

            <div className="flex flex-col justify-between">

                <div className="flex mx-10 gap-10 mt-5">
                    {
                        members.map((member, index) => {
                            return (
                                <div className=" w-20 h-20 rounded-full overflow-hidden " key={index}>
                                    <Image
                                        src={member.image}
                                        alt="Team Member"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        })
                    }


                </div>

                <div className="bg-[#014421] h-25 rounded-xl p-4 flex justify-evenly items-center">

                    <div>
                        <p className="text-gray-300 text-[15px]">Years of Experience</p>
                        <p className="font-semibold text-[16px] text-white">{member.experience}</p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-[15px]">Location</p>
                        <p className="font-semibold text-[16px] text-white">{member.location}</p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-[15px]">Email address</p>
                        <p className="font-semibold text-[16px] text-white">{member.email}</p>
                    </div>

                </div>
            </div>
            <div className="absolute left-85 bottom-10 w-1/12 h-1 bg-[#014421]"></div>
        </div>
    )
}