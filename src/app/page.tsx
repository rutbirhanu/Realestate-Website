import Image from "next/image";
import houseImage from '../../public/modern_house.webp'
import { Header } from "@/components/layout/Header";
import { ChipsComponent } from "@/components/ui/ChipsComponent";
import { InputComponent } from "@/components/ui/InputComponent";
import AboutSection from "@/components/sections/AboutSection";
import { HouseComponent } from "@/components/ui/HouseComponent";
import { QuestionCardComponent } from "@/components/ui/QuestionCardComponent";
import { ContactUsSection } from "@/components/sections/ContactUsSection";
import { Testimonialsection } from "@/components/sections/Testimonialsection";
import { Footer } from "@/components/layout/Footer";
import { OurTeamSection } from "@/components/sections/OurTeamSection";
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display(
  {
    subsets: ['latin'],
    weight: ['600'],
    style: ['italic']
  }
)

export default function Home() {
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      <div className="w-screen h-screen">
        <Image src={houseImage} alt="modern_house" objectFit="cover" layout="fill" />
      </div>
      <div className="absolute inset-0 bg-black/40 ">
        <div className="flex flex-col justify-between h-screen text-white">
          <Header />

          <div className="flex flex-col my-1 mx-5">
            {/* Hero Text Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-center mx-4 -mb-32 md:-mb-10">
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl leading-tight text-center lg:text-left ${playfair.className}`}
              >
                Find Your Dream Home with Confidence
              </h1>
              <div className="text-center lg:text-left">
                <p className="text-sm sm:text-base lg:text-lg">
                  Discover the perfect property that matches your lifestyle. Whether
                  buying, selling, or renting — we make real estate simple, fast, and
                  stress-free.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-3">
                  <ChipsComponent bgColor="bg-white" type="House" />
                  <ChipsComponent bgColor="bg-white" type="Apartment" />
                  <ChipsComponent bgColor="bg-white" type="Flats" />
                </div>
              </div>
            </div>

            {/* Search Box */}
            <div className="relative -bottom-1/3 md:-bottom-20 sm:-bottom-3 bg-white rounded-2xl mx-2 sm:mx-6 text-black px-4 sm:px-6 py-5 border border-[#014421] shadow-lg">
              <div>
                <p className="text-lg sm:text-xl font-semibold">Find the best place</p>

                {/* Inputs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                  <InputComponent label="Looking For" placeholder="Enter type" />
                  <InputComponent label="Price" placeholder="Price" />
                  <InputComponent label="Location" placeholder="Location" />
                  <InputComponent label="Number Of Rooms" placeholder="1 Room" />
                </div>


                {/* Filters + Button */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-3 items-center">
                    <p className="text-sm font-bold">Filter:</p>
                    <ChipsComponent type="City" bgColor="transparent" />
                    <ChipsComponent type="House" bgColor="transparent" />
                    <ChipsComponent type="Residential" bgColor="transparent" />
                    <ChipsComponent type="Apartment" bgColor="transparent" />
                  </div>

                  <button className="text-sm bg-[#014421] hover:bg-[#01361f] transition-colors text-white py-2 px-6 rounded-2xl">
                    Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>

          <AboutSection />
          <div id="property-list" className=" mb-5 mx-auto text-center mt-20">
            <h1 className="text-2xl font-bold text-[#014421]">Premium Houses</h1>
            <p className="mb-5 text-sm text-gray-500">“Discover handpicked luxury homes that combine elegance, comfort, and modern design — crafted to offer you the finest living experience.”</p>
          </div>

          <div className="flex justify-evenly overflow-x-scroll gap-5">
            <HouseComponent numberOfBedrooms={2} numberoFBathrooms={1} location="Bole ,Addis Abeba" price="1,038,308,0" houseType="Apartment" image="/apartment.jpg" />
            <HouseComponent numberOfBedrooms={3} numberoFBathrooms={2} location="Beverly Hills, USA" price="236,009,0" houseType="G+1 Villa House" image="/g1_house.jpg" />
            <HouseComponent numberOfBedrooms={4} numberoFBathrooms={3} location="Toronto, Canada" price="138,308,0" houseType="G+1 Villa House" image="/house_1.webp" />
            <HouseComponent numberOfBedrooms={1} numberoFBathrooms={1} location="Dubai Marina, UAE" price="98,308,0" houseType="Pent House" image="/penthouse_1.webp" />
          </div>

          <div className=" mb-5 mx-auto text-center mt-20">
            <h1 className="text-2xl font-bold text-[#014421]">Affordable Houses Options</h1>
            <p className="mb-5 text-sm text-gray-500">“Find budget-friendly homes that balance quality, comfort, and value, making your dream of owning a home within reach.”</p>
          </div>

          <div className="flex justify-evenly overflow-x-scroll gap-5">
            <HouseComponent numberOfBedrooms={6} numberoFBathrooms={4} location="Phuket, Thailand" price="902,343,0" houseType="Luxuarious G+2 House" image="/modern_house.webp" />
            <HouseComponent numberOfBedrooms={2} numberoFBathrooms={2} location="Summit ,Addis Abeba" price="138,308,0" houseType="Modern Villa House" image="/small_villa.webp" />
            <HouseComponent numberOfBedrooms={1} numberoFBathrooms={1} location="Sydney, Australia" price="98,308,0" houseType="G+2 Villa House" image="/studio.jpeg" />
            <HouseComponent numberOfBedrooms={2} numberoFBathrooms={1} location="London, UK" price="199,987,0" houseType="Town House" image="/small_house_2.jpg" />
          </div>

        </div>

        <h1 className="text-3xl font-bold text-[#014421] my-10 mx-auto text-center mt-20">Frequently Asked Questions</h1>
        <div className="w-3/4 flex flex-col mx-auto my-10">
          <QuestionCardComponent question="How can I know if a property fits my budget?"
            answer="Our agents will assess your budget and financing options, and recommend properties that best match your requirements." />

          <QuestionCardComponent question="How do I start the process of buying a home?"
            answer="You can start by browsing our listed properties, scheduling a viewing, and speaking with one of our agents who will guide you through financing and paperwork." />

          <QuestionCardComponent question="Can you help me sell my property?"
            answer="Yes, we provide professional property valuation, marketing, and negotiations to help you sell your property at the best price." />

          <QuestionCardComponent question="Is property management available for overseas owners?"
            answer="Yes, we offer full property management services, including rent collection, maintenance, and tenant support, even if you live abroad." />

          <QuestionCardComponent question="Do you offer rental property services?"
            answer="Absolutely! We have a wide selection of rental properties and also assist landlords with tenant placement and property management." />
        </div>

        <h2 className="text-center text-2xl font-bold mb-10 mt-20 text-[#014421]">
          Our Expert Team
        </h2>
        <OurTeamSection />
        <Testimonialsection />

        <h1 className="text-2xl font-bold text-[#014421] my-10 mx-auto text-center mt-20">Contact Us</h1>

        <ContactUsSection />
        <Footer />

      </div>
    </div>

  );
}
