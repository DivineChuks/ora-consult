"use client"
import React from 'react';
import {
    GraduationCap,
    FileText,
    Plane,
    MapPin,
    DollarSign,
    HeadphonesIcon
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: GraduationCap,
            title: "University Admission Guidance",
            description: "We help students identify the right academic programs and institutions abroad.",
            color: "blue"
        },
        {
            icon: FileText,
            title: "Application Support",
            description: "From preparing documents to completing forms, we ensure your application is top-notch.",
            color: "green"
        },
        {
            icon: Plane,
            title: "Study Visa & Permit Assistance",
            description: "Our experts guide you through the visa process with precision.",
            color: "purple"
        },
        {
            icon: MapPin,
            title: "Pre-departure Orientation",
            description: "We prepare students with travel tips, housing options, and cultural briefings.",
            color: "orange"
        },
        {
            icon: DollarSign,
            title: "Scholarship Advice",
            description: "We assist students in finding and applying for scholarships where available.",
            color: "red"
        },
        {
            icon: HeadphonesIcon,
            title: "Post-admission Support",
            description: "Even after admission, we remain available for ongoing guidance and support.",
            color: "indigo"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
          blue:   "bg-blue-50 border-blue-200 text-blue-600",
          green:  "bg-green-50 border-green-200 text-green-600",
          purple: "bg-purple-50 border-purple-200 text-purple-600",
          orange: "bg-orange-50 border-orange-200 text-orange-600",
          red:    "bg-red-50 border-red-200 text-red-600",
          indigo: "bg-indigo-50 border-indigo-200 text-indigo-600",
        };
        return colors[color] || colors.blue; // <- return the string, not the object
      };

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive support for your international education journey, from application to arrival.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
                            >
                                <div className={`w-16 h-16 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-blue-600 text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Our comprehensive services are designed to make your study abroad dreams a reality.
                            Let us guide you through every step of the process.
                        </p>
                        <button
                            onClick={() => {
                                const element = document.getElementById('booking');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Book Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;