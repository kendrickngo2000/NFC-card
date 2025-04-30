'use client';
import { useState } from 'react';
import { FiMenu, FiGithub, FiLinkedin, FiInstagram, FiFileText } from 'react-icons/fi';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'home', path: '#home' },
    { name: 'videos', path: '#videos' },
    { name: 'projects', path: '#projects' },
    { name: 'posts', path: '#posts' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      path: 'https://github.com/kendrickngo2000',
      icon: <FiGithub size={20} />,
    },
    {
      name: 'LinkedIn',
      path: 'https://linkedin.com/in/kendrick-ngo-340107357',
      icon: <FiLinkedin size={20} />,
    },
    {
      name: 'Instagram',
      path: 'https://instagram.com/notkendrickngo/',
      icon: <FiInstagram size={20} />,
    },
    {
      name: 'Resume',
      path: '/resume.pdf',
      icon: <FiFileText size={20} />,
    },
  ];

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="text-black p-2 border border-black bg-transparent hover:bg-black hover:text-white"
      >
        <FiMenu size={24} />
      </button>
      {isOpen && (
        <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-3 w-40">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="block py-2 px-2 text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          {/* Divider */}
          <hr className="my-2 border-gray-200" />
          <p className="text-xs text-gray-700 mb-2 px-2">socials</p>
          {/* social icons */}
          <div className="flex justify-around">
            {socialLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                target={link.path.startsWith('http') ? '_blank' : undefined}
                rel={link.path.startsWith('http') ? 'noreferrer' : undefined}
                className="text-gray-800 hover:text-blue-500"
                onClick={toggleMenu}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
