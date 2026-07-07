"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaInstagram,
  FaFacebookF,
  FaPaperPlane,
  FaCircleCheck,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

export function Contact() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().min(2, t("form.errors.name")),
    email: z.email(t("form.errors.email")),
    phone: z.string().optional(),
    message: z.string().min(10, t("form.errors.message")),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Trip request from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n${data.name}\n${data.email}${
        data.phone ? `\n${data.phone}` : ""
      }`
    );
    window.location.assign(`mailto:${site.email}?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const contactItems = [
    {
      icon: FaPhone,
      label: t("info.phone"),
      value: site.phone,
      href: site.phoneHref,
    },
    {
      icon: FaEnvelope,
      label: t("info.email"),
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: FaLocationDot,
      label: t("info.address"),
      value: t("info.addressValue"),
      href: undefined,
    },
  ] as const;

  return (
    <section id="contact" className="bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Card className="shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("form.name")}</Label>
                      <Input
                        id="name"
                        placeholder={t("form.namePlaceholder")}
                        aria-invalid={!!errors.name}
                        className="h-11"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("form.email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("form.emailPlaceholder")}
                        aria-invalid={!!errors.email}
                        className="h-11"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("form.phone")}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      className="h-11"
                      {...register("phone")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder={t("form.messagePlaceholder")}
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full rounded-full text-base font-semibold"
                  >
                    {t("form.submit")}
                    <FaPaperPlane aria-hidden />
                  </Button>

                  {sent && (
                    <p
                      role="status"
                      className="flex items-center gap-2 rounded-md bg-accent px-4 py-3 text-sm text-accent-foreground"
                    >
                      <FaCircleCheck className="size-4 shrink-0" aria-hidden />
                      {t("form.success")}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 text-primary-foreground">
              <h3 className="text-lg font-semibold">{t("info.title")}</h3>
              <ul className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/70">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-sm font-medium hover:underline">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/70">
                  {t("info.social")}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex size-11 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                  >
                    <FaInstagram className="size-5" />
                  </a>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-11 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                  >
                    <FaFacebookF className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
