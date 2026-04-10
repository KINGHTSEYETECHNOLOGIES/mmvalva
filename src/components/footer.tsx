import Link from "next/link";
import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto overflow-hidden border-t border-white/10 bg-[#050608] py-14 text-white relative">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent via-accent-two to-accent" />
      <div className="absolute -top-24 right-[12%] h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[6%] h-80 w-80 rounded-full bg-accent-two/10 blur-3xl pointer-events-none" />

      <div className="section-wrap relative z-10 grid grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-1">
          <Link href="/" className="inline-block group">
            <span className="text-2xl font-black uppercase tracking-[0.16em] text-white transition-colors group-hover:text-accent">
              M.M. Valves
            </span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Precision engine valves for diesel, automotive, OEM, and aftermarket applications, built with a stronger focus on process and presentation.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">Company</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link href="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/manufacturing"
                className="transition-colors hover:text-white"
              >
                Manufacturing
              </Link>
            </li>
            <li>
              <Link href="/quality" className="transition-colors hover:text-white">
                Quality Standards
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">Products</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link
                href="/diesel-engine-valves"
                className="transition-colors hover:text-white"
              >
                Diesel Engine Valves
              </Link>
            </li>
            <li>
              <Link
                href="/automotive-engine-valves"
                className="transition-colors hover:text-white"
              >
                Automotive Engine Valves
              </Link>
            </li>
            <li>
              <Link
                href="/inlet-exhaust-valves"
                className="transition-colors hover:text-white"
              >
                Inlet & Exhaust Valves
              </Link>
            </li>
            <li>
              <Link href="/products" className="transition-colors hover:text-white">
                All Products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>123 Industrial Estate, New Delhi, 110001, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a
                href="mailto:contact@placeholder.com"
                className="transition-colors hover:text-white"
              >
                contact@placeholder.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a
                href="tel:+910000000000"
                className="transition-colors hover:text-white"
              >
                +91 00 0000 0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-wrap relative z-10 mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 px-4 pt-8 text-xs text-white/55 sm:px-6 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} M.M. Valves. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 transition-colors hover:text-white">
            Talk to engineering
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
