"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { company, contact, images, navigation } from "@/lib/site";

const navItems = navigation.main;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* PC Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[1000] h-20 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-full px-12">
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "会社ロゴ"}
              width={220}
              height={55}
            />
          </Link>

          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-nav text-white uppercase tracking-wider transition-colors duration-200 hover:text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* SP Header (fixed) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[1000] h-[60px] bg-white shadow-header">
        <div className="flex items-center justify-between h-full px-4">
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "会社ロゴ"}
              width={150}
              height={38}
            />
          </Link>

          <button
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 z-[999] w-[80vw] max-w-[300px] h-full bg-white transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="モバイルナビゲーション"
      >
        <div className="pt-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block h-14 leading-[56px] px-6 text-sm font-bold text-text-primary border-b border-gray-100 tracking-wider transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {contact.phone && (
            <div className="px-6 pt-6">
              <a
                href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
                className="text-sm text-text-secondary"
              >
                TEL: {contact.phoneFormatted || contact.phone}
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
