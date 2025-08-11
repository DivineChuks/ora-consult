"use client"
import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <GraduationCap className="h-8 w-8 text-blue-400" />
                            <span className="text-2xl font-bold">ORA CONSULTS</span>
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
                            © 2024 ORA CONSULTS. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm mt-4 md:mt-0">
                            Office Hours: Monday – Friday, 9 AM – 5 PM (WAT)
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;