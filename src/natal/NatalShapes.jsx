// Peças pequenas do tema de Natal, reaproveitadas no Hero e na seção especial.
// Todas são decorativas: quem usa coloca aria-hidden no elemento de fora.

export const NATAL_COLORS = {
  red: "#c8102e",
  redDark: "#9b0f26",
  redLight: "#e2384f",
  gold: "#e8b45a",
  goldLight: "#f6d58c",
  green: "#7f9443",
  greenDark: "#5f7230",
  holly: "#3f6b3a",
};

// Laço de fita vermelha (o mesmo do selo "Coleção especial de Natal")
export function Bow({ width = 48 }) {
  const { red, redDark } = NATAL_COLORS;
  return (
    <svg width={width} height={(width * 36) / 56} viewBox="0 0 56 36">
      <path d="M26 16 L16 34 L21 31 L24 35 L30 17 Z" fill={redDark} />
      <path d="M30 16 L40 34 L35 31 L32 35 L26 17 Z" fill={redDark} />
      <path d="M28 14 C18 2 3 1 4 10 C5 20 20 20 28 14 Z" fill={red} />
      <path d="M28 14 C38 2 53 1 52 10 C51 20 36 20 28 14 Z" fill={red} />
      <path d="M28 14 C20 7 10 6 10 10 C11 15 21 16 28 14 Z" fill={redDark} opacity=".45" />
      <path d="M28 14 C36 7 46 6 46 10 C45 15 35 16 28 14 Z" fill={redDark} opacity=".45" />
      <rect x="23.5" y="9" width="9" height="10" rx="3.5" fill={redDark} />
    </svg>
  );
}

export function Heart({ size = 14, color = "#f064a6" }) {
  return (
    <svg width={size} height={size} viewBox="-12 -10 24 20">
      <path d="M0 -3 C-4 -9 -12 -6 -10 0 C-8 5 0 9 0 9 C0 9 8 5 10 0 C12 -6 4 -9 0 -3 Z" fill={color} />
    </svg>
  );
}

export function Sparkle({ color = NATAL_COLORS.gold }) {
  return (
    <svg viewBox="-10 -10 20 20">
      <path d="M0 -10 C1 -3 3 -1 10 0 C3 1 1 3 0 10 C-1 3 -3 1 -10 0 C-3 -1 -1 -3 0 -10 Z" fill={color} />
    </svg>
  );
}

// Bola de Natal (o fio é desenhado em CSS, para o comprimento mudar com a tela)
export function Ornament({ variant = "heart" }) {
  const { red, redDark, gold, goldLight } = NATAL_COLORS;
  return (
    <svg viewBox="-22 -30 44 54">
      <path d="M-3 -30 C-3 -36 3 -36 3 -30" fill="none" stroke={gold} strokeWidth="1.6" />
      <rect x="-6" y="-29" width="12" height="8" rx="2" fill={gold} />
      <path d="M-5 -26 H5" stroke={goldLight} strokeWidth="1.2" />
      <circle r="20" fill={red} />
      <path d="M-20 0 A20 20 0 0 0 20 0 A20 9 0 0 1 -20 0 Z" fill={redDark} opacity=".35" />
      {variant === "heart" ? (
        <path d="M0 -2 C-4 -8 -11 -5 -9 1 C-7 5 0 9 0 9 C0 9 7 5 9 1 C11 -5 4 -8 0 -2 Z" fill="#f7a6cd" opacity=".9" />
      ) : (
        <g fill="none" stroke={goldLight} strokeWidth="1.8" strokeLinecap="round">
          <path d="M-18 -6 Q0 -14 18 -6" />
          <path d="M-19.5 4 Q0 -4 19.5 4" />
          <path d="M-16 12 Q0 5 16 12" />
        </g>
      )}
      <ellipse cx="-8" cy="-10" rx="4.5" ry="3" fill="#fff" opacity=".45" transform="rotate(-35 -8 -10)" />
    </svg>
  );
}

// Raminho de azevinho com frutinhas vermelhas
export function Holly({ x, y, flip = false }) {
  const { holly, red } = NATAL_COLORS;
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
      <path d="M0 0 C-6 -10 -22 -14 -30 -8 C-26 -6 -26 -2 -30 0 C-24 2 -24 6 -26 8 C-16 10 -4 6 0 0 Z" fill={holly} />
      <path d="M0 0 C8 -12 22 -22 30 -18 C26 -14 28 -10 24 -8 C28 -4 24 0 22 2 C14 6 4 4 0 0 Z" fill="#4f7d45" />
      <path d="M0 0 C-14 -4 -22 -6 -28 -6 M0 0 C10 -6 18 -12 26 -15" stroke="#2f5229" strokeWidth="1" fill="none" opacity=".6" />
      <circle cx="-3" cy="-6" r="4.5" fill={red} />
      <circle cx="5" cy="-4" r="4.5" fill={red} />
      <circle cx="1" cy="-12" r="4.5" fill={red} />
      <circle cx="-4.5" cy="-7.5" r="1.4" fill="#fff" opacity=".6" />
      <circle cx="3.5" cy="-5.5" r="1.4" fill="#fff" opacity=".6" />
      <circle cx="-0.5" cy="-13.5" r="1.4" fill="#fff" opacity=".6" />
    </g>
  );
}
