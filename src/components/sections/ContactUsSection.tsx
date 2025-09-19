import { FaPhoneAlt } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export const ContactUsSection = () => {
    return (
        <div className="text-black mx-10 md:mx-10 my-5 p-5 border-2 border-gray-100 rounded-2xl">
            <div className="flex flex-col md:flex-row justify-evenly gap-10">
                {/* Left Side - Contact Info */}
                <div className="flex flex-col gap-4 md:w-1/3">
                    <h2 className="font-bold text-2xl">Reach out</h2>
                    <p>
                        Whether you’re looking to buy, sell, or rent a property, we’re here to guide you
                        every step of the way. Reach out today and let’s make your real estate journey
                        smooth and successful.
                    </p>
                    <ul className="pt-5 space-y-3">
                        <li className="flex gap-3 items-center">
                            <MdEmail className="text-yellow-500" /> info@example.com
                        </li>
                        <li className="flex gap-3 items-center">
                            <FaPhoneAlt className="text-yellow-500" /> +1 (234) 567-89
                        </li>
                        <li className="flex gap-3 items-center">
                            <FaMapLocationDot className="text-yellow-500" /> 123 Main St, Anytown, USA
                        </li>
                    </ul>
                </div>

                {/* Right Side - Form */}
                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-5 md:w-1/2">
                    <form>
                        <div className="flex flex-col gap-4">
                            {/* First + Last Name */}
                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="flex flex-col w-full sm:w-1/2">
                                    <label htmlFor="first-name">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="border-b border-gray-600 rounded-lg px-3 py-1 w-full focus:outline-none focus:border-black"
                                    />
                                </div>
                                <div className="flex flex-col w-full sm:w-1/2">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="border-b border-gray-600 rounded-lg px-3 py-1 w-full focus:outline-none focus:border-black"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border-b border-gray-600 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-black"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    placeholder="Your Message"
                                    className="border-b border-gray-600 rounded-lg px-3 py-2 w-full h-32 focus:outline-none focus:border-black"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="bg-yellow-500 text-white px-4 py-2 rounded-3xl mt-6 w-full sm:w-auto"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

