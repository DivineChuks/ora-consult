"use client"
import React from 'react';
import { ArrowRight, Globe, Users, Award, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content Section */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Trusted by 500+ Students</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Your Gateway to
                <span className="block bg-blue-600 bg-clip-text text-transparent mt-2">
                  Global Education
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                We empower African students with world-class educational opportunities.
                From university applications to visa guidance, we're your trusted partner
                in achieving academic excellence abroad.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Expert guidance for top universities worldwide",
                "Comprehensive visa application support",
                "Scholarship and funding assistance"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="bg-blue-600 cursor-pointer text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={scrollToAbout}
                className="border-2 cursor-pointer border-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-semibold text-lg"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-12">
              {[
                { icon: Globe, count: "6+", label: "Countries", colorClass: "text-blue-600" },
                { icon: Users, count: "500+", label: "Students Helped", colorClass: "text-emerald-600" },
                { icon: Award, count: "95%", label: "Success Rate", colorClass: "text-purple-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-100">
                    <stat.icon className={`h-7 w-7 ${stat.colorClass}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.count}</div>
                  <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/woman.jpg"
                  alt="Students collaborating on international education"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Success Badge */}
              {/* <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Success Rate</div>
                    <div className="text-lg font-bold text-green-600">95%</div>
                  </div>
                </div>
              </div> */}

              {/* Countries Badge */}
              {/* <div className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">6+</div>
                  <div className="text-sm font-medium opacity-90">Countries</div>
                </div>
              </div> */}
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl -z-10 opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-purple-100 to-blue-100 rounded-2xl -z-20 opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;