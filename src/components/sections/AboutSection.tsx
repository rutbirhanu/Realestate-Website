import { StatsComponent } from "../ui/StatsComponent";

export default function AboutSection() {
    return (
        <div className="my-5">
            <div className="text-black flex justify-evenly items-center my-10">
                <StatsComponent stats="100%" achievements="Satisfaction Clients" />
                <p className="font-light text-4xl text-gray-400">|</p>
                <StatsComponent stats="2000" achievements="Property Rent" />
                <p className="font-light text-4xl text-gray-400">|</p>
                <StatsComponent stats="3000" achievements="Positive Review" />
                <p className="font-light text-4xl text-gray-400">|</p>
                <StatsComponent stats="700" achievements="Property Sell" />
            </div>
        </div>

    )
}