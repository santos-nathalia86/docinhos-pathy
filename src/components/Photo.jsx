import { useState } from "react";

// Mostra a foto ou, se ela não existir ou falhar, um placeholder identificado.
export default function Photo({ src, alt, label, position, loading = "lazy", className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`photo photo-placeholder ${className}`} role="img" aria-label={`Foto temporária: ${label ?? "imagem a definir"}`}>
        <span>Foto temporária</span>
        {label && <strong>{label}</strong>}
        <small>Substituir pela foto real</small>
      </div>
    );
  }

  return (
    <img
      className={`photo ${className}`}
      src={src}
      alt={alt}
      loading={loading}
      style={position ? { objectPosition: position } : undefined}
      onError={() => setFailed(true)}
    />
  );
}
