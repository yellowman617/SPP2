import React from 'react';
import { FiShield, FiUsers, FiGlobe } from 'react-icons/fi';

export default function About() {
  return (
    <section className="bg-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">About SecurePass Pro</h2>
          <p className="mt-4 text-lg text-gray-500">
            We're on a mission to make password security accessible to everyone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FiShield className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Our Mission</h3>
            <p className="text-gray-600 text-center">
              To provide enterprise-grade password security tools that are easy to use and accessible to everyone, from individuals to large organizations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FiUsers className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Our Values</h3>
            <p className="text-gray-600 text-center">
              We believe in transparency, security, and user privacy. Every feature we develop is built with these core values in mind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FiGlobe className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Our Impact</h3>
            <p className="text-gray-600 text-center">
              By making strong password security accessible, we're helping protect millions of accounts and sensitive data worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 