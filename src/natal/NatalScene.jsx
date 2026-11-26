import { useEffect, useRef, useState } from "react";
import { Holly, NATAL_COLORS as C } from "./NatalShapes.jsx";

// Cena de Natal do topo: a bancada de confeitaria com a árvore iluminada atrás,
// docinhos na boleira, cupcake com cereja e o presente com laço vermelho.
// Na frente da bancada, um varal de luzinhas.
// SVG + CSS (classes "natal-*" em natal.css), sem bibliotecas. Mesmas regras da HeroScene:
// quem tem classe animada não tem atributo transform (a posição fica num <g> de fora),
// a animação começa quando a cena aparece e pausa quando sai; com movimento reduzido, fica parada.

function Sprinkle({ x, y, r = 0, color }) {
  return <rect x={x - 2.4} y={y - 1.1} width="4.8" height="2.2" rx="1.1" fill={color} transform={`rotate(${r} ${x} ${y})`} />;
}

// Luzinha: halo amarelo + miolo claro. "--i" desencontra o piscar de cada uma.
function Light({ x, y, i }) {
  return (
    <g transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>
      <g className="natal-light" style={{ "--i": i }}>
        <circle r="5.5" fill="#ffd76a" opacity=".35" />
        <circle r="2.3" fill="#fff6cf" />
      </g>
    </g>
  );
}

// Pontos ao longo de uma curva quadrática (x0,y0) -> (x1,y1) com controle (cx,cy)
function along([x0, y0], [cx, cy], [x1, y1], count, from = 0.1, to = 0.9) {
  return Array.from({ length: count }, (_, k) => {
    const t = count === 1 ? 0.5 : from + ((to - from) * k) / (count - 1);
    const u = 1 - t;
    return [u * u * x0 + 2 * u * t * cx + t * t * x1, u * u * y0 + 2 * u * t * cy + t * t * y1];
  });
}

// Árvore: quatro andares, de baixo para cima
const TREE_X = 215;
const TIERS = [
  { apex: 196, bottom: 318, hw: 120 },
  { apex: 146, bottom: 262, hw: 98 },
  { apex: 100, bottom: 206, hw: 76 },
  { apex: 62, bottom: 148, hw: 52 },
];

function tierPath({ apex, bottom, hw }, side) {
  const x = TREE_X;
  const mid = apex + (bottom - apex) * 0.45;
  const left = `C${x - hw * 0.35} ${mid} ${x - hw * 0.8} ${bottom - 10} ${x - hw} ${bottom} Q${x - hw / 2} ${bottom + 12} ${x} ${bottom + 4}`;
  const right = `Q${x + hw / 2} ${bottom + 12} ${x + hw} ${bottom} C${x + hw * 0.8} ${bottom - 10} ${x + hw * 0.35} ${mid} ${x} ${apex}`;
  if (side === "shade") {
    return `M${x} ${apex} C${x + hw * 0.35} ${mid} ${x + hw * 0.8} ${bottom - 10} ${x + hw} ${bottom} Q${x + hw / 2} ${bottom + 12} ${x} ${bottom + 4} Z`;
  }
  return `M${x} ${apex} ${left} ${right} Z`;
}

// Fio de luz em cada andar (um pouco acima da barra do andar)
const TREE_STRANDS = TIERS.map(({ bottom, hw }, k) => {
  const y = bottom - 14 - k * 2;
  return { from: [TREE_X - hw * 0.82, y - 8], ctrl: [TREE_X, y + 18], to: [TREE_X + hw * 0.82, y - 14], count: 4 + (3 - k) };
});

// Varal de luzinhas na frente da bancada: três "barrigas"
const GARLAND = [
  [[42, 336], [128, 380], [214, 336]],
  [[214, 336], [300, 380], [386, 336]],
  [[386, 336], [472, 380], [558, 336]],
];

const TREE_BALLS = [
  { x: 215, y: 92, r: 5, fill: C.red },
  { x: 192, y: 134, r: 6, fill: C.red },
  { x: 240, y: 138, r: 6, fill: "#f4a3bd" },
  { x: 232, y: 186, r: 7, fill: C.red },
  { x: 172, y: 200, r: 6.5, fill: "#f4a3bd" },
  { x: 268, y: 206, r: 6, fill: C.gold },
  { x: 154, y: 252, r: 7, fill: C.red },
  { x: 214, y: 246, r: 7, fill: "#f4a3bd" },
  { x: 292, y: 262, r: 7, fill: C.red },
  { x: 312, y: 302, r: 6.5, fill: "#f4a3bd" },
];

const TREE_BOWS = [
  { x: 214, y: 118, s: 0.42 },
  { x: 166, y: 168, s: 0.5 },
  { x: 262, y: 164, s: 0.5 },
  { x: 196, y: 222, s: 0.55 },
  { x: 258, y: 232, s: 0.55 },
  { x: 288, y: 290, s: 0.5 },
];

function BowShape({ x, y, s }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-28 -14)`}>
      <path d="M26 16 L16 34 L21 31 L24 35 L30 17 Z" fill={C.redDark} />
      <path d="M30 16 L40 34 L35 31 L32 35 L26 17 Z" fill={C.redDark} />
      <path d="M28 14 C18 2 3 1 4 10 C5 20 20 20 28 14 Z" fill={C.red} />
      <path d="M28 14 C38 2 53 1 52 10 C51 20 36 20 28 14 Z" fill={C.red} />
      <rect x="23.5" y="9" width="9" height="10" rx="3.5" fill={C.redDark} />
    </g>
  );
}

function Ball({ x, y, r, fill }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} />
      <circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.3} fill="#fff" opacity=".5" />
    </g>
  );
}

function Brigadeiro({ x, y, index }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="natal-sweet" style={{ "--i": index }}>
        <path d="M-16 -12 H16 L12 0 H-12 Z" fill={C.red} />
        <path d="M-9 -11 L-8 -1 M-3 -11 L-2.5 -1 M3 -11 L2.5 -1 M9 -11 L8 -1" stroke="#fff" strokeOpacity=".55" strokeWidth="1.1" />
        <circle cy="-23" r="13.5" fill="#5b3a29" />
        <circle cx="-5" cy="-28" r="3" fill="#fff" opacity=".2" />
        <Sprinkle x={-4} y={-31} r={-25} color="#f7a6cd" />
        <Sprinkle x={5} y={-29} r={30} color="#fffbf8" />
        <Sprinkle x={-7} y={-21} r={40} color={C.goldLight} />
        <Sprinkle x={6} y={-19} r={-35} color={C.redLight} />
      </g>
    </g>
  );
}

function SmallGift({ x, y, w, h, box, ribbon }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill={box} />
      <rect x={x + w / 2 - 3} y={y} width="6" height={h} fill={ribbon} />
      <rect x={x} y={y + h * 0.3} width={w} height="5" fill={ribbon} />
      <path d={`M${x + w / 2} ${y} c-8 -9 -16 -4 -10 0 Z M${x + w / 2} ${y} c8 -9 16 -4 10 0 Z`} fill={ribbon} />
    </g>
  );
}

const SCALLOPS = `M34 328 ${"q14 12 28 0 ".repeat(19)}Z`;

export default function NatalScene({ className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let lightIndex = 0;

  return (
    <div ref={ref} className={`natal-scene ${visible ? "is-visible" : ""} ${className}`}>
      <svg
        viewBox="0 28 600 406"
        role="img"
        aria-label="Ilustração de Natal: numa bancada enfeitada com luzinhas, uma árvore de Natal iluminada atrás de docinhos na boleira, um cupcake com cereja e uma caixa de presente com laço vermelho."
      >
        {/* Fundo: arco suave de vitrine */}
        <path d="M268 318 V184 A140 140 0 0 1 548 184 V318 Z" fill="#fbe3ee" opacity=".75" />
        <path d="M282 318 V184 A126 126 0 0 1 534 184 V318" fill="none" stroke="#fff" strokeOpacity=".85" strokeWidth="2" />

        {/* Coração e estrelinhas soltos */}
        <g transform="translate(52 236)">
          <g className="natal-float">
            <path d="M0 -3 C-4 -9 -12 -6 -10 0 C-8 5 0 9 0 9 C0 9 8 5 10 0 C12 -6 4 -9 0 -3 Z" fill={C.red} />
          </g>
        </g>
        <g transform="translate(96 132) scale(1.1)">
          <g className="natal-twinkle" style={{ "--i": 1 }}>
            <path d="M0 -10 C1 -3 3 -1 10 0 C3 1 1 3 0 10 C-1 3 -3 1 -10 0 C-3 -1 -1 -3 0 -10 Z" fill={C.gold} />
          </g>
        </g>
        <g transform="translate(372 104) scale(.8)">
          <g className="natal-twinkle" style={{ "--i": 3 }}>
            <path d="M0 -10 C1 -3 3 -1 10 0 C3 1 1 3 0 10 C-1 3 -3 1 -10 0 C-3 -1 -1 -3 0 -10 Z" fill={C.gold} />
          </g>
        </g>

        {/* Árvore de Natal */}
        <g className="natal-tree">
          {TIERS.map((tier) => (
            <g key={tier.apex}>
              <path d={tierPath(tier)} fill={C.green} />
              <path d={tierPath(tier, "shade")} fill={C.greenDark} opacity=".45" />
            </g>
          ))}
          {TREE_STRANDS.map(({ from, ctrl, to }, k) => (
            <path key={k} d={`M${from} Q${ctrl} ${to}`} fill="none" stroke={C.goldLight} strokeWidth="1" opacity=".7" />
          ))}
          {TREE_BALLS.map((ball) => <Ball key={`${ball.x}-${ball.y}`} {...ball} />)}
          {TREE_BOWS.map((bow) => <BowShape key={`${bow.x}-${bow.y}`} {...bow} />)}
          {TREE_STRANDS.flatMap(({ from, ctrl, to, count }) =>
            along(from, ctrl, to, count).map(([x, y]) => <Light key={`t${lightIndex}`} x={x} y={y} i={lightIndex++} />)
          )}
        </g>

        {/* Estrela no topo, com um brilho que pulsa de leve */}
        <g transform="translate(215 56)">
          <circle className="natal-star-glow" r="22" fill="#ffd76a" opacity=".3" />
          <path d="M0 -20 L5.9 -8.1 L19 -6.2 L9.5 3.1 L11.8 16.2 L0 10 L-11.8 16.2 L-9.5 3.1 L-19 -6.2 L-5.9 -8.1 Z" fill={C.gold} stroke="#d89b3c" strokeWidth="1" strokeLinejoin="round" />
          <path d="M0 -12 L3 -5 L-1 -3 Z" fill="#fff" opacity=".55" />
        </g>

        {/* Presentinhos no pé da árvore */}
        <g className="natal-tree">
          <SmallGift x={232} y={286} w={38} h={32} box={C.red} ribbon="#fff6f2" />
          <SmallGift x={274} y={296} w={30} h={22} box="#fff6f2" ribbon={C.red} />
          <SmallGift x={66} y={292} w={30} h={26} box="#fff6f2" ribbon={C.red} />
        </g>

        {/* Bancada: tampo claro, barrado rosa, frente chocolate com gavetas */}
        <ellipse cx="300" cy="429" rx="272" ry="5" fill="#9b0f26" opacity=".08" />
        <rect x="34" y="326" width="532" height="98" rx="4" fill="#8b5a3c" />
        <rect x="56" y="352" width="232" height="58" rx="6" fill="none" stroke="#6e4430" strokeWidth="2" />
        <rect x="312" y="352" width="232" height="58" rx="6" fill="none" stroke="#6e4430" strokeWidth="2" />
        <circle cx="172" cy="381" r="4.5" fill="#ead6c6" />
        <circle cx="428" cy="381" r="4.5" fill="#ead6c6" />
        <path d={SCALLOPS} fill="#f7a6cd" />
        <rect x="20" y="314" width="560" height="14" rx="7" fill="#f3e2d6" />
        <rect x="28" y="315" width="544" height="2" rx="1" fill="#fff" opacity=".6" />

        {/* Varal de luzinhas */}
        {GARLAND.map(([a, c, b], k) => (
          <path key={k} d={`M${a} Q${c} ${b}`} fill="none" stroke="#5b3a29" strokeWidth="1.2" opacity=".55" />
        ))}
        {GARLAND.flatMap(([a, c, b]) =>
          along(a, c, b, 7, 0.07, 0.93).map(([x, y]) => <Light key={`g${lightIndex}`} x={x} y={y} i={lightIndex++} />)
        )}

        {/* Azevinho nas pontas do tampo */}
        <Holly x={40} y={318} />
        <Holly x={566} y={318} flip />

        {/* Sombras dos objetos no tampo */}
        <ellipse cx="145" cy="316" rx="36" ry="3" fill="#5b3a29" opacity=".12" />
        <ellipse cx="360" cy="316" rx="32" ry="3" fill="#5b3a29" opacity=".12" />
        <ellipse cx="486" cy="316" rx="54" ry="3" fill="#5b3a29" opacity=".12" />

        {/* 1. Docinhos na boleira */}
        <g className="natal-stand">
          <ellipse cx="145" cy="314" rx="30" ry="5" fill="#f3e2db" />
          <rect x="139" y="270" width="12" height="44" rx="3" fill="#ecdcd4" />
          <ellipse cx="145" cy="268" rx="64" ry="8" fill="#fffbf8" stroke="#ecdcd4" strokeWidth="1.5" />
        </g>
        <Brigadeiro x={113} y={266} index={0} />
        <Brigadeiro x={145} y={266} index={1} />
        <Brigadeiro x={177} y={266} index={2} />

        {/* 2. Cupcake com chantili rosa e cereja */}
        <g transform="translate(60 18)">
          <g className="natal-cupcake">
            <path d="M266 252 H334 L325 300 H275 Z" fill={C.red} />
            <path d="M277 254 L281 298 M288 254 L290.5 298 M300 254 V298 M312 254 L309.5 298 M323 254 L319 298" stroke="#fff" strokeOpacity=".6" strokeWidth="1.6" />
            <rect x="260" y="236" width="80" height="22" rx="11" fill="#f7a6cd" />
            <path d="M270 243 q10 -4 22 -3" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="269" y="219" width="62" height="21" rx="10.5" fill="#f9b5d4" />
            <path d="M278 226 q8 -3 17 -2" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="280" y="203" width="40" height="20" rx="10" fill="#fbc4dd" />
            <path d="M290 206 Q300 184 310 206 Z" fill="#fbc4dd" />
            <Sprinkle x={275} y={247} r={-20} color="#fffbf8" />
            <Sprinkle x={293} y={251} r={25} color={C.red} />
            <Sprinkle x={318} y={245} r={-35} color={C.greenDark} />
            <Sprinkle x={329} y={250} r={15} color="#fffbf8" />
            <Sprinkle x={286} y={230} r={35} color={C.red} />
            <Sprinkle x={313} y={231} r={-20} color={C.greenDark} />
            <Sprinkle x={306} y={213} r={10} color="#fffbf8" />
            <path d="M300 183 q1 -7 7 -9" fill="none" stroke="#5b3a29" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="300" cy="189" r="7.5" fill={C.red} />
            <circle cx="297.5" cy="186.5" r="2" fill="#fff" opacity=".55" />
          </g>
        </g>

        {/* 3. Presente com corações, fita e laço vermelhos e a tag de coração */}
        <g transform="translate(16 18)">
          <g className="natal-gift">
            <g className="natal-gift-float">
              <rect x="422" y="236" width="96" height="64" rx="4" fill="#fff6f2" stroke="#f3d3e2" strokeWidth="1.5" />
              {[[438, 254], [450, 284], [498, 258], [506, 284], [440, 292]].map(([x, y]) => (
                <path key={`${x}${y}`} transform={`translate(${x} ${y}) scale(.4)`} d="M0 -3 C-4 -9 -12 -6 -10 0 C-8 5 0 9 0 9 C0 9 8 5 10 0 C12 -6 4 -9 0 -3 Z" fill="#f7a6cd" />
              ))}
              <rect x="414" y="220" width="112" height="20" rx="4" fill="#fff1ec" stroke="#f3d3e2" strokeWidth="1.5" />
              <rect x="463" y="220" width="14" height="80" fill={C.red} />
              <g className="natal-bow">
                <path d="M466 222 L452 254 L459 250 L463 257 L472 224 Z" fill={C.redDark} />
                <path d="M474 222 L488 254 L481 250 L477 257 L468 224 Z" fill={C.redDark} />
                <path d="M470 218 C450 194 422 200 430 218 C436 232 458 228 470 218 Z" fill={C.red} />
                <path d="M470 218 C490 194 518 200 510 218 C504 232 482 228 470 218 Z" fill={C.red} />
                <path d="M470 218 C456 206 441 208 444 216 C447 222 460 222 470 218 Z" fill={C.redDark} opacity=".4" />
                <path d="M470 218 C484 206 499 208 496 216 C493 222 480 222 470 218 Z" fill={C.redDark} opacity=".4" />
                <rect x="463" y="210" width="14" height="15" rx="5" fill={C.redDark} />
              </g>
              <path d="M518 244 L536 258" stroke="#cdb9ad" strokeWidth="1.2" />
              <g transform="translate(546 266) rotate(16)">
                <path d="M-12 -9 H8 L14 0 L8 9 H-12 Z" fill="#fbe3ee" stroke="#e3cbb8" />
                <circle cx="-7" cy="0" r="1.8" fill="#fffbf8" />
                <path d="M3 -1.5 C1 -4.5 -3 -3 -2 0 C-1 2.5 3 4.5 3 4.5 C3 4.5 7 2.5 8 0 C9 -3 5 -4.5 3 -1.5 Z" fill={C.red} />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
