export const Header = () => {
    return (
        <div className="flex justify-between items-center my-3 mx-4">
            <div>LOGO</div>
            <div className="bg-white/20 px-6 py-2 rounded-3xl">
                <ul className="flex justify-between gap-8 text-sm">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Property List</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <button className="bg-black rounded-3xl px-5 py-[5px]">Sign Up</button>
            </div>
        </div>
    )
}