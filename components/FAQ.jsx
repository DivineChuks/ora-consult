"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Can I apply to multiple universities?",
            answer: "Yes. We encourage students to apply to 3–5 universities to maximize their chances."
        },
        {
            question: "Do you charge for consultation?",
            answer: "Our initial consultation is free. Service fees apply for document processing, visa support, and application management."
        },
        {
            question: "How long does the visa process take?",
            answer: "It depends on the destination country. We typically advise beginning your application at least 4–6 months before your intended start date."
        },
        {
            question: "What countries do you work with?",
            answer: "We primarily support applications to Canada, the UK, USA, Australia, Ireland, and select European countries."
        },
        {
            question: "Can you help with scholarships?",
            answer: "Yes. While we don't offer direct funding, we assist in identifying suitable scholarships and crafting strong applications."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">
                        Get answers to the most common questions about our services and processes.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-white border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        Contact us for more information →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;