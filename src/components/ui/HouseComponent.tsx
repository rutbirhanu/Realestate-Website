import Image from 'next/image';
import house_1 from '../../../public/house_1.webp';

type HouseComponentType = {
    numberOfBedrooms: number,
    numberoFBathrooms: number,
    location: string,
    price: string,
    houseType: string,
    image: string
}

export const HouseComponent = ({ numberoFBathrooms, numberOfBedrooms, price, houseType, image, location }: HouseComponentType) => {
    return (
        <div className='px-1 py-1 text-black flex flex-col justify-between gap-[5px]'>
            <div className="w-65 h-70 rounded-2xl overflow-hidden relative">
                <Image
                    src={house_1}
                    alt="house image"
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>
            <div className='flex px-2 gap-6 text-[13px] text-gray-500'>
                <p>{numberOfBedrooms} Bedrooms</p>
                <p>{numberoFBathrooms} Bathrooms</p>
            </div>
            <h3 className='text-[18px] font-medium px-2'>{houseType}</h3>
            <div className='flex px-2 gap-5'>
                <p className='font-bold  text-sm'>${price}</p>
                <p className='text-[13px]'>{location}</p>
            </div>
        </div>


    )
}