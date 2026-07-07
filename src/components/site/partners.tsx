import { useTranslations } from "next-intl";
import { FaShip, FaUmbrellaBeach, FaWandMagicSparkles } from "react-icons/fa6";

const partners = [
  { name: "Virgin Voyages", icon: FaShip },
  { name: "Sandals", icon: FaUmbrellaBeach },
  { name: "Beaches", icon: FaUmbrellaBeach },
  { name: "Disney Travel", icon: FaWandMagicSparkles },
] as const;

export function Partners() {
  const t = useTranslations("partners");

  return (
    <section className="border-b bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {t("title")}
        </h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {partners.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="flex items-center gap-2 text-base font-semibold text-foreground/70 sm:text-lg"
            >
              <Icon className="size-4 text-primary/70" aria-hidden />
              {name}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>
    </section>
  );
}
