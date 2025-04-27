'use client';

import React from 'react';
import { FiLock, FiShield, FiRefreshCw, FiClock, FiDatabase, FiActivity } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      name: 'Advanced Password Generation',
      description: 'Create strong, unique passwords with customizable options for length and character types.',
      icon: FiLock,
    },
    {
      name: 'Password Strength Analysis',
      description: 'Get real-time feedback on your password strength and suggestions for improvement.',
      icon: FiActivity,
    },
    {
      name: 'Secure Storage',
      description: 'Store your passwords securely with industry-standard encryption.',
      icon: FiDatabase,
    },
    {
      name: 'Cross-Platform Sync',
      description: 'Access your passwords from any device with our secure cloud sync.',
      icon: FiRefreshCw,
    },
    {
      name: 'Password History',
      description: 'Keep track of your password history and easily restore previous versions.',
      icon: FiClock,
    },
    {
      name: 'Security Audit',
      description: 'Regular security audits to identify and fix potential vulnerabilities.',
      icon: FiShield,
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features for Your Security</h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to manage your passwords securely and efficiently.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {feature.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 