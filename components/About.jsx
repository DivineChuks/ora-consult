import React from 'react';
import { Target, Heart, Shield, Star, Users, Globe, Award, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                        <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About ORA CONSULTS</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Leading educational consulting agency based in Africa, dedicated to empowering students with global academic opportunities.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                                Our Mission
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                ORA CONSULTS is a leading educational consulting agency based in Africa, dedicated to empowering students with global academic opportunities. We specialize in guiding prospective students through the process of applying to universities abroad, securing study permits, and navigating complex admission systems.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our team is composed of experienced advisors, visa experts, and international education professionals who understand the unique challenges African students face.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                <Award className="h-6 w-6 text-blue-600 mr-3" />
                                What We Offer
                            </h3>
                            <div className="grid gap-3">
                                {[
                                    'Undergraduate program guidance',
                                    'Postgraduate application support',
                                    'Vocational training programs',
                                    'School selection assistance',
                                    'Complete travel arrangements'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="/student.jpg"
                                alt="Educational consulting"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl -z-20"></div>
                    </div>
                </div>

                {/* Inspirational Quote */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 md:p-12 mb-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
                    <div className="relative z-10">
                        <div className="text-6xl text-blue-200 mb-4">"</div>
                        <blockquote className="text-xl md:text-2xl leading-relaxed font-medium mb-6 max-w-4xl">
                            Navigating through numerous courses and universities while deciding where and what to study abroad can indeed be a formidable task. But rest assured, ORA CONSULTS is here as your steadfast companion throughout this journey.
                        </blockquote>
                        <p className="text-lg text-blue-100 leading-relaxed max-w-4xl">
                            Our experienced counselors are dedicated to comprehending your dreams and goals, striving to discover the perfect path for you. Delve into our subject guides to unearth your strengths and pinpoint courses that resonate with your aspirations. Reach out to your nearest ORA CONSULTS office anytime for a compassionate and free counseling session.
                            <span className="font-semibold text-white"> Your aspirations matter to us!</span>
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do and define who we are as an organization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="h-10 w-10 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
                            <p className="text-gray-600 leading-relaxed">Committed to delivering exceptional results for every student we serve, ensuring the highest standards in all our services.</p>
                        </div>

                        <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Heart className="h-10 w-10 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Personalized Support</h4>
                            <p className="text-gray-600 leading-relaxed">Tailored guidance that understands your unique goals, circumstances, and dreams for international education.</p>
                        </div>

                        <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Shield className="h-10 w-10 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Ethics</h4>
                            <p className="text-gray-600 leading-relaxed">Maintaining the highest standards of integrity, transparency, and honesty in all our interactions and services.</p>
                        </div>

                        <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Star className="h-10 w-10 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Experience</h4>
                            <p className="text-gray-600 leading-relaxed">Years of expertise helping African students navigate complex international education systems successfully.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;