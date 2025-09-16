import { StatsComponent } from "../ui/StatsComponent";
import g1_house from '../../../public/g1_house.jpg'
import Image from "next/image";

export default function AboutSection() {
    return (
        <div className="my-5 text-black">
            <div className=" flex justify-evenly items-center my-10">
                <StatsComponent stats="100%" achievements="Satisfaction Clients" />
                <p className="font-light text-4xl text-gray-400">|</p>
                <StatsComponent stats="2000" achievements="Property Rent" />
                <p className="font-light text-4xl text-gray-400">|</p>
                <StatsComponent stats="3000" achievements="Positive Review" />
                <p className="font-light text-4xl text-gray-400">|</p>
                <StatsComponent stats="700" achievements="Property Sell" />
            </div>

            <div className="border-[1px] border-gray-200 flex justify-between my-5 mx-10 items-center p-5 rounded-2xl gap-20 shadow-lg">
                <Image src={g1_house} alt="g+1 house" width={200} />
                <p>
                    Do you want me to show you the best way to make this responsive (so the house image adjusts nicely across screen sizes)?
                    Do you want me to show you the best way to make this responsive (so the house image adjusts nicely across screen sizes)?
                    Do you want me to show you the best way to make this responsive (so the house image adjusts nicely across screen sizes)?
                </p>
            </div>

            <div className="border-[1px] border-gray-200 flex justify-between my-5 mx-10 items-center p-5 rounded-2xl gap-20 shadow-lg">
                <p>
                    Do you want me to show you the best way to make this responsive (so the house image adjusts nicely across screen sizes)?
                    Do you want me to show you the best way to make this responsive (so the house image adjusts nicely across screen sizes)?
                    Do you want me to show you the best way to make this responsive (so the house image adjusts nicely across screen sizes)?
                </p>
                <Image src={g1_house} alt="g+1 house" width={200} />

            </div>
        </div>

    )
}