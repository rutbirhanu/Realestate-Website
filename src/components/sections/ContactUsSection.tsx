import { FaPhoneAlt } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export const ContactUsSection = () => {
    return (
        <div className="text-black mx-10 my-5 p-5 border-2 border-gray-100 rounded-2xl">
            <div className="flex justify-evenly gap-10">
                <div className="flex flex-col gap-4 w-1/3">
                    <h2 className="font-bold text-2xl">
                        Reach out
                    </h2>
                    <p>
                        Whether you’re looking to buy, sell, or rent a property, we’re here to guide you every step of the way.
                        Reach out today and let’s make your real estate journey smooth and successful.

                    </p>
                    <ul className="pl-5 pt-5">
                        <li className="flex gap-5 items-center"><span className="inline-block ">
                            <MdEmail />
                        </span> info@example.com</li>
                        <li className="flex gap-5 items-center py-2"><span>
                            <FaPhoneAlt />
                        </span>
                            +1 (234) 567-89</li>
                        <li className="flex gap-5 items-center">
                            <span>
                                <FaMapLocationDot />
                            </span>
                            123 Main St, Anytown, USA</li>
                    </ul>
                </div>

                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-5 ">
                    <form action="">
                        <div className="flex flex-col gap-4 ">
                            <div className="flex gap-5">
                                <div className="flex flex-col">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" placeholder="First Name" className="border-b-[1px] border-gray-600 rounded-lg px-3 py-1 w-50 focus:outline-none focus:border-black" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" placeholder="Last Name" className="border-b-[1px] border-gray-600 rounded-lg px-3 py-1 w-50 focus:outline-none focus:border-black" />
                                </div>

                            </div>

                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Your Email" className="border-b-[1px] border-gray-600 rounded-lg px-3 pb-2 w-100 focus:outline-none focus:border-black" />
                            <label htmlFor="message">Message</label>
                            <textarea placeholder="Your Message" className="border-b-[1px] border-gray-600 rounded-lg px-3 py-2 w-100 h-32 focus:outline-none focus:border-black"></textarea>
                            <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-3xl mt-10 ">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

