import React from "react";
import { motion } from "framer-motion";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const ContactPage: React.FC = () => {
    const whatsappHref =
        "https://wa.me/6281319727350?text=Hello,%20I%20want%20a%20website%20like...";
    const email = "dinecraft0@gmail.com";
    const mailtoHref = "https://mail.google.com/mail/?view=cm&fs=1&to=dinecraft0@gmail.com&su=Website%20Inquiry";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-[#EFE8D8] flex items-center justify-center p-4 sm:p-6 pt-[100px] sm:pt-[120px]">
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full max-w-5xl"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A2F23] mb-4 tracking-wide">
                            Let's Work Together
                        </h1>
                        <p className="text-[#6D4B3A] text-base sm:text-lg max-w-2xl mx-auto opacity-70">
                            Ready to bring your cafe or restaurant online? We're here to help you create a stunning digital presence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Contact Cards */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* WhatsApp Card */}
                            <motion.a
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                href={whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="block bg-[#F7F2E7] border-2 border-[#D5C1A5] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-3 sm:gap-5">
                                    <div className="bg-[#25D366] p-4 rounded-xl group-hover:scale-110 transition-transform">
                                        <SiWhatsapp className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#4A2F23] mb-2">
                                            WhatsApp
                                        </h3>
                                        <p className="text-[#6D4B3A] mb-3">
                                            Quick responses and easy communication
                                        </p>
                                        <p className="text-[#4A2F23] font-semibold">
                                            +62 813-1972-7350
                                        </p>
                                        <span className="inline-block mt-4 text-[#8B5E3C] font-medium group-hover:translate-x-2 transition-transform">
                                            Chat with us →
                                        </span>
                                    </div>
                                </div>
                            </motion.a>

                            {/* Email Card */}
                            <motion.a
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                href={mailtoHref}
                                target="_blank"
                                rel="noreferrer"
                                className="block bg-[#F7F2E7] border-2 border-[#D5C1A5] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-3 sm:gap-5">
                                    <div className="bg-[#EA4335] p-4 rounded-xl group-hover:scale-110 transition-transform">
                                        <SiGmail className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#4A2F23] mb-2">
                                            Email
                                        </h3>
                                        <p className="text-[#6D4B3A] mb-3">
                                            For detailed project inquiries
                                        </p>
                                        <p className="text-[#4A2F23] font-semibold break-all">
                                            {email}
                                        </p>
                                        <span className="inline-block mt-4 text-[#8B5E3C] font-medium group-hover:translate-x-2 transition-transform">
                                            Send an email →
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        </div>

                        {/* Info Section */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* Why Choose Us */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-[#8B5E3C] text-white rounded-2xl shadow-xl p-6 sm:p-8"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose Us?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                                        <p className="leading-relaxed">
                                            Beautiful, modern designs tailored for cafes and restaurants
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                                        <p className="leading-relaxed">
                                            Fast delivery and responsive communication
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                                        <p className="leading-relaxed">
                                            SEO optimized to help customers find you online
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                                        <p className="leading-relaxed">
                                            Affordable pricing with transparent terms
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Business Hours */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-[#F7F2E7] border-2 border-[#D5C1A5] rounded-2xl shadow-lg p-6 sm:p-8"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold text-[#4A2F23] mb-4">
                                    Response Time
                                </h3>
                                <p className="text-[#6D4B3A] leading-relaxed mb-4">
                                    We typically respond within 24 hours on business days.
                                </p>
                                <div className="space-y-2 text-[#4A2F23]">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Monday - Friday</span>
                                        <span>9 AM - 6 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Weekend</span>
                                        <span>Limited availability</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* CTA */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-gradient-to-br from-[#A06B45] to-[#8B5E3C] text-white rounded-2xl shadow-xl p-6 sm:p-8 text-center"
                            >
                                <h3 className="text-lg sm:text-xl font-bold mb-2">
                                    Have Questions?
                                </h3>
                                <p className="opacity-90 mb-4">
                                    Don't hesitate to reach out. We're happy to discuss your project!
                                </p>
                                <div className="text-sm opacity-75">
                                    Based in Jakarta, Indonesia
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;