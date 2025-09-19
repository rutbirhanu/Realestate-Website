import { FaXTwitter } from "react-icons/fa6"

const FooterIconCard = () => {
    return (
        <div className="rounded-xl bg-gray-100 p-5 ">
            <FaXTwitter size={30} />
        </div>
    )
}

export const Footer = () => {
    return (
        <div className="mx-10 flex flex-col gap-5 mt-30">
            <div className="bg-gray-100 flex justify-between items-center px-5 py-3">
                <p>Exited? Us Too. Let&apos;s Get Moving</p>
                <button className="bg-blue-500 rounded py-1 px-3 text-white">Schedule a call</button>
            </div>
            <div className="flex gap-5 h-40">
                <div className="bg-blue-500 w-1/4 text-white rounded-xl flex justify-center items-center">
                    LOGO
                </div>
                <div className="bg-gray-100 rounded-xl px-5 py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A amet vel ea nesciunt nobis adipisci excepturi, in quam porro consectetur, autem laudantium facere ratione repellendus inventore, itaque provident nihil ex.
                </div>
            </div>
            <div className="flex justify-center gap-10">
                <FooterIconCard />
                <FooterIconCard />
                <FooterIconCard />
                <FooterIconCard />
            </div>
        </div>
    )
}