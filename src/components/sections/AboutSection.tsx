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
            img: "/g1_house.jpg",
            url: "https://example.com/one",
            height: 300,
        },
        {
            id: "2",
            img: "/apartment.jpg",
            url: "https://example.com/two",
            height: 130,
        },
        {
            id: "3",
            img: "/penthouse_1.webp",
            url: "https://example.com/three",
            height: 180,
        },
        {
            id: "4",
            img: "/small_villa.webp",
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
        <div className="my-5 text-black mt-40">

            <div className="border-[1px] border-gray-200  my-5 mx-10 p-2  rounded-2xl gap-10 shadow-lg">
                <div className="flex justify-between items-center gap-20 p-5">
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

                    <p className="">
                        At, we believe finding the perfect property should be more than just a
                        At, we believe finding the perfect property should be more than just a
                        At, we believe finding the perfect property should be more than just a
                        At, we believe finding the perfect property should be more than just a
                        transaction—it should be an experience. With years of expertise in the real estate
                        industry, our dedicated team helps clients buy, sell, and rent properties with
                        confidence and ease. </p>
                    
                </div>

                <div className="flex justify-between my-5 mx-10 items-center p-5 rounded-2xl gap-20">
                    <div>
                        <ul>
                            <li>Integrity At, we believe finding the perfect property</li>
                            <li>Customer First At, we believe finding the perfect property</li>
                            <li>Innovation At, we believe finding the perfect property</li>
                            <li>Expertise At, we believe finding the perfect property</li>
                            <li>Commitment At, we believe finding the perfect property</li>
                        </ul>
                    </div>
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
                    <div>
                        <ul>
                            <li>Integrity Integrity</li>
                            <li>Customer First Integrity</li>
                            <li>Innovation Integrity</li>
                            <li>Expertise Integrity</li>
                            <li>Commitment Integrity</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className=" flex justify-evenly items-center my-10 ">
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