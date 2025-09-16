import Image from "next/image";
import houseImage from '../../public/modern_house.webp'
import { Header } from "@/components/Header";
import { ChipsComponent } from "@/components/ChipsComponent";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <div >
        <Image src={houseImage} alt="modern_house" objectFit="cover" layout="fill" />
      </div>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-between">
        <Header />
        <div className="flex flex-col my-5 mx-5">
          <div className="flex justify-between gap-16 items-center mb-8">
            <h1 className="text-5xl">
              🏡 Find Your Dream Home with Confidence
            </h1>
            <div>
              <p>
                Discover the perfect property that matches your lifestyle. Whether buying, selling, or renting
                — we make real estate simple, fast, and stress-free.
              </p>
              <div className="flex gap-4 mt-1">
                <ChipsComponent type="House" />
                <ChipsComponent type="Apartment" />
                <ChipsComponent type="Flats" />
              </div>

            </div>

          </div>
          <div className="bg-white/90 rounded-3xl mx-5 h-40">

          </div>

        </div>
      </div>
    </div>

  );
}
