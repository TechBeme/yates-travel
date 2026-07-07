import { useTranslations } from "next-intl";
import {
  FaShip,
  FaUmbrellaBeach,
  FaWandMagicSparkles,
  FaRoute,
  FaMedal,
  FaPeopleGroup,
} from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./reveal";

const services = [
  { key: "cruises", icon: FaShip },
  { key: "resorts", icon: FaUmbrellaBeach },
  { key: "disney", icon: FaWandMagicSparkles },
  { key: "custom", icon: FaRoute },
  { key: "military", icon: FaMedal },
  { key: "groups", icon: FaPeopleGroup },
] as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-20 sm:py-24">
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
          {services.map(({ key, icon: Icon }, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
