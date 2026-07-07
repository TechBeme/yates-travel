import { useTranslations } from "next-intl";
import { FaComments, FaClipboardList, FaPlaneDeparture } from "react-icons/fa6";
import { Reveal } from "./reveal";

const steps = [
  { key: "step1", icon: FaComments },
  { key: "step2", icon: FaClipboardList },
  { key: "step3", icon: FaPlaneDeparture },
] as const;

export function Steps() {
  const t = useTranslations("steps");

  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {steps.map(({ key, icon: Icon }, i) => (
            <Reveal key={key} delay={i * 0.1}>
              <li className="relative flex flex-col items-center text-center">
                <span className="relative flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                  <Icon className="size-6" aria-hidden />
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-sky-300 text-xs font-bold text-slate-900">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {t(`${key}.description`)}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
