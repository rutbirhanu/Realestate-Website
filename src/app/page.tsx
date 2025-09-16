import Image from "next/image";
import houseImage from '../../public/modern_house.webp'
import { Header } from "@/components/layout/Header";
import { ChipsComponent } from "@/components/ui/ChipsComponent";
import { InputComponent } from "@/components/ui/InputComponent";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <div >
        <Image src={houseImage} alt="modern_house" objectFit="cover" layout="fill" />
      </div>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-between">
        <Header />
        <div className="flex flex-col my-3 mx-5">
          <div className="flex justify-between gap-16 items-center mb-5 mx-4">
            <h1 className="text-5xl leading-tight">
              Find Your Dream Home with Confidence
            </h1>
            <div>
              <p>
                Discover the perfect property that matches your lifestyle. Whether buying, selling, or renting
                — we make real estate simple, fast, and stress-free.
              </p>
              <div className="flex gap-4 mt-2">
                <ChipsComponent bgColor='bg-white' type="House" />
                <ChipsComponent bgColor='bg-white' type="Apartment" />
                <ChipsComponent bgColor='bg-white' type="Flats" />
              </div>

            </div>

          </div>
          <div className="bg-white/90 rounded-3xl mx-6 text-black px-5 py-5">
            <div>
              <p className="text-xl">Find the best place</p>
              <div className="flex justify-evenly my-3">
                <InputComponent label="Looking For" placeholder="Enter type" />
                <InputComponent label="Price" placeholder="Price" />
                <InputComponent label="Location" placeholder="Location" />
                <InputComponent label="Number Of Rooms" placeholder="1 Room" />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex mt-4 items-center">
                  <p className="text-sm font-bold mr-5">Filter:</p>
                  <div className="flex gap-3">
                    <ChipsComponent type="City" bgColor="transparent" />
                    <ChipsComponent type="House" bgColor="transparent" />
                    <ChipsComponent type="Residential" bgColor="transparent" />
                    <ChipsComponent type="Apartment" bgColor="transparent" />
                  </div>
                </div>
                <button className="text-sm bg-black text-white py-2 px-5 rounded-2xl">Search Properties</button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  );
}
