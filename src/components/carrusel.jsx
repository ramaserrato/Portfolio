import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Carrusel({ imagenes }) {
  const [actual, setActual] = useState(0);
  const [ampliada, setAmpliada] = useState(false);
  const [direccion, setDireccion] = useState("derecha");
  const [animando, setAnimando] = useState(false);

  useEffect(() => {
    if (ampliada) return;
    if (imagenes[actual].tipo === "video") return; // el video maneja su propio avance con onEnded
    const intervalo = setInterval(() => {
      cambiar((actual + 1) % imagenes.length, "derecha");
    }, 4000);
    return () => clearInterval(intervalo);
  }, [actual, ampliada, imagenes.length]);

  const cambiar = (nuevoIndice, dir) => {
    if (animando || nuevoIndice === actual) return;
    setDireccion(dir);
    setAnimando(true);
    setTimeout(() => {
      setActual(nuevoIndice);
      setAnimando(false);
    }, 300);
  };

  const anterior = () => cambiar((actual - 1 + imagenes.length) % imagenes.length, "izquierda");
  const siguiente = () => cambiar((actual + 1) % imagenes.length, "derecha");

  const { src, epigrafe, tipo } = imagenes[actual];
  const esVideo = tipo === "video";

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="relative w-full group">
          <div
            className="transition-all duration-300"
            style={{
              opacity: animando ? 0 : 1,
              transform: animando
                ? `translateX(${direccion === "derecha" ? "-40px" : "40px"})`
                : "translateX(0)",
            }}
          >
            {esVideo ? (
              <video
                key={src}
                src={src}
                autoPlay
                muted
                playsInline
                onEnded={siguiente}
                className="w-full object-contain rounded-xl border border-white/10"
              />
            ) : (
              <img
                src={src}
                alt={epigrafe}
                onClick={() => setAmpliada(true)}
                className="w-full object-contain object-center cursor-pointer rounded-xl border border-white/10"
              />
            )}
          </div>

          {/* Flechas */}
          <button
            type="button"
            onClick={anterior}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={siguiente}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {imagenes.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => cambiar(i, i > actual ? "derecha" : "izquierda")}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === actual ? "bg-white w-3" : "bg-white/40 w-1.5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Epígrafe */}
        <p
          className="text-s text-(--color-text-secondary) text-center italic transition-all duration-300 whitespace-pre-line"
          style={{ opacity: animando ? 0 : 1 }}
        >
          {epigrafe}
        </p>
      </div>

      {/* Vista ampliada — solo para imágenes */}
      {ampliada && !esVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[60] p-4 gap-3"
          onClick={() => setAmpliada(false)}
        >
          <button
            type="button"
            onClick={() => setAmpliada(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white cursor-pointer"
          >
            <X size={24} />
          </button>
          <img
            src={src}
            alt={epigrafe}
            className="max-w-full max-h-[80vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-sm text-white/60 italic">{epigrafe}</p>
        </div>
      )}
    </>
  );
}