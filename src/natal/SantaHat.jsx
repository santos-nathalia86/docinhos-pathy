// Gorrinho de Papai Noel em cima do botão flutuante do WhatsApp (decorativo)
export default function SantaHat() {
  return (
    <span className="natal-hat" aria-hidden="true">
      <svg viewBox="0 0 64 52">
        <path d="M8 40 C10 20 22 6 40 6 C52 6 58 14 58 24 C54 20 48 20 46 26 L52 40 Z" fill="#c8102e" />
        <path d="M40 6 C50 6 56 12 57 20 C52 16 47 16 44 22 Z" fill="#9b0f26" opacity=".35" />
        <rect x="4" y="36" width="52" height="13" rx="6.5" fill="#fff" />
        <circle cx="57" cy="27" r="7" fill="#fff" />
      </svg>
    </span>
  );
}
