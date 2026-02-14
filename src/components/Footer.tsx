import Link from "next/link";
import { company, navigation } from "@/lib/site";

const navLinks = navigation.footer;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="py-10">
        {/* Navigation - horizontal center */}
        {navLinks.length > 0 && (
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-6 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-white tracking-wider transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-white/50">
            &copy; {currentYear}{" "}
            {company.nameEn || company.name || "Company Name"}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
