"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Solution", href: "/solution" },
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Pour l'équipe", href: "/equipe" },
  { label: "Prix", href: "/prix" },
  { label: "Ressources", href: "/ressources" },
  { label: "À propos", href: "/a-propos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border-light shadow-[var(--shadow-default)]"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-oropra.svg"
            alt="Oropra"
            width={120}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm px-3 py-2 rounded-lg transition-colors duration-150",
                pathname === link.href
                  ? "text-text-primary font-bold bg-bg-hover"
                  : "text-text-primary font-bold hover:bg-bg-hover"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" href="/support">
            Support
          </Button>
          <Button variant="primary" size="sm" href="mailto:bienvenue@oropra.com">
            Demander une démo
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-text-subtle hover:bg-bg-hover transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border-light px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm px-3 py-3 rounded-lg transition-colors",
                pathname === link.href
                  ? "text-text-primary font-bold bg-bg-hover"
                  : "text-text-primary font-bold hover:bg-bg-hover"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border-light mt-2 flex flex-col gap-2">
            <Button variant="secondary" size="md" href="/support">
              Support
            </Button>
            <Button variant="primary" size="md" href="mailto:bienvenue@oropra.com">
              Demander une démo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
