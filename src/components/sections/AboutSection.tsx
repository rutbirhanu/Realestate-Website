import { StatsComponent } from "../ui/StatsComponent";
import g1_house from '../../../public/g1_house.jpg'
import apartment from '../../../public/apartment.jpg'
import penthouse_1 from "../../../public/penthouse_1.webp"
import small_villa from '../../../public/small_villa.webp'
import Image from "next/image";
import Masonry from '../ui/MasonryComponent'


export default function AboutSection() {

    const items = [
        {
            id: "1",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 300,
        },
        {
            id: "2",
            img: "https://picsum.photos/id/1011/600/750?grayscale",
            url: "https://example.com/two",
            height: 130,
        },
        {
            id: "3",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 180,
        },
        {
            id: "4",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 300,
        },
        {
            id: "5",
            img: "https://picsum.photos/id/1011/600/750?grayscale",
            url: "https://example.com/two",
            height: 170,
        },
        {
            id: "6",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 120,
        },
    ];

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
                {/* <Image src={g1_house} alt="g+1 house" width={200} /> */}
                <div className="w-full relative h-[160px]">
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                </div>

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
               <div className="w-full relative h-[160px]">
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                </div>

            </div>

        </div>

    )
}