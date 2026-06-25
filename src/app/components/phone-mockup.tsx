import {
  Home,
  CreditCard,
  TrendingUp,
  Bell,
  User,
  Search,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  ShieldCheck,
  MessageCircle,
  ChevronRight,
  Fingerprint,
  Sparkles,
  Check,
  MapPin,
  ShoppingCart,
  Star,
  Heart,
  Filter,
  Minus,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";
import { welImg1, welImg2, welImg3 } from "./welcome-images";
import imgBannerHeroMichelob from "../../imports/banner-hero-michelob.jpeg";
import imgBannerHeroBolaoBud from "../../imports/banner-hero-bolao-bud.jpeg";
import imgBannerHeroEntregaGratis from "../../imports/banner-hero-entrega-gratis.jpeg";
import imgCarrosselBanner1 from "../../imports/Banner_Hero_1.png";
import imgCarrosselBanner3 from "../../imports/Banner_Hero_3.png";
import imgCarrosselBanner4 from "../../imports/Banner_Hero_4.png";
import { rec4uImg1, rec4uImg2, rec4uImg3 } from "./rec4u-images";
import { ofertasImg1, ofertasImg2, ofertasImg3 } from "./ofertas-dia-images";
import { prateleiraImg1, prateleiraImg2 } from "./prateleira-ofertas-images";
import prateleiraOfertasCategoriasImg from "../../imports/prateleira-ofertas-categorias.png";
import { recomendadosImg1, recomendadosImg2, recomendadosImg3 } from "./recomendados-images";
import { choppImg1, choppImg2, choppImg3, choppImg4 } from "./chopp-images";
import { promoImg1, promoImg2, promoImg3 } from "./promo-relampago-images";
import { catImg1, catImg2, catImg3, catImg4, catImg5 } from "./categorias-images";
import { marcasImg1, marcasImg2, marcasImg3 } from "./carrossel-marcas-images";
import { pagCatImg1, pagCatImg2, pagCatImg3, pagCatImg4, pagCatImg5 } from "./paginas-categorias-images";
import { pdpImg1, pdpImg2 } from "./pdp-images";
import { descontoImg1 } from "./desconto-progressivo-images";
import { brandImg1, brandImg2 } from "./branding-page-images";
import { combinaImg1 } from "./combina-com-images";
import { preSacolaImg1 } from "./pre-sacola-images";
import preSacolaImg2 from "../../imports/pre-sacola-2.png";
import { recSimilarImg1 } from "./rec-similar-images";
import { bannersImg1, bannersImg4, bannersImgNew } from "./banners-images";
import paginasPrateleirasHomeImg from "../../imports/paginas-prateleiras-home-scroll.png";
import paginasPrateleirasTopoImg from "../../imports/paginas-prateleiras-topo-sem-titulo.png";
import paginasPrateleirasGridImg from "../../imports/paginas-prateleiras-grid-completo.png";
import prateleirasShowcaseSemBadgeImg from "../../imports/prateleiras-showcase-sem-badge.png";
import prateleirasShowcaseComBadgeImg from "../../imports/prateleiras-showcase-com-badge.png";
import prateleirasShowcaseSegundaImg from "../../imports/prateleiras-showcase-segunda-prateleira.png";
import recComplementoSacolaAntesImg from "../../imports/rec-complemento-sacola-antes.png";
import recComplementoModalSugestoesImg from "../../imports/rec-complemento-modal-sugestoes.png";
import recComplementoItensAdicionadosImg from "../../imports/rec-complemento-itens-adicionados.png";
import pesquisaInAppPosEntregaVaziaImg from "../../imports/pesquisa-inapp-pos-entrega-vazia.png";
import pesquisaInAppAvaliacaoPreenchendoImg from "../../imports/pesquisa-inapp-avaliacao-preenchendo.png";
import pesquisaInAppAvaliacaoCompletaImg from "../../imports/pesquisa-inapp-avaliacao-completa.png";

function StatusBar() {
  return (
    <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[11px] text-slate-800">
      <span className="tracking-tight">9:41</span>
      <div className="flex gap-1 items-center">
        <div className="w-4 h-2 rounded-sm bg-slate-800" />
        <div className="w-3 h-3 rounded-full border border-slate-800" />
      </div>
    </div>
  );
}

function PhoneFrame({ children, tone = "indigo" }: { children: React.ReactNode; tone?: string }) {
  return (
    <div className="relative mx-auto w-[280px] h-[560px] rounded-[40px] bg-slate-900 p-2 shadow-2xl">
      <div className={`relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-b from-${tone}-50 to-white`}>
        <StatusBar />
        {children}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-100 flex justify-around items-center px-4">
          <Home className="w-5 h-5 text-indigo-600" />
          <CreditCard className="w-5 h-5 text-slate-400" />
          <TrendingUp className="w-5 h-5 text-slate-400" />
          <Bell className="w-5 h-5 text-slate-400" />
          <User className="w-5 h-5 text-slate-400" />
        </div>
      </div>
    </div>
  );
}

type FocusArea = {
  top: number;
  left: number;
  width: number;
  height: number;
  label?: string;
  variant?: "spotlight" | "outline";
};

type ImageFrame = {
  name: string;
  src: string;
  focus?: FocusArea;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

function FocusedMockupImage({
  frame,
  active,
  objectFit = "cover",
  objectPosition = "top",
}: {
  frame: ImageFrame;
  active: boolean;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}) {
  const focus = frame.focus;
  const fit = frame.objectFit ?? objectFit;
  const position = frame.objectPosition ?? objectPosition;
  const right = focus ? 100 - focus.left - focus.width : 0;
  const bottom = focus ? 100 - focus.top - focus.height : 0;
  const baseFilter = focus && focus.variant !== "outline"
    ? "grayscale(1) saturate(0) contrast(0.92) brightness(1.03)"
    : "none";

  return (
    <div
      className="absolute inset-0 transition-opacity duration-700"
      style={{ opacity: active ? 1 : 0, zIndex: active ? 2 : 1, pointerEvents: "none" }}
    >
      <img
        src={frame.src}
        alt={frame.name}
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: fit, objectPosition: position, filter: baseFilter }}
      />
      {focus && focus.variant !== "outline" && (
        <img
          src={frame.src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: fit,
            objectPosition: position,
            clipPath: `inset(${focus.top}% ${right}% ${bottom}% ${focus.left}%)`,
          }}
        />
      )}
      {focus && (
        <div
          className="absolute rounded-xl border-2 border-yellow-400 shadow-[0_0_0_999px_rgba(15,23,42,0.08),0_10px_28px_rgba(15,23,42,0.22)]"
          style={{
            top: `${focus.top}%`,
            left: `${focus.left}%`,
            width: `${focus.width}%`,
            height: `${focus.height}%`,
            boxSizing: "border-box",
          }}
        >
          {focus.label && (
            <span className="absolute -top-3 left-2 rounded-full bg-yellow-400 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-950 shadow-sm">
              {focus.label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function useCyclingFrame(length: number, printIndex = 0) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % length), 2500);
    return () => clearInterval(t);
  }, [length]);

  useEffect(() => {
    const selectPrintFrame = () => setIdx(Math.min(printIndex, length - 1));

    window.addEventListener("book:prepare-print", selectPrintFrame);
    window.addEventListener("beforeprint", selectPrintFrame);

    return () => {
      window.removeEventListener("book:prepare-print", selectPrintFrame);
      window.removeEventListener("beforeprint", selectPrintFrame);
    };
  }, [length, printIndex]);

  return [idx, setIdx] as const;
}

const welcomeFrames = [
  { name: "Default", src: welImg1 },
  { name: "Focus", src: welImg2 },
  { name: "Filled", src: welImg3 },
];

function Onboarding() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % welcomeFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {welcomeFrames.map((f, i) => (
          <img
            key={f.name}
            src={f.src}
            alt={f.name}
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0, objectFit: "cover", objectPosition: "top", zIndex: 1 }}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {welcomeFrames.map((f, i) => (
          <button
            key={f.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{welcomeFrames[idx].name}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <PhoneFrame>
      <div className="px-5 pt-4">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-[10px] text-slate-500">Olá,</p>
            <p className="text-[13px] text-slate-900">Marina Costa</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-orange-400" />
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-4 text-white mb-4 shadow-lg">
          <p className="text-[10px] opacity-80">Saldo total</p>
          <p className="text-xl tracking-tight mb-3">R$ 24.891,30</p>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/15 rounded-lg py-1.5 text-center text-[10px]">Pix</div>
            <div className="flex-1 bg-white/15 rounded-lg py-1.5 text-center text-[10px]">Pagar</div>
            <div className="flex-1 bg-white/15 rounded-lg py-1.5 text-center text-[10px]">Mais</div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {["Pix", "Boleto", "Recarga", "Invest"].map((a) => (
            <div key={a} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <Plus className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-[9px] text-slate-600">{a}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-100 p-3 flex gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <p className="text-[10px] text-amber-900 leading-snug">Você economizou 12% em alimentação este mês.</p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function Transactions() {
  const items = [
    { icon: ArrowDownLeft, name: "Pix recebido", who: "Lucas M.", val: "+ 250,00", neg: false },
    { icon: ArrowUpRight, name: "iFood", who: "Alimentação", val: "- 48,90", neg: true },
    { icon: ArrowUpRight, name: "Uber", who: "Transporte", val: "- 22,40", neg: true },
    { icon: ArrowUpRight, name: "Netflix", who: "Assinatura", val: "- 39,90", neg: true },
    { icon: ArrowDownLeft, name: "Salário", who: "Empresa XYZ", val: "+ 5.800,00", neg: false },
  ];
  return (
    <PhoneFrame>
      <div className="px-5 pt-4">
        <p className="text-[13px] text-slate-900 mb-3">Extrato</p>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 mb-4">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[10px] text-slate-400">Buscar transação</span>
        </div>
        <p className="text-[9px] text-slate-400 mb-2">HOJE</p>
        <div className="space-y-2">
          {items.map((i, idx) => (
            <div key={idx} className="flex items-center gap-3 py-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i.neg ? "bg-rose-50" : "bg-emerald-50"}`}>
                <i.icon className={`w-4 h-4 ${i.neg ? "text-rose-500" : "text-emerald-600"}`} />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-slate-900">{i.name}</p>
                <p className="text-[9px] text-slate-400">{i.who}</p>
              </div>
              <p className={`text-[11px] ${i.neg ? "text-slate-700" : "text-emerald-600"}`}>R$ {i.val}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function Cards() {
  return (
    <PhoneFrame>
      <div className="px-5 pt-4">
        <p className="text-[13px] text-slate-900 mb-4">Meus cartões</p>
        <div className="rounded-2xl aspect-[1.6/1] bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-4 text-white relative mb-3 shadow-xl">
          <div className="flex justify-between items-start">
            <div className="w-8 h-6 rounded bg-amber-400/80" />
            <span className="text-[9px] opacity-70">VISA</span>
          </div>
          <p className="absolute bottom-4 left-4 text-[13px] tracking-widest">•••• 4829</p>
        </div>
        <div className="rounded-2xl aspect-[1.6/1] bg-gradient-to-br from-teal-500 to-indigo-500 p-4 text-white relative mb-4 shadow-xl opacity-60 scale-95">
          <span className="text-[9px] opacity-70">Virtual</span>
        </div>
        <div className="space-y-2">
          {["Bloquear temporariamente", "Ajustar limite", "Gerar cartão virtual"].map((o) => (
            <div key={o} className="flex justify-between items-center p-3 rounded-xl bg-slate-50">
              <span className="text-[11px] text-slate-700">{o}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function Invest() {
  return (
    <PhoneFrame>
      <div className="px-5 pt-4">
        <p className="text-[13px] text-slate-900 mb-1">Investimentos</p>
        <p className="text-[10px] text-slate-400 mb-4">Rentabilidade consolidada</p>
        <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 mb-4">
          <p className="text-[10px] text-emerald-700">Patrimônio</p>
          <p className="text-lg text-emerald-900 tracking-tight">R$ 48.520,12</p>
          <p className="text-[10px] text-emerald-600">+ R$ 1.240 · +2,6% no mês</p>
        </div>
        <div className="h-16 rounded-xl bg-gradient-to-r from-emerald-100 to-indigo-100 mb-4 relative overflow-hidden">
          <svg viewBox="0 0 200 60" className="w-full h-full">
            <path d="M0 50 Q 40 30 80 35 T 160 15 T 200 10" stroke="#059669" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="space-y-2">
          {[
            { n: "Tesouro Selic", v: "R$ 18.420", p: "+0,8%" },
            { n: "CDB Banco X", v: "R$ 12.100", p: "+1,1%" },
            { n: "Fundo Multi", v: "R$ 18.000", p: "+3,2%" },
          ].map((i) => (
            <div key={i.n} className="flex justify-between items-center p-2.5 rounded-xl bg-white border border-slate-100">
              <span className="text-[11px] text-slate-700">{i.n}</span>
              <div className="text-right">
                <p className="text-[11px] text-slate-900">{i.v}</p>
                <p className="text-[9px] text-emerald-600">{i.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function Profile() {
  return (
    <PhoneFrame>
      <div className="px-5 pt-4">
        <div className="flex flex-col items-center mb-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 mb-2" />
          <p className="text-[13px] text-slate-900">Marina Costa</p>
          <p className="text-[10px] text-slate-400">marina@nimbus.com</p>
        </div>
        <div className="space-y-2">
          {[
            { i: Fingerprint, t: "Biometria", s: "Ativada" },
            { i: ShieldCheck, t: "Verificação em 2 etapas", s: "Ativada" },
            { i: CreditCard, t: "Limites", s: "Personalizar" },
            { i: Bell, t: "Notificações", s: "Gerenciar" },
          ].map((o) => (
            <div key={o.t} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <o.i className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-slate-900">{o.t}</p>
                <p className="text-[9px] text-slate-400">{o.s}</p>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function Notifications() {
  const list = [
    { t: "Pix recebido", d: "R$ 250 de Lucas M.", c: "indigo" },
    { t: "Cashback creditado", d: "R$ 12,40 na sua conta", c: "emerald" },
    { t: "Novo insight disponível", d: "Veja como economizar", c: "amber" },
    { t: "Fatura fecha em 3 dias", d: "R$ 1.842,30", c: "rose" },
  ];
  return (
    <PhoneFrame>
      <div className="px-5 pt-4">
        <p className="text-[13px] text-slate-900 mb-4">Notificações</p>
        <div className="space-y-2">
          {list.map((n, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-white border border-slate-100">
              <div className={`w-2 h-2 rounded-full mt-1.5 bg-${n.c}-500`} />
              <div className="flex-1">
                <p className="text-[11px] text-slate-900">{n.t}</p>
                <p className="text-[9px] text-slate-500 mt-0.5">{n.d}</p>
                <p className="text-[9px] text-slate-300 mt-1">há 2h</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function Support() {
  return (
    <PhoneFrame>
      <div className="px-5 pt-4">
        <p className="text-[13px] text-slate-900 mb-1">Central de ajuda</p>
        <p className="text-[10px] text-slate-400 mb-4">Como podemos ajudar?</p>
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-white mb-4">
          <MessageCircle className="w-5 h-5 mb-2" />
          <p className="text-[11px]">Falar com a Nina</p>
          <p className="text-[9px] opacity-80">Assistente virtual 24/7</p>
        </div>
        <p className="text-[10px] text-slate-400 mb-2">TÓPICOS POPULARES</p>
        <div className="space-y-2">
          {["Como fazer um Pix", "Bloquear cartão", "Aumentar limite", "Alterar senha"].map((q) => (
            <div key={q} className="flex justify-between items-center p-3 rounded-xl bg-slate-50">
              <span className="text-[11px] text-slate-700">{q}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function Splash() {
  return (
    <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900" style={{ backgroundColor: "#FFD20F" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-black" style={{ fontWeight: 900, fontStyle: "italic", fontSize: 96, lineHeight: 1 }}>Zé</div>
        <div className="text-black tracking-[0.2em] mt-2 text-[10px]">DELIVERY DE BEBIDAS</div>
      </div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-black/60 animate-pulse" style={{ animationDelay: "150ms" }} />
        <div className="w-1.5 h-1.5 rounded-full bg-black/30 animate-pulse" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}

function Cadastro() {
  const fields = [
    { label: "Nome completo", value: "Marina Costa" },
    { label: "E-mail", value: "marina@email.com" },
    { label: "Celular", value: "(11) 98765-4321" },
    { label: "Senha", value: "••••••••" },
  ];
  return (
    <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
      <div className="flex justify-between items-center px-5 pt-3 pb-2 text-[10px] text-black">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3.5 h-1.5 rounded-sm bg-black" />
          <div className="w-2.5 h-2.5 rounded-full border border-black" />
        </div>
      </div>
      <div className="px-5 pt-2 pb-3 flex items-center gap-3 border-b border-slate-100">
        <ChevronRight className="w-4 h-4 rotate-180 text-black" />
        <p className="text-[13px] text-black" style={{ fontWeight: 700 }}>Criar conta</p>
      </div>
      <div className="px-5 pt-5">
        <p className="text-[15px] text-black mb-1" style={{ fontWeight: 700 }}>Quase lá!</p>
        <p className="text-[11px] text-slate-500 mb-5">Preencha seus dados para criar sua conta</p>
        <div className="space-y-3">
          {fields.map((f, i) => (
            <div key={f.label}>
              <p className="text-[9px] text-slate-500 mb-1 uppercase tracking-wider">{f.label}</p>
              <div className={`h-10 rounded border px-3 flex items-center text-[12px] ${i === 0 ? "border-[#FFD20F] border-2 text-black" : "border-[#ccc] text-slate-700"}`}>
                {f.value}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-2 mt-4">
          <div className="w-3.5 h-3.5 rounded border border-[#FFD20F] bg-[#FFD20F] flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
          </div>
          <p className="text-[9px] text-slate-600 leading-snug">Li e aceito os <span className="underline">Termos de uso</span> e a <span className="underline">Política de privacidade</span></p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100">
        <div className="w-full h-11 rounded bg-[#FFD20F] flex items-center justify-center text-[13px] text-black" style={{ fontWeight: 700 }}>
          Criar conta
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <PhoneFrame tone="yellow">
      <div className="flex flex-col h-full bg-white overflow-hidden">
        <div className="bg-yellow-400 px-4 pt-2 pb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-[10px] text-yellow-900">
              <MapPin className="w-3 h-3" />
              <span className="truncate max-w-[120px]">Rua Augusta, 1200 · SP</span>
            </div>
            <div className="flex gap-2">
              <Bell className="w-4 h-4 text-yellow-900" />
              <ShoppingCart className="w-4 h-4 text-yellow-900" />
            </div>
          </div>
          <div className="bg-white rounded-xl flex items-center gap-2 px-3 py-1.5">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[10px] text-slate-400">Buscar cerveja, vinho...</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3">
          <div className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 p-3 text-white">
            <p className="text-[9px] opacity-70 mb-0.5">PROMOÇÃO DO DIA</p>
            <p className="text-xs">Pack Spaten 350ml</p>
            <p className="text-[10px] opacity-80">12 latas por R$ 39,90</p>
            <div className="mt-1.5 inline-block bg-yellow-400 text-slate-900 text-[9px] px-2 py-0.5 rounded-full">Ver oferta</div>
          </div>
          <div>
            <p className="text-[10px] mb-1.5">Categorias</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {["🍺 Cervejas", "🍷 Vinhos", "🥤 Sem álcool", "🍕 Snacks"].map((c) => (
                <div key={c} className="shrink-0 bg-yellow-50 border border-yellow-200 rounded-full px-2 py-1 text-[9px] text-yellow-800">{c}</div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] mb-1.5">Recomendados para você</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Brahma 600ml", price: "R$ 10,90", badge: "🔥" },
                { name: "Corona Extra 355ml", price: "R$ 8,50", badge: "⭐" },
                { name: "Guaraná Antarctica 2L", price: "R$ 9,90", badge: "" },
                { name: "Budweiser Lata", price: "R$ 5,90", badge: "💥" },
              ].map((p) => (
                <div key={p.name} className="bg-slate-50 rounded-xl p-2 border border-slate-100">
                  <div className="w-full h-10 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-1.5 flex items-center justify-center text-lg">🍺</div>
                  <p className="text-[9px] leading-tight mb-0.5">{p.badge} {p.name}</p>
                  <p className="text-[9px] text-yellow-700">{p.price}</p>
                  <div className="mt-1 bg-yellow-400 rounded-lg w-full h-5 flex items-center justify-center">
                    <Plus className="w-3 h-3 text-slate-900" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 px-4 py-2 flex justify-around">
          {[Home, Search, ShoppingCart, User].map((Icon, i) => (
            <div key={i} className={`flex flex-col items-center gap-0.5 ${i === 0 ? "text-yellow-500" : "text-slate-400"}`}>
              <Icon className="w-4 h-4" />
              <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-yellow-400" : "bg-transparent"}`} />
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

const categoriasFrames: ImageFrame[] = [
  { name: "Default", src: catImg1, focus: { top: 35, left: 0, width: 100, height: 38, label: "Categorias" } },
  { name: "Scroll 1", src: catImg2, focus: { top: 35, left: 0, width: 100, height: 38, label: "Categorias" } },
  { name: "Scroll 2", src: catImg3, focus: { top: 35, left: 0, width: 100, height: 38, label: "Categorias" } },
  { name: "Scroll 3", src: catImg4, focus: { top: 35, left: 0, width: 100, height: 38, label: "Categorias" } },
];

function ShowcaseCategorias() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % categoriasFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {categoriasFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {categoriasFrames.map((f, i) => (
          <button
            key={f.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{categoriasFrames[idx].name}</p>
    </div>
  );
}

const bannerHeroFrames: ImageFrame[] = [
  { name: "Banner Hero — Michelob", src: imgBannerHeroMichelob, focus: { top: 53, left: 0, width: 100, height: 14, label: "Banner Hero" } },
  { name: "Banner Hero — Bolão Bud", src: imgBannerHeroBolaoBud, focus: { top: 53, left: 0, width: 100, height: 14, label: "Banner Hero" } },
  { name: "Banner Hero — Entrega grátis", src: imgBannerHeroEntregaGratis, focus: { top: 53, left: 0, width: 100, height: 14, label: "Banner Hero" } },
];

function ShowcaseBannerHero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % bannerHeroFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {bannerHeroFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {bannerHeroFrames.map((f, i) => (
          <button
            key={f.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{bannerHeroFrames[idx].name}</p>
    </div>
  );
}

function PlaceholderDots({ count = 3, label = "Default" }: { count?: number; label?: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mt-5">
        <div className="h-1.5 w-8 rounded-full bg-slate-900" />
        {Array.from({ length: count - 1 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{label}</p>
    </div>
  );
}

const prateleiraFrames: ImageFrame[] = [
  { name: "Categorias", src: prateleiraOfertasCategoriasImg, focus: { top: 38, left: 0, width: 100, height: 58, label: "Modal" } },
  { name: "Ofertas A", src: prateleiraImg1, focus: { top: 17, left: 0, width: 100, height: 34, label: "Ofertas selecionadas" } },
  { name: "Ofertas B", src: prateleiraImg2, focus: { top: 17, left: 0, width: 100, height: 34, label: "Ofertas selecionadas" } },
];

function ShowcasePrateleira() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % prateleiraFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {prateleiraFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {prateleiraFrames.map((f, i) => (
          <button
            key={f.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{prateleiraFrames[idx].name}</p>
    </div>
  );
}

const rec4uFrames: ImageFrame[] = [
  { name: "Home 1", src: rec4uImg1, focus: { top: 27, left: 0, width: 100, height: 35, label: "Rec4U" } },
  { name: "Home 2", src: rec4uImg2, focus: { top: 27, left: 0, width: 100, height: 35, label: "Rec4U" } },
  { name: "PDP", src: rec4uImg3 },
];

function ShowcaseRec4U() {
  const [idx, setIdx] = useCyclingFrame(rec4uFrames.length, 0);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {rec4uFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {rec4uFrames.map((f, i) => (
          <button
            key={f.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{rec4uFrames[idx].name}</p>
    </div>
  );
}

const ofertasDiaFrames: ImageFrame[] = [
  { name: "Home 1", src: ofertasImg1, focus: { top: 45, left: 0, width: 100, height: 32, label: "Ofertas" } },
  { name: "Home 2", src: ofertasImg2, focus: { top: 45, left: 0, width: 100, height: 32, label: "Ofertas" } },
  { name: "PDP", src: ofertasImg3 },
];

function ShowcaseOfertasDia() {
  const [idx, setIdx] = useCyclingFrame(ofertasDiaFrames.length, 0);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {ofertasDiaFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {ofertasDiaFrames.map((f, i) => (
          <button
            key={f.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{ofertasDiaFrames[idx].name}</p>
    </div>
  );
}

const choppFrames: ImageFrame[] = [
  { name: "Categoria", src: choppImg1 },
  { name: "Guia de Litragem", src: choppImg2 },
  { name: "Categoria", src: choppImg3 },
  { name: "PDP", src: choppImg4 },
];

function ShowcaseChopp() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % choppFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {choppFrames.map((f, i) => (
          <FocusedMockupImage
            key={i}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {choppFrames.map((f, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{choppFrames[idx].name}</p>
    </div>
  );
}

const recomendadosFrames: ImageFrame[] = [
  { name: "Recomendados 1", src: recomendadosImg1, focus: { top: 29, left: 0, width: 100, height: 32, label: "Recomendados" } },
  { name: "Recomendados 2", src: recomendadosImg2, focus: { top: 29, left: 0, width: 100, height: 32, label: "Recomendados" } },
  { name: "Recomendados 3", src: recomendadosImg3 },
];

function ShowcaseRecomendacoes() {
  const [idx, setIdx] = useCyclingFrame(recomendadosFrames.length, 0);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {recomendadosFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {recomendadosFrames.map((f, i) => (
          <button
            key={f.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{recomendadosFrames[idx].name}</p>
    </div>
  );
}

const pagCatFrames: ImageFrame[] = [
  { name: "Categorias", src: pagCatImg1, focus: { top: 39, left: 0, width: 100, height: 57, label: "Categorias" } },
  { name: "Cervejas", src: pagCatImg2, focus: { top: 14, left: 0, width: 100, height: 78, label: "Grid" } },
  { name: "Vinhos", src: pagCatImg3, focus: { top: 14, left: 0, width: 100, height: 78, label: "Grid" } },
  { name: "Destilados", src: pagCatImg4, focus: { top: 14, left: 0, width: 100, height: 78, label: "Grid" } },
  { name: "Salgadinhos", src: pagCatImg5, focus: { top: 14, left: 0, width: 100, height: 78, label: "Grid" } },
];

function CategoryPage() {
  const [idx, setIdx] = useCyclingFrame(pagCatFrames.length, 1);
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {pagCatFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {pagCatFrames.map((f, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{pagCatFrames[idx].name}</p>
    </div>
  );
}

const brandFrames: ImageFrame[] = [
  { name: "Com produtos", src: brandImg1 },
  { name: "Sem produtos na região", src: brandImg2 },
];

function BrandPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % brandFrames.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {brandFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {brandFrames.map((f, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{brandFrames[idx].name}</p>
    </div>
  );
}

const pdpFrames: ImageFrame[] = [
  { name: "Default", src: pdpImg1 },
  { name: "Com desconto", src: pdpImg2 },
];

function ProductPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % pdpFrames.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {pdpFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {pdpFrames.map((f, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{pdpFrames[idx].name}</p>
    </div>
  );
}

const carrosselMarcasFrames: ImageFrame[] = [
  { name: "Marcas A", src: marcasImg1, focus: { top: 21, left: 0, width: 100, height: 27, label: "Marcas" } },
  { name: "Marcas B", src: marcasImg2, focus: { top: 21, left: 0, width: 100, height: 27, label: "Marcas" } },
  { name: "Marcas C", src: marcasImg3, focus: { top: 21, left: 0, width: 100, height: 27, label: "Marcas" } },
];

function CarrosselMarcas() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % carrosselMarcasFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {carrosselMarcasFrames.map((f, i) => (
          <FocusedMockupImage
            key={i}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {carrosselMarcasFrames.map((f, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{carrosselMarcasFrames[idx].name}</p>
    </div>
  );
}

const carrosselBannersFrames: ImageFrame[] = [
  { name: "Banner", src: imgCarrosselBanner1, focus: { top: 49.6, left: 0, width: 100, height: 15.2, label: "Banner" } },
  { name: "Banner", src: imgCarrosselBanner3, focus: { top: 49.6, left: 0, width: 100, height: 15.2, label: "Banner" } },
  { name: "Banner", src: imgCarrosselBanner4, focus: { top: 49.6, left: 0, width: 100, height: 15.2, label: "Banner" } },
];

function CarrosselBannersShowcase() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % carrosselBannersFrames.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {carrosselBannersFrames.map((f, i) => (
          <FocusedMockupImage
            key={i}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {carrosselBannersFrames.map((f, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={`Banner ${i + 1}`} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{carrosselBannersFrames[idx].name}</p>
    </div>
  );
}

const prateleirasShowcaseFrames: ImageFrame[] = [
  { name: "Home — Prateleira sem badge", src: prateleirasShowcaseSemBadgeImg },
  { name: "Home — Prateleira com badge Leve + Por -", src: prateleirasShowcaseComBadgeImg },
  { name: "Home — Segunda prateleira", src: prateleirasShowcaseSegundaImg },
];

function PrateleirasShowcase() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % prateleirasShowcaseFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {prateleirasShowcaseFrames.map((frame, i) => (
          <FocusedMockupImage
            key={frame.name}
            frame={frame}
            active={i === idx}
            objectPosition="top center"
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {prateleirasShowcaseFrames.map((frame, i) => (
          <button
            key={frame.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={frame.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{prateleirasShowcaseFrames[idx].name}</p>
    </div>
  );
}

const bannersFrames: ImageFrame[] = [
  { name: "Banners", src: bannersImg1, focus: { top: 55.2, left: 0, width: 100, height: 15, label: "Banner" } },
  { name: "Banners", src: bannersImg4, focus: { top: 32.5, left: 0, width: 100, height: 16.5, label: "Banner" } },
  { name: "Banners", src: bannersImgNew, focus: { top: 22, left: 0, width: 100, height: 17.5, label: "Banner" } },
];

function BannersFormatos() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % bannersFrames.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {bannersFrames.map((f, i) => (
          <FocusedMockupImage
            key={i}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {bannersFrames.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={`Banners ${i + 1}`} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{bannersFrames[idx].name}</p>
    </div>
  );
}

const paginasPrateleirasFrames: ImageFrame[] = [
  { name: "Home — Scroll com prateleira", src: paginasPrateleirasHomeImg, focus: { top: 31.5, left: 0, width: 100, height: 28, label: "Ver todos" }, objectFit: "contain", objectPosition: "top center" },
  { name: "Página — Grid completo", src: paginasPrateleirasGridImg, focus: { top: 13, left: 0, width: 100, height: 82, label: "Grid" }, objectFit: "contain", objectPosition: "top center" },
  { name: "Página — Topo sem título", src: paginasPrateleirasTopoImg, focus: { top: 11, left: 0, width: 100, height: 84, label: "Grid" }, objectFit: "contain", objectPosition: "top center" },
];

function PaginaPrateleiras() {
  const [idx, setIdx] = useCyclingFrame(paginasPrateleirasFrames.length, 0);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {paginasPrateleirasFrames.map((frame, i) => (
          <FocusedMockupImage
            key={frame.name}
            frame={frame}
            active={i === idx}
            objectFit="contain"
            objectPosition="top center"
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {paginasPrateleirasFrames.map((frame, i) => (
          <button
            key={frame.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={frame.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{paginasPrateleirasFrames[idx].name}</p>
    </div>
  );
}

const descontoFrames: ImageFrame[] = [
  { name: "Pack progressivo", src: descontoImg1, focus: { top: 50, left: 0, width: 100, height: 21, label: "Leve + por -" } },
];

function DescontoProgressivo() {
  const [idx, setIdx] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {descontoFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {descontoFrames.map((f, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{descontoFrames[idx].name}</p>
    </div>
  );
}

const recSimilarFrames: ImageFrame[] = [
  { name: "Default", src: recSimilarImg1, focus: { top: 61.5, left: 0, width: 100, height: 35.5, label: "Item similar" } },
];

function RecSimilar() {
  const [idx, setIdx] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {recSimilarFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {recSimilarFrames.map((f, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{recSimilarFrames[idx].name}</p>
    </div>
  );
}

const combinaFrames: ImageFrame[] = [
  { name: "Default", src: combinaImg1, focus: { top: 62.5, left: 0, width: 100, height: 35.5, label: "Combina com" } },
];

function CombinaCom() {
  const [idx, setIdx] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {combinaFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {combinaFrames.map((f, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{combinaFrames[idx].name}</p>
    </div>
  );
}

const preSacolaFrames: ImageFrame[] = [
  { name: "Produto adicionado", src: preSacolaImg1, focus: { top: 38, left: 0, width: 100, height: 54, label: "Pré-sacola" } },
  { name: "Complemento de cesta", src: preSacolaImg2, focus: { top: 19, left: 0, width: 100, height: 77, label: "Complemento" } },
];

function PreSacola() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % preSacolaFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {preSacolaFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {preSacolaFrames.map((f, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{preSacolaFrames[idx].name}</p>
    </div>
  );
}

const leveTambemFrames: ImageFrame[] = [
  { name: "Modal — Sugestões", src: recComplementoModalSugestoesImg, focus: { top: 19, left: 0, width: 100, height: 77, label: "Leve também" } },
  { name: "Modal — Itens adicionados", src: recComplementoItensAdicionadosImg, focus: { top: 19, left: 0, width: 100, height: 77, label: "Leve também" } },
];

function LeveTambem() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % leveTambemFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {leveTambemFrames.map((frame, i) => (
          <FocusedMockupImage
            key={frame.name}
            frame={frame}
            active={i === idx}
            objectPosition="top center"
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {leveTambemFrames.map((frame, i) => (
          <button
            key={frame.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={frame.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{leveTambemFrames[idx].name}</p>
    </div>
  );
}

const recComplementoFrames: ImageFrame[] = [
  { name: "Sacola — Antes de adicionar", src: recComplementoSacolaAntesImg, focus: { top: 84, left: 0, width: 100, height: 8, label: "Sacola" } },
  { name: "Modal — Sugestões", src: recComplementoModalSugestoesImg, focus: { top: 19, left: 0, width: 100, height: 77, label: "Complemento" } },
  { name: "Modal — Itens adicionados", src: recComplementoItensAdicionadosImg, focus: { top: 19, left: 0, width: 100, height: 77, label: "Complemento" } },
];

function RecComplemento() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % recComplementoFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {recComplementoFrames.map((frame, i) => (
          <FocusedMockupImage
            key={frame.name}
            frame={frame}
            active={i === idx}
            objectPosition="top center"
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {recComplementoFrames.map((frame, i) => (
          <button
            key={frame.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={frame.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{recComplementoFrames[idx].name}</p>
    </div>
  );
}

const pesquisaInAppFrames: ImageFrame[] = [
  { name: "Pós-entrega — Vazia", src: pesquisaInAppPosEntregaVaziaImg, focus: { top: 44, left: 0, width: 100, height: 16, label: "Avaliação" } },
  { name: "Avaliação — Preenchendo", src: pesquisaInAppAvaliacaoPreenchendoImg, focus: { top: 35, left: 0, width: 100, height: 16, label: "Avaliação" } },
  { name: "Avaliação — Completa", src: pesquisaInAppAvaliacaoCompletaImg, focus: { top: 35, left: 0, width: 100, height: 58, label: "Critérios" } },
];

function PesquisaInApp() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % pesquisaInAppFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {pesquisaInAppFrames.map((frame, i) => (
          <FocusedMockupImage
            key={frame.name}
            frame={frame}
            active={i === idx}
            objectPosition="top center"
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {pesquisaInAppFrames.map((frame, i) => (
          <button
            key={frame.name}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={frame.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{pesquisaInAppFrames[idx].name}</p>
    </div>
  );
}

const promoRelampagoFrames: ImageFrame[] = [
  { name: "Home", src: promoImg1, focus: { top: 24, left: 0, width: 100, height: 57, label: "Promo relâmpago" } },
  { name: "PDP", src: promoImg3, focus: { top: 30, left: 0, width: 100, height: 8, label: "Contador" } },
];

function PromoRelampago() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % promoRelampagoFrames.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-[270px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl ring-[6px] ring-slate-900 bg-white">
        {promoRelampagoFrames.map((f, i) => (
          <FocusedMockupImage
            key={f.name}
            frame={f}
            active={i === idx}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-5">
        {promoRelampagoFrames.map((f, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300"}`}
            aria-label={f.name}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">{promoRelampagoFrames[idx].name}</p>
    </div>
  );
}

export function PhoneMockup({ screen }: { screen: Screen }) {
  switch (screen.mockup) {
    case "splash": return <Splash />;
    case "cadastro": return <Cadastro />;
    case "onboarding": return <Onboarding />;
    case "showcase": return <Showcase />;
    case "showcase-categorias": return <ShowcaseCategorias />;
    case "showcase-banner": return <ShowcaseBannerHero />;
    case "showcase-prateleira": return <ShowcasePrateleira />;
    case "showcase-rec4u": return <ShowcaseRec4U />;
    case "showcase-ofertas-dia": return <ShowcaseOfertasDia />;
    case "showcase-chopp": return <ShowcaseChopp />;
    case "showcase-recomendacoes": return <ShowcaseRecomendacoes />;
    case "category": return <CategoryPage />;
    case "brand": return <BrandPage />;
    case "product": return <ProductPage />;
    case "carrossel-marcas": return <CarrosselMarcas />;
    case "carrossel-banners": return <CarrosselBannersShowcase />;
    case "prateleiras-showcase": return <PrateleirasShowcase />;
    case "banners-formatos": return <BannersFormatos />;
    case "pagina-prateleiras": return <PaginaPrateleiras />;
    case "desconto-progressivo": return <DescontoProgressivo />;
    case "rec-similar": return <RecSimilar />;
    case "combina-com": return <CombinaCom />;
    case "pre-sacola": return <PreSacola />;
    case "leve-tambem": return <LeveTambem />;
    case "rec-complemento": return <RecComplemento />;
    case "pesquisa-inapp": return <PesquisaInApp />;
    case "promo-relampago": return <PromoRelampago />;
  }
}
