"use client"
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        consultationType: 'general',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for booking a consultation! We will contact you soon to confirm your appointment.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start your international education journey? Schedule a free consultation with our expert advisors.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    <User className="h-4 w-4 inline mr-2" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    <Mail className="h-4 w-4 inline mr-2" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border text-gray-700  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    <Phone className="h-4 w-4 inline mr-2" />
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border text-gray-700  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
                                    Consultation Type
                                </label>
                                <select
                                    id="consultationType"
                                    name="consultationType"
                                    value={formData.consultationType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border text-gray-700  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                >
                                    <option value="general">General Consultation</option>
                                    <option value="university">University Selection</option>
                                    <option value="visa">Visa Guidance</option>
                                    <option value="scholarship">Scholarship Advice</option>
                                    <option value="application">Application Support</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                                    <Calendar className="h-4 w-4 inline mr-2" />
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    id="preferredDate"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border text-gray-700  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                                    <Clock className="h-4 w-4 inline mr-2" />
                                    Preferred Time
                                </label>
                                <select
                                    id="preferredTime"
                                    name="preferredTime"
                                    value={formData.preferredTime}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border text-gray-700  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                >
                                    <option value="">Select time</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                <MessageSquare className="h-4 w-4 inline mr-2" />
                                Additional Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-gray-700  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                placeholder="Tell us about your study abroad goals or any specific questions you have..."
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Book Free Consultation
                            </button>
                            <p className="text-sm text-gray-500 mt-3">
                                We'll contact you within 24 hours to confirm your appointment
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;