import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Check, FileSpreadsheet } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./components/icons";

const EMAIL = "ramaserrato@gmail.com";
const TELEFONO = "+54 11 6886-9291";
const linkStyle = "flex items-center gap-2 text-sm font-medium text-(--color-text-secondary) hover:text-(--color-accent) cursor-pointer";

function CopiarBoton({ valor, label, mensajeCopiado, icon: Icon, copiado, onCopiar }) {
  return (
    <button type="button" onClick={onCopiar} className={linkStyle}>
      {copiado ? <Check size={18} /> : <Icon size={18} />}
      {copiado ? mensajeCopiado : label}
    </button>
  );
}

function RedSocial({ href, label, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
      <Icon size={18} />
      {label}
    </a>
  );
}

export function Contacto() {
  const { t } = useTranslation();
  const [copiado, setCopiado] = useState(null);

  const copiar = async (valor, campo) => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(campo);
      setTimeout(() => setCopiado(null), 2000);
    } catch (err) {
      console.error(`No se pudo copiar el ${campo}:`, err);
    }
  };

  return (
    <section id="contacto" className="section">
      <h2 className="anim-fade-up anim-delay-4 text-xl font-medium text-(--color-text) mb-4">
        {t("contacto.titulo")}
      </h2>
      <p className="anim-fade-up anim-delay-4 text-(--color-text-secondary) mb-6 max-w-xxl">
        {t("contacto.descripcion")}
      </p>
      <div className="anim-fade-up anim-delay-4 flex flex-col sm:flex-row gap-4">
        <CopiarBoton
          valor={EMAIL}
          label={EMAIL}
          mensajeCopiado={t("contacto.mailCopiado")}
          icon={Mail}
          copiado={copiado === "email"}
          onCopiar={() => copiar(EMAIL, "email")}
        />
        <CopiarBoton
          valor={TELEFONO}
          label={TELEFONO}
          mensajeCopiado={t("contacto.telefonoCopiado")}
          icon={Phone}
          copiado={copiado === "telefono"}
          onCopiar={() => copiar(TELEFONO, "telefono")}
        />
        <RedSocial href="https://github.com/ramaserrato" label="GitHub" icon={GithubIcon} />
        <RedSocial href="https://linkedin.com/in/ramiro-serrato-494a09287" label="LinkedIn" icon={LinkedinIcon} />
        <RedSocial href="https://www.instagram.com/ramaserrato/" label="Instagram" icon={InstagramIcon} />
        <a
          href="../public/RamiroSerratoCV.pdf"
          download="RamiroSerratoCV.pdf"
          className={linkStyle}
        >
          <FileSpreadsheet size={18} />
          {t("contacto.cv")}
        </a>
      </div>
    </section>
  );
}