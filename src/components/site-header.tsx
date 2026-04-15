"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900 border-b border-slate-800 shadow-md py-4"
          : "bg-slate-900 border-b border-transparent py-5"
      }`}
    >
      <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group relative z-10 flex items-center gap-3 text-white justify-self-start">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-white transition-colors group-hover:bg-slate-100">
            <Image
              src="/images/logo/MM%20VALAVE%20SYMBOLE.png"
              alt="M.M. Valves symbol"
              width={48}
              height={48}
              className="h-auto w-12 object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <Image
              src="/images/logo/MM%20VALAVE%20LOGO.png"
              alt="M.M. Valves"
              width={220}
              height={56}
              className="h-9 w-auto object-contain brightness-0 invert sm:h-10"
              priority
            />
            <span className="mt-1 text-[0.62rem] font-bold uppercase tracking-widest text-slate-400">
              Manufacturer of All types of Valves
            </span>
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-7 text-sm font-bold uppercase tracking-wider text-slate-300 lg:flex">
          <Link href="/" className="transition-colors hover:text-white hover:text-red-400">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-white hover:text-red-400">
            About
          </Link>
          <Link href="/products" className="transition-colors hover:text-white hover:text-red-400">
            Products
          </Link>
          <Link href="/export" className="transition-colors hover:text-white hover:text-red-400">
            Export
          </Link>
          <Link href="/manufacturing" className="transition-colors hover:text-white hover:text-red-400">
            Manufacturing
          </Link>
          <Link href="/quality" className="transition-colors hover:text-white hover:text-red-400">
            Quality
          </Link>
        </nav>
        <div className="flex items-center gap-3 justify-self-end">
          <Link href="/contact" className="bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-wider rounded transition-colors text-xs py-3 px-5 hidden sm:inline-flex items-center gap-2">
            Request Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
