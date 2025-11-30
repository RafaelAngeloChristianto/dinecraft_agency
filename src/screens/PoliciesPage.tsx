import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import cafe_website_img from "../assets/cafe_website_img.jpg"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export const PoliciesPage: React.FC = () => {
    const sections = [
        {
            title: "Revisions",
            content: "You will receive up to two rounds of revisions. Any further adjustments outside the included revisions may result in additional charges."
        },
        {
            title: "Delivery Time",
            content: "Project timelines vary based on complexity and how quickly required materials are provided. Delays in content submission may extend the delivery schedule."
        },
        {
            title: "Domain & Hosting",
            content: "Clients are responsible for purchasing and renewing their domain."
        },
        {
            title: "Content Requirements",
            content: "All texts, images, and necessary materials must be submitted before development begins. Missing content may delay the project."
        },
        {
            title: "Payment Terms",
            content: "A non-refundable initial deposit (50%) is required to initiate the project. The remaining balance must be paid prior to final handover or website launch."
        },
        {
            title: "Scope of Work",
            content: "Each service package covers only the listed features. Any additional requests, added features, or structural changes outside the agreed scope may incur extra fees."
        },
        {
            title: "Handover",
            content: "All final files, credentials, and website access will be released once the project is fully paid."
        },
        {
            title: "Refund Policy",
            content: "Refunds are not available once work has started or any deliverables have been provided."
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <NavBar />
            <div className="w-full min-h-screen bg-[#EFE8D8] pt-[80px] mt-[50px] pb-16 sm:pb-20 px-4 sm:px-6 flex justify-center">
                <div className="w-full max-w-6xl">
                    {/* Page Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A2F23] mb-4 tracking-wide">
                            Terms & Conditions
                        </h1>
                        <p className="text-[#6D4B3A] text-base sm:text-lg opacity-70 max-w-2xl mx-auto">
                            Please review our policies carefully before starting your project
                        </p>
                    </motion.div>

                    {/* Layout: Text Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4 sm:space-y-6"
                        >
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-[#F7F2E7] border border-[#D5C1A5] rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="w-2 h-2 bg-[#8B5E3C] rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <h2 className="text-lg sm:text-xl font-semibold text-[#4A2F23] mb-2">
                                                {section.title}
                                            </h2>
                                            <p className="text-[#6D4B3A] leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Image on the Right - Sticky */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:sticky lg:top-32"
                        >
                            <div className="relative">
                                <img
                                    src={cafe_website_img}
                                    alt="Cafe Website"
                                    className="w-full rounded-3xl shadow-2xl border-[6px] border-[#D5C1A5] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F23]/20 to-transparent rounded-3xl pointer-events-none"></div>
                            </div>

                            {/* Call to Action Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="mt-6 sm:mt-8 bg-[#8B5E3C] text-white rounded-2xl p-6 sm:p-8 shadow-xl"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to Get Started?</h3>
                                <p className="mb-6 opacity-90">
                                    Let's bring your cafe or restaurant online with a beautiful website
                                </p>
                                <button className="w-full bg-white text-[#8B5E3C] px-6 py-3 rounded-xl hover:bg-[#F7F2E7] transition font-semibold shadow-md hover:cursor-pointer">
                                    <Link to="/contact">Contact Us Today</Link>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PoliciesPage