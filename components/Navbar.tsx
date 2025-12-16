"use client";

import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "How it works", href: "#how-it-works" },
        { name: "Proof", href: "#proof" },
        { name: "What you get", href: "#services" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-slate-950/80 backdrop-blur-xl py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="group flex items-center gap-4 relative pl-2">
                        <div className="relative w-[56px] h-[56px] flex items-center justify-center">
                            {/* Absolute Background Circle - Offset Bottom Right */}
                            <div className="absolute bottom-[10px] right-[4px] w-[42px] h-[42px] rounded-full bg-white border border-slate-200 shadow-md -z-10 group-hover:rotate-[5deg] transition-transform duration-300" />

                            {/* Logo Image */}
                            <Image
                                src="/logo.svg"
                                alt="Revalanch Logo"
                                width={56}
                                height={56}
                                className="w-[56px] h-[56px] object-contain drop-shadow-lg relative z-10 group-hover:-translate-y-1 group-hover:rotate-[5deg] transition-transform duration-300"
                            />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">
                            Revalanch
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4">
                            <Link
                                href="#live-demo"
                                className="px-5 py-2.5 rounded-lg border border-slate-700 bg-transparent text-slate-300 font-semibold text-sm hover:border-slate-500 hover:text-white transition-colors"
                            >
                                Hear the AI live
                            </Link>
                            <Link
                                href="#demo"
                                className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-semibold text-sm hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
                            >
                                Book a demo
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                    >
                        <span className="sr-only">Open menu</span>
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 p-4 shadow-2xl">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-slate-300 hover:text-white block px-2 py-1"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#live-demo"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 block w-full text-center px-5 py-3 rounded-lg border border-slate-700 bg-transparent text-slate-300 font-bold hover:border-slate-500 hover:text-white transition-colors"
                        >
                            Hear the AI live
                        </Link>
                        <Link
                            href="#demo"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 block w-full text-center px-5 py-3 rounded-lg bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors"
                        >
                            Book a demo
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
