import { useMemo, useState } from "react";

const pillars = [
  {
    eyebrow: "Atendimento",
    title: "Responde enquanto sua equipe atende.",
    text: "O cliente fala pelo WhatsApp do jeito que já fala hoje. O Troquim organiza intenção, serviço e contexto sem transformar a conversa em formulário."
  },
  {
    eyebrow: "Agenda",
    title: "Oferece horários que fazem sentido.",
    text: "Duração, profissional, expediente, bloqueios e conflitos vêm da agenda real. O cliente vê poucas opções úteis — não uma grade infinita."
  },
  {
    eyebrow: "Receita",
    title: "Protege cada espaço da agenda.",
    text: "Cancelamentos podem alimentar lista de espera, lembretes viram ações e adicionais só são oferecidos quando realmente cabem no atendimento."
  }
];

const proof = [
  "Serviços, preços e durações vêm do catálogo real.",
  "Horários são validados antes da confirmação.",
  "Reagendamento preserva o horário original até a troca ser concluída.",
  "Lista de espera reaproveita horários liberados.",
  "Upsell só aparece quando o adicional cabe de verdade.",
  "Painel separado da experiência do cliente."
];

const steps = [
  ["01", "O cliente escreve", "“Quero fazer escova amanhã depois das 15.”"],
  ["02", "O Troquim entende", "Serviço, dia e preferência de horário viram contexto estruturado."],
  ["03", "O domínio decide", "A agenda real valida duração, profissional, disponibilidade e conflitos."],
  ["04", "O cliente escolhe", "Três opções boas. Mais horários só quando ele pedir."]
];

function ProductChat() {
  return (
    <div className="productShell">
      <div className="productTop">
        <div className="brandDot">T</div>
        <div>
          <strong>Studio Aurora</strong>
          <span>atendimento pelo Troquim</span>
        </div>
        <span className="liveDot">online</span>
      </div>

      <div className="chatBody">
        <div className="bubble client">Quero fazer escova amanhã depois das 15.</div>
        <div className="bubble assistant">
          Amanhã depois das 15 tenho estes horários:
          <div className="slotGrid">
            <button>15:30</button>
            <button>17:00</button>
            <button>18:30</button>
          </div>
          <button className="moreButton">Ver mais horários</button>
        </div>
        <div className="bubble client compact">17:00</div>
        <div className="bubble assistant compact">
          Perfeito. Vou confirmar a escova amanhã às 17:00.
          <div className="confirmRow">
            <button>Confirmar</button>
            <button className="secondary">Voltar</button>
          </div>
        </div>
      </div>

      <div className="productFoot">
        <span>WhatsApp</span>
        <span>Agenda real</span>
        <span>Sem troca de aplicativo</span>
      </div>
    </div>
  );
}

function MetricCard({ label, value, detail }) {
  return (
    <div className="metricCard">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </div>
  );
}

export default function PremiumLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="site">
      <style>{css}</style>

      <header className="navWrap">
        <a className="logo" href="#top" aria-label="Troquim">
          <span className="logoMark">T</span>
          <span>Troquim</span>
        </a>

        <button className="menuButton" onClick={() => setMenuOpen(v => !v)} aria-label="Abrir menu">
          {menuOpen ? "Fechar" : "Menu"}
        </button>

        <nav className={menuOpen ? "navLinks open" : "navLinks"}>
          <a href="#produto">Produto</a>
          <a href="#operacao">Como funciona</a>
          <a href="#premium">Para quem é</a>
          <a className="navLogin" href="https://painel.troquim.app">Entrar no painel</a>
          <a className="navCta" href="#demonstracao">Solicitar apresentação</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="heroCopy">
            <span className="kicker">Recepção operacional para negócios de serviço</span>
            <h1>Seu melhor atendimento começa antes da cliente chegar.</h1>
            <p className="heroLead">
              O Troquim atende no WhatsApp, organiza a agenda e protege oportunidades
              enquanto sua equipe continua focada no serviço.
            </p>
            <div className="heroActions">
              <a className="primaryCta" href="mailto:contato@troquim.app?subject=Quero%20conhecer%20o%20Troquim">Solicitar uma apresentação</a>
              <a className="textCta" href="#produto">Ver o produto <span>↘</span></a>
            </div>
            <div className="heroNote">
              <span>Implantação assistida</span>
              <span>•</span>
              <span>WhatsApp do próprio negócio</span>
              <span>•</span>
              <span>Operação configurada para sua agenda</span>
            </div>
          </div>

          <div className="heroVisual" aria-label="Demonstração do atendimento">
            <ProductChat />
            <div className="floatingCard revenue">
              <span>Agenda</span>
              <strong>3 opções úteis</strong>
              <small>em vez de dezenas de horários expostos</small>
            </div>
            <div className="floatingCard time">
              <span>Cliente</span>
              <strong>continua no WhatsApp</strong>
              <small>sem aprender um sistema novo</small>
            </div>
          </div>
        </section>

        <section className="trustStrip">
          <span>Não é um chatbot genérico.</span>
          <p>É uma camada operacional conectada ao catálogo, à agenda e às regras reais do negócio.</p>
        </section>

        <section className="productSection" id="produto">
          <div className="sectionHeading">
            <span className="kicker">Produto</span>
            <h2>Menos interface para a cliente. Mais inteligência operacional por baixo.</h2>
          </div>

          <div className="pillarGrid">
            {pillars.map(item => (
              <article className="pillar" key={item.title}>
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="operationSection" id="operacao">
          <div className="operationCopy">
            <span className="kicker light">Uma conversa, não um formulário</span>
            <h2>Se o cliente já disse, o Troquim não pergunta de novo.</h2>
            <p>
              O sistema interpreta a conversa, mas disponibilidade, preço e confirmação
              continuam sendo decididos pelas fontes reais do negócio.
            </p>

            <div className="stepList">
              {steps.map(([n, title, text]) => (
                <div className="step" key={n}>
                  <span>{n}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="operationPanel">
            <div className="panelHead">
              <span>Visão operacional</span>
              <small>exemplo de produto</small>
            </div>
            <div className="metrics">
              <MetricCard label="Atendimento" value="WhatsApp" detail="canal principal" />
              <MetricCard label="Agenda" value="Contextual" detail="serviço + duração + profissional" />
              <MetricCard label="Recuperação" value="Waitlist" detail="quando um horário libera" />
              <MetricCard label="Retenção" value="Rebooking" detail="próximo ciclo do cliente" />
            </div>
            <div className="panelLine" />
            <div className="panelFeature">
              <div className="panelIcon">↗</div>
              <div>
                <strong>O objetivo não é responder mais mensagens.</strong>
                <p>É transformar atendimento em agenda organizada e oportunidade recuperada.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="proofSection">
          <div className="sectionHeading narrow">
            <span className="kicker">Confiança</span>
            <h2>Premium não é parecer inteligente. É ser confiável quando importa.</h2>
            <p>
              O Troquim foi desenhado para não inventar disponibilidade, preço ou confirmação.
              A conversa interpreta; o domínio decide.
            </p>
          </div>
          <div className="proofGrid">
            {proof.map((item, index) => (
              <div className="proofItem" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="premiumSection" id="premium">
          <div>
            <span className="kicker light">Para operações que valorizam experiência</span>
            <h2>Feito para negócios em que uma agenda mal atendida custa caro.</h2>
          </div>
          <div className="premiumColumns">
            <p>
              Studios, salões, clínicas estéticas e operações de bem-estar com ticket,
              recorrência e volume suficientes para exigir um atendimento à altura da marca.
            </p>
            <p>
              O posicionamento é deliberadamente consultivo: implantação, catálogo,
              agenda, automações e tom de atendimento precisam refletir a operação real.
            </p>
          </div>
        </section>

        <section className="demoSection" id="demonstracao">
          <div className="demoCard">
            <div>
              <span className="kicker">Apresentação</span>
              <h2>Veja o Troquim trabalhando em uma operação parecida com a sua.</h2>
              <p>
                A apresentação é orientada por fluxo real: atendimento, agenda, cancelamento,
                recuperação de horário e visão do dono.
              </p>
            </div>
            <div className="demoActions">
              <a className="primaryCta lightButton" href="mailto:contato@troquim.app?subject=Quero%20conhecer%20o%20Troquim">Quero conhecer o Troquim</a>
              <a className="demoLogin" href="https://painel.troquim.app">Já sou cliente →</a>
              <small>Apresentações e implantação: contato@troquim.app</small>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo footerLogo" href="#top">
          <span className="logoMark">T</span>
          <span>Troquim</span>
        </a>
        <p>Atendimento e operação para negócios de serviço.</p>
        <span>© {year} Troquim</span>
      </footer>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Manrope:wght@400;500;600;700&display=swap');

:root {
  color: #151510;
  background: #f3f0e8;
  font-family: 'DM Sans', sans-serif;
  font-synthesis: none;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: #f3f0e8; color: #151510; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.site { min-height: 100vh; overflow: hidden; }
.navWrap {
  position: sticky; top: 0; z-index: 50;
  height: 78px; padding: 0 5vw;
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(243,240,232,.92);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(21,21,16,.08);
}
.logo { display: inline-flex; align-items: center; gap: 10px; font-family: 'Manrope'; font-weight: 700; letter-spacing: -.03em; }
.logoMark {
  width: 31px; height: 31px; display: grid; place-items: center;
  border-radius: 50%; background: #171812; color: #f5f2e8; font-size: 14px;
}
.navLinks { display: flex; align-items: center; gap: 28px; font-size: 14px; }
.navLinks>a:not(.navCta):not(.navLogin) { color: #57574f; }
.navLogin { padding-left: 24px; border-left: 1px solid #d7d3c9; }
.navCta { background: #171812; color: white; padding: 12px 18px; border-radius: 999px; }
.menuButton { display: none; border: 0; background: transparent; }
.hero {
  min-height: 760px; padding: 110px 6vw 100px;
  display: grid; grid-template-columns: minmax(0,1fr) minmax(460px,.9fr);
  gap: 7vw; align-items: center;
}
.kicker {
  display: inline-block; margin-bottom: 24px;
  text-transform: uppercase; letter-spacing: .15em;
  font-size: 11px; font-weight: 600; color: #7b6a45;
}
.kicker.light { color: #c8b98e; }
.hero h1, .sectionHeading h2, .operationCopy h2, .premiumSection h2, .demoCard h2 {
  font-family: 'Manrope'; letter-spacing: -.055em; font-weight: 500; margin: 0;
}
.hero h1 { max-width: 780px; font-size: clamp(52px,6vw,92px); line-height: .98; }
.heroLead { max-width: 620px; font-size: 20px; line-height: 1.55; color: #5d5c54; margin: 32px 0; }
.heroActions { display: flex; align-items: center; gap: 26px; margin-top: 36px; }
.primaryCta {
  display: inline-flex; justify-content: center; align-items: center;
  background: #171812; color: #fff; border-radius: 999px;
  padding: 16px 24px; font-size: 15px; font-weight: 600;
  transition: transform .2s ease;
}
.primaryCta:hover { transform: translateY(-2px); }
.textCta { color: #484840; font-weight: 500; }
.heroNote { margin-top: 32px; display: flex; flex-wrap: wrap; gap: 10px; font-size: 12px; color: #7c7a70; }
.heroVisual { position: relative; max-width: 590px; justify-self: end; }
.productShell {
  background: #11130f; color: #f6f2e8; border-radius: 30px;
  box-shadow: 0 40px 110px rgba(20,20,15,.20);
  overflow: hidden; border: 1px solid rgba(255,255,255,.07);
}
.productTop { padding: 18px 20px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(255,255,255,.08); }
.brandDot { width: 38px; height: 38px; border-radius: 50%; background: #d9c89a; color: #191a15; display:grid;place-items:center;font-weight:700; }
.productTop div:nth-child(2) { display:flex;flex-direction:column;gap:2px;flex:1; }
.productTop strong { font-size: 14px; }
.productTop span { font-size: 11px; color:#999b91; }
.liveDot { color:#aebd8b!important; }
.chatBody { min-height: 470px; padding: 30px 22px; background: radial-gradient(circle at top right, rgba(217,200,154,.07), transparent 38%), #141611; display:flex;flex-direction:column;gap:16px; }
.bubble { max-width: 83%; padding: 15px 16px; border-radius: 18px; font-size:14px; line-height:1.45; }
.bubble.client { align-self:flex-end;background:#ddd1af;color:#181914;border-bottom-right-radius:5px; }
.bubble.assistant { align-self:flex-start;background:#24261f;border:1px solid rgba(255,255,255,.06);border-bottom-left-radius:5px; }
.bubble.compact { max-width: 72%; }
.slotGrid { display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px; }
.slotGrid button,.confirmRow button,.moreButton { border:0;border-radius:10px;padding:11px 10px;background:#f0e9d6;color:#171812;font-weight:600;cursor:pointer; }
.moreButton { margin-top:8px;width:100%;background:#33362d;color:#ded8c6; }
.confirmRow { display:flex;gap:8px;margin-top:14px; }
.confirmRow button { flex:1; }
.confirmRow .secondary { background:#33362d;color:#d6d1c2; }
.productFoot { display:flex;justify-content:space-between;gap:10px;padding:13px 20px;font-size:10px;color:#85877f;text-transform:uppercase;letter-spacing:.08em; }
.floatingCard { position:absolute;background:#f8f4e9;border:1px solid #d9d4c8;box-shadow:0 18px 50px rgba(40,38,30,.13);border-radius:18px;padding:14px 16px;display:flex;flex-direction:column;gap:3px; }
.floatingCard span { font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#8a826e; }
.floatingCard strong { font:600 14px 'Manrope'; }
.floatingCard small { color:#777468;max-width:190px;line-height:1.35; }
.floatingCard.revenue { left:-78px;top:100px; }
.floatingCard.time { right:-50px;bottom:72px; }
.trustStrip { padding: 28px 6vw; border-top:1px solid #d8d3c7;border-bottom:1px solid #d8d3c7;display:flex;gap:28px;align-items:center; }
.trustStrip span { font:600 13px 'Manrope';white-space:nowrap; }
.trustStrip p { margin:0;color:#6c6a61;font-size:14px; }
.productSection,.proofSection { padding:130px 6vw; }
.sectionHeading { max-width:900px; }
.sectionHeading.narrow { max-width:760px; }
.sectionHeading h2,.operationCopy h2,.premiumSection h2,.demoCard h2 { font-size:clamp(38px,4.3vw,66px);line-height:1.06; }
.sectionHeading p { color:#69675f;font-size:18px;line-height:1.6; }
.pillarGrid { display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:70px; }
.pillar { min-height:330px;border-top:1px solid #bdb7aa;padding:26px 6px 0; }
.pillar>span { font-size:11px;text-transform:uppercase;letter-spacing:.13em;color:#8a7950; }
.pillar h3 { font:500 28px/1.12 'Manrope';letter-spacing:-.04em;margin:28px 0 18px;max-width:330px; }
.pillar p { color:#67655d;line-height:1.7;max-width:360px; }
.operationSection { padding:120px 6vw;background:#171812;color:#f5f1e7;display:grid;grid-template-columns:1fr .9fr;gap:8vw;align-items:start; }
.operationCopy>p { color:#adada4;font-size:18px;line-height:1.65;max-width:650px;margin:26px 0 48px; }
.stepList { border-top:1px solid #363831; }
.step { display:grid;grid-template-columns:54px 1fr;gap:12px;padding:22px 0;border-bottom:1px solid #363831; }
.step>span { color:#7f806f;font-size:12px; }
.step strong { font:600 15px 'Manrope'; }
.step p { margin:5px 0 0;color:#92948b;font-size:14px;line-height:1.5; }
.operationPanel { background:#20221c;border:1px solid #373930;border-radius:24px;padding:24px;position:sticky;top:110px; }
.panelHead { display:flex;justify-content:space-between;align-items:center;margin-bottom:28px; }
.panelHead span { font:600 14px 'Manrope'; }
.panelHead small { color:#7f8278; }
.metrics { display:grid;grid-template-columns:1fr 1fr;gap:10px; }
.metricCard { min-height:135px;background:#292b24;border-radius:16px;padding:17px;display:flex;flex-direction:column;justify-content:flex-end; }
.metricCard span { font-size:11px;color:#898b81;text-transform:uppercase;letter-spacing:.09em;margin-bottom:auto; }
.metricCard strong { font:500 20px 'Manrope'; }
.metricCard small { color:#898b81;margin-top:3px;line-height:1.3; }
.panelLine { height:1px;background:#383a33;margin:24px 0; }
.panelFeature { display:grid;grid-template-columns:44px 1fr;gap:14px; }
.panelIcon { width:42px;height:42px;border-radius:50%;background:#d9c89a;color:#191a15;display:grid;place-items:center; }
.panelFeature strong { font:600 16px/1.4 'Manrope'; }
.panelFeature p { color:#92948a;line-height:1.55;font-size:14px; }
.proofGrid { margin-top:65px;display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #c5c0b4; }
.proofItem { display:grid;grid-template-columns:52px 1fr;gap:18px;padding:22px 24px 22px 0;border-bottom:1px solid #c5c0b4; }
.proofItem:nth-child(odd) { border-right:1px solid #c5c0b4; }
.proofItem:nth-child(even) { padding-left:24px; }
.proofItem span { color:#928b7b;font-size:11px; }
.proofItem p { margin:0;font-size:16px;line-height:1.5; }
.premiumSection { padding:110px 6vw;background:#cabb91;color:#181914; }
.premiumSection>div:first-child { max-width:900px; }
.premiumColumns { display:grid;grid-template-columns:1fr 1fr;gap:7vw;margin-top:58px;max-width:1000px; }
.premiumColumns p { margin:0;font-size:18px;line-height:1.7;color:#46443a; }
.demoSection { padding:95px 6vw;background:#f3f0e8; }
.demoCard { background:#25271f;color:#f5f1e7;border-radius:30px;padding:58px;display:grid;grid-template-columns:1fr 340px;gap:8vw;align-items:end; }
.demoCard p { color:#aaaca2;max-width:680px;line-height:1.6;font-size:17px; }
.demoActions { display:flex;flex-direction:column;gap:14px;align-items:flex-start; }
.lightButton { background:#efe7d2;color:#171812;width:100%; }
.demoLogin { color:#c4c1b6;font-size:14px; }
.demoActions small { color:#73766c;line-height:1.4; }
footer { min-height:120px;padding:36px 6vw;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;border-top:1px solid #d7d2c6;color:#77736a;font-size:12px; }
footer p { text-align:center; }
footer>span { text-align:right; }
.footerLogo { color:#1b1c17; }
@media (max-width: 980px) {
  .menuButton { display:block; }
  .navLinks { position:absolute;top:78px;left:0;right:0;background:#f3f0e8;padding:24px 5vw;display:none;flex-direction:column;align-items:stretch;border-bottom:1px solid #d7d2c6; }
  .navLinks.open { display:flex; }
  .navLogin { border-left:0;padding-left:0; }
  .hero { grid-template-columns:1fr;min-height:auto;padding-top:75px; }
  .heroVisual { justify-self:center;margin-top:30px;width:min(100%,620px); }
  .floatingCard { display:none; }
  .pillarGrid { grid-template-columns:1fr; }
  .pillar { min-height:auto;padding-bottom:35px; }
  .operationSection { grid-template-columns:1fr; }
  .operationPanel { position:static; }
  .demoCard { grid-template-columns:1fr; }
}
@media (max-width: 620px) {
  .navWrap { height:68px; }
  .navLinks { top:68px; }
  .hero { padding:58px 20px 72px; }
  .hero h1 { font-size:48px; }
  .heroLead { font-size:17px; }
  .heroActions { align-items:flex-start;flex-direction:column; }
  .heroNote { display:none; }
  .productTop { padding:14px; }
  .chatBody { min-height:420px;padding:20px 14px; }
  .slotGrid { grid-template-columns:1fr; }
  .productSection,.proofSection,.operationSection,.premiumSection,.demoSection { padding:80px 20px; }
  .trustStrip { padding:24px 20px;display:block; }
  .trustStrip p { margin-top:8px; }
  .metrics,.proofGrid,.premiumColumns { grid-template-columns:1fr; }
  .proofItem:nth-child(odd) { border-right:0; }
  .proofItem:nth-child(even) { padding-left:0; }
  .demoCard { padding:34px 24px; }
  footer { grid-template-columns:1fr;gap:16px;padding:30px 20px; }
  footer p, footer>span { text-align:left; }
}
`;
