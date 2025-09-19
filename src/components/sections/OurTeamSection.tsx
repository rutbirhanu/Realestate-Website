import Image from "next/image"

export const OurTeamSection = () => {
    return (
        <div className="mb-20 mx-10 flex gap-20 justify-center relative">
            <div className="bg-yellow-200 h-70 w-1/5 rounded-xl p-4">
                hi
            </div>
            <div className="flex flex-col justify-between">

                <div className="flex mx-10 gap-10 mt-5">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <Image
                            src="/g1_house.jpg"
                            alt="Team Member"
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="bg-yellow-200 h-25 rounded-xl p-4">
                    hi
                </div>
            </div>
            <div className="absolute left-1/4 bottom-10 w-1/6 h-1 bg-yellow-200"></div>
        </div>
    )
}