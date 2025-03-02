"use client"

import Link from "next/link";
import { FaGithub, FaTwitter, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatch

  return (
    <footer className="bg-black text-white py-6 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24">
      <p className="text-sm">&copy; 2025. All rights reserved - Hafeez Baig</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link href="https://github.com" target="_blank" aria-label="GitHub">
          <FaGithub className="text-white hover:text-gray-400 text-2xl" />
        </Link>
        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter className="text-white hover:text-gray-400 text-2xl" />
        </Link>
        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
          <FaFacebook className="text-white hover:text-gray-400 text-2xl" />
        </Link>
        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
          <FaInstagram className="text-white hover:text-gray-400 text-2xl" />
        </Link>
        <Link href="https://telegram.org" target="_blank" aria-label="Telegram">
          <FaTelegram className="text-white hover:text-gray-400 text-2xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;