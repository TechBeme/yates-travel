import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/site";
import { Reveal } from "./reveal";

export function Destinations() {
  const t = useTranslations("destinations");

  return (
    <section id="destinations" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map(({ key, image }, i) => (
            <Reveal key={key} delay={(i % 3) * 0.06}>
              <a
                href="#contact"
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`${t(`${key}.name`)}: ${t(`${key}.tag`)}`}
              >
                <Image
                  src={image}
                  alt={t(`${key}.name`)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-sky-200">
                    <FaLocationDot className="size-3" aria-hidden />
                    {t(`${key}.tag`)}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-white">
                    {t(`${key}.name`)}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Button asChild className="h-11 rounded-full px-6 text-sm font-semibold">
            <a href="#contact">
              {t("cta")}
              <FaArrowRight aria-hidden />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
