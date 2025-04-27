import React from 'react';
import { FiShield, FiUsers, FiAward } from 'react-icons/fi';

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted by Security Professionals Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FiShield className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Industry-Leading Security</h3>
            <p className="text-gray-600 text-center mb-4">
              Certified by top security firms and trusted by Fortune 500 companies for enterprise-grade password management.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">ISO 27001</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">SOC 2 Type II</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">GDPR Compliant</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FiUsers className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Global Enterprise Solution</h3>
            <p className="text-gray-600 text-center mb-4">
              Serving over 10,000+ organizations worldwide, including government agencies and financial institutions.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">24/7 Support</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">99.9% Uptime</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Global CDN</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FiAward className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Award-Winning Platform</h3>
            <p className="text-gray-600 text-center mb-4">
              Recognized by leading tech authorities for excellence in security innovation and password management.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Best Enterprise Security</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Top Rated 2023</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Innovation Award</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 