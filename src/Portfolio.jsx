import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/header";
import Modal from "./components/modal";
import { SobreMi } from "./SobreMi";
import { Contacto } from "./Contacto";
import { Proyectos } from "./Proyectos";
import BackgroundFX from "./components/BackgroundFX";

export default function Portfolio() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <Header />

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-14 text-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[min(90vw,680px)] rounded-full bg-(--color-accent)/10 blur-[140px]" />
        <h1 className="relative text-glow anim-fade-up anim-delay-1 font-display text-3xl sm:text-6xl font-bold tracking-tight text-(--color-text)">
          {t("hero.nombre")}
        </h1>
        <h2 className="relative text-glow anim-fade-up anim-delay-2 font-display text-3xl sm:text-6xl mt-2 font-semibold tracking-tight text-(--color-text)">
          {t("hero.titulo")}
        </h2>
        <p className="relative anim-fade-up anim-delay-3 text-(--color-text-secondary) mt-4 sm:text-xl max-w-2xl mx-auto leading-relaxed">
          {t("hero.descripcion")}
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-2 anim-fade-up anim-delay-3">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono-custom text-(--color-text-terciary) backdrop-blur-sm">Fullstack</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono-custom text-(--color-text-terciary) backdrop-blur-sm">React • Svelte</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono-custom text-(--color-text-terciary) backdrop-blur-sm">FastAPI • Python</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono-custom text-(--color-text-terciary) backdrop-blur-sm">IA aplicada</span>
        </div>
      </section>

      <Proyectos onSelect={setProyectoSeleccionado} />
      <SobreMi />
      <Contacto />

      <Modal
        proyecto={proyectoSeleccionado}
        onClose={() => setProyectoSeleccionado(null)}
      />
    </div>
  );
}