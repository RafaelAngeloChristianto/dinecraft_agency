import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const NavBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const menuItems = [
        { label: "Home", link: "/" },
        { label: "Pricing", link: "/pricing" },
        { label: "Policies", link: "/policies" },
        { label: "Contact", link: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-white shadow-sm"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
                {/* Logo + Brand */}
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="w-[110px] h-auto"
                            src={logo}
                            alt="DineCraft logo"
                        />
                        <div>
                            <h1 className="font-Nunito text-2xl font-extrabold tracking-wide text-[#4A2F23] group-hover:text-[#8B5E3C] transition-colors">
                                DineCraft
                            </h1>
                            <p className="text-xs text-[#8B5E3C] font-medium">
                                Website Agency
                            </p>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-10">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.link;
                        return (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link
                                    className={`relative text-base font-semibold transition-all tracking-wide group ${isActive
                                            ? "text-[#8B5E3C]"
                                            : "text-[#4A2F23] hover:text-[#8B5E3C]"
                                        }`}
                                    to={item.link}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#8B5E3C] transition-all duration-300 ${isActive
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>

                {/* CTA Desktop Button */}
                <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/6281319727350?text=Hello,%20I%20want%20a%20website%20like..."
                    className="hidden lg:block bg-gradient-to-r from-[#8B5E3C] to-[#A06B45] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all tracking-wide"
                >
                    Get a Website
                </motion.a>

                {/* Mobile Menu Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="lg:hidden text-[#4A2F23] p-2 hover:bg-[#F7F2E7] rounded-lg transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white/98 backdrop-blur-md shadow-xl border-t border-[#D5C1A5] overflow-hidden"
                    >
                        <ul className="flex flex-col gap-2 py-6 px-6">
                            {menuItems.map((item, index) => {
                                const isActive = location.pathname === item.link;
                                return (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={item.link}
                                            className={`block text-base font-semibold py-3 px-4 rounded-xl transition-all tracking-wide ${isActive
                                                    ? "bg-[#8B5E3C] text-white"
                                                    : "text-[#4A2F23] hover:bg-[#F7F2E7] hover:text-[#8B5E3C]"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="mt-4"
                            >
                                <a
                                    href="https://wa.me/6281319727350?text=Hello,%20I%20want%20a%20website%20like..."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block bg-gradient-to-r from-[#8B5E3C] to-[#A06B45] text-white w-full py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all tracking-wide text-center"
                                >
                                    Get a Website
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavBar;