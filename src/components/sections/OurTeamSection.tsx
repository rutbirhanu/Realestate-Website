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
        },
        {
            "image": "/team_3.jpg",
            "name": "James Carter",
            "experience": "10+ years",
            "location": "New York, USA",
            "email": "james.carter@primenest.com",
            "role": "Senior Real Estate Consultant"
        },
        {
            "image": "/team_2.jpg",
            "name": "Sophia Martinez",
            "experience": "8 years",
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
            "experience": "7 years",
            "location": "Miami, USA",
            "email": "olivia.brown@primenest.com",
            "role": "Client Relations Specialist"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const member = members[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % members.length);
    };

    return (
        <div className="mb-20 px-6 sm:px-10 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center relative text-white">

            {/* Left Card */}
            <div className="bg-[#014421] w-full lg:w-1/3 rounded-xl p-6 flex flex-col items-center gap-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
                    <Image
                        src={member.image}
                        alt="Team Member"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="text-center">
                    <p className="font-bold text-lg sm:text-xl">{member.name}</p>
                    <p className="text-sm sm:text-base">{member.role}</p>
                </div>

                <div className="flex gap-4 mt-2">
                    <button
                        className="border rounded-full bg-transparent p-2 hover:bg-white/10"
                        onClick={handlePrev}
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button
                        className="border rounded-full bg-transparent p-2 hover:bg-white/10"
                        onClick={handleNext}
                    >
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col w-full gap-8">
                {/* Thumbnails */}
                <div className="flex flex-wrap justify-center gap-4">
                    {members.map((m, index) => (
                        <div
                            key={index}
                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden cursor-pointer border-2 transition ${index === currentIndex
                                    ? "border-yellow-400 scale-110"
                                    : "border-transparent hover:scale-105"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <Image
                                src={m.image}
                                alt="Team Member"
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Info Bar */}
                <div className="bg-[#014421] rounded-xl p-4 flex flex-col sm:flex-row justify-evenly items-center gap-6 text-center sm:text-left">
                    <div>
                        <p className="text-gray-300 text-sm">Years of Experience</p>
                        <p className="font-semibold text-base text-white">
                            {member.experience}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-sm">Location</p>
                        <p className="font-semibold text-base text-white">
                            {member.location}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-sm">Email address</p>
                        <p className="font-semibold text-base text-white break-words">
                            {member.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
