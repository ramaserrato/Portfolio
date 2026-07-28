import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProyectoCard({ proyecto }) {
  return (
    <div className="relative bg-(--color-bg-card) rounded-2xl border border-white/10 flex flex-col overflow-hidden group hover:border-(--color-accent)/50 transition-all duration-500">

      {/* Imagen — oculta por defecto, aparece con altura en hover */}
      {proyecto.imagen && (
        <div className="h-0 group-hover:h-48 transition-all duration-500 overflow-hidden shrink-0">
          <img
            src={proyecto.imagen}
            alt={proyecto.titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Contenido */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-(--color-text)">{proyecto.titulo}</h3>
          <p className="text-sm text-(--color-text-secondary) mt-2 leading-relaxed">
            {proyecto.descripcion}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {proyecto.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono-custom text-xs font-medium px-2.5 py-1 rounded-full bg-(--color-accent-secondary)/15 text-(--color-accent-secondary)"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-2">
          {proyecto.repo && (
            <a
              href={proyecto.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-(--color-text-secondary) hover:text-(--color-accent)"
            >
              <GithubIcon size={16} />
              Repositorio
            </a>
          )}
          {proyecto.demo && (
            <a
              href={proyecto.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-(--color-text-secondary) hover:text-(--color-accent)"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}