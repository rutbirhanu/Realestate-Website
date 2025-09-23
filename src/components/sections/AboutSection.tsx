'use client';
import { StatsComponent } from "../ui/StatsComponent";
import Masonry from '../ui/MasonryComponent'
import { FaRegCircleDot } from "react-icons/fa6";
import { useEffect, useState } from "react";


export default function AboutSection() {
  const items = [
    { id: "1", img: "/g1_house.jpg", url: "#", height: 300 },
    { id: "2", img: "/apartment.jpg", url: "#", height: 130 },
    { id: "3", img: "/penthouse_1.webp", url: "#", height: 180 },
    { id: "4", img: "/small_villa.webp", url: "#", height: 300 },
    { id: "5", img: "/studio.jpeg", url: "#", height: 170 },
    { id: "6", img: "/small_house_2.jpg", url: "#", height: 120 },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000); 
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayItems = isMobile ? [items[1], items[2],items[3],items[4]] : items; 

  return (
    <div className="mb-25 text-black mt-35">
      <div className="border border-gray-200 my-5 mx-10 p-5 rounded-2xl shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="lg:w-1/3 w-full h-[200px] relative">
            <Masonry
              items={displayItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={false}
            />
          </div>

          <p className="lg:w-1/2 w-full">
            We believe finding the perfect property should be more than just a
            transaction—it should be an experience. With years of expertise in
            the real estate industry, our dedicated team helps clients buy, sell,
            and rent properties with confidence and ease.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 mt-10">
          <div className="lg:w-1/6 w-full">
            <h4 className="font-semibold text-lg my-1 text-[#D4AF37]">Core Values</h4>
            <ul className="ml-3 space-y-2">
              <li className="flex gap-2 items-center"><FaRegCircleDot size={15} /> Integrity</li>
              <li className="flex gap-2 items-center"><FaRegCircleDot size={15} /> Customer</li>
              <li className="flex gap-2 items-center"><FaRegCircleDot size={15} /> Innovation</li>
              <li className="flex gap-2 items-center"><FaRegCircleDot size={15} /> Expertise</li>
              <li className="flex gap-2 items-center"><FaRegCircleDot size={15} /> Commitment</li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full h-[200px] relative">
            <Masonry
              items={displayItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={false}
            />
          </div>

          <div className="lg:w-1/2 w-full flex flex-col gap-5">
            <div>
              <h4 className="font-semibold text-lg my-1 text-[#D4AF37]">Mission</h4>
              <p>
                Our mission is simple: to make real estate transparent,
                accessible, and stress-free.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg my-1 text-[#D4AF37]">Vision</h4>
              <p>
                We aim to be the most trusted real estate partner in the region,
                known for integrity, innovation, and exceptional service that
                exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-evenly items-center gap-8 my-10">
        <StatsComponent stats="100%" achievements="Satisfaction Clients" />
        <p className="font-light text-4xl text-gray-400 hidden lg:block">|</p>
        <StatsComponent stats="2000" achievements="Property Rent" />
        <p className="font-light text-4xl text-gray-400 hidden lg:block">|</p>
        <StatsComponent stats="3000" achievements="Positive Review" />
        <p className="font-light text-4xl text-gray-400 hidden lg:block">|</p>
        <StatsComponent stats="700" achievements="Property Sell" />
      </div>
    </div>
  );
}