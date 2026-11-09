import { useEffect, useRef, useState } from "react";

// "Um doce feito à mão": pequena cena de bancada de confeitaria.
// Da esquerda para a direita: docinhos prontos na boleira (com um brilho discreto),
// um cupcake sendo confeitado com o saco de confeitar e a caixinha de presente com laço.
// SVG + CSS (classes "scene-*" no global.css), sem bibliotecas.
//
// Regras do SVG animado: quem tem a classe animada NÃO tem atributo transform
// (o CSS sobrescreveria); a posição fica num <g> de fora.
// A sequência começa quando a ilustração aparece na tela e pausa quando sai.
// Com movimento reduzido, a cena aparece pronta e parada.
// "scene-extra" = enfeites que somem no celular.

function Sprinkle({ x, y, r = 0, color }) {
  return <rect x={x - 2.4} y={y - 1.1} width="4.8" height="2.2" rx="1.1" fill={color} transform={`rotate(${r} ${x} ${y})`} />;
}

function Brigadeiro({ x, y, index }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="scene-sweet" style={{ "--i": index }}>
        <path d="M-16 -12 H16 L12 0 H-12 Z" fill="#f064a6" />
        <path d="M-9 -11 L-8 -1 M-3 -11 L-2.5 -1 M3 -11 L2.5 -1 M9 -11 L8 -1" stroke="#fff" strokeOpacity=".5" strokeWidth="1.1" />
        <circle cy="-23" r="13.5" fill="#5b3a29" />
        <circle cx="-5" cy="-28" r="3" fill="#fff" opacity=".2" />
        <Sprinkle x={-4} y={-31} r={-25} color="#f7a6cd" />
        <Sprinkle x={5} y={-29} r={30} color="#fffbf8" />
        <Sprinkle x={-7} y={-21} r={40} color="#fbe3c8" />
        <Sprinkle x={6} y={-19} r={-35} color="#f064a6" />
      </g>
    </g>
  );
}

// Barrado de tecido rosa na frente da bancada (19 ondinhas de 28 unidades)
const SCALLOPS = `M34 312 ${"q14 12 28 0 ".repeat(19)}Z`;

export default function HeroScene({ className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`hero-scene ${visible ? "is-visible" : ""} ${className}`}>
      {/* Só no celular: plaquinha pendurada no alto da vitrine (o arco é desenhado em CSS ali).
          Os fios esticam conforme a altura disponível; em telas baixas ela não aparece. */}
      <div className="scene-window" aria-hidden="true">
        <div className="scene-sign">
          <svg className="scene-sign-strings" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M50 0 L12 100 M50 0 L88 100" fill="none" stroke="#d9c3b4" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="scene-sign-plaque" viewBox="0 0 150 64">
            <rect x="1" y="1" width="148" height="62" rx="14" fill="#fffbf8" stroke="#f3d3e2" strokeWidth="1.5" />
            <circle cx="18" cy="6" r="2.2" fill="#d9c3b4" />
            <circle cx="132" cy="6" r="2.2" fill="#d9c3b4" />
            <text x="75" y="34" textAnchor="middle" fontFamily="Playball, cursive" fontSize="27" fill="#bd2474">Docinhos</text>
            <text x="75" y="53" textAnchor="middle" fontFamily="Playball, cursive" fontSize="15" fill="#6f5c4f">da Pathy</text>
          </svg>
        </div>
      </div>
      <svg
        viewBox="0 24 600 372"
        role="img"
        aria-label="Ilustração animada: numa bancada de confeitaria, um cupcake é confeitado à mão, ao lado de docinhos prontos na boleira e de uma caixinha de presente com laço."
      >
        {/* Fundo: arco suave, como a vitrine de uma boutique */}
        {/* No celular este arco é redesenhado em CSS (mesmas medidas), para crescer com a altura da tela */}
        <g className="scene-arch">
          <path d="M170 300 V170 A130 130 0 0 1 430 170 V300 Z" fill="#fbe3ee" opacity=".7" />
          <path d="M184 300 V170 A116 116 0 0 1 416 170 V300" fill="none" stroke="#fff" strokeOpacity=".8" strokeWidth="2" />
        </g>

        {/* Dois enfeites só: a estrelinha perto do arco e o coração ao lado do presente */}
        <g transform="translate(552 166)">
          <g className="scene-deco scene-deco--1">
            <g className="scene-float">
              <path d="M0 -3 C-4 -9 -12 -6 -10 0 C-8 5 0 9 0 9 C0 9 8 5 10 0 C12 -6 4 -9 0 -3 Z" fill="#f7a6cd" />
            </g>
          </g>
        </g>
        <g transform="translate(226 98) scale(.75)">
          <g className="scene-deco scene-deco--2">
            <g className="scene-float">
              <path d="M0 -10 C1 -3 3 -1 10 0 C3 1 1 3 0 10 C-1 3 -3 1 -10 0 C-3 -1 -1 -3 0 -10 Z" fill="#f7a6cd" />
            </g>
          </g>
        </g>

        {/* Bancada: tampo bege, frente chocolate com gavetas e barrado rosa.
            No celular a frente e o barrado somem ("scene-cabinet") e o tampo vira uma prateleira de vitrine. */}
        <g className="scene-cabinet">
          <ellipse cx="300" cy="389" rx="272" ry="5" fill="#bd2474" opacity=".06" />
          <rect x="34" y="310" width="532" height="72" rx="4" fill="#6b4a36" />
          <rect x="56" y="330" width="232" height="42" rx="6" fill="none" stroke="#5b3a29" strokeWidth="2" />
          <rect x="312" y="330" width="232" height="42" rx="6" fill="none" stroke="#5b3a29" strokeWidth="2" />
          <circle cx="172" cy="351" r="4" fill="#ead6c6" />
          <circle cx="428" cy="351" r="4" fill="#ead6c6" />
          <path d={SCALLOPS} fill="#f7a6cd" />
        </g>
        <ellipse className="scene-shelf-shadow" cx="300" cy="316" rx="262" ry="5" fill="#5b3a29" opacity=".1" />
        <rect x="20" y="298" width="560" height="14" rx="7" fill="#ead6c6" />
        <rect x="28" y="299" width="544" height="2" rx="1" fill="#fff" opacity=".5" />

        {/* Sombras dos objetos no tampo */}
        <ellipse cx="130" cy="300" rx="36" ry="3" fill="#5b3a29" opacity=".12" />
        <ellipse cx="300" cy="300" rx="32" ry="3" fill="#5b3a29" opacity=".12" />
        <ellipse cx="470" cy="300" rx="54" ry="3" fill="#5b3a29" opacity=".12" />

        {/* Granulado espalhado na bancada */}
        <g className="scene-extra">
          <g className="scene-crumbs">
            <Sprinkle x={204} y={305} r={20} color="#f064a6" />
            <Sprinkle x={248} y={307} r={-30} color="#5b3a29" />
            <Sprinkle x={356} y={304} r={40} color="#f7a6cd" />
            <Sprinkle x={380} y={307} r={-15} color="#5b3a29" />
          </g>
        </g>

        {/* 1. Docinhos prontos na boleira */}
        <g className="scene-stand">
          <ellipse cx="130" cy="297" rx="32" ry="5" fill="#f3e2db" />
          <rect x="124" y="252" width="12" height="44" rx="3" fill="#ecdcd4" />
          <ellipse cx="130" cy="250" rx="64" ry="8" fill="#fffbf8" stroke="#ecdcd4" strokeWidth="1.5" />
        </g>
        <Brigadeiro x={98} y={248} index={0} />
        <Brigadeiro x={130} y={248} index={1} />
        <Brigadeiro x={162} y={248} index={2} />
        {/* Brilho sutil no doce pronto */}
        <g transform="translate(184 206)">
          <g className="scene-glint">
            <path d="M0 -9 C1 -3 3 -1 9 0 C3 1 1 3 0 9 C-1 3 -3 1 -9 0 C-3 -1 -1 -3 0 -9 Z" fill="#fff" stroke="#f7a6cd" strokeWidth="1" />
          </g>
        </g>

        {/* Potinho de granulado */}
        <g className="scene-extra">
          <g className="scene-jar">
            <rect x="207" y="264" width="30" height="36" rx="8" fill="#fffbf8" fillOpacity=".8" stroke="#ecdcd4" strokeWidth="1.5" />
            <Sprinkle x={214} y={292} r={20} color="#f064a6" />
            <Sprinkle x={222} y={295} r={-30} color="#5b3a29" />
            <Sprinkle x={230} y={291} r={45} color="#f7a6cd" />
            <Sprinkle x={217} y={285} r={-40} color="#fbe3c8" />
            <Sprinkle x={227} y={284} r={10} color="#f064a6" />
            <Sprinkle x={222} y={278} r={60} color="#5b3a29" />
            <rect x="205" y="256" width="34" height="10" rx="3" fill="#f7a6cd" />
          </g>
        </g>

        {/* 2. Cupcake sendo confeitado: forminha, três voltas de chantili, cereja e confeitos */}
        <g className="scene-cupcake">
          <path d="M266 252 H334 L325 300 H275 Z" fill="#f064a6" />
          <path d="M277 254 L281 298 M288 254 L290.5 298 M300 254 V298 M312 254 L309.5 298 M323 254 L319 298" stroke="#fff" strokeOpacity=".45" strokeWidth="1.6" />
        </g>
        <g className="scene-frost scene-frost--1">
          <rect x="260" y="236" width="80" height="22" rx="11" fill="#f7a6cd" />
          <path d="M270 243 q10 -4 22 -3" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <g className="scene-frost scene-frost--2">
          <rect x="269" y="219" width="62" height="21" rx="10.5" fill="#f9b5d4" />
          <path d="M278 226 q8 -3 17 -2" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <g className="scene-frost scene-frost--3">
          <rect x="280" y="203" width="40" height="20" rx="10" fill="#fbc4dd" />
          <path d="M290 206 Q300 184 310 206 Z" fill="#fbc4dd" />
        </g>
        <g className="scene-cherry">
          <path d="M300 183 q1 -7 7 -9" fill="none" stroke="#5b3a29" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="300" cy="189" r="7" fill="#bd2474" />
          <circle cx="297.5" cy="186.5" r="2" fill="#fff" opacity=".5" />
        </g>
        <g className="scene-topping">
          <Sprinkle x={275} y={247} r={-20} color="#fffbf8" />
          <Sprinkle x={293} y={251} r={25} color="#5b3a29" />
          <Sprinkle x={318} y={245} r={-35} color="#f064a6" />
          <Sprinkle x={329} y={250} r={15} color="#fffbf8" />
          <Sprinkle x={286} y={230} r={35} color="#f064a6" />
          <Sprinkle x={313} y={231} r={-20} color="#5b3a29" />
          <Sprinkle x={306} y={213} r={10} color="#fffbf8" />
        </g>

        {/* Saco de confeitar: entra e faz pequenas voltas, como quem decora à mão */}
        <g transform="translate(331 197) rotate(28)">
          <g className="scene-bag">
            <g className="scene-bag-move">
              <path d="M-5 -13 H5 L2 0 H-2 Z" fill="#cdb9ad" />
              <path d="M-7 -13 L-27 -84 Q0 -96 27 -84 L7 -13 Z" fill="#fffbf8" stroke="#ecdcd4" strokeWidth="1.5" />
              <path d="M-7 -13 L-16 -46 Q0 -52 16 -46 L7 -13 Z" fill="#f7a6cd" opacity=".85" />
              <ellipse cy="-89" rx="12" ry="4" fill="#f3e2db" />
              <rect x="-4" y="-99" width="8" height="9" rx="3" fill="#f064a6" />
            </g>
          </g>
        </g>

        {/* 3. Caixinha de presente: a fita desce e o laço se fecha por último.
            Depois, o presente inteiro flutua bem de leve ("scene-gift"). */}
        <g className="scene-gift">
        <g className="scene-box">
          <rect x="422" y="236" width="96" height="64" rx="4" fill="#fffbf8" stroke="#f3d3e2" strokeWidth="1.5" />
          <circle cx="438" cy="254" r="3" fill="#fbe3ee" />
          <circle cx="450" cy="284" r="3" fill="#fbe3ee" />
          <circle cx="498" cy="258" r="3" fill="#fbe3ee" />
          <circle cx="506" cy="284" r="3" fill="#fbe3ee" />
          <rect x="414" y="220" width="112" height="20" rx="4" fill="#fdeaf3" stroke="#f3d3e2" strokeWidth="1.5" />
        </g>
        <g className="scene-ribbon">
          <rect x="463" y="220" width="14" height="80" fill="#f064a6" />
        </g>
        <g className="scene-bow">
          <g className="scene-tails">
            <path d="M466 222 L452 254 L459 250 L463 257 L472 224 Z" fill="#bd2474" />
            <path d="M474 222 L488 254 L481 250 L477 257 L468 224 Z" fill="#bd2474" />
          </g>
          <g className="scene-loop scene-loop--l">
            <path d="M470 218 C450 196 424 202 432 218 C438 230 458 226 470 218 Z" fill="#f064a6" />
            <path d="M470 218 C456 206 441 208 444 216 C447 222 460 222 470 218 Z" fill="#bd2474" opacity=".35" />
          </g>
          <g className="scene-loop scene-loop--r">
            <path d="M470 218 C490 196 516 202 508 218 C502 230 482 226 470 218 Z" fill="#f064a6" />
            <path d="M470 218 C484 206 499 208 496 216 C493 222 480 222 470 218 Z" fill="#bd2474" opacity=".35" />
          </g>
          <g className="scene-knot">
            <rect x="463" y="211" width="14" height="14" rx="5" fill="#bd2474" />
          </g>
        </g>
        <g className="scene-tag">
          <path d="M518 244 L536 258" stroke="#cdb9ad" strokeWidth="1.2" />
          <g transform="translate(546 266) rotate(16)">
            <path d="M-12 -9 H8 L14 0 L8 9 H-12 Z" fill="#f3e2db" stroke="#e3cbb8" />
            <circle cx="-7" cy="0" r="1.8" fill="#fffbf8" />
            <path d="M3 -1.5 C1 -4.5 -3 -3 -2 0 C-1 2.5 3 4.5 3 4.5 C3 4.5 7 2.5 8 0 C9 -3 5 -4.5 3 -1.5 Z" fill="#f064a6" />
          </g>
        </g>
        </g>
      </svg>
    </div>
  );
}
