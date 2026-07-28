import { X } from "lucide-react";

export default function Modal({ proyecto, onClose }) {
  if (!proyecto) return null;
  const Contenido = proyecto.modal;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-(--color-bg) border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-(--color-text-secondary) hover:text-(--color-accent) cursor-pointer z-10"
        >
          <X size={20} />
        </button>
        <Contenido onClose={onClose} />
      </div>
    </div>
  );
}