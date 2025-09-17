export const ContactUsSection = () => {
    return (
        <div className="text-black mx-10 my-5 p-5 border-2 border-gray-100 rounded-2xl">
            <div className="flex justify-evenly gap-10">
                <div className="flex flex-col gap-4 w-1/3">
                    <h2 className="font-bold text-2xl">
                        Reach out
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam itaque accusamus? Doloribus repudiandae nihil perspiciatis dolore quidem illum repellendus voluptatibus itaque aperiam, nostrum tempore. Ratione repellat perspiciatis velit voluptas.</p>
                    <ul className="pl-5">
                        <li><span className="inline-block ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                        </span> info@example.com</li>
                        <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                        <li>123 Main St, Anytown, USA</li>

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

