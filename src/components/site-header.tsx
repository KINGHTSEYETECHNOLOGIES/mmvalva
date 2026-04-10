"use client";

import React, { useState } from "react";
import Link from "next/link";
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
          ? "bg-[#050608]/92 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)] py-4"
          : "bg-[#050608]/88 border-b border-white/10 py-5"
      }`}
    >
      <div className="section-wrap mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="group relative z-10 flex items-center gap-3 text-white justify-self-start">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-xs font-black uppercase tracking-[0.2em] text-accent shadow-[0_0_0_4px_rgba(255,255,255,0.03)]">
            MV
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black uppercase tracking-[0.16em] text-white">M.M. Valves</span>
            <span className="mt-1 text-[0.67rem] uppercase tracking-[0.24em] text-white/45">Precision engine valves</span>
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-7 text-sm font-medium uppercase tracking-[0.16em] text-white/72 lg:flex">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="/products"
            className="transition-colors hover:text-white"
          >
            Products
          </Link>
          <Link
            href="/manufacturing"
            className="transition-colors hover:text-white"
          >
            Manufacturing
          </Link>
          <Link
            href="/quality"
            className="transition-colors hover:text-white"
          >
            Quality
          </Link>
        </nav>
        <div className="flex items-center gap-3 justify-self-end">
          <Link href="/contact" className="button-primary inline-flex items-center gap-2 text-sm shadow-none hover:scale-[1.02]">
            Request Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}