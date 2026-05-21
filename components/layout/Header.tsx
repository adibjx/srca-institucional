"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CONTACT, LOGO_URL, NAV, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHomeHero = pathname === "/" && !scrolled;
  const opaque = scrolled || mobileOpen || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
        opaque
          ? "bg-primary-900/95 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-24 w-full max-w-container items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} — Início`}>
          <Image
            src={LOGO_URL}
            alt={SITE.name}
            width={260}
            height={78}
            priority
            className="h-16 w-auto object-contain md:h-[72px]"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            if (item.children) {
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    onFocus={() => setOpenDropdown(item.label)}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    className={cn(
                      "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                      "text-cream-50/90 hover:text-accent-300",
                      active && "text-accent-300",
                    )}
                  >
                    {item.label}
                    <svg
                      className={cn("h-3 w-3 transition-transform", isOpen && "rotate-180")}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  <div
                    role="menu"
                    className={cn(
                      "absolute left-0 top-full min-w-[260px] origin-top pt-3 transition-all duration-200",
                      isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                    )}
                  >
                    <div className="overflow-hidden rounded-md border border-primary-700/40 bg-primary-900 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block border-b border-primary-700/30 px-5 py-3 text-sm text-cream-50/90 last:border-0 hover:bg-primary-800 hover:text-accent-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                  "text-cream-50/90 hover:text-accent-300",
                  active && "text-accent-300",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={CONTACT.whatsappLink} external size="sm" variant="primary" data-cta-label="header_whatsapp">
            Fale com o escritório
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded text-cream-50 hover:bg-primary-800/50"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M4 17H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden overflow-hidden bg-primary-900 transition-[max-height] duration-300 ease-smooth",
          mobileOpen ? "max-h-[100vh]" : "max-h-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
          {NAV.map((item) =>
            item.children ? (
              <details key={item.label} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-3 text-cream-50/90 hover:text-accent-300">
                  <Link href={item.href} className="text-base font-medium">
                    {item.label}
                  </Link>
                  <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="ml-3 mt-1 flex flex-col border-l border-primary-700/40 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-2 text-sm text-cream-50/80 hover:text-accent-300"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-3 text-base font-medium text-cream-50/90 hover:text-accent-300"
              >
                {item.label}
              </Link>
            ),
          )}

          <div className="mt-4">
            <Button href={CONTACT.whatsappLink} external size="md" variant="primary" className="w-full">
              Fale com o escritório
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
