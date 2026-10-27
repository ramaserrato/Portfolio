import { useTranslation } from "react-i18next";

export function SobreMi() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="section">
      <h2 className="anim-fade-up anim-delay-4 font-display text-xl text-(--color-text) mb-6">
        {t("sobreMi.titulo")}
      </h2>

      <div className="anim-fade-up anim-delay-4 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-(--color-accent)/40 via-transparent to-(--color-accent-secondary)/40 blur-xl" />
          <img
            src="./fotoSerrato.jpeg"
            alt="Foto"
            className="relative w-64 h-80 sm:w-50 sm:h-70 rounded-3xl object-cover border border-white/10 shadow-[0_60px_120px_-80px_rgba(91,195,182,0.8)]"
          />
        </div>
        <p className="text-(--color-text-secondary) leading-relaxed text-left sm:text-justify ">
          {t("sobreMi.texto1")}{" "}
          <span className="text-(--color-text)">{t("sobreMi.carrera")}</span>
          {" "}{t("sobreMi.universidad")}<br /><br />
          {t("sobreMi.texto2")}{" "}
          <span className="text-(--color-accent-secondary)">{t("sobreMi.rol")}</span>{". "}
          {t("sobreMi.texto3")}<br />
          {t("sobreMi.texto4")}<br />
          {t("sobreMi.texto5")}
        </p>
      </div>
    </section>
  );
}