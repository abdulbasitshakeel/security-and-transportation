"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Car, Plane, Users, Globe, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"
import BasicMap from "@/components/ui/BasicMap";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        <div className="min-h-screen bg-slate-50">
            <header className="bg-black text-white sticky top-0 z-50 border-b border-gray-800 shadow-2xl">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center space-x-4 cursor-pointer">
                            <div className="relative">
                                <Image src="/images/mj-logo.png" alt="MJ Close Security & Transportation" width={80} height={80} className="object-contain" priority />
                                <div className="absolute -inset-2 bg-white/5 rounded-lg blur-sm -z-10"></div>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-2xl font-bold tracking-tight">Close Protection & Logistics</h1>
                                <p className="text-sm text-gray-300 font-medium">Elite Security Solutions Worldwide</p>
                            </div>
                        </a>
                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link href="#services" className="text-white hover:text-gray-300 transition-colors font-medium text-lg relative group">
                                Services
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                            </Link>
                            <Link href="#global" className="text-white hover:text-gray-300 transition-colors font-medium text-lg relative group">
                                Global Reach
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                            </Link>
                            <Link href="#contact" className="text-white hover:text-gray-300 transition-colors font-medium text-lg relative group">
                                Contact
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                            </Link>
                            <div className="h-8 w-px bg-gray-600 mx-4"></div>
                        <a
                            href="https://wa.me/+447551885885" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                            size="lg"
                            className="w-full bg-white text-black text-md hover:bg-gray-200 font-bold px-6 py-2 transition-all hover:scale-105 shadow-lg flex items-center justify-center"
                            >
                            <FaWhatsapp className="h-4 w-4" />
                            WhatsApp
                            </Button>
                        </a>
                        </nav>
                        <button className="lg:hidden text-white p-2 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div className={`lg:hidden bg-black text-white px-4 pt-2 pb-4 transition-all duration-300 ease-in-out mystylemenu ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                            <Link href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-gray-300 border-b border-gray-700">Services</Link>
                            <Link href="#global" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-gray-300 border-b border-gray-700">Global Reach</Link>
                            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-gray-300 border-b border-gray-700">Contact</Link>
                            <div className="mt-4">
                            <a
                                href="https://wa.me/+447551885885" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                size="lg"
                                className="w-full bg-white text-black text-md hover:bg-gray-200 font-bold px-6 py-2 transition-all hover:scale-105 shadow-lg flex items-center justify-center"
                                >
                                <FaWhatsapp className="h-4 w-4" />
                                WhatsApp
                                </Button>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="relative text-white py-20 overflow-hidden mybgwork" style={{ paddingTop: '7rem' }}>
                <div className='overlay'></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        className="max-w-5xl mx-auto text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        {/* <div className="flex justify-center mb-10">
                            <div className="relative">
                                <Image src="/images/mj-logo.png" alt="MJ Close Security & Transportation" width={150} height={150} className="object-contain" />
                                <div className="absolute -inset-6 bg-white/10 rounded-full blur-2xl -z-10"></div>
                            </div>
                        </div> */}
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight mytextstyle">Global Leader in <span className="text-white underline decoration-4 underline-offset-8">Elite Security</span></h2>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">Specializing in VIP protection, secure logistics, and private aviation support for individuals, corporations, and governments who demand the highest standards of safety, discretion, and efficiency.</p>
                        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <span className="text-gray-300 font-medium">Elite Operatives</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <span className="text-gray-300 font-medium">5 Global Regions</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <span className="text-gray-300 font-medium">24/7 Protection</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                            <a href="#contact-form">
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 font-bold px-10 py-4 text-lg transition-all hover:scale-105 shadow-xl"
                            >
                                Get Protection Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            </a>
                            <a href="#services">
                            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg font-bold transition-all hover:scale-105">
                                View Services
                            </Button>
                            </a>
                        </div>
                        <p className="text-white font-bold text-xl tracking-wide">MOVE WITH CONFIDENCE. TRAVEL PROTECTED.</p>
                    </motion.div>
                </div>
            </section>
            <section className="py-16 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}>
                            <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
                            <div className="text-slate-600">Successful Missions</div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}>
                            <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
                            <div className="text-slate-600">Emergency Response</div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}>
                            <div className="text-3xl font-bold text-slate-900 mb-2">5</div>
                            <div className="text-slate-600">Global Regions</div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}>
                            <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
                            <div className="text-slate-600">Confidentiality</div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section id="services" className="py-24 bg-white" style={{ paddingTop: "8rem" }}>
                <div className="container mx-auto px-6">
                    <motion.div className="text-center mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        <div className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-full mb-8">
                            <Shield className="h-5 w-5" />
                            <span className="font-medium">Our Elite Services</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">Comprehensive Security<br />
                            <span className="text-gray-600">Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Tailored protection services for high-profile individuals, corporations, and governments worldwide</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {[
                    {
                    icon: Users,
                    title: "VIP Security & Close Protection",
                    description:
                        "Elite-level personal protection services for high-profile individuals, corporate executives, dignitaries, and celebrities. Our licensed close protection officers provide 24/7 safety with discretion and precision.",
                    },
                    {
                    icon: Shield,
                    title: "Armored Vehicle Transportation",
                    description:
                        "State-of-the-art armored vehicles operated by skilled drivers with security backgrounds. Engineered for resilience and comfort, perfect for high-value assets or individuals requiring elevated protection.",
                    },
                    {
                    icon: Car,
                    title: "Executive Transportation Services",
                    description:
                        "Seamless ground transportation with chauffeurs trained in defensive driving, route planning, and client confidentiality. Combining comfort with uncompromised security for business executives.",
                    },
                    {
                    icon: Plane,
                    title: "Private Jet Security Personnel",
                    description:
                        "Certified security professionals onboard private jets for international flights. Our operatives handle in-flight risks and provide full-spectrum protection from departure to destination.",
                    },
                    ].map((service, index) => (
                    <Card
                        key={index}
                        className="group border-2 border-gray-200 hover:border-black transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden"
                        >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}>
                            <CardHeader className="p-10 relative">
                                <div className="flex items-start space-x-6 mb-8">
                                    <div className="p-4 bg-black text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-2xl text-black mb-4 group-hover:text-gray-800 transition-colors">
                                        {service.title}
                                        </CardTitle>
                                    </div>
                                </div>
                                <CardDescription className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6 textstylenew">
                                {service.description}
                                </CardDescription>

                                <Button
                                variant="ghost"
                                className="text-black hover:text-gray-700 p-0 h-auto font-bold text-base sm:text-lg group/btn newstyletextbutton"
                                >
                                Learn More
                                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </CardHeader>
                        </motion.div>
                    </Card>
                    ))}
                    </div>
                </div>
            </section>
            <section id="global" className="py-24 bg-black text-white" style={{ paddingTop: "8rem" }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div className="mb-16"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}>
                            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
                                <Globe className="h-5 w-5" />
                                <span className="font-medium">Global Operations</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">
                                Global Reach
                                <br />
                                <span className="text-gray-400">Local Precision</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                                Operating across five strategic regions with rapid response capabilities and deep local knowledge
                            </p>
                        </motion.div>
                        <div className="dark:bg-black w-full myheightste mybottompad">
                            <BasicMap />
                        </div>
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-16"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            >
                            {["Jordan", "Lebanon", "Egypt", "Russia", "Thailand","Emirates"].map((country, index) => (
                                <div
                                key={country}
                                className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
                                >
                                <div className="text-2xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                                    {country}
                                </div>
                                <div className="text-sm text-gray-400 font-medium">24/7 Operations</div>
                                <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-white rounded-full w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                                </div>
                                </div>
                            ))}
                        </motion.div>
                        <motion.div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        >
                            <p className="text-gray-300 text-xl leading-relaxed">
                                With an international network of operatives and partners, we deliver the same standard of excellence
                                across every checkpoint, every mile, and every mission. Whether you're in Amman, Moscow, or Phuket, we
                                provide consistent, top-tier protection wherever you go.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section id="contact" className="py-24 bg-gray-50" style={{ paddingTop: "8rem" }}>
                <div className="container mx-auto px-6">
                    <motion.div className="max-w-5xl mx-auto text-center mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-full mb-8">
                            <Phone className="h-5 w-5" />
                            <span className="font-medium">Get In Touch</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
                            Travel Smart
                            <br />
                            <span className="text-gray-600">Move Protected</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-16 leading-relaxed">Reach out today to learn how Close Protection & Logistics can safeguard your journey across the globe</p>
                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                            icon: Phone,
                            title: "24/7 Support",
                            value: "+44 (755) 188-5885",
                            subtitle: "Immediate Response",
                            },
                            {
                            icon: Mail,
                            title: "Secure Communications",
                            value: "mozeff@mmcloseprotection.com",
                            subtitle: "Encrypted Channels",
                            },
                            {
                            icon: MapPin,
                            title: "Global Operations",
                            value: "5 Strategic Regions",
                            subtitle: "Worldwide Coverage",
                            },
                        ].map((contact, index) => (
                            <div key={index} className="group text-center">
                                <div className="inline-flex p-6 bg-black text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <contact.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3"  id="contact-form">{contact.title}</h3>
                                <p className="text-gray-800 text-lg font-medium mb-2">{contact.value}</p>
                                <p className="text-gray-600 text-sm">{contact.subtitle}</p>
                            </div>
                        ))}
                        </div>
                    </motion.div>
                    <motion.div className="mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                        <ContactForm />
                    </motion.div>
                </div>
            </section>
            <footer className="bg-black text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-6 mb-8 md:mb-0">
                            <div className="relative group">
                                <Image
                                src="/images/mj-logo.png"
                                alt="MJ Close Security & Transportation"
                                width={80}
                                height={80}
                                className="object-contain group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute -inset-2 bg-white/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        <div>
                            <span className="font-bold text-2xl">Close Protection & Logistics</span>
                            <p className="text-gray-400 text-sm font-medium tracking-wide">ELITE SECURITY SOLUTIONS WORLDWIDE</p>
                        </div>
                        </div>
                        <div className="text-gray-400 text-sm text-center md:text-right">
                            <p className="font-medium text-white mb-2">© {new Date().getFullYear()} Close Protection & Logistics</p>
                            <p>All rights reserved. Licensed security professionals.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
  )
}

export default HomePage;