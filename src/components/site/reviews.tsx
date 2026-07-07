import { useTranslations } from "next-intl";
import { FaStar, FaFacebookF, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

const reviewKeys = ["r1", "r2", "r3", "r4", "r5"] as const;

export function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-base text-muted-foreground sm:text-lg">
            <FaFacebookF className="size-4 text-primary" aria-hidden />
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviewKeys.map((key, i) => (
            <Reveal key={key} delay={(i % 3) * 0.06}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div
                    className="flex items-center gap-1 text-amber-400"
                    role="img"
                    aria-label="5/5"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FaStar key={s} className="size-4" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{t(`${key}.text`)}”
                  </blockquote>
                  <figcaption>
                    <p className="text-sm font-semibold text-foreground">
                      {t(`${key}.name`)}
                    </p>
                    <p className="text-xs text-muted-foreground">{t("recommends")}</p>
                  </figcaption>
                </CardContent>
              </Card>
            </Reveal>
          ))}

          <Reveal delay={0.12}>
            <a
              href={site.facebookReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-40 flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border p-6 text-center text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FaFacebookF className="size-6" aria-hidden />
              {t("source")}
              <FaArrowUpRightFromSquare className="size-3.5" aria-hidden />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
