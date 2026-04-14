import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto overflow-hidden border-t-4 border-red-700 bg-slate-900 py-14 text-white relative">
      <div className="container mx-auto relative z-10 grid grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded bg-white transition-colors group-hover:bg-slate-100">
              <Image
                src="/images/logo/MM%20VALAVE%20SYMBOLE.png"
                alt="M.M. Valves symbol"
                width={44}
                height={44}
                className="h-auto w-11 object-contain"
              />
            </span>
            <Image
              src="/images/logo/MM%20VALAVE%20LOGO.png"
              alt="M.M. Valves"
              width={170}
              height={46}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Manufacturer of all types of valves for diesel, automotive, OEM, and aftermarket applications, built with a stronger focus on process and presentation.
          </p>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white border-b border-slate-700 pb-2 inline-block">Company</h4>
          <ul className="space-y-3 text-sm text-slate-400 font-medium">
            <li>
              <Link href="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/manufacturing" className="transition-colors hover:text-white">
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
          <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white border-b border-slate-700 pb-2 inline-block">Products</h4>
          <ul className="space-y-3 text-sm text-slate-400 font-medium">
            <li>
              <Link href="/diesel-engine-valves" className="transition-colors hover:text-white">
                Diesel Engine Valves
              </Link>
            </li>
            <li>
              <Link href="/automotive-engine-valves" className="transition-colors hover:text-white">
                Automotive Engine Valves
              </Link>
            </li>
            <li>
              <Link href="/export" className="transition-colors hover:text-white">
                Export
              </Link>
            </li>
            <li>
              <Link href="/inlet-exhaust-valves" className="transition-colors hover:text-white">
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
          <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white border-b border-slate-700 pb-2 inline-block">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
              <span>2 Vaidyaraj Gondia Road, Rajkot - 360 002, Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-red-500" />
              <a href="mailto:mmvalesrajkot@gmail.com" className="transition-colors hover:text-white font-medium">
                mmvalesrajkot@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-red-500" />
              <a href="tel:+919829546918" className="transition-colors hover:text-white font-medium">
                +91 9829546918
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto relative z-10 mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-800 px-4 pt-8 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center">
        <p className="font-medium uppercase tracking-wider">(c) {new Date().getFullYear()} M.M. Valves. All rights reserved.</p>
        <div className="flex flex-wrap gap-6 font-bold uppercase tracking-wider">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 text-red-500 transition-colors hover:text-red-400">
            Talk to engineering
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
