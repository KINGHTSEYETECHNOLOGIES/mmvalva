import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Gauge,
  Globe2,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "M.M. Valves | Engine Valve Manufacturer",
  description:
    "High-quality engine valves for diesel, automotive, OEM, and aftermarket applications.",
};

const capabilities = [
  {
    title: "Thermal Resilience",
    copy: "Materials and heat-treatment processes designed for extreme temperatures and long-term durability.",
    icon: Gauge,
  },
  {
    title: "Dimensional Control",
    copy: "Strict process checks at every stage to ensure perfect concentricity, finish, and fit.",
    icon: BadgeCheck,
  },
  {
    title: "Global Supply",
    copy: "Reliable manufacturing planning to meet the demands of international export orders.",
    icon: Globe2,
  },
  {
    title: "Custom Engineering",
    copy: "Tailored valve development to strictly match OEM specifications and drawings.",
    icon: Wrench,
  },
];

const productFamilies = [
  {
    title: "Diesel Engine Valves",
    copy: "Heavy-duty valves built for maximum load and heat resistance in commercial applications.",
    image: "/images/home/Diesel Engine Valves.png",
    imageClass: "scale-110",
  },
  {
    title: "Automotive Engine Valves",
    copy: "Precision valves precision-engineered for passenger vehicles and light trucks.",
    image: "/images/home/Automotive Engine Valves v2.jpg",
  },
  {
    title: "Industrial Valves",
    copy: "Robust designs for stationary engines, generators, and heavy machinery.",
    image: "/images/home/Industrial valve v2.jpg",
  },
  {
    title: "Custom Solutions",
    copy: "Manufactured exactly to your blueprints, materials, and specialized requirements.",
    image: "/images/home/Custom Solutions v2.webp",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Factory className="w-4 h-4" />
              <span>Established 2014</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              Precision Engine Valve Manufacturer
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Serving the global OEM and aftermarket sectors with high-quality, durable, and precisely engineered engine valves for automotive, diesel, and industrial applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="inline-flex justify-center items-center px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-wider rounded transition-colors">
                View Products
              </Link>
              <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 border-2 border-slate-300 hover:border-slate-800 text-slate-800 font-bold uppercase tracking-wider rounded transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="aspect-video lg:aspect-[4/3] rounded-lg border-4 border-slate-300 overflow-hidden shadow-lg bg-slate-200 relative">
              <Image
                src="/images/home/Home page image v2.webp"
                alt="Engine valves showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain bg-white p-4"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">Our Manufacturing Edge</h2>
            <p className="mt-4 text-slate-600 text-lg">
              We focus on the fundamentals: top-grade materials, precise machining, and strict quality control.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-red-700 transition-colors">
                  <div className="w-12 h-12 bg-red-100 text-red-700 rounded flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">Product Categories</h2>
              <p className="mt-4 text-slate-600 text-lg">
                Engine valves engineered for specific operational environments.
              </p>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-bold uppercase tracking-wider transition-colors">
              See All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {productFamilies.map((product, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
                <div className="w-full sm:w-[38%] aspect-[4/3] bg-white rounded border border-slate-200 flex-shrink-0 relative overflow-hidden p-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 18vw"
                    className={`object-contain transition-transform duration-300 ${product.imageClass ?? ""}`}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold uppercase tracking-wide mb-3 text-slate-900">{product.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{product.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY PROMISE & CTA */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-700 rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
            <div className="flex-1 p-10 lg:p-16 text-white flex flex-col justify-center">
              <ShieldCheck className="w-12 h-12 text-red-300 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
                Commitment to Quality
              </h2>
              <p className="text-red-100 text-lg leading-relaxed mb-10 max-w-xl">
                Every valve that leaves our facility undergoes rigorous inspection. From raw material sorting to final dimensional checks, we ensure total compliance with your technical requirements.
              </p>
              <div className="flex flex-wrap gap-4 mt-auto">
                <Link href="/quality" className="inline-flex justify-center items-center px-8 py-3 bg-white text-red-700 hover:bg-slate-100 font-bold uppercase tracking-wider rounded transition-colors">
                  Learn About Quality
                </Link>
                <Link href="/contact" className="inline-flex justify-center items-center px-8 py-3 bg-transparent border-2 border-red-400 hover:border-white text-white font-bold uppercase tracking-wider rounded transition-colors">
                  Request a Quote
                </Link>
              </div>
            </div>
            
            {/* Facility Image Placeholder */}
            <div className="hidden lg:flex flex-1 bg-slate-800 items-center justify-center min-h-[400px] relative">
              <Image
                src="/home-quality-lab.jpg"
                alt="Quality lab and manufacturing facility"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}