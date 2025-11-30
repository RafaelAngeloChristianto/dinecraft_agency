import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import cafe_img from "../assets/cafe_img.avif";
import home_page_img from "../assets/home_page_img.jpg";
import home_page_img2 from "../assets/home_page_img_2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export const HomePage: React.FC = () => {
    const features = [
        {
            title: "Modern Design",
            description: "Beautiful, responsive websites that look stunning on any device",
            icon: "🎨"
        },
        {
            title: "Fast Delivery",
            description: "Get your website live in days, not weeks or months",
            icon: "⚡"
        },
        {
            title: "SEO Optimized",
            description: "Help customers find you online with built-in search optimization",
            icon: "🔍"
        },
        {
            title: "Affordable Pricing",
            description: "Professional quality without breaking the bank",
            icon: "💰"
        },
    ];

    const process = [
        {
            step: "01",
            title: "Consultation",
            description: "Tell us about your cafe and vision",
        },
        {
            step: "02",
            title: "Design",
            description: "We create a custom design for your brand",
        },
        {
            step: "03",
            title: "Development",
            description: "Your website comes to life with modern tech",
        },
        {
            step: "04",
            title: "Launch",
            description: "Go live and start attracting customers",
        },
    ];

    return (
        <>
            <NavBar />

            {/* Hero Section */}
            <div
                className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${cafe_img})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center text-white px-6 max-w-5xl"
                >

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-2xl mb-8 leading-tight">
                        Beautiful Websites for
                        <span className="block bg-gradient-to-r from-[#F7E7CE] to-[#D4AF7A] bg-clip-text text-transparent mt-2">
                            Cafés & Restaurants
                        </span>
                    </h1>

                    <p className="mt-8 text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Turn your passion into a stunning online experience. Professional web design tailored for food businesses.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
                        <Link to="/pricing">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white text-[#4A2F23] font-bold rounded-full shadow-2xl hover:bg-[#F7E7CE] transition-all text-lg"
                            >
                                View Pricing
                            </motion.button>
                        </Link>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-transparent backdrop-blur-sm border-2 border-white text-white font-bold rounded-full transition-all text-lg"
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>



            {/* Why Choose Us Section */}
            <section className="bg-[#EFE8D8] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Our Services
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#4A2F23] mb-6">
                            Why Choose Us?
                        </h2>
                        <p className="text-[#6D4B3A] text-xl max-w-3xl mx-auto leading-relaxed">
                            We specialize in creating warm, inviting digital experiences that bring your café or restaurant to life online
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                                className="bg-white border border-[#D5C1A5] rounded-3xl shadow-lg p-10 text-center hover:shadow-2xl transition-all group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#8B5E3C] to-[#A06B45] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                        <span className="text-white text-3xl font-bold">{index + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#4A2F23] mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#6D4B3A] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase Section 1 - Stand Out Online */}
            <section className="bg-white py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wider mb-4 block">
                                Perfect for Your Business
                            </span>
                            <h2 className="text-5xl md:text-6xl font-bold text-[#4A2F23] mb-6 leading-tight">
                                Stand Out Online
                            </h2>
                            <p className="text-[#6D4B3A] text-xl leading-relaxed mb-8">
                                In today's digital world, your website is often the first impression customers have of your business. We create stunning, user-friendly websites that capture the essence of your café or restaurant.
                            </p>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4 bg-[#F7F2E7] p-5 rounded-xl border border-[#D5C1A5]">
                                    <div className="w-3 h-3 bg-[#8B5E3C] rounded-full mt-1.5 flex-shrink-0"></div>
                                    <p className="text-[#4A2F23] text-lg">Showcase your menu and atmosphere beautifully</p>
                                </div>
                                <div className="flex items-start gap-4 bg-[#F7F2E7] p-5 rounded-xl border border-[#D5C1A5]">
                                    <div className="w-3 h-3 bg-[#8B5E3C] rounded-full mt-1.5 flex-shrink-0"></div>
                                    <p className="text-[#4A2F23] text-lg">Make it easy for customers to find and contact you</p>
                                </div>
                                <div className="flex items-start gap-4 bg-[#F7F2E7] p-5 rounded-xl border border-[#D5C1A5]">
                                    <div className="w-3 h-3 bg-[#8B5E3C] rounded-full mt-1.5 flex-shrink-0"></div>
                                    <p className="text-[#4A2F23] text-lg">Build credibility and trust with a professional presence</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative">
                                <img
                                    src={home_page_img2}
                                    alt="Beautiful cafe interior"
                                    className="rounded-3xl shadow-2xl border-8 border-[#D5C1A5] w-full object-cover h-[550px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F23]/20 to-transparent rounded-3xl"></div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#8B5E3C] to-[#A06B45] text-white p-8 rounded-2xl shadow-2xl max-w-sm"
                            >
                                <p className="font-bold text-2xl mb-2">Professional Quality</p>
                                <p className="text-sm opacity-90 leading-relaxed">Designs that convert visitors into customers</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Showcase Section 2 - Customer Experience */}
            <section className="bg-[#EFE8D8] py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 relative"
                        >
                            <div className="relative">
                                <img
                                    src={home_page_img}
                                    alt="Customer enjoying a drink"
                                    className="rounded-3xl shadow-2xl border-8 border-[#D5C1A5] w-full object-cover h-[550px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F23]/20 to-transparent rounded-3xl"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wider mb-4 block">
                                Create Memorable Experiences
                            </span>
                            <h2 className="text-5xl md:text-6xl font-bold text-[#4A2F23] mb-6 leading-tight">
                                Attract More Customers
                            </h2>
                            <p className="text-[#6D4B3A] text-xl leading-relaxed mb-8">
                                Your website should do more than just look good—it should bring customers through your doors. We design websites that showcase what makes your café special.
                            </p>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[#D5C1A5] shadow-md">
                                    <div className="w-3 h-3 bg-[#8B5E3C] rounded-full mt-1.5 flex-shrink-0"></div>
                                    <p className="text-[#4A2F23] text-lg">Highlight your signature drinks and dishes</p>
                                </div>
                                <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[#D5C1A5] shadow-md">
                                    <div className="w-3 h-3 bg-[#8B5E3C] rounded-full mt-1.5 flex-shrink-0"></div>
                                    <p className="text-[#4A2F23] text-lg">Share your story and build emotional connections</p>
                                </div>
                                <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[#D5C1A5] shadow-md">
                                    <div className="w-3 h-3 bg-[#8B5E3C] rounded-full mt-1.5 flex-shrink-0"></div>
                                    <p className="text-[#4A2F23] text-lg">Create a visual experience that entices visitors</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Our Process
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#4A2F23] mb-6">
                            How It Works
                        </h2>
                        <p className="text-[#6D4B3A] text-xl max-w-3xl mx-auto leading-relaxed">
                            Simple, straightforward process from concept to launch
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative group"
                            >
                                <div className="bg-[#F7F2E7] border-2 border-[#D5C1A5] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 h-full">
                                    <div className="relative">
                                        <div className="text-7xl font-bold text-[#8B5E3C] opacity-10 mb-4 group-hover:opacity-20 transition-opacity">
                                            {item.step}
                                        </div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#8B5E3C] to-[#A06B45] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                            <span className="text-white text-2xl font-bold">{index + 1}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#4A2F23] mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#6D4B3A] leading-relaxed text-lg">{item.description}</p>
                                    </div>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-[#D5C1A5] to-transparent"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-br from-[#4A2F23] via-[#6D4B3A] to-[#8B5E3C] py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Ready to Go Digital?
                        </h2>
                        <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                            Let's create something beautiful together. Your dream website is just a conversation away.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/pricing">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 bg-white text-[#4A2F23] font-bold rounded-full shadow-2xl hover:bg-[#F7E7CE] transition-all text-lg"
                                >
                                    See Pricing Plans
                                </motion.button>
                            </Link>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold rounded-full transition-all text-lg"
                                >
                                    Contact Us Today
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default HomePage;