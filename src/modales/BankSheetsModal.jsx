import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import Carrusel from "../components/carrusel";

export default function BankSheetsModal() {
  const { t } = useTranslation();
  const [expandido, setExpandido] = useState(false);

  const imagenes = [
    { src: "/bankSheets/banksheets1.jpg", epigrafe: t("banksheets.epigrafe1") },
    { src: "/bankSheets/dashboard.mp4", epigrafe: t("banksheets.epigrafe2"), tipo: "video" },
    { src: "/bankSheets/extract-pdf.mp4", epigrafe: t("banksheets.epigrafe3"), tipo: "video" },
    { src: "/bankSheets/conciliacion.mp4", epigrafe: t("banksheets.epigrafe4"), tipo: "video" },
    { src: "/bankSheets/inversiones.mp4", epigrafe: t("banksheets.epigrafe5"), tipo: "video" },
  ];

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="pr-8">
        <h2 className="font-display text-2xl font-bold text-(--color-text)">BankSheets</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Python", "FastAPI", "IA", "Node", "TypeScript", "React", "Vite", "Docker", "PostgreSQL", "Redis", "Stripe"].map((tech) => (
            <span key={tech} className="font-mono-custom text-xs px-2.5 py-1 rounded-full bg-(--color-accent-secondary)/15 text-(--color-accent-secondary)">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <p className="text-(--color-text-secondary) leading-relaxed text-sm text-justify">
        <span className="text-(--color-accent-secondary)">BankSheets</span>{" "}{t("banksheets.intro")}{" "}
        <span className="text-(--color-accent-secondary)">{t("banksheets.materia")}</span>{", "}
        {t("banksheets.intro2")}{" "}
        <span className="text-(--color-accent-secondary)">{t("banksheets.redituable")}</span>{" "}
        {t("banksheets.intro3")}<br /><br />
        {t("banksheets.parrafo2")}{" "}
        <span className="text-(--color-accent-secondary)">{t("banksheets.pdfs")}</span>{". "}
        {t("banksheets.parrafo2b")}{" "}
        <span className="text-(--color-accent-secondary)">BankSheets</span>{", "}
        {t("banksheets.parrafo2c")}

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
            {t("banksheets.esta")}{" "}
            <span className="text-(--color-accent-secondary)">{t("banksheets.motor")}</span>{" "}
            {t("banksheets.parrafo3")}{" "}
            <span className="text-(--color-accent-secondary)">pandas</span>{" "}{t("banksheets.parrafo3b") === "y" ? "y" : "and"}{" "}
            <span className="text-(--color-accent-secondary)">pdfplumber</span>{", "}
            {t("banksheets.parrafo3b")}
            <br />1.{" "}<span className="text-(--color-accent-secondary)">{t("banksheets.tarea1titulo")}</span>{": "}{t("banksheets.tarea1desc")}
            <br />2.{" "}<span className="text-(--color-accent-secondary)">{t("banksheets.tarea2titulo")}</span>{": "}{t("banksheets.tarea2desc")}
            <br />3.{" "}<span className="text-(--color-accent-secondary)">{t("banksheets.tarea3titulo")}</span>{": "}{t("banksheets.tarea3desc")}
            <br /><br />
            {t("banksheets.parrafo4")}{" "}
            <span className="text-(--color-accent-secondary)">React + TypeScript</span>{" "}
            {t("banksheets.parrafo4b")}{" "}
            <span className="text-(--color-accent-secondary)">PostgreSQL</span>{" "}{t("banksheets.parrafo3b") === "y" ? "y" : "and"}{" "}
            <span className="text-(--color-accent-secondary)">Redis</span>{", "}
            {t("banksheets.parrafo4c")}{" "}
            <span className="text-(--color-accent-secondary)">Stripe</span>{"."}
          </>
        )}
      </p>

      <Carrusel imagenes={imagenes} />

      <div className="flex gap-4 pt-2 border-t border-white/10">
        <a
          href="https://banksheets.online"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-(--color-text-secondary) hover:text-(--color-accent)"
        >
          <ExternalLink size={16} />
          {t("modal.pagina")}
        </a>
      </div>
    </div>
  );
}