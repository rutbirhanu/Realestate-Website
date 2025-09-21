import { ReactNode } from "react"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
const FooterIconCard = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className="rounded-xl bg-gray-100 p-3 sm:p-4 hover:bg-gray-200 transition">
      {icon}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Call-to-action bar */}
      <div className="mx-4 sm:mx-10 flex flex-col sm:flex-row justify-between items-center gap-3 bg-gray-100 px-5 py-4 rounded-md">
        <p className="text-center text-sm sm:text-base font-medium">
          Excited? Us Too. Let&apos;s Get Moving
        </p>
        <button className="bg-[#014421] rounded py-2 px-4 text-white text-sm sm:text-base hover:bg-[#013a38] transition">
          Schedule a Call
        </button>
      </div>

      {/* Main footer section */}
      <div className="mx-4 sm:mx-10 flex flex-col md:flex-row gap-5 mt-8">
        {/* Brand box */}
        <div className="bg-[#014421] flex-1 md:flex-none md:w-1/4 text-white font-bold rounded-xl text-lg sm:text-xl flex justify-center items-center py-6 px-4">
          PrimeNest Realty
        </div>

        {/* Links grid */}
        <div className="bg-gray-100 border-t border-gray-300 flex-1 px-6 py-6 rounded-md">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs sm:text-sm text-gray-600">
            {/* Company Info */}
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2">
                PrimeNest Realty
              </h2>
              <p className="leading-relaxed">
                Helping you find premium houses and affordable homes with ease
                and confidence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Quick Links
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Services
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Buy Property
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Sell Property
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Rent Property
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Property Management
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 sm:gap-6 mt-8 flex-wrap">
        <FooterIconCard icon={<FaFacebook size={20} />} />
        <FooterIconCard icon={<FaXTwitter size={20} />} />
        <FooterIconCard icon={<FaLinkedinIn size={20} />} />
        <FooterIconCard icon={<FaInstagram size={20} />} />
        <FooterIconCard icon={<FaTiktok size={20} />} />
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs sm:text-sm border-t border-gray-300 pt-4 text-gray-500">
        © 2025 PrimeNest Realty. All rights reserved.
      </div>
    </footer>
  );
};