import { Facebook, Twitter, Instagram, Phone, Mail, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
    const { pathname } = useLocation();
    const [footerStatus, setFooterStatus] = useState(pathname.includes("feeds"))
    useEffect(() => {
        setFooterStatus(pathname.includes("feeds"))
    }, [pathname]);

    return (
        <>
            <footer className={`bg-card border ${footerStatus ? "hidden" : "block"} `}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto px-4 py-16">

                    {/* Address and logo */}
                    <div>
                        <div className="flex items-center gap-5">
                            <img src="https://i.ibb.co.com/gLx0wMNK/logo-common.jpg" alt="" className="rounded-full w-24 lg:w-20" />
                            <div>
                                <h6 className="text-xl lg:text-lg tracking-[1.5px] lg:tracking-wide">Institute of Business</h6>
                                <h3 className="font-bold text-3xl lg:text-2xl">Administration</h3>
                                <h6 className="text-xl lg:text-lg tracking-[1px] lg:tracking-normal">University of Rajshahi</h6>
                            </div>
                        </div>
                        <h5 className="text-2xl font-bold mb-5 mt-5">Address</h5>
                        <p>Institute of Business Administration, University of Rajshahi, Motihar, Rajshahi</p>
                        <p className="flex items-center gap-2"><Phone />+880721751508</p>
                        <p className="flex items-center gap-2"><Mail /> ibaru.ac.bd@gmail.com</p>
                    </div>

                    <div>
                        <h5 className="text-2xl font-bold mb-5">Quick Links</h5>
                        <ul className="grid gap-4">
                            <Link to="http://www.ru.ac.bd/" className="hover:text-gray-400"><li>University of Rajshahi</li></Link>
                            <Link to="http://www.ugc.gov.bd/" className="hover:text-gray-400"><li>UGC, Bangladesh</li></Link>
                            <Link to="https://moedu.gov.bd/" className="hover:text-gray-400"><li>Ministry of Education</li></Link>
                            <Link to="https://bangladesh.gov.bd/index.php" className="hover:text-gray-400"><li>Bangladesh National Portal</li></Link>
                            <Link to="https://www.wikipedia.org/" className="hover:text-gray-400"><li>Wikipedia</li></Link>

                        </ul>
                    </div>
                    <div>
                        <h5 className="text-2xl font-bold mb-5">Internal Links</h5>
                        <ul className="grid gap-4">
                            <Link to="/admission-bba" className="hover:text-gray-400"><li>Admission of Undergraduate</li></Link>
                            <Link to="http://library.ru.ac.bd/" className="hover:text-gray-400"><li>Central Library, RU</li></Link>
                            <Link to="https://www.ru.ac.bd/ictcenter/" className="hover:text-gray-400"><li>ICT Center</li></Link>
                            <Link to="https://acsc.ru.ac.bd/idcard/" className="hover:text-gray-400"><li>Digital ID Card</li></Link>
                            <Link to="https://www.wikipedia.org/" className="hover:text-gray-400"><li>Wikipedia</li></Link>

                        </ul>
                    </div>

                    {/* <div>
                        <h5 className="text-2xl font-bold mb-5">Follow Us</h5>

                    </div> */}
                </div>
            </footer>

            <footer className={`bg-muted border ${footerStatus ? "hidden" : "block"}`}>
                <div className="px-6 py-2 flex flex-col md:flex-row justify-between items-center">
                    {/* Logo & Text */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-xl font-semibold">Institute of Business Administration</h2>
                        <p className="text-sm text-gray-400">&copy; 2025 All rights reserved.</p>
                    </div>
                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/IBA.RajshahiUniversity" className="hover:text-gray-400"><Facebook size={24} /></a>
                        <a href="https://x.com/ibauor" className="hover:text-gray-400"><Twitter size={24} /></a>
                        <a href="https://www.iba-ru.ac.bd/" className="hover:text-gray-400"><Globe size={24} /></a>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;