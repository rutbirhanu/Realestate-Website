import Image from "next/image";
import houseImage from '../../public/modern_house.webp'
import { Header } from "@/components/layout/Header";
import { ChipsComponent } from "@/components/ui/ChipsComponent";
import { InputComponent } from "@/components/ui/InputComponent";
import AboutSection from "@/components/sections/AboutSection";
import { HouseComponent } from "@/components/ui/HouseComponent";
import { QuestionCardComponent } from "@/components/ui/QuestionCardComponent";
import { ContactUsSection } from "@/components/sections/ContactUsSection";

export default function Home() {
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      <div className="w-screen h-screen">
        <Image src={houseImage} alt="modern_house" objectFit="cover" layout="fill" />
      </div>
      <div className="absolute inset-0 bg-black/40 text-white">
        <div className="flex flex-col justify-between h-screen">
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

        <div>
          <AboutSection />
          <div className="flex justify-evenly">
            <HouseComponent numberOfBedrooms={2} numberoFBathrooms={1} location="Bole ,Addis Abeba" price="138,308,0" houseType="G+2 Villa House" />
            <HouseComponent numberOfBedrooms={2} numberoFBathrooms={1} location="Bole ,Addis Abeba" price="138,308,0" houseType="G+2 Villa House" />
            <HouseComponent numberOfBedrooms={2} numberoFBathrooms={1} location="Bole ,Addis Abeba" price="138,308,0" houseType="G+2 Villa House" />
            <HouseComponent numberOfBedrooms={2} numberoFBathrooms={1} location="Bole ,Addis Abeba" price="138,308,0" houseType="G+2 Villa House" />
          </div>

        </div>

        <div className="w-3/4 flex flex-col mx-auto my-10">
          <QuestionCardComponent question="What is the best way to find a property?" answer="The best way to find a property is to work with a real estate agent who knows the local market." />
          <QuestionCardComponent question="What is the best way to find a property?" answer="The best way to find a property is to work with a real estate agent who knows the local market." />
          <QuestionCardComponent question="What is the best way to find a property?" answer="The best way to find a property is to work with a real estate agent who knows the local market." />
        </div>
        <ContactUsSection/>

      </div>
    </div>

  );
}
