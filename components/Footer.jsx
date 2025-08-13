"use client"
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWhatsApp = () => {
        const phoneNumber = "2348068319384";
        const message = "Hello! I need help studying abroad.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };



    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={handleWhatsApp}
                    className="bg-green-500 cursor-pointer hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                    title="Help me study abroad"
                >
                    <MessageCircle className="h-6 w-6" />
                    <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Help me study abroad
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </div>
                </button>
            </div>

            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/ore.png"
                                    alt="Ora Logo"
                                    className='w-12 h-10 md:w-16 rounded-md md:h-12 object-contain hover:opacity-80 transition-opacity'
                                />
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Empowering African students with global academic opportunities. Your trusted partner in achieving educational excellence abroad.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        About Us
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        Our Services
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('faq')}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        FAQ
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('booking')}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        Book Consultation
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">IELTS</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors text-left">
                                        What is IELTS?
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors text-left">
                                        Why take IELTS with Ora Consults?
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors text-left">
                                        IELTS Preparation
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors text-left">
                                        Book an IELTS test
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Countries We Serve</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>Canada</li>
                                <li>United Kingdom</li>
                                <li>United States</li>
                                <li>Australia</li>
                                <li>Ireland</li>
                                <li>European Countries</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-blue-400" />
                                    <span className="text-gray-300">info@oraconsults.net</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-blue-400" />
                                    <span className="text-gray-300">+234 8038720458</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-5 w-5 text-blue-400" />
                                    <span className="text-gray-300">Based in Africa</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                © 2025 ORA CONSULTS. All rights reserved.
                            </p>
                            <p className="text-gray-400 text-sm mt-4 md:mt-0">
                                Office Hours: Monday – Friday, 9 AM – 5 PM (WAT)
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;