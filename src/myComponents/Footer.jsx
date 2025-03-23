import { Facebook, Twitter, Instagram } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-card border">
            <div className="px-6 py-2 flex flex-col md:flex-row justify-between items-center">
                {/* Logo & Text */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold">Institute of Business Administration</h2>
                    <p className="text-sm text-gray-400">&copy; 2025 All rights reserved.</p>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400"><Facebook size={24} /></a>
                    <a href="#" className="hover:text-gray-400"><Twitter size={24} /></a>
                    <a href="#" className="hover:text-gray-400"><Instagram size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;