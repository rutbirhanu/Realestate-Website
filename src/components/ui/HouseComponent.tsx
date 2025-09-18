import Image from 'next/image';
import house_1 from '../../../public/house_1.webp';
import { IoBedOutline } from 'react-icons/io5';
import { FaBath } from 'react-icons/fa';

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
            <div className="w-60 h-65 rounded-bl-2xl rounded-tr-2xl overflow-hidden relative mb-2">
                <Image
                    src={house_1}
                    alt="house image"
                    fill
                    className="object-cover"
                />
            </div>
            <div className='flex px-2 gap-6 text-[13px] text-gray-500'>
                <p className='flex gap-1 flex-col'><IoBedOutline color='brown' size={14}/>{numberOfBedrooms} Bedrooms</p>
                <p className='flex gap-1 flex-col'><FaBath color='blue'/>{numberoFBathrooms} Bathrooms</p>
            </div>
            <h3 className='text-[18px] font-medium px-2'>{houseType}</h3>
            <div className='flex px-2 gap-5'>
                <p className='font-bold  text-sm'>${price}</p>
                <p className='text-[13px]'>{location}</p>
            </div>
        </div>


    )
}