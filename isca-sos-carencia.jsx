import { useState, useEffect } from "react";

function useFonts() {
  useEffect(() => {
    const l = document.createElement("link");
    l.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400;1,600&family=Nunito:wght@300;400;500;600;700&display=swap";
    l.rel = "stylesheet";
    document.head.appendChild(l);
  }, []);
}

const P = { serif: "Playfair Display, serif", sans: "Nunito, sans-serif" };
const ROSE = "#C4848A";
const DARK = "#0D0B0B";
const DIM = "#8a7a74";
const CREAM = "#F0EAE4";

function Btn({ onClick, disabled, children, color = ROSE, style = {} }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      background: disabled ? "#2a2020" : color,
      color: disabled ? "#4a3e3a" : "#fff",
      border: "none", borderRadius: 99, padding: "16px 0",
      fontSize: 15, fontFamily: P.sans, fontWeight: 700,
      cursor: disabled ? "default" : "pointer",
      width: "100%", letterSpacing: 0.4, transition: "all 0.2s", ...style,
    }}>{children}</button>
  );
}

function Tag({ children }) {
  return <p style={{ fontFamily: P.sans, fontSize: 10, letterSpacing: 4, color: ROSE, fontWeight: 700, textTransform: "uppercase", margin: "0 0 14px" }}>{children}</p>;
}

function Step({ n, total }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ background: "#2a1a1a", borderRadius: 99, height: 3 }}>
        <div style={{ width: `${(n / total) * 100}%`, background: ROSE, height: "100%", borderRadius: 99, transition: "width 0.5s" }} />
      </div>
      <p style={{ fontFamily: P.sans, fontSize: 11, color: "#4a3a3a", textAlign: "right", marginTop: 6 }}>Passo {n} de {total}</p>
    </div>
  );
}

// ─── COVER ───────────────────────────────────────────────────────────────────
function Cover({ onStart }) {
  return (
    <div style={{ minHeight: "100vh", background: DARK, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, #C4848A18 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 400, width: "100%", textAlign: "center", position: "relative" }}>
        <p style={{ fontFamily: P.sans, fontSize: 10, letterSpacing: 4, color: ROSE, fontWeight: 700, marginBottom: 24 }}>PROTOCOLO GRATUITO</p>
        <h1 style={{ fontFamily: P.serif, fontSize: 36, fontWeight: 800, color: CREAM, lineHeight: 1.2, marginBottom: 16 }}>
          Saia da angústia<br/>agora.
        </h1>
        <div style={{ width: 40, height: 2, background: ROSE, margin: "0 auto 20px" }} />
        <p style={{ fontFamily: P.serif, fontSize: 16, fontStyle: "italic", color: DIM, lineHeight: 1.75, marginBottom: 16 }}>
          Aquele aperto no peito. A necessidade que não para. A vontade de mandar mensagem mesmo sabendo que não devia.
        </p>
        <p style={{ fontFamily: P.sans, fontSize: 14, color: "#5a4a4a", lineHeight: 1.75, marginBottom: 40 }}>
          Em 5 minutos você vai regular isso — sem precisar entender nada, sem precisar ser forte. Só fazer.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
          {[
            ["01", "Para a espiral agora"],
            ["02", "Sente o que está acontecendo no corpo"],
            ["03", "Sai do modo automático"],
            ["04", "Decide de forma consciente"],
          ].map(([n, t]) => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: 14, textAlign: "left" }}>
              <div style={{ width: 32, height: 32, borderRadius: 99, border: "1.5px solid #C4848A44", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: P.serif, color: ROSE, fontSize: 12 }}>{n}</span>
              </div>
              <p style={{ fontFamily: P.sans, fontSize: 14, color: "#6a5a5a", margin: 0 }}>{t}</p>
            </div>
          ))}
        </div>
        <button onClick={onStart} style={{ background: `linear-gradient(135deg, ${ROSE}, #9A80C0)`, color: "#fff", border: "none", borderRadius: 99, padding: "18px 0", fontSize: 16, fontFamily: P.sans, fontWeight: 700, cursor: "pointer", width: "100%", boxShadow: "0 8px 32px rgba(160,100,140,0.28)", letterSpacing: 0.4 }}>
          Quero sair dessa agora
        </button>
        <p style={{ fontFamily: P.sans, fontSize: 11, color: "#3a2a2a", marginTop: 16 }}>Gratuito · 5 minutos · Sem cadastro</p>
      </div>
    </div>
  );
}

// ─── STEP 1: PARE ────────────────────────────────────────────────────────────
function Step1({ onNext }) {
  const [done, setDone] = useState(false);
  return (
    <div style={{ minHeight: "100vh", background: DARK, padding: "48px 24px 60px" }}>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Step n={1} total={4} />
        <Tag>Passo 1 · Pare</Tag>
        <h2 style={{ fontFamily: P.serif, fontSize: 24, fontStyle: "italic", color: CREAM, lineHeight: 1.45, marginBottom: 16 }}>
          Antes de qualquer coisa — interrompa agora.
        </h2>
        <p style={{ fontFamily: P.sans, fontSize: 14, color: DIM, lineHeight: 1.8, marginBottom: 24 }}>
          Quando a carência bate, o corpo entra em modo de busca compulsiva. Você precisa interromper esse estado fisicamente — não mentalmente.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {[
            { n: "01", t: "Levante-se agora. Mesmo que por 10 segundos." },
            { n: "02", t: "Sacuda as mãos com força — como se estivesse jogando algo fora." },
            { n: "03", t: "Diga em voz alta: 'Eu estou aqui. Estou bem. Isso vai passar.'" },
          ].map((item) => (
            <div key={item.n} style={{ background: "#1a1515", borderRadius: 14, padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ fontFamily: P.serif, fontSize: 14, color: ROSE, fontWeight: 600, flexShrink: 0 }}>{item.n}</span>
              <p style={{ fontFamily: P.sans, fontSize: 14, color: "#c0a8a8", lineHeight: 1.7, margin: 0 }}>{item.t}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#1a1010", borderRadius: 16, padding: "18px 20px", marginBottom: 28, border: `1px solid ${ROSE}22` }}>
          <p style={{ fontFamily: P.serif, fontSize: 15, fontStyle: "italic", color: "#e8e0dc", lineHeight: 1.8, margin: 0 }}>
            "A carência não é fraqueza. É o sistema nervoso pedindo regulação. Agora você vai dar isso pra ele."
          </p>
        </div>
        {!done
          ? <Btn onClick={() => setDone(true)}>Fiz os três passos</Btn>
          : <Btn onClick={onNext} color="#9A80C0">Continuar →</Btn>
        }
      </div>
    </div>
  );
}

// ─── STEP 2: SINTA ───────────────────────────────────────────────────────────
function Step2({ onNext }) {
  const [sel, setSel] = useState([]);
  const toggle = v => setSel(s => s.includes(v) ? s.filter(x => x !== v) : [...s, v]);
  const SENSACOES = ["Aperto no peito", "Vazio no estômago", "Garganta fechada", "Agitação nas mãos", "Cabeça acelerada", "Peso nos ombros", "Inquietação no corpo todo", "Coração acelerado"];
  return (
    <div style={{ minHeight: "100vh", background: DARK, padding: "48px 24px 60px" }}>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Step n={2} total={4} />
        <Tag>Passo 2 · Sinta</Tag>
        <h2 style={{ fontFamily: P.serif, fontSize: 22, fontStyle: "italic", color: CREAM, lineHeight: 1.5, marginBottom: 12 }}>
          O que você está sentindo agora no corpo?
        </h2>
        <p style={{ fontFamily: P.sans, fontSize: 13, color: DIM, lineHeight: 1.8, marginBottom: 22 }}>
          Não analise. Não julgue. Só marque o que está presente agora.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {SENSACOES.map(s => {
            const on = sel.includes(s);
            return (
              <button key={s} onClick={() => toggle(s)} style={{ padding: "10px 14px", borderRadius: 99, fontSize: 13, fontFamily: P.sans, border: `1.5px solid ${on ? ROSE : "#3a2020"}`, background: on ? `${ROSE}20` : "#1a1515", color: on ? ROSE : "#6a5a5a", cursor: "pointer", transition: "all 0.15s" }}>
                {s}
              </button>
            );
          })}
        </div>
        {sel.length > 0 && (
          <>
            <div style={{ background: "#1a1010", borderRadius: 16, padding: "18px 20px", marginBottom: 22, border: `1px solid ${ROSE}22` }}>
              <p style={{ fontFamily: P.sans, fontSize: 13, color: DIM, lineHeight: 1.8, margin: "0 0 8px" }}>Agora coloque a mão no lugar que sente mais intensamente.</p>
              <p style={{ fontFamily: P.serif, fontSize: 15, fontStyle: "italic", color: CREAM, lineHeight: 1.75, margin: 0 }}>
                Respire fundo. Expire devagar. Não tente mudar o que sente — só perceba que você consegue estar com isso.
              </p>
            </div>
            <Btn onClick={onNext}>Senti. Continuar →</Btn>
          </>
        )}
      </div>
    </div>
  );
}

// ─── STEP 3: ESTADO ──────────────────────────────────────────────────────────
const ESTADOS = [
  {
    id: "panico",
    label: "Em pânico",
    desc: "Coração acelerado, pensamentos em espiral",
    emoji: "💗",
    instrucao: "Coloque as duas mãos no peito agora.",
    tecnica: [
      "Inspire pelo nariz contando até 4.",
      "Segure por 2 segundos.",
      "Expire pela boca bem devagar contando até 6.",
      "Repita 3 vezes. Só isso.",
    ],
    mensagem: "O pânico é o sistema nervoso em alarme falso. A respiração longa na expiração diz para o corpo: não há perigo. Você está regulando agora.",
  },
  {
    id: "vazio",
    label: "Pesada e vazia",
    desc: "Vazio por dentro, aquela saudade que aperta",
    emoji: "🌑",
    instrucao: "Sente-se no chão ou pressione as costas na parede.",
    tecnica: [
      "Sinta o peso do seu corpo — o chão te sustenta.",
      "Pressione os pés no chão devagar.",
      "Coloque as mãos nas coxas — pesadas, quentes.",
      "Respire e perceba: você está inteira aqui.",
    ],
    mensagem: "O vazio não é ausência sua — é o espaço que você deu para ele ocupar. Sentir o peso do próprio corpo te devolve para dentro de si mesma.",
  },
  {
    id: "acelerada",
    label: "Acelerada",
    desc: "Querendo agir, mandar mensagem, resolver agora",
    emoji: "⚡",
    instrucao: "Levante e sacuda o corpo inteiro por 20 segundos.",
    tecnica: [
      "Sacuda os braços, as mãos, os ombros.",
      "Bata os pés no chão alternando — esquerdo, direito.",
      "Faça um som 'vvvvv' com os lábios fechados enquanto sacode.",
      "Para. Fique imóvel. Sinta o calor no corpo.",
    ],
    mensagem: "A aceleração é energia de ação sem direção. O movimento intencional descarrega isso — e o 'vvvv' ativa o nervo vago, que é o freio natural do sistema nervoso.",
  },
];

function Step3({ onNext }) {
  const [estado, setEstado] = useState(null);
  const [feito, setFeito] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: DARK, padding: "48px 24px 60px" }}>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Step n={3} total={4} />
        <Tag>Passo 3 · Regule</Tag>

        {!estado && <>
          <h2 style={{ fontFamily: P.serif, fontSize: 22, fontStyle: "italic", color: CREAM, lineHeight: 1.5, marginBottom: 12 }}>
            Como você está agora?
          </h2>
          <p style={{ fontFamily: P.sans, fontSize: 13, color: DIM, lineHeight: 1.8, marginBottom: 24 }}>
            Escolha o que mais se parece com o que você sente agora.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ESTADOS.map(e => (
              <button key={e.id} onClick={() => setEstado(e)} style={{ textAlign: "left", background: "#1a1515", border: "1.5px solid #3a2020", borderRadius: 18, padding: "18px 20px", cursor: "pointer", transition: "all 0.15s", width: "100%" }}
                onMouseEnter={ev => ev.currentTarget.style.borderColor = ROSE + "66"}
                onMouseLeave={ev => ev.currentTarget.style.borderColor = "#3a2020"}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ fontSize: 28 }}>{e.emoji}</span>
                  <div>
                    <p style={{ fontFamily: P.serif, fontSize: 16, fontWeight: 600, color: CREAM, margin: 0, marginBottom: 3 }}>{e.label}</p>
                    <p style={{ fontFamily: P.sans, fontSize: 12, color: DIM, margin: 0 }}>{e.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>}

        {estado && !feito && <>
          <h2 style={{ fontFamily: P.serif, fontSize: 20, fontStyle: "italic", color: CREAM, lineHeight: 1.5, marginBottom: 8 }}>
            {estado.label}
          </h2>
          <p style={{ fontFamily: P.sans, fontSize: 13, color: DIM, lineHeight: 1.75, marginBottom: 20 }}>
            Faça isso agora — antes de ler o próximo passo.
          </p>
          <div style={{ background: `${ROSE}15`, border: `1px solid ${ROSE}33`, borderRadius: 16, padding: "18px 20px", marginBottom: 20 }}>
            <p style={{ fontFamily: P.serif, fontSize: 16, fontStyle: "italic", color: CREAM, lineHeight: 1.6, margin: "0 0 16px" }}>
              {estado.instrucao}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {estado.tecnica.map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 12 }}>
                  <span style={{ fontFamily: P.serif, color: ROSE, fontSize: 14, fontWeight: 600, flexShrink: 0 }}>{i + 1}</span>
                  <p style={{ fontFamily: P.sans, fontSize: 14, color: "#c0a8a8", lineHeight: 1.65, margin: 0 }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
          <Btn onClick={() => setFeito(true)}>Fiz. O que aconteceu?</Btn>
        </>}

        {estado && feito && <>
          <h2 style={{ fontFamily: P.serif, fontSize: 20, fontStyle: "italic", color: CREAM, lineHeight: 1.5, marginBottom: 16 }}>
            Seu corpo está mais regulado agora.
          </h2>
          <div style={{ background: "#1a1010", borderRadius: 16, padding: "18px 20px", marginBottom: 24, border: `1px solid ${ROSE}22` }}>
            <p style={{ fontFamily: P.serif, fontSize: 15, fontStyle: "italic", color: CREAM, lineHeight: 1.82, margin: 0 }}>
              {estado.mensagem}
            </p>
          </div>
          <Btn onClick={onNext}>Entendi. Continuar →</Btn>
        </>}
      </div>
    </div>
  );
}

// ─── STEP 4: DECIDA ──────────────────────────────────────────────────────────
function Step4({ onFinish }) {
  const [dec, setDec] = useState("");
  const OPCOES = [
    { id: "a", t: "Não vou agir agora. Vou esperar 24 horas antes de qualquer contato." },
    { id: "b", t: "Vou fazer algo só por mim nos próximos 30 minutos." },
    { id: "c", t: "Vou ligar para alguém de confiança — não para falar sobre ele." },
    { id: "d", t: "Vou sair do ambiente onde estou agora e me mover." },
  ];
  return (
    <div style={{ minHeight: "100vh", background: DARK, padding: "48px 24px 60px" }}>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Step n={4} total={4} />
        <Tag>Passo 4 · Decida</Tag>
        <h2 style={{ fontFamily: P.serif, fontSize: 22, fontStyle: "italic", color: CREAM, lineHeight: 1.5, marginBottom: 12 }}>
          O que você vai fazer agora — com consciência.
        </h2>
        <p style={{ fontFamily: P.sans, fontSize: 13, color: DIM, lineHeight: 1.8, marginBottom: 22 }}>
          Não o que a carência quer. O que você, consciente, decide fazer agora.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {OPCOES.map(o => (
            <button key={o.id} onClick={() => setDec(o.id)} style={{ textAlign: "left", padding: "15px 18px", borderRadius: 14, fontSize: 14, fontFamily: P.sans, border: `1.5px solid ${dec === o.id ? ROSE : "#3a2020"}`, background: dec === o.id ? `${ROSE}18` : "#1a1515", color: dec === o.id ? CREAM : "#6a5a5a", cursor: "pointer", transition: "all 0.15s", lineHeight: 1.6 }}>
              {o.t}
            </button>
          ))}
        </div>
        {dec && (
          <>
            <div style={{ background: "#1a1010", borderRadius: 16, padding: "18px 20px", marginBottom: 24, border: `1px solid ${ROSE}22` }}>
              <p style={{ fontFamily: P.serif, fontSize: 15, fontStyle: "italic", color: CREAM, lineHeight: 1.8, margin: 0 }}>
                "Você não agiu no automático. Você decidiu com consciência. Isso é autorregulação real — e você acabou de provar que consegue."
              </p>
            </div>
            <Btn onClick={onFinish} color={`linear-gradient(135deg, ${ROSE}, #9A80C0)`} style={{ background: `linear-gradient(135deg, ${ROSE}, #9A80C0)` }}>
              Concluir ✦
            </Btn>
          </>
        )}
      </div>
    </div>
  );
}

// ─── FINAL ───────────────────────────────────────────────────────────────────
function Final({ onRestart }) {
  return (
    <div style={{ minHeight: "100vh", background: DARK, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
      <div style={{ maxWidth: 400, width: "100%", textAlign: "center" }}>
        <div style={{ fontFamily: P.serif, fontSize: 52, color: ROSE, marginBottom: 20 }}>✦</div>
        <Tag>Você passou pela crise.</Tag>
        <h2 style={{ fontFamily: P.serif, fontSize: 24, fontWeight: 600, color: CREAM, lineHeight: 1.45, marginBottom: 24 }}>
          Você não agiu no impulso.<br/>Você se regulou.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
          {[
            ["Antes", "A carência estava no controle.", false],
            ["Agora", "Você tomou o controle de volta.", true],
            ["Antes", "Você estava no automático.", false],
            ["Agora", "Você decidiu com consciência.", true],
          ].map(([label, text, isAfter], i) => (
            <div key={i} style={{ background: isAfter ? `${ROSE}18` : "#1a1515", borderRadius: 14, padding: "13px 18px", display: "flex", alignItems: "center", gap: 12, textAlign: "left", border: isAfter ? `1px solid ${ROSE}33` : "none" }}>
              <span style={{ fontFamily: P.sans, fontSize: 10, letterSpacing: 2, fontWeight: 700, color: isAfter ? ROSE : "#4a3e3a", flexShrink: 0 }}>{label}</span>
              <p style={{ fontFamily: P.serif, fontSize: 14, fontStyle: "italic", color: isAfter ? CREAM : "#6a5e5a", lineHeight: 1.6, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#1a1010", borderRadius: 18, padding: "22px", marginBottom: 16, border: `1px solid ${ROSE}22` }}>
          <p style={{ fontFamily: P.sans, fontSize: 12, letterSpacing: 2, color: ROSE, fontWeight: 700, marginBottom: 12 }}>QUER CONTINUAR ESSE TRABALHO?</p>
          <p style={{ fontFamily: P.serif, fontSize: 15, fontStyle: "italic", color: CREAM, lineHeight: 1.8, marginBottom: 12 }}>
            Esse protocolo resolve a crise do momento. Mas a carência vai voltar enquanto a raiz estiver intacta.
          </p>
          <p style={{ fontFamily: P.sans, fontSize: 13, color: DIM, lineHeight: 1.75, marginBottom: 18 }}>
            Entro em contato com mulheres que querem ir mais fundo — entender o padrão, sair da dependência emocional e se reconectar consigo mesmas.
          </p>
          <a href="https://wa.me/5567981448229" target="_blank" rel="noreferrer" style={{ display: "block", background: `linear-gradient(135deg, #25D366, #128C7E)`, color: "#fff", borderRadius: 99, padding: "15px 0", fontSize: 14, fontFamily: P.sans, fontWeight: 700, cursor: "pointer", width: "100%", letterSpacing: 0.4, textDecoration: "none", textAlign: "center", marginBottom: 10 }}>
            Falar com a Renata no WhatsApp →
          </a>

        </div>

        <button onClick={onRestart} style={{ background: "none", border: "1px solid #3a2e2a", borderRadius: 99, padding: "12px 0", fontSize: 13, fontFamily: P.sans, color: "#5a4e4a", cursor: "pointer", width: "100%" }}>
          Fazer de novo
        </button>
      </div>
    </div>
  );
}

// ─── ROOT ────────────────────────────────────────────────────────────────────
export default function App() {
  useFonts();
  const [screen, setScreen] = useState("cover");
  const next = (s) => setScreen(s);

  if (screen === "cover") return <Cover onStart={() => next("s1")} />;
  if (screen === "s1")    return <Step1 onNext={() => next("s2")} />;
  if (screen === "s2")    return <Step2 onNext={() => next("s3")} />;
  if (screen === "s3")    return <Step3 onNext={() => next("s4")} />;
  if (screen === "s4")    return <Step4 onFinish={() => next("final")} />;
  if (screen === "final") return <Final onRestart={() => next("cover")} />;
  return null;
}
