'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiRefreshCw, FiShield } from 'react-icons/fi';

export function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState('strong');

  const calculateStrength = (pwd: string) => {
    if (!pwd) return 'weak';
    
    let score = 0;
    if (pwd.length >= 12) score += 2;
    if (pwd.match(/[A-Z]/)) score += 1;
    if (pwd.match(/[a-z]/)) score += 1;
    if (pwd.match(/[0-9]/)) score += 1;
    if (pwd.match(/[^A-Za-z0-9]/)) score += 1;
    
    if (score >= 5) return 'strong';
    if (score >= 3) return 'medium';
    return 'weak';
  };

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let chars = '';
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
    
    if (chars === '') {
      alert('Please select at least one character type');
      return;
    }
    
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    
    setPassword(generatedPassword);
  };

  useEffect(() => {
    if (password) {
      setStrength(calculateStrength(password));
    }
  }, [password]);

  const copyToClipboard = async () => {
    if (!password) return;
    
    try {
      await navigator.clipboard.writeText(password);
      // Show a temporary success message
      const button = document.getElementById('copyButton');
      if (button) {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = originalText;
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy password: ', err);
    }
  };

  const clearPassword = () => {
    setPassword('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Password Generator</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={password}
            placeholder="Generated password will appear here"
            readOnly
            className="w-full bg-transparent border-none focus:outline-none text-lg"
          />
          <div className="flex gap-2">
            <button
              id="copyButton"
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              disabled={!password}
            >
              <FiCopy className="w-5 h-5" />
            </button>
            <button
              onClick={clearPassword}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              disabled={!password}
            >
              <FiRefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex justify-between mb-2">
            <span>Password Length</span>
            <span>{length} characters</span>
          </label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="w-4 h-4 text-blue-600"
            />
            <span>Include Uppercase Letters</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="w-4 h-4 text-blue-600"
            />
            <span>Include Lowercase Letters</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-4 h-4 text-blue-600"
            />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-4 h-4 text-blue-600"
            />
            <span>Include Symbols</span>
          </label>
        </div>

        {password && (
          <div className="flex items-center space-x-2">
            <FiShield className={`w-5 h-5 ${
              strength === 'strong' ? 'text-green-500' :
              strength === 'medium' ? 'text-yellow-500' :
              'text-red-500'
            }`} />
            <span className="capitalize">{strength} Password</span>
          </div>
        )}

        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generate
        </button>
      </div>
    </div>
  );
} 