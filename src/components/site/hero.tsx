import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaRoute, FaShip, FaHeadset, FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site";
import { Reveal } from "./reveal";

export function Hero() {
  const t = useTranslations("hero");

  const highlights = [
    { icon: FaRoute, label: t("highlight1") },
    { icon: FaShip, label: t("highlight2") },
    { icon: FaHeadset, label: t("highlight3") },
  ];

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      <Image
        src={images.hero}
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/45 to-slate-950/75" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm sm:text-sm">
            {t("badge")}
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="h-12 rounded-full px-7 text-base font-semibold shadow-lg shadow-sky-950/30"
            >
              <a href="#contact">
                {t("ctaPrimary")}
                <FaArrowRight aria-hidden />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/40 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <a href="#destinations">{t("ctaSecondary")}</a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="size-4 shrink-0 text-sky-300" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
