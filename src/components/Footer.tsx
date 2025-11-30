import React from 'react'
import { Link } from 'react-router-dom'
import { SiWhatsapp, SiGmail, SiInstagram } from 'react-icons/si'

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#4A2F23] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F7E7CE] mb-4">
                            DineCraft
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            Creating beautiful websites for cafés and restaurants. Your digital presence, perfected.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://wa.me/6281319727350"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-all hover:scale-110"
                            >
                                <SiWhatsapp className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:dinecraft0@gmail.com"
                                className="w-10 h-10 bg-white/10 hover:bg-[#EA4335] rounded-lg flex items-center justify-center transition-all hover:scale-110"
                            >
                                <SiGmail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/dinecraft.agency/"
                                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] rounded-lg flex items-center justify-center transition-all hover:scale-110"
                            >
                                <SiInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#F7E7CE] mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-white/80 hover:text-[#F7E7CE] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-white/80 hover:text-[#F7E7CE] transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/policies" className="text-white/80 hover:text-[#F7E7CE] transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white/80 hover:text-[#F7E7CE] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#F7E7CE] mb-4">
                            Our Services
                        </h4>
                        <ul className="space-y-3 text-white/80">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#F7E7CE] rounded-full mt-2 flex-shrink-0"></span>
                                <span>Website Design</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#F7E7CE] rounded-full mt-2 flex-shrink-0"></span>
                                <span>SEO Optimization</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#F7E7CE] rounded-full mt-2 flex-shrink-0"></span>
                                <span>Mobile Responsive</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#F7E7CE] rounded-full mt-2 flex-shrink-0"></span>
                                <span>Ongoing Support</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#F7E7CE] mb-4">
                            Get In Touch
                        </h4>
                        <ul className="space-y-4 text-white/80">
                            <li>
                                <div className="font-semibold text-white mb-1">Phone</div>
                                <a href="tel:+6281319727350" className="hover:text-[#F7E7CE] transition-colors">
                                    +62 813-1972-7350
                                </a>
                            </li>
                            <li>
                                <div className="font-semibold text-white mb-1">Email</div>
                                <a href="mailto:dinecraft0@gmail.com" className="hover:text-[#F7E7CE] transition-colors break-all">
                                    dinecraft0@gmail.com
                                </a>
                            </li>
                            <li>
                                <div className="font-semibold text-white mb-1">Location</div>
                                <span>Jakarta, Indonesia</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4 text-sm text-white/60">
                        <p>
                            © {currentYear} DineCraft. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer