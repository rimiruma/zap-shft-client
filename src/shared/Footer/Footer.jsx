import Logo from "../../components/Logo/Logo";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-14 px-6">
            <div className="max-w-5xl mx-auto text-center space-y-6">

                {/* Logo */}
                <div className="flex justify-center">
                    <Logo />
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed max-w-xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>

                {/* Menu Links */}
                <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-300 pt-4">
                    <a href="#" className="hover:text-white transition">Services</a>
                    <a href="#" className="hover:text-white transition">Coverage</a>
                    <a href="#" className="hover:text-white transition">About Us</a>
                    <a href="#" className="hover:text-white transition">Pricing</a>
                    <a href="#" className="hover:text-white transition">Blog</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                </nav>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 pt-4">
                    <a className="text-xl hover:text-white transition">
                        <FaLinkedin />
                    </a>
                    <a className="text-xl hover:text-white transition">
                        <FaTwitter />
                    </a>
                    <a className="text-xl hover:text-white transition">
                        <FaFacebook />
                    </a>
                    <a className="text-xl hover:text-white transition">
                        <FaYoutube />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500 pt-6">
                    © {new Date().getFullYear()} ZapShift — All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
