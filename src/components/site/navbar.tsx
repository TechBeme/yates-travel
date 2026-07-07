"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaBars, FaXmark, FaEarthAmericas } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ShipMark } from "./logo";

const sections = ["destinations", "services", "about", "reviews", "contact"] as const;

function LocaleSwitcher({ light }: { light: boolean }) {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full border px-1.5 py-1 text-xs font-medium",
        light ? "border-white/30 text-white" : "border-border text-foreground"
      )}
      role="group"
      aria-label={t("label")}
    >
      <FaEarthAmericas className="mx-1 size-3.5 opacity-70" aria-hidden />
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l as Locale })}
          aria-label={t(l)}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "cursor-pointer rounded-full px-2 py-0.5 uppercase transition-colors",
            l === locale
              ? light
                ? "bg-white/90 text-slate-900"
                : "bg-primary text-primary-foreground"
              : "opacity-75 hover:opacity-100"
          )}
        >
          {l === "pt-BR" ? "PT" : l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        light ? "bg-transparent" : "bg-background/90 shadow-sm backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className={cn(
            "flex items-center gap-2 font-heading text-xl font-bold tracking-tight",
            light ? "text-white" : "text-foreground"
          )}
        >
          <ShipMark className="size-8 shrink-0" />
          <span>
            Yates <span className="text-sky-400">Travel</span>
          </span>
        </a>

        <nav
          className={cn(
            "hidden items-center gap-6 text-sm font-medium md:flex",
            light ? "text-white/90" : "text-muted-foreground"
          )}
          aria-label="Main"
        >
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={cn(
                "transition-colors",
                light ? "hover:text-white" : "hover:text-foreground"
              )}
            >
              {t(s)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher light={light} />
          <Button asChild className="h-9 rounded-full px-4 text-sm">
            <a href="#contact">{t("cta")}</a>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "cursor-pointer p-2 md:hidden",
            light ? "text-white" : "text-foreground"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <FaXmark className="size-5" /> : <FaBars className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {t(s)}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 px-3">
              <LocaleSwitcher light={false} />
              <Button asChild className="h-9 rounded-full px-4 text-sm">
                <a href="#contact" onClick={() => setOpen(false)}>
                  {t("cta")}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
