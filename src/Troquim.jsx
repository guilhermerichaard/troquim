import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const services = [
  { id: 1, icon: "📱", name: "Troca de Tela", desc: "Display original ou compatível" },
  { id: 2, icon: "🔋", name: "Bateria", desc: "Bateria nova com garantia" },
  { id: 3, icon: "🔌", name: "Conector de Carga", desc: "USB-C, Lightning, Micro USB" },
  { id: 4, icon: "📷", name: "Câmera", desc: "Frontal ou traseira" },
  { id: 5, icon: "💧", name: "Dano por Água", desc: "Limpeza e recuperação" },
  { id: 6, icon: "🔊", name: "Alto-falante", desc: "Som baixo ou sem som" },
];

const shops = [
  {
    id: 1,
    name: "EP Store",
    rating: 4.9,
    reviews: 1927,
    address: "Rua Tabapuã, 753 - Itaim Bibi",
    lat: -23.5840,
    lng: -46.6790,
    distance: "0,5 km",
    time: "30 min",
    warranty: "6 meses",
    open: true,
    whatsapp: "5511947493643"
  },
  {
    id: 2,
    name: "BL CELL",
    rating: 4.9,
    reviews: 216,
    address: "Rua Fiandeiras, 367 - Vila Olímpia",
    lat: -23.5950,
    lng: -46.6850,
    distance: "0,8 km",
    time: "45 min",
    warranty: "6 meses",
    open: true,
    whatsapp: "5511947082123"
  },
  {
    id: 3,
    name: "iCaiu Moema",
    rating: 4.9,
    reviews: 677,
    address: "Av. Ibirapuera, 2907 - Moema",
    lat: -23.6030,
    lng: -46.6680,
    distance: "1,2 km",
    time: "1h",
    warranty: "12 meses",
    open: true,
    whatsapp: "551141182688"
  },
  {
    id: 4,
    name: "Conserta Smart Pinheiros",
    rating: 4.7,
    reviews: 682,
    address: "Rua Artur de Azevedo, 1018 - Pinheiros",
    lat: -23.5610,
    lng: -46.6840,
    distance: "1,4 km",
    time: "1h",
    warranty: "6 meses",
    open: true,
    whatsapp: "551130851813"
  },
  {
    id: 5,
    name: "iCaiu Paulista",
    rating: 4.9,
    reviews: 3376,
    address: "Av. Paulista, 2006 - Bela Vista",
    lat: -23.5615,
    lng: -46.6565,
    distance: "2,0 km",
    time: "1h",
    warranty: "12 meses",
    open: true,
    whatsapp: "551141182688"
  },
  {
    id: 6,
    name: "UP Store",
    rating: 4.9,
    reviews: 128,
    address: "Av. Paulista, 2073",
    lat: -23.5610,
    lng: -46.6575,
    distance: "2,1 km",
    time: "45 min",
    warranty: "6 meses",
    open: true,
    whatsapp: "5511959508675"
  }
];

const phones = ["iPhone 15", "iPhone 14", "iPhone 13", "Samsung S24", "Samsung A54", "Xiaomi 13", "Motorola G84", "Outro"];

const TRACK_STEPS = [
  { id: 0, label: "Pedido confirmado", icon: "✅", desc: "Solicitação recebida" },
  { id: 1, label: "Orçamento aprovado", icon: "📋", desc: "Técnico analisou o aparelho" },
  { id: 2, label: "Em reparo", icon: "🔧", desc: "Celular sendo consertado" },
  { id: 3, label: "Teste de qualidade", icon: "🔍", desc: "Verificando funcionamento" },
  { id: 4, label: "Pronto!", icon: "🎉", desc: "Pode buscar seu celular" },
];

const NOTIFS = [
  { id: 1, icon: "🔧", title: "Reparo iniciado!", body: "TechFix Express começou a trocar sua tela.", time: "Agora", read: false },
  { id: 2, icon: "✅", title: "Orçamento aprovado", body: "Seu orçamento de R$149 foi confirmado.", time: "1h atrás", read: false },
  { id: 3, icon: "📋", title: "Pedido recebido", body: "TechFix Express recebeu seu aparelho.", time: "3h atrás", read: true },
  { id: 4, icon: "🎉", title: "Bem-vindo ao Troquim!", body: "Seu celular merece o melhor!", time: "Ontem", read: true },
];

const SAMPLE_REVIEWS = [
  { id: 1, name: "Maria S.", stars: 5, date: "2 dias atrás", text: "Serviço rápido e preço justo. Minha tela ficou como nova!" },
  { id: 2, name: "João P.", stars: 5, date: "1 semana atrás", text: "Atendimento excelente, fizeram em menos de 1 hora." },
  { id: 3, name: "Ana C.", stars: 4, date: "2 semanas atrás", text: "Muito bom, só achei um pouco caro mas o serviço compensou." },
];

const Stars = ({ n }) => <span style={{ color: "#f59e0b", fontSize: 13 }}>{"★".repeat(n)}{"☆".repeat(5 - n)}</span>;

function Mapa() {
  return (
    <div style={{ marginBottom: 20 }}>
      <MapContainer
        center={[-23.575, -46.67]}
        zoom={12}
        style={{
          height: "350px",
          width: "100%",
          borderRadius: "16px"
        }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {shops.map(shop => (
          <Marker
            key={shop.id}
            position={[shop.lat, shop.lng]}
          >
            <Popup>
              <strong>{shop.name}</strong>
              <br />
              ⭐ {shop.rating}
              <br />
              📍 {shop.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default function Troquim() {
  const [authStep, setAuthStep] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [step, setStep] = useState(0);
  const [selService, setSelService] = useState(null);
  const [selPhone, setSelPhone] = useState(null);
  const [selShop, setSelShop] = useState(null);
  const [sortBy, setSortBy] = useState("price");
  const [booked, setBooked] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [reviewsMap, setReviewsMap] = useState({ 1: SAMPLE_REVIEWS, 2: [], 3: [], 4: [] });
  const [newReview, setNewReview] = useState({ stars: 5, text: "" });
  const [reviewShopId, setReviewShopId] = useState(null);
  const [notifs, setNotifs] = useState(NOTIFS);
  const unread = notifs.filter(n => !n.read).length;

  const handleLogin = () => {
    if (!form.email || !form.password) { setAuthError("Preencha todos os campos."); return; }
    setUser({ name: form.email.split("@")[0], email: form.email });
    setAuthStep("app"); setAuthError("");
  };
  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) { setAuthError("Preencha todos os campos."); return; }
    if (form.password.length < 6) { setAuthError("Senha mínimo 6 caracteres."); return; }
    setUser({ name: form.name, email: form.email });
    setAuthStep("app"); setAuthError("");
  };
  const handleBook = () => {
    setBooked(true);
    const order = { shop: selShop, service: selService, phone: selPhone, trackStep: 1 };
    setTimeout(() => {
      setActiveOrder(order); setBooked(false);
      setStep(0); setSelService(null); setSelPhone(null); setSelShop(null);
      setTab("tracking");
    }, 1800);
  };
  const advanceTrack = () => {
    if (!activeOrder || activeOrder.trackStep >= 4) return;
    setActiveOrder(o => ({ ...o, trackStep: o.trackStep + 1 }));
    setNotifs(n => [{ id: Date.now(), icon: "🔔", title: TRACK_STEPS[activeOrder.trackStep + 1]?.label, body: `${activeOrder.shop?.name}: atualização do seu conserto`, time: "Agora", read: false }, ...n]);
  };
  const submitReview = (shopId) => {
    if (!newReview.text.trim()) return;
    setReviewsMap(m => ({ ...m, [shopId]: [{ id: Date.now(), name: user.name, stars: newReview.stars, date: "Agora", text: newReview.text }, ...(m[shopId] || [])] }));
    setNewReview({ stars: 5, text: "" }); setReviewShopId(null);
  };
const sortedShops = [...shops].sort((a, b) => {
  if (sortBy === "rating") return b.rating - a.rating;
  if (sortBy === "distance") return parseFloat(a.distance) - parseFloat(b.distance);
  return 0;
});
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; }
    .tap { transition: transform 0.12s, opacity 0.12s; cursor: pointer; }
    .tap:active { transform: scale(0.97); opacity: 0.85; }
    .su { animation: su 0.28s ease forwards; }
    @keyframes su { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
    input, textarea, button { font-family: inherit; outline: none; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }

    .layout { display: flex; min-height: 100vh; background: #f8fafc; }

    /* SIDEBAR – desktop only */
    .sidebar {
      width: 240px; flex-shrink: 0;
      background: #fff; border-right: 1px solid #e2e8f0;
      display: flex; flex-direction: column;
      position: fixed; top: 0; left: 0; bottom: 0; z-index: 50;
      padding: 24px 0;
    }
    .sidebar-logo { padding: 0 20px 24px; border-bottom: 1px solid #f1f5f9; }
    .sidebar-nav { flex: 1; padding: 16px 12px; display: flex; flex-direction: column; gap: 4px; }
    .nav-item {
      display: flex; align-items: center; gap: 12px;
      padding: 11px 12px; border-radius: 10px;
      font-size: 14px; font-weight: 600; color: #64748b;
      cursor: pointer; border: none; background: none; width: 100%;
      transition: background 0.15s, color 0.15s;
    }
    .nav-item:hover { background: #f1f5f9; color: #1e293b; }
    .nav-item.active { background: #eff6ff; color: #2563eb; }
    .sidebar-footer { padding: 16px 12px; border-top: 1px solid #f1f5f9; }

    /* MAIN CONTENT */
    .main { margin-left: 240px; flex: 1; display: flex; flex-direction: column; min-height: 100vh; }
    .topbar {
      background: #fff; border-bottom: 1px solid #e2e8f0;
      padding: 0 32px; height: 64px;
      display: flex; align-items: center; justify-content: space-between;
      position: sticky; top: 0; z-index: 40;
    }
    .content { padding: 32px; flex: 1; }

    /* MOBILE NAV */
    .mobile-topbar {
      display: none; background: #fff; border-bottom: 1px solid #e2e8f0;
      padding: 0 20px; height: 56px;
      align-items: center; justify-content: space-between;
      position: sticky; top: 0; z-index: 40;
    }
    .mobile-bottom-nav {
      display: none; background: #fff; border-top: 1px solid #e2e8f0;
      padding: 8px 0 20px; position: sticky; bottom: 0;
      justify-content: space-around; z-index: 40;
    }

    /* CARDS */
    .card { background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; }
    .card-sm { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; }

    /* GRID */
    .services-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
    .shops-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

    /* BADGE */
    .badge-dot { position: absolute; top: -3px; right: -3px; background: #ef4444; color: #fff; border-radius: 99px; font-size: 10px; font-weight: 800; padding: 1px 5px; min-width: 16px; text-align: center; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .sidebar { display: none; }
      .main { margin-left: 0; }
      .topbar { display: none; }
      .mobile-topbar { display: flex; }
      .mobile-bottom-nav { display: flex; }
      .content { padding: 16px 16px 80px; }
      .services-grid { grid-template-columns: repeat(3, 1fr); }
      .shops-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      .sidebar { width: 72px; }
      .sidebar .nav-label, .sidebar-logo h1, .sidebar-logo p, .sidebar-footer { display: none; }
      .main { margin-left: 72px; }
      .nav-item { justify-content: center; padding: 12px; }
      .shops-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 1280px) {
      .shops-grid { grid-template-columns: repeat(3, 1fr); }
    }
  `;

  // ── AUTH ──
  if (authStep !== "app") {
    return (
      <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <style>{css}</style>
        <div style={{ width: "100%", maxWidth: 420, background: "#fff", borderRadius: 24, border: "1px solid #e2e8f0", padding: "40px 32px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🔧</div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a" }}>Troquim</h1>
            <p style={{ fontSize: 14, color: "#94a3b8", marginTop: 4 }}>Assistência técnica perto de você</p>
          </div>
          <div style={{ display: "flex", background: "#f1f5f9", borderRadius: 12, padding: 4, marginBottom: 24 }}>
            {["login", "register"].map(s => (
              <button key={s} onClick={() => { setAuthStep(s); setAuthError(""); }} style={{
                flex: 1, padding: "10px", border: "none", cursor: "pointer", borderRadius: 9,
                fontWeight: 700, fontSize: 14,
                background: authStep === s ? "#fff" : "transparent",
                color: authStep === s ? "#0f172a" : "#94a3b8",
                boxShadow: authStep === s ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                transition: "all 0.2s",
              }}>{s === "login" ? "Entrar" : "Cadastrar"}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {authStep === "register" && (
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 6 }}>Nome</p>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Seu nome completo"
                  style={{ width: "100%", border: "1.5px solid #e2e8f0", borderRadius: 10, padding: "12px 14px", fontSize: 15, color: "#0f172a" }} />
              </div>
            )}
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 6 }}>E-mail</p>
              <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="seu@email.com" type="email"
                style={{ width: "100%", border: "1.5px solid #e2e8f0", borderRadius: 10, padding: "12px 14px", fontSize: 15, color: "#0f172a" }} />
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 6 }}>Senha</p>
              <input value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} placeholder="••••••••" type="password"
                style={{ width: "100%", border: "1.5px solid #e2e8f0", borderRadius: 10, padding: "12px 14px", fontSize: 15, color: "#0f172a" }} />
            </div>
            {authError && <p style={{ color: "#ef4444", fontSize: 13, fontWeight: 600, textAlign: "center" }}>{authError}</p>}
            <button className="tap" onClick={authStep === "login" ? handleLogin : handleRegister} style={{
              background: "#2563eb", color: "#fff", border: "none", borderRadius: 12,
              padding: "14px", fontSize: 15, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 4px 16px rgba(37,99,235,0.3)", marginTop: 4,
            }}>{authStep === "login" ? "Entrar" : "Criar conta"}</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
            <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
            <span style={{ color: "#94a3b8", fontSize: 13 }}>ou</span>
            <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {["🍎 Apple", "🔵 Google"].map(label => (
              <button key={label} className="tap" onClick={() => { setUser({ name: "Usuário", email: "usuario@troquim.com" }); setAuthStep("app"); }} style={{
                flex: 1, background: "#fff", border: "1.5px solid #e2e8f0",
                borderRadius: 10, padding: "12px", fontSize: 14, fontWeight: 600,
                cursor: "pointer", color: "#0f172a",
              }}>{label}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { key: "home", icon: "🏠", label: "Início" },
    { key: "search", icon: "🔍", label: "Buscar" },
    { key: "tracking", icon: "📡", label: "Rastrear" },
    { key: "notifs", icon: "🔔", label: "Notificações", badge: unread },
    { key: "profile", icon: "👤", label: "Perfil" },
  ];

  const PageContent = () => {
    // HOME
    if (tab === "home" && step === 0) return (
      <div className="su">
        {booked && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ background: "#fff", borderRadius: 20, padding: "40px 48px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
              <div style={{ fontSize: 52, marginBottom: 12 }}>✅</div>
              <p style={{ fontSize: 20, fontWeight: 900, color: "#0f172a" }}>Agendado!</p>
              <p style={{ fontSize: 14, color: "#64748b", marginTop: 4 }}>Abrindo rastreamento...</p>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="stats-grid" style={{ marginBottom: 28 }}>
          {[
            { icon: "🏪", label: "Assistências", value: "127", sub: "na sua cidade" },
            { icon: "⭐", label: "Avaliação média", value: "4,8", sub: "de 5 estrelas" },
            { icon: "⚡", label: "Tempo médio", value: "45min", sub: "para conserto" },
            { icon: "✅", label: "Consertos feitos", value: "3.241", sub: "este mês" },
          ].map(s => (
            <div key={s.label} className="card" style={{ padding: "20px" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <p style={{ fontSize: 24, fontWeight: 900, color: "#0f172a" }}>{s.value}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginTop: 2 }}>{s.label}</p>
              <p style={{ fontSize: 12, color: "#94a3b8" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Active order banner */}
        {activeOrder && (
          <div className="tap" onClick={() => setTab("tracking")} style={{
            background: "linear-gradient(120deg, #1d4ed8, #3b82f6)",
            borderRadius: 16, padding: "20px 24px", marginBottom: 28,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div>
              <p style={{ color: "#bfdbfe", fontSize: 12, fontWeight: 700, marginBottom: 4 }}>PEDIDO ATIVO</p>
              <p style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>{activeOrder.shop?.name}</p>
              <p style={{ color: "#bfdbfe", fontSize: 14 }}>{activeOrder.service?.name} · {activeOrder.phone}</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 18px" }}>
              <p style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{TRACK_STEPS[activeOrder.trackStep]?.icon} {TRACK_STEPS[activeOrder.trackStep]?.label}</p>
              <p style={{ color: "#bfdbfe", fontSize: 12, marginTop: 2 }}>Ver rastreamento →</p>
            </div>
          </div>
        )}

        {/* Promo */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 28 }}>
          <div className="tap card" onClick={() => { setSelService(services[0]); setStep(2); }} style={{
            background: "linear-gradient(120deg, #0f172a, #1e293b)", padding: "24px", border: "none",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div>
              <p style={{ color: "#60a5fa", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>PROMOÇÃO DA SEMANA</p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 800, lineHeight: 1.3, marginBottom: 16 }}>Troca de tela<br />a partir de R$ 119</p>
              <div style={{ background: "#2563eb", color: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 700, display: "inline-block" }}>Ver ofertas →</div>
            </div>
            <span style={{ fontSize: 64 }}>📱</span>
          </div>
          <div className="card" style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>Como funciona</p>
            {["Escolha o serviço", "Compare preços", "Agende online"].map((t, i) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#eff6ff", color: "#2563eb", fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <p style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 14 }}>O que precisa consertar?</p>
        <div className="services-grid" style={{ marginBottom: 32 }}>
          {services.map(s => (
            <div key={s.id} className="tap card" onClick={() => { setSelService(s); setStep(2); }} style={{
              padding: "20px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center",
            }}>
              <span style={{ fontSize: 32 }}>{s.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", lineHeight: 1.3 }}>{s.name}</span>
              <span style={{ fontSize: 11, color: "#94a3b8" }}>{s.desc}</span>
            </div>
          ))}
        </div>

        {/* Popular shops */}
        <p style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 14 }}>Populares perto de você</p>
        <div className="shops-grid">
          {shops.map(shop => (
            <div key={shop.id} className="tap card" onClick={() => { setSelShop(shop); setStep(4); }} style={{ padding: "20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: shop.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 16, flexShrink: 0 }}>{shop.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 4 }}>
                  <p style={{ fontWeight: 800, fontSize: 15, color: "#0f172a" }}>{shop.name}</p>
                  <span style={{ background: shop.open ? "#dcfce7" : "#f1f5f9", color: shop.open ? "#166534" : "#64748b", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>
                    {shop.open ? "Aberto" : "Fechado"}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0" }}><Stars n={Math.floor(shop.rating)} /> {shop.rating} · {shop.reviews} avaliações</p>
                <p style={{ fontSize: 12, color: "#94a3b8" }}>📍 {shop.distance} · ⏱ {shop.time} · 🛡 {shop.warranty}</p>
                {shop.badge && <span style={{ background: "#fef3c7", color: "#92400e", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700, marginTop: 6, display: "inline-block" }}>{shop.badge}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    // STEP 2: CHOOSE PHONE
    if (tab === "home" && step === 2) return (
      <div className="su" style={{ maxWidth: 480 }}>
        <button onClick={() => setStep(0)} style={{ background: "none", border: "none", color: "#2563eb", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 24, display: "flex", alignItems: "center", gap: 4 }}>‹ Voltar</button>
        <div style={{ background: "#eff6ff", borderRadius: 12, padding: "12px 16px", marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>{selService?.icon}</span>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#1d4ed8" }}>{selService?.name}</span>
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", marginBottom: 6 }}>Qual é o seu celular?</h2>
        <p style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>Para mostrar os preços certos para o seu modelo</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
          {phones.map(phone => (
            <div key={phone} className="tap card" onClick={() => { setSelPhone(phone); setStep(3); }} style={{
              padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#0f172a" }}>{phone}</span>
              <span style={{ color: "#cbd5e1" }}>›</span>
            </div>
          ))}
        </div>
      </div>
    );

    // STEP 3: RESULTS
    if (tab === "home" && step === 3) return (
      <div className="su">
        <button onClick={() => setStep(2)} style={{ background: "none", border: "none", color: "#2563eb", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 24, display: "flex", alignItems: "center", gap: 4 }}>‹ Voltar</button>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a" }}>{shops.length} assistências encontradas</h2>
            <p style={{ fontSize: 14, color: "#64748b" }}>{selService?.name} · {selPhone}</p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[["price", "💰 Menor preço"], ["rating", "⭐ Avaliação"], ["distance", "📍 Distância"]].map(([key, label]) => (
              <button key={key} onClick={() => setSortBy(key)} style={{
                background: sortBy === key ? "#2563eb" : "#fff", color: sortBy === key ? "#fff" : "#0f172a",
                border: "1.5px solid " + (sortBy === key ? "#2563eb" : "#e2e8f0"),
                borderRadius: 10, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer",
              }}>{label}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sortedShops.map((shop, i) => (
            <div key={shop.id} className="tap" onClick={() => { setSelShop(shop); setStep(4); }} style={{
              background: "#fff", borderRadius: 16, padding: "20px 24px",
              border: i === 0 ? "2px solid #2563eb" : "1px solid #e2e8f0",
              display: "flex", alignItems: "center", gap: 18,
            }}>
              {i === 0 && <div style={{ position: "absolute" }} />}
              <div style={{ width: 56, height: 56, borderRadius: 14, background: shop.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 18, flexShrink: 0 }}>{shop.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <p style={{ fontWeight: 800, fontSize: 16, color: "#0f172a" }}>{shop.name}</p>
                  {i === 0 && <span style={{ background: "#2563eb", color: "#fff", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>MELHOR OPÇÃO</span>}
                  {shop.badge && <span style={{ background: "#fef3c7", color: "#92400e", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{shop.badge}</span>}
                </div>
                <p style={{ fontSize: 13, color: "#64748b" }}><Stars n={Math.floor(shop.rating)} /> {shop.rating} ({shop.reviews}) · 📍 {shop.distance} · ⏱ {shop.time} · 🛡 {shop.warranty}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: 24, fontWeight: 900, color: "#2563eb" }}>
                  Sob consulta
                </p>
                <p style={{ fontSize: 12, color: "#94a3b8" }}>peça + serviço</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    // STEP 4: SHOP DETAIL
    if (tab === "home" && step === 4 && selShop) return (
      <div className="su">
        <button onClick={() => setStep(selService ? 3 : 0)} style={{ background: "none", border: "none", color: "#2563eb", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 24, display: "flex", alignItems: "center", gap: 4 }}>‹ Voltar</button>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}>
          <div>
            {/* Header */}
            <div className="card" style={{ padding: "24px", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 68, height: 68, borderRadius: 18, background: selShop.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 24 }}>{selShop.initials}</div>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a" }}>{selShop.name}</h2>
                  <p style={{ fontSize: 14, color: "#64748b" }}>📍 {selShop.address}</p>
                  <p style={{ fontSize: 13, color: selShop.open ? "#16a34a" : "#64748b", fontWeight: 700, marginTop: 4 }}>{selShop.open ? "🟢 Aberto agora · Seg–Sáb 9h–18h" : "🔴 Fechado · Abre amanhã 9h"}</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[["★ " + selShop.rating, selShop.reviews + " avaliações"], [selShop.distance, "de distância"], [selShop.warranty, "de garantia"]].map(([v, s]) => (
                  <div key={v} style={{ background: "#f8fafc", borderRadius: 12, padding: "14px", textAlign: "center" }}>
                    <p style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}>{v}</p>
                    <p style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price table */}
            <div className="card" style={{ padding: "24px", marginBottom: 20 }}>
              <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: 14 }}>Tabela de preços</p>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <th style={{ textAlign: "left", padding: "8px 0", fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>SERVIÇO</th>
                    <th style={{ textAlign: "right", padding: "8px 0", fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>PREÇO</th>
                    <th style={{ textAlign: "right", padding: "8px 0", fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>TEMPO</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map(s => (
                    <tr key={s.id} style={{ borderBottom: "1px solid #f8fafc", background: selService?.id === s.id ? "#eff6ff" : "transparent" }}>
                      <td style={{ padding: "12px 0", fontSize: 14, color: "#0f172a", fontWeight: selService?.id === s.id ? 700 : 500 }}>{s.icon} {s.name}</td>
                      <td style={{ padding: "12px 0", textAlign: "right", fontSize: 16, fontWeight: 800, color: selService?.id === s.id ? "#2563eb" : "#0f172a" }}>
                        Consultar</td>
                      <td style={{ padding: "12px 0", textAlign: "right", fontSize: 13, color: "#64748b" }}>{selShop.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Reviews */}
            <div className="card" style={{ padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>Avaliações dos clientes</p>
                <button className="tap" onClick={() => setReviewShopId(reviewShopId === selShop.id ? null : selShop.id)} style={{
                  background: "#eff6ff", color: "#2563eb", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer",
                }}>+ Avaliar</button>
              </div>
              {reviewShopId === selShop.id && (
                <div style={{ background: "#f8fafc", borderRadius: 12, padding: "16px", marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                    {[1,2,3,4,5].map(n => (
                      <button key={n} onClick={() => setNewReview(r => ({ ...r, stars: n }))} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 28, color: n <= newReview.stars ? "#f59e0b" : "#e2e8f0" }}>★</button>
                    ))}
                  </div>
                  <textarea value={newReview.text} onChange={e => setNewReview(r => ({ ...r, text: e.target.value }))} placeholder="Conte como foi sua experiência..."
                    style={{ width: "100%", background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 10, padding: "12px", fontSize: 14, color: "#0f172a", resize: "none", height: 80 }} />
                  <button className="tap" onClick={() => submitReview(selShop.id)} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 10 }}>Enviar avaliação</button>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {(reviewsMap[selShop.id] || []).map(rev => (
                  <div key={rev.id} style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2563eb", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{rev.name[0]}</div>
                        <span style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}>{rev.name}</span>
                        <span style={{ fontSize: 12, color: "#94a3b8" }}>{rev.date}</span>
                      </div>
                      <Stars n={rev.stars} />
                    </div>
                    <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.5 }}>{rev.text}</p>
                  </div>
                ))}
                {(reviewsMap[selShop.id] || []).length === 0 && <p style={{ color: "#94a3b8", fontSize: 14, textAlign: "center", padding: "12px 0" }}>Nenhuma avaliação ainda.</p>}
              </div>
            </div>
          </div>

          {/* Sticky CTA */}
          <div style={{ position: "sticky", top: 80 }}>
            <div className="card" style={{ padding: "24px" }}>
              <p style={{ fontSize: 13, color: "#64748b", marginBottom: 4 }}>Serviço selecionado</p>
              <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: 2 }}>{selService ? `${selService.icon} ${selService.name}` : "Nenhum serviço"}</p>
              {selService && (
  <p style={{ fontSize: 24, fontWeight: 900, color: "#2563eb", marginBottom: 16 }}>
    Solicitar orçamento
  </p>
)}
              <button className="tap" onClick={handleBook} style={{
                width: "100%", background: "#2563eb", color: "#fff", border: "none",
                borderRadius: 12, padding: "15px", fontSize: 15, fontWeight: 800,
                cursor: "pointer", boxShadow: "0 4px 14px rgba(37,99,235,0.3)", marginBottom: 10,
              }}>Agendar agora</button>
              <button className="tap" onClick={() => setTab("search")} style={{
                width: "100%", background: "#f1f5f9", color: "#0f172a", border: "none",
                borderRadius: 12, padding: "13px", fontSize: 14, fontWeight: 700, cursor: "pointer",
              }}>Comparar outras assistências</button>
              <p style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", marginTop: 12 }}>Sem taxa de agendamento · Gratuito</p>
            </div>
          </div>
        </div>
      </div>
    );

    // SEARCH
if (tab === "search") return (
  <div className="su">
    <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", marginBottom: 20 }}>
      Buscar assistências
    </h2>
    <Mapa />

    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: 200, background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{ color: "#94a3b8" }}>🔍</span>
        <span style={{ color: "#cbd5e1", fontSize: 15 }}>Buscar por nome ou serviço...</span>
      </div>

      {[["price", "💰 Preço"], ["rating", "⭐ Avaliação"], ["distance", "📍 Distância"]].map(([key, label]) => (
        <button key={key} onClick={() => setSortBy(key)} style={{
          background: sortBy === key ? "#2563eb" : "#fff",
          color: sortBy === key ? "#fff" : "#0f172a",
          border: "1.5px solid " + (sortBy === key ? "#2563eb" : "#e2e8f0"),
          borderRadius: 10,
          padding: "10px 16px",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
        }}>
          {label}
        </button>
      ))}
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {[...shops].sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "distance") return parseFloat(a.distance) - parseFloat(b.distance);
        return 0;
      }).map(shop => (
        <div key={shop.id} className="tap card" onClick={() => { setSelShop(shop); setStep(4); setTab("home"); }} style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: shop.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 18, flexShrink: 0 }}>{shop.initials}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <p style={{ fontWeight: 800, fontSize: 16, color: "#0f172a" }}>{shop.name}</p>
              <span style={{ background: shop.open ? "#dcfce7" : "#f1f5f9", color: shop.open ? "#166534" : "#64748b", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>
                {shop.open ? "Aberto" : "Fechado"}
              </span>
              {shop.badge && <span style={{ background: "#fef3c7", color: "#92400e", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{shop.badge}</span>}
            </div>
            <p style={{ fontSize: 13, color: "#64748b" }}>
              <Stars n={Math.floor(shop.rating)} /> {shop.rating} ({shop.reviews}) · {shop.address}
            </p>
            <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
              📍 {shop.distance} · ⏱ {shop.time} · 🛡 {shop.warranty}
            </p>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p style={{ fontSize: 20, fontWeight: 900, color: "#2563eb" }}>
              Solicitar orçamento
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

    // TRACKING
    if (tab === "tracking") return (
      <div className="su">
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", marginBottom: 20 }}>Rastreamento</h2>
        {!activeOrder ? (
          <div className="card" style={{ padding: "48px", textAlign: "center" }}>
            <span style={{ fontSize: 56 }}>📦</span>
            <p style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginTop: 16 }}>Nenhum pedido ativo</p>
            <p style={{ fontSize: 14, color: "#64748b", marginTop: 4 }}>Faça um agendamento para acompanhar aqui.</p>
            <button className="tap" onClick={() => setTab("home")} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 16 }}>Agendar agora</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start" }}>
            <div className="card" style={{ padding: "28px" }}>
              <div style={{ background: activeOrder.shop?.color, borderRadius: 14, padding: "16px 20px", marginBottom: 28 }}>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700 }}>PEDIDO ATIVO</p>
                <p style={{ color: "#fff", fontSize: 18, fontWeight: 900 }}>{activeOrder.shop?.name}</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>{activeOrder.service?.name} · {activeOrder.phone}</p>
              </div>
              {TRACK_STEPS.map((s, i) => {
                const done = i < activeOrder.trackStep;
                const current = i === activeOrder.trackStep;
                return (
                  <div key={s.id} style={{ display: "flex", gap: 16, marginBottom: i < TRACK_STEPS.length - 1 ? 0 : 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: done ? "#2563eb" : current ? "#eff6ff" : "#f1f5f9", border: current ? "2px solid #2563eb" : "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: done ? "#fff" : "#64748b", fontWeight: 800, flexShrink: 0 }}>
                        {done ? "✓" : s.icon}
                      </div>
                      {i < TRACK_STEPS.length - 1 && <div style={{ width: 2, height: 36, background: done ? "#2563eb" : "#e2e8f0", margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingTop: 8, paddingBottom: i < TRACK_STEPS.length - 1 ? 28 : 0 }}>
                      <p style={{ fontSize: 15, fontWeight: current ? 800 : 600, color: done || current ? "#0f172a" : "#94a3b8" }}>{s.label}</p>
                      {current && <p style={{ fontSize: 13, color: "#2563eb", marginTop: 2 }}>{s.desc}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 80 }}>
              <div className="card" style={{ padding: "20px" }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>Status atual</p>
                <div style={{ background: "#eff6ff", borderRadius: 12, padding: "16px", textAlign: "center" }}>
                  <p style={{ fontSize: 28 }}>{TRACK_STEPS[activeOrder.trackStep]?.icon}</p>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "#1d4ed8", marginTop: 6 }}>{TRACK_STEPS[activeOrder.trackStep]?.label}</p>
                  <p style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{TRACK_STEPS[activeOrder.trackStep]?.desc}</p>
                </div>
              </div>
              {activeOrder.trackStep < 4 ? (
                <button className="tap" onClick={advanceTrack} style={{ background: "#f1f5f9", color: "#2563eb", border: "none", borderRadius: 12, padding: "14px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                  Simular próximo status →
                </button>
              ) : (
                <div style={{ background: "#dcfce7", borderRadius: 12, padding: "16px", textAlign: "center" }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "#166534" }}>🎉 Pronto para buscar!</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );

    // NOTIFS
    if (tab === "notifs") return (
      <div className="su">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a" }}>Notificações</h2>
          {unread > 0 && <button onClick={() => setNotifs(n => n.map(x => ({ ...x, read: true })))} style={{ background: "none", border: "none", color: "#2563eb", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Marcar tudo como lido</button>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {notifs.map(n => (
            <div key={n.id} style={{ background: n.read ? "#fff" : "#eff6ff", borderRadius: 14, padding: "16px 20px", border: n.read ? "1px solid #e2e8f0" : "1.5px solid #bfdbfe", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: n.read ? "#f1f5f9" : "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{n.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <p style={{ fontWeight: 800, fontSize: 14, color: "#0f172a" }}>{n.title}</p>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>{n.time}</span>
                </div>
                <p style={{ fontSize: 14, color: "#475569" }}>{n.body}</p>
              </div>
              {!n.read && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2563eb", flexShrink: 0, marginTop: 4 }} />}
            </div>
          ))}
        </div>
      </div>
    );

    // PROFILE
    if (tab === "profile") return (
      <div className="su" style={{ maxWidth: 600 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", marginBottom: 24 }}>Meu perfil</h2>
        <div className="card" style={{ padding: "24px", marginBottom: 20, display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 28 }}>{user?.name?.[0]?.toUpperCase()}</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 20, fontWeight: 900, color: "#0f172a" }}>{user?.name}</p>
            <p style={{ fontSize: 14, color: "#64748b" }}>{user?.email}</p>
          </div>
          <button style={{ background: "#f1f5f9", border: "none", borderRadius: 10, padding: "10px 16px", fontSize: 14, fontWeight: 600, color: "#0f172a", cursor: "pointer" }}>Editar</button>
        </div>
        <div className="card" style={{ overflow: "hidden", marginBottom: 20 }}>
          {[["📋", "Meus pedidos", "3 pedidos realizados"], ["⭐", "Minhas avaliações", "2 avaliações feitas"], ["🔔", "Notificações", "Gerenciar alertas"], ["🔒", "Segurança", "Alterar senha"]].map(([icon, label, sub], i, arr) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderBottom: i < arr.length - 1 ? "1px solid #f1f5f9" : "none", cursor: "pointer" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{icon}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#0f172a" }}>{label}</p>
                <p style={{ fontSize: 12, color: "#94a3b8" }}>{sub}</p>
              </div>
              <span style={{ color: "#cbd5e1", fontSize: 18 }}>›</span>
            </div>
          ))}
        </div>
        <button className="tap" onClick={() => { setAuthStep("login"); setUser(null); setForm({ name: "", email: "", password: "" }); }} style={{ background: "#fff", color: "#ef4444", border: "1.5px solid #fecaca", borderRadius: 12, padding: "14px", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "100%" }}>Sair da conta</button>
      </div>
    );

    return null;
  };

  return (
    <div className="layout" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{css}</style>

      {/* SIDEBAR – desktop */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a" }}>🔧 Troquim</h1>
          <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>Assistência técnica</p>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button key={item.key} className={`nav-item ${tab === item.key ? "active" : ""}`} onClick={() => { setTab(item.key); if (item.key === "home") setStep(0); }} style={{ position: "relative" }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.badge > 0 && <span style={{ marginLeft: "auto", background: "#ef4444", color: "#fff", borderRadius: 99, fontSize: 10, fontWeight: 800, padding: "1px 6px" }}>{item.badge}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 14 }}>{user?.name?.[0]?.toUpperCase()}</div>
            <div className="nav-label">
              <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{user?.name}</p>
              <p style={{ fontSize: 11, color: "#94a3b8" }}>{user?.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="main">
        {/* Desktop topbar */}
        <header className="topbar">
          <div>
            <p style={{ fontSize: 13, color: "#94a3b8" }}>Bem-vindo de volta,</p>
            <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>{user?.name}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ position: "relative" }}>
              <button onClick={() => setTab("notifs")} style={{ background: "#f1f5f9", border: "none", borderRadius: 10, width: 40, height: 40, cursor: "pointer", fontSize: 18 }}>🔔</button>
              {unread > 0 && <span className="badge-dot">{unread}</span>}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#f1f5f9", borderRadius: 12, padding: "8px 14px" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2563eb", color: "#fff", fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>{user?.name?.[0]?.toUpperCase()}</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{user?.name}</span>
            </div>
          </div>
        </header>

        {/* Mobile topbar */}
        <header className="mobile-topbar">
          <h1 style={{ fontSize: 20, fontWeight: 900, color: "#0f172a" }}>🔧 Troquim</h1>
          <div style={{ position: "relative" }}>
            <button onClick={() => setTab("notifs")} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}>🔔</button>
            {unread > 0 && <span className="badge-dot">{unread}</span>}
          </div>
        </header>

        {/* Page content */}
        <main className="content">
          <PageContent />
        </main>

        {/* Mobile bottom nav */}
        <nav className="mobile-bottom-nav">
          {navItems.map(item => (
            <button key={item.key} onClick={() => { setTab(item.key); if (item.key === "home") setStep(0); }} style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "4px 16px", position: "relative",
            }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              {item.badge > 0 && <span className="badge-dot">{item.badge}</span>}
              <span style={{ fontSize: 10, fontWeight: 700, color: tab === item.key ? "#2563eb" : "#94a3b8" }}>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
