import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const TABS = [
  { id: "proyectos", key: "header.proyectos" },
  { id: "sobre-mi", key: "header.sobreMi" },
  { id: "contacto", key: "header.contacto" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const esEspanol = i18n.language === "es";
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleIdioma = () => i18n.changeLanguage(esEspanol ? "en" : "es");

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-(--color-text)">ramaserrato.dev</span>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
            >
              {t(tab.key)}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleIdioma}
            className="ml-2 text-xs font-mono-custom font-medium px-2.5 py-1 rounded-full border border-white/10 text-(--color-text-secondary) hover:text-(--color-accent) hover:border-(--color-accent)/50 transition-all cursor-pointer"
          >
            {esEspanol ? "EN" : "ES"}
          </button>
        </nav>

        {/* Mobile: idioma + hamburguesa */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            type="button"
            onClick={toggleIdioma}
            className="text-xs font-mono-custom font-medium px-2.5 py-1 rounded-full border border-white/10 text-(--color-text-secondary) hover:text-(--color-accent) transition-all cursor-pointer"
          >
            {esEspanol ? "EN" : "ES"}
          </button>
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="text-(--color-text-secondary) hover:text-(--color-accent) transition-colors cursor-pointer"
          >
            {menuAbierto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu desplegable */}
      {menuAbierto && (
        <nav className="sm:hidden flex flex-col px-6 pb-4 pt-4 gap-4 border-t border-white/5">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => setMenuAbierto(false)}
              className="text-(--color-text-secondary) hover:text-(--color-accent) transition-colors text-sm"
            >
              {t(tab.key)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}