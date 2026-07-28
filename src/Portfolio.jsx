import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/header";
import Modal from "./components/modal";
import { SobreMi } from "./SobreMi";
import { Contacto } from "./Contacto";
import { Proyectos } from "./Proyectos";

export default function Portfolio() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="relative min-h-screen">
        <Header />

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-10 text-center">
          <h1 className="text-glow anim-fade-up anim-delay-1 font-display text-3xl sm:text-5xl font-bold text-(--color-text)">
            {t("hero.nombre")}
          </h1>
          <h2 className="text-glow anim-fade-up anim-delay-2 font-display text-3xl sm:text-5xl mt-2 font-semibold text-(--color-text)">
            {t("hero.titulo")}
          </h2>
          <p className="anim-fade-up anim-delay-3 text-(--color-text-secondary) mt-3 sm:text-xl max-w-xl mx-auto">
            {t("hero.descripcion")}
          </p>
        </section>

        <Proyectos onSelect={setProyectoSeleccionado} />
        <SobreMi />
        <Contacto />

        <Modal
          proyecto={proyectoSeleccionado}
          onClose={() => setProyectoSeleccionado(null)}
        />
      </div>
    </div>
  );
}