import { useTranslations } from "next-intl";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";
import { ShipMark } from "./logo";

const sections = ["destinations", "services", "about", "reviews", "contact"] as const;

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="flex items-center gap-2 font-heading text-xl font-bold text-white">
              <ShipMark className="size-8 shrink-0" />
              <span>
                Yates <span className="text-sky-400">Travel</span>
              </span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              {t("tagline")}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <FaInstagram className="size-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <FaFacebookF className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {sections.map((s) => (
                <li key={s}>
                  <a href={`#${s}`} className="transition-colors hover:text-white">
                    {nav(s)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("contactTitle")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <FaPhone className="size-3.5 shrink-0 text-sky-400" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-white"
                >
                  <FaEnvelope className="size-3.5 shrink-0 text-sky-400" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaLocationDot
                  className="mt-1 size-3.5 shrink-0 text-sky-400"
                  aria-hidden
                />
                {contact("info.addressValue")}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {site.name}. {t("rights")}
          </p>
          <p>
            {t("createdBy")}{" "}
            <a
              href="https://techbe.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-400 transition-colors hover:text-white"
            >
              Rafael Vieira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
