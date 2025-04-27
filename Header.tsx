'use client';

import React from 'react';
import Link from 'next/link';
import Modal from './Modal';
import { useState } from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="nav-link">
    {children}
  </Link>
);

const Header = () => {
  const [modal, setModal] = useState<'login' | 'signup' | null>(null);

  const openLogin = () => setModal('login');
  const openSignup = () => setModal('signup');
  const closeModal = () => setModal(null);

  return (
    <header>
      <nav className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="logo">
              SecurePass Pro
            </Link>

            <div className="nav-links">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#generator">Generator</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#features">Features</NavLink>
            </div>
          </div>
          
          <div className="auth-buttons">
            <button className="login-btn" onClick={openLogin}>Log In</button>
            <button className="signup-btn" onClick={openSignup}>Sign Up</button>
          </div>
        </div>
      </nav>
      {/* Login Modal */}
      <Modal isOpen={modal === 'login'} onClose={closeModal}>
        <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Log In</h2>
        <form>
          <label htmlFor="login-email">Email</label>
          <input id="login-email" type="email" placeholder="Enter your email" required />
          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter your password" required />
          <div className="modal-actions">
            <button type="submit" className="btn-primary">Log In</button>
            <button type="button" className="btn-secondary" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
      {/* Signup Modal */}
      <Modal isOpen={modal === 'signup'} onClose={closeModal}>
        <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Sign Up</h2>
        <form>
          <label htmlFor="signup-name">Name</label>
          <input id="signup-name" type="text" placeholder="Enter your name" required />
          <label htmlFor="signup-email">Email</label>
          <input id="signup-email" type="email" placeholder="Enter your email" required />
          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" placeholder="Create a password" required />
          <label htmlFor="signup-confirm">Confirm Password</label>
          <input id="signup-confirm" type="password" placeholder="Confirm your password" required />
          <div className="modal-actions">
            <button type="submit" className="btn-primary">Sign Up</button>
            <button type="button" className="btn-secondary" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </header>
  );
};

export default Header; 