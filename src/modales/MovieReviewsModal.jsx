import { useState } from "react";
import { useTranslation } from "react-i18next";
import Carrusel from "../components/carrusel";

export default function MovieReviewsModal() {
  const { t } = useTranslation();
  const [expandido, setExpandido] = useState(false);

  const imagenes = [
    { src: "/movieReviews/movieReviews1.jpg", epigrafe: t("moviereviews.epigrafe1") },
    { src: "/movieReviews/movieReviews2.jpg", epigrafe: t("moviereviews.epigrafe2") },
    { src: "/movieReviews/movieReviews3.jpg", epigrafe: t("moviereviews.epigrafe3") },
    { src: "/movieReviews/movieReviews4.jpg", epigrafe: t("moviereviews.epigrafe4") },
    { src: "/movieReviews/movieReviews5.jpg", epigrafe: t("moviereviews.epigrafe5") },
    { src: "/movieReviews/movieReviews6.jpg", epigrafe: t("moviereviews.epigrafe6") },
  ];

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="pr-8">
        <h2 className="font-display text-2xl font-bold text-(--color-text)">MovieReviews</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {["FastAPI", "Python", "Scikit-learn", "SQLite", "Uvicorn", "Svelte"].map((tech) => (
            <span key={tech} className="font-mono-custom text-xs px-2.5 py-1 rounded-full bg-(--color-accent-secondary)/15 text-(--color-accent-secondary)">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <p className="text-(--color-text-secondary) leading-relaxed text-sm text-justify">
        {t("moviereviews.intro")}{" "}
        <span className="text-(--color-accent-secondary)">{t("moviereviews.materia")}</span>,{" "}
        {t("moviereviews.intro2")}{" "}
        <span className="text-(--color-accent-secondary)">{t("moviereviews.sql")}</span>{" "}
        {t("moviereviews.intro3")}{" "}
        <span className="text-(--color-accent-secondary)">{t("moviereviews.ml")}</span>{" "}
        {t("moviereviews.intro4")}{" "}
        <span className="text-green-400">{t("moviereviews.positivas")}</span>{" "}o{" "}
        <span className="text-red-400">{t("moviereviews.negativas")}</span>{"."}

        {!expandido && (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setExpandido(true)}
              className="text-(--color-text-secondary)/50 font-bold hover:text-(--color-accent) cursor-pointer"
            >
              {t("modal.leerMas")}
            </button>
          </>
        )}

        {expandido && (
          <>
            <br /><br />
            {t("moviereviews.parrafo2")}{" "}
            <span className="text-(--color-accent-secondary)">Python</span>{" "}
            {t("moviereviews.parrafo2b")}
            <br /><br />
            {t("moviereviews.parrafo3")}{" "}
            <span className="text-(--color-accent-secondary)">FastAPI</span>{" "}
            {t("moviereviews.parrafo3b")}{" "}
            <span className="text-(--color-accent-secondary)">Svelte</span>{" "}
            {t("moviereviews.parrafo3c")}
            <br /><br />
            {t("moviereviews.parrafo4")}{" "}
            <span className="text-(--color-accent-secondary)">{t("moviereviews.sinDeploy")}</span>{" "}
            {t("moviereviews.parrafo4b")}
          </>
        )}
      </p>

      <Carrusel imagenes={imagenes} />
    </div>
  );
}