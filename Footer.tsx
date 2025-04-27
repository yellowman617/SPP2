import React from 'react';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h3 className="text-xl font-bold">SecurePass PRO</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in password security and management.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <FiGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Resources
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Security Tips
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact
              </h4>
              <ul className="mt-4 space-y-4">
                <li className="text-base text-gray-400">
                  <a href="mailto:support@securepass.pro">support@securepass.pro</a>
                </li>
                <li className="text-base text-gray-400">
                  +1 (234) 567-890
                </li>
                <li className="text-base text-gray-400">
                  123 Security Street, Cyber City
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SecurePass PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 