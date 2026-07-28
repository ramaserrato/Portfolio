import { useTranslation } from "react-i18next";
import ProyectoCard from "./components/proyectoCard";
import BankSheetsModal from "./modales/BankSheetsModal";
import MovieReviewsModal from "./modales/MovieReviewsModal";

export function Proyectos({ onSelect }) {
  const { t } = useTranslation();

  const proyectos = [
    {
      titulo: "BankSheets",
      descripcion: t("proyectos.banksheets.descripcion"),
      stack: ["PostgreSQL", "Python", "IA", "React"],
      demo: "https://banksheets.online",
      imagen: "/bankSheets/banksheets1.jpg",
      modal: BankSheetsModal,
    },
    {
      titulo: "MovieReviews",
      descripcion: t("proyectos.moviereviews.descripcion"),
      stack: ["FastAPI", "Python", "IA / ML", "Svelte"],
      imagen: "/movieReviews/movieReviews1.jpg",
      modal: MovieReviewsModal,
    },
  ];

  return (
    <section id="proyectos" className="section">
      <h2 className="anim-fade-up anim-delay-4 font-display text-xl font-semibold text-(--color-text) mb-6">
        {t("proyectos.titulo")}
      </h2>
      <div className="anim-fade-up anim-delay-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.titulo}
            onClick={(e) => {
              if (e.target.closest("a")) return;
              onSelect(proyecto);
            }}
            className="cursor-pointer"
          >
            <ProyectoCard proyecto={proyecto} />
          </div>
        ))}
      </div>
    </section>
  );
}