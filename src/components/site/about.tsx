import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaCircleCheck, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

export function About() {
  const t = useTranslations("about");
  const points = ["point1", "point2", "point3"] as const;

  return (
    <section id="about" className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/brian-yates.jpg"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-1 text-sm font-medium text-muted-foreground">{t("role")}</p>

          <p className="mt-6 leading-relaxed text-muted-foreground">{t("p1")}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t("p2")}</p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                <FaCircleCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {t(p)}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild className="h-11 rounded-full px-6 text-sm font-semibold">
              <a href="#contact">{t("cta")}</a>
            </Button>
            <div className="flex items-center gap-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaInstagram className="size-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaFacebookF className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
