import { useTranslation } from "react-i18next";

export function SobreMi() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="section">
      <h2 className="anim-fade-up anim-delay-4 font-display text-xl text-(--color-text) mb-6">
        {t("sobreMi.titulo")}
      </h2>

      <div className="anim-fade-up anim-delay-4 flex flex-col sm:flex-row gap-8 items-center">
        <img
          src="./fotoSerrato.jpeg"
          alt="Foto"
          className="w-55 h-70 rounded-full object-cover shrink-0 border-4 border-(--color-accent-secondary)"
        />
        <p className="text-(--color-text-secondary) leading-relaxed text-justify">
          {t("sobreMi.texto1")}{" "}
          <span className="text-(--color-accent-secondary)">{t("sobreMi.carrera")}</span>
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