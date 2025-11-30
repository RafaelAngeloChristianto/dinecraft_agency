import React from 'react'
import NavBar from '../components/NavBar'
import cafe from "../assets/cafe.jpg"
import { motion } from "framer-motion"
import Footer from '../components/Footer'

export const PricingPage: React.FC = () => {
    return (
        <>
            <NavBar />

            <section className="w-full min-h-screen bg-[#EFE8D8] py-20 px-6 flex justify-center mt-[50px]">
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center items-start lg:items-center">
                        <motion.img
                            src={cafe}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="
                                rounded-3xl 
                                shadow-2xl 
                                object-cover 
                                h-[600px] 
                                w-full 
                                max-w-[470px]
                                border-[6px]
                                border-[#D5C1A5]
                            "
                        />
                    </div>

                    {/* RIGHT PRICING CARDS */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                        <h2 className="text-5xl font-bold text-[#4A2F23] mb-4 tracking-wide">
                            Our Pricing
                        </h2>

                        <p className="text-[#6D4B3A] mb-12 text-lg max-w-lg opacity-70">
                            Choose a plan that fits your cafe or restaurant. Beautiful design, fast delivery.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 w-full max-w-md">

                            {/* Basic Plan */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#F7F2E7] border border-[#D5C1A5] rounded-2xl shadow-lg p-8 text-center lg:text-left"
                            >
                                <h3 className="text-2xl font-semibold text-[#4A2F23] mb-3">Basic</h3>
                                <p className="text-4xl font-bold text-[#4A2F23] mb-6">Rp 99.000</p>
                                <ul className="text-[#4A2F23] space-y-3 mb-6">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>1 Website Page</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>Simple Design</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>Basic SEO</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>1-2 days of work</span>
                                    </li>
                                </ul>
                                <button className="bg-[#4A2F23] text-white px-6 py-2 rounded-xl hover:bg-[#3C241A] transition shadow-md">
                                    Choose Plan
                                </button>
                            </motion.div>

                            {/* Standard Plan */}
                            <motion.div
                                whileHover={{ scale: 1.06 }}
                                className="bg-[#F1E4D3] border-4 border-[#8B5E3C] rounded-2xl shadow-xl p-10 text-center lg:text-left relative scale-105"
                            >
                                <span className="absolute -top-4 bg-[#8B5E3C] text-white px-4 py-1 rounded-full text-sm shadow-md">
                                    MOST POPULAR
                                </span>

                                <h3 className="text-3xl font-semibold text-[#4A2F23] mb-4">Standard</h3>
                                <p className="text-5xl font-bold text-[#4A2F23] mb-6">Rp 199.000</p>

                                <ul className="text-[#4A2F23] space-y-3 mb-6">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>3-5 Website Pages</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>Modern Design</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>SEO Optimization</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>Fast Hosting</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>3-4 days of work</span>
                                    </li>
                                </ul>

                                <button className="bg-[#4A2F23] text-white px-7 py-3 rounded-xl hover:bg-[#3C241A] transition shadow-md">
                                    Choose Plan
                                </button>
                            </motion.div>

                            {/* Premium Plan */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#F7F2E7] border border-[#D5C1A5] rounded-2xl shadow-lg p-8 text-center lg:text-left"
                            >
                                <h3 className="text-2xl font-semibold text-[#4A2F23] mb-3">Premium</h3>
                                <p className="text-4xl font-bold text-[#4A2F23] mb-6">Rp 499.000</p>

                                <ul className="text-[#4A2F23] space-y-3 mb-6">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>Unlimited Pages</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>Custom UI Design</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>Full SEO + Analytics</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>Priority Support</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[#4A2F23] rounded-full flex-shrink-0"></span>
                                        <span>~7 days of work</span>
                                    </li>
                                </ul>

                                <button className="bg-[#4A2F23] text-white px-6 py-2 rounded-xl hover:bg-[#3C241A] transition shadow-md">
                                    Choose Plan
                                </button>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default PricingPage;