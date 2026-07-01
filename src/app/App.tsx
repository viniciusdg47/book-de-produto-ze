import { BookOpen, ChevronDown, ChevronRight, Printer, Download, Check, MapPin, X, AlertTriangle, Lightbulb, Gauge } from "lucide-react";
import { useState, useRef } from "react";
import { sections, productInfo, type Screen } from "./components/product-book-data";
import { PhoneMockup } from "./components/phone-mockup";

const svgPaths = {
  p18e47700: "M546.015 367.964L774.465 413.654L792.741 523.31L683.085 815.725L488.309 1044.17H381.532L299.29 1007.62L235.324 824.863L198.772 632.966L217.048 395.378L326.704 313.136L546.015 367.964Z",
  p3a7e5100: "M143.463 761.478L165.535 971.161L231.751 1105.42L255.942 1115.98L298.191 1144.14L351.002 1172.31L449.581 1158.23L551.682 1105.42L646.741 971.161L717.155 890.653L745.321 794.586L836.859 640.682L854.463 540.76L836.859 401.274L812.214 320.298L699.552 214.677L667.865 179.47L688.99 84.4105H583.368L509.433 42.162L382.688 84.4105L298.191 168.908H255.942L231.751 275.897L187.607 297.969V342.113L154.499 386.256L121.392 485.58V540.76L110.356 606.975L143.463 673.191V761.478Z",
  pa450e80: "M316.638 821.27L246.035 803.982C227.742 799.08 220.333 759.417 216.822 742.08C214.207 715.157 213.509 711.712 212.745 690.173L213.481 669.087C217.121 679.889 222.731 689.59 231.771 698.581C253.914 725.797 288.499 743.262 321.769 747.289C388.731 753.776 434.496 698.88 448.959 638.855L487.105 649.076C462.039 724.285 512.42 804.943 595.138 807.453C627.724 807.987 653.596 796.895 673.032 779.191L670.982 786.84L643.38 853.171C617.217 859.298 575.132 875.872 565.277 869.921C543.621 859.231 517.313 829.218 492.793 829.216C486.288 829.103 477.395 831.659 467.735 837.269C448.368 848.475 422.089 861.087 400.644 837.316C389.344 824.462 386.939 809.051 386.939 809.051L363.116 812.494C363.116 812.494 362.986 819.028 365.942 826.336C359.845 824.702 352.933 826.109 346.428 825.995C336.85 825.057 325.76 823.715 316.638 821.27ZM703.8 615.388L705.849 607.739L722.63 612.235C722.63 612.235 670.496 501.628 525.721 541.449L543.199 549.391L541.847 560.484C541.847 560.484 656.874 558.515 703.813 615.339M500.117 624.711L451.288 611.628C451.288 611.628 450.183 609.703 450.59 608.183C441.47 581.146 389.407 555.74 351.668 543.998C336.4 539.907 319.619 535.411 302.024 533.955C351.052 534.007 397.961 548.205 421.247 552.815C433.151 551.118 434.664 551.523 434.664 551.523L414.533 541.19L418.42 538.973L425.74 536.047L398.406 522.155C336.895 489.277 241.394 516.132 241.394 516.132L237.018 526.415C238.581 502.241 242.389 481.979 245.383 464.757C247.84 455.588 253.37 447.243 259.956 440.81C275.552 425.336 300.4 405.771 333.605 391.704L421.844 453.026L487.046 472.126C525.73 474.293 527.649 473.179 565.228 473.421C596.253 473.537 639.313 465.421 668.875 465.144C671.948 465.967 700.226 470.287 728.596 492.602C738.742 503.518 738.334 505.038 738.623 534.596C740.461 540.028 737.639 593.293 721.992 633.347L717.208 645.15C704.804 630.371 674.397 615.655 611.731 605.432C580.38 600.289 536.413 593.448 507.726 615.242C505.399 617.876 501.498 620.142 500.276 624.702M583.352 778.073C534.393 771.523 505.259 727.668 508.385 679.319C512.312 627.979 554.199 624.436 600.085 630.163C628.77 632.962 657.339 642.246 673.761 648.275C696.965 659.432 699.384 674.794 693.643 696.22C679.31 749.711 639.563 788.195 583.401 778.086M315.674 721.063L298.893 716.566C271.43 709.208 249.578 686.957 242.426 658.818C235.144 637.214 236.577 619.573 242.318 598.147C244.775 588.979 248.744 580.215 255.378 573.795C277.202 553.421 314.244 561.717 338.634 568.252C370.683 576.84 431.626 599.738 419.75 644.061C407.873 688.383 365.053 726.044 315.736 721.027M307.673 1007.31L284.448 910.965L436.466 941.872L488.777 929.666L531.707 928.084L537.069 950.804L441.35 1033.3L394.36 1001.06L343.235 1008.64L307.625 1007.3L307.673 1007.31ZM364.878 1135.67L402.734 1140.93L462.834 1124.24L514.906 1082.49L534.421 1082.83L552.344 1064.73C582.432 1031.85 611.626 983.971 632.216 943.613L661.571 907.231L679.087 890.642L706.363 819.284L741.822 741.973C741.822 741.973 746.117 738.237 755.16 722.635L767.274 732.45L781.607 678.959C793.853 657.647 804.98 634.459 813.048 610.398C817.752 580.55 823.821 539.558 822.477 508.088C820.478 491.157 817.535 483.8 817.535 483.8L831.989 490.931C833.34 479.837 821.475 432.411 821.475 432.411L795.168 402.398C795.982 399.358 795.297 395.864 794.958 390.886C793.497 365.901 789.647 343.587 771.552 325.654C730.223 278.531 652.669 195.479 652.669 195.479L639.331 214.816L627.136 211.549L627.871 190.463C623.207 171.189 625.045 176.621 623.337 164.655L664.158 110.064L564.899 132.601C564.738 121.102 564.412 116.075 565.764 104.982L528.672 121.265L495.56 153.329L455.196 181.821L471.121 146.78L494.785 107.245C493.68 105.32 520.04 86.1613 520.04 86.1613L535.927 75.6517C534.415 75.2465 529.96 67.484 528.399 67.0658C479.778 65.4939 410.666 115.815 355.651 150.208L326.624 167.023C301.659 193.073 284.21 227.757 284.21 227.757L274.552 208.773C268.325 213.673 262.029 225.071 255.264 238.025C246.512 258.592 242.283 280.423 246.085 302.724L248.911 316.566L204.42 317.73L224.643 346.06L177.238 382.492L144.59 498.286L156.088 498.109L157.193 500.034L142.283 610.702L148.251 618.87L165.082 598.787L168.96 663.726L178.501 689.194L176.044 698.363L170.831 778.891L175.945 839.222L187.442 839.045L186.628 842.084C187.484 881.621 180.193 927.172 198.354 963.2C215.015 998.774 234.849 1046.71 247.821 1071.46L305.363 1113.11L311.381 1096.69L315.559 1099.44C315.559 1099.44 335.573 1116.26 364.758 1135.54",
};

type NavItem = { type: "item"; id: string; name: string };
type NavGroup = { type: "group"; name: string; items: { id: string; name: string }[] };
type NavEntry = NavItem | NavGroup;

const navStructure: NavEntry[] = [
  { type: "item", id: "cover", name: "Capa" },
  { type: "item", id: "sobre-este-book", name: "Sobre este book" },
  { type: "item", id: "welcome", name: "Welcome Page" },
  {
    type: "group",
    name: "Home — Componentes",
    items: [
      { id: "componente-categorias", name: "Componente de Categorias" },
      { id: "banner-hero", name: "Banner Hero" },
      { id: "carrossel-marcas", name: "Carrossel de Marcas" },
      { id: "carrossel-banners", name: "Carrossel de Banners" },
      { id: "banners-formatos", name: "Banners" },
    ],
  },
  {
    type: "group",
    name: "Home — Prateleiras",
    items: [
      { id: "prateleira-ofertas", name: "Prateleira de Ofertas" },
      { id: "carrossel-ofertas-dia", name: "Carrossel de Ofertas do Dia" },
      { id: "chopp-showcase", name: "Espaço Chopp Showcase" },
      { id: "prateleiras-showcase", name: "Prateleiras Showcase" },
    ],
  },
  {
    type: "group",
    name: "Home — Recomendação",
    items: [
      { id: "rec4u", name: "Rec4U" },
      { id: "recomendados-ze", name: "Recomendados pelo Zé" },
    ],
  },
  {
    type: "group",
    name: "Páginas de navegação",
    items: [
      { id: "category", name: "Páginas de Categorias" },
      { id: "pagina-prateleiras", name: "Páginas de Prateleiras" },
      { id: "brand", name: "Branding Page" },
    ],
  },
  {
    type: "group",
    name: "PDP & recomendação contextual",
    items: [
      { id: "product", name: "Página de Produto (PDP)" },
      { id: "rec-similar", name: "Recomendação Item Similar" },
      { id: "combina-com", name: "Combina com" },
    ],
  },
  {
    type: "group",
    name: "Promoções & desconto",
    items: [
      { id: "desconto-progressivo", name: "Desconto Progressivo" },
      { id: "promo-relampago", name: "Promo Relâmpago" },
    ],
  },
  {
    type: "group",
    name: "Sacola & checkout",
    items: [
      { id: "pre-sacola", name: "Pré-sacola" },
      { id: "leve-tambem", name: "Leve também" },
      { id: "rec-complemento", name: "Complemento de Cesta" },
    ],
  },
  {
    type: "group",
    name: "Pesquisa & feedback",
    items: [
      { id: "pesquisa-inapp", name: "Pesquisa In App" },
    ],
  },
];

const allNavIds = navStructure.flatMap((entry) =>
  entry.type === "item" ? [entry.id] : entry.items.map((i) => i.id)
);

function getGroupForId(id: string): string | null {
  for (const entry of navStructure) {
    if (entry.type === "group" && entry.items.some((item) => item.id === id)) {
      return entry.name;
    }
  }
  return null;
}

const breadcrumbMap: Record<string, string[]> = {
  cover: [],
  welcome: ["Welcome Page"],
  "sobre-este-book": ["Sobre este book"],
  "componente-categorias": ["Home", "Componentes", "Componente de Categorias"],
  "banner-hero": ["Home", "Componentes", "Banner Hero"],
  "carrossel-banners": ["Home", "Componentes", "Carrossel de Banners"],
  "carrossel-marcas": ["Home", "Componentes", "Carrossel de Marcas"],
  "banners-formatos": ["Home", "Componentes", "Banners"],
  "prateleira-ofertas": ["Home", "Prateleiras", "Prateleira de Ofertas"],
  "carrossel-ofertas-dia": ["Home", "Prateleiras", "Carrossel de Ofertas do Dia"],
  "prateleiras-showcase": ["Home — Prateleiras", "Prateleiras Showcase"],
  "chopp-showcase": ["Home", "Prateleiras", "Espaço Chopp Showcase"],
  "rec4u": ["Home", "Recomendação", "Rec4U"],
  "recomendados-ze": ["Home", "Recomendação", "Recomendados pelo Zé"],
  "category": ["Navegação", "Páginas de Categorias"],
  "pagina-prateleiras": ["Páginas de navegação", "Páginas de Prateleiras"],
  "brand": ["Navegação", "Branding Page"],
  "product": ["PDP", "Página de Produto"],
  "rec-similar": ["PDP", "Recomendação Item Similar"],
  "combina-com": ["PDP", "Combina com"],
  "desconto-progressivo": ["Promoções", "Desconto Progressivo"],
  "promo-relampago": ["Promoções", "Promo Relâmpago"],
  "pre-sacola": ["Sacola", "Pré-sacola"],
  "leve-tambem": ["Sacola", "Leve também"],
  "rec-complemento": ["Sacola & checkout", "Complemento de Cesta"],
  "pesquisa-inapp": ["Pesquisa & feedback", "Pesquisa In App"],
};

const summaryGroups = [
  {
    name: "Welcome Page",
    firstId: "welcome",
    items: [],
  },
  {
    name: "Home — Componentes",
    firstId: "componente-categorias",
    items: ["Componente de Categorias", "Banner Hero", "Carrossel de Marcas", "Carrossel de Banners", "Banners"],
  },
  {
    name: "Home — Prateleiras",
    firstId: "prateleira-ofertas",
    items: ["Prateleira de Ofertas", "Carrossel de Ofertas do Dia", "Espaço Chopp Showcase", "Prateleiras Showcase"],
  },
  {
    name: "Home — Recomendação",
    firstId: "rec4u",
    items: ["Rec4U", "Recomendados pelo Zé"],
  },
  {
    name: "Páginas de navegação",
    firstId: "category",
    items: ["Páginas de Categorias", "Páginas de Prateleiras", "Branding Page"],
  },
  {
    name: "PDP & recomendação contextual",
    firstId: "product",
    items: ["Página de Produto (PDP)", "Recomendação Item Similar", "Combina com"],
  },
  {
    name: "Promoções & desconto",
    firstId: "desconto-progressivo",
    items: ["Desconto Progressivo", "Promo Relâmpago"],
  },
  {
    name: "Sacola & checkout",
    firstId: "pre-sacola",
    items: ["Pré-sacola", "Leve também", "Complemento de Cesta"],
  },
  {
    name: "Pesquisa & feedback",
    firstId: "pesquisa-inapp",
    items: ["Pesquisa In App"],
  },
];

function Breadcrumb({ sectionId }: { sectionId: string }) {
  const crumbs = breadcrumbMap[sectionId] ?? [sectionId];
  if (crumbs.length === 0) return null;
  return (
    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 flex-wrap">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3 h-3 shrink-0" />}
          <span>{crumb}</span>
        </span>
      ))}
    </div>
  );
}

function ResponsibleBadge({ value }: { value: string }) {
  const owner = value.includes("·")
    ? value.split("·").slice(1).join("·").trim()
    : value.replace(/^Time responsável\s*/i, "").trim();

  return (
    <div className="responsible-chip mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1.5 text-xs text-indigo-700">
      <span className="font-semibold uppercase tracking-[0.12em]">Time responsável</span>
      <span className="h-1 w-1 rounded-full bg-indigo-300" />
      <strong className="font-semibold uppercase tracking-[0.08em] text-indigo-950">{owner || value}</strong>
    </div>
  );
}

type BusinessAutonomy = {
  status: "Sim" | "Não" | "Parcial" | "Em breve" | "A validar";
  channel: string;
  complexity: "Baixa" | "Média" | "Alta" | "Baixa/Média" | "A validar";
  sla: string;
  note: string;
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

function hasFooterTag(screen: Screen, label: string) {
  return Boolean(screen.footerTags?.some((tag) => normalizeText(tag.label) === normalizeText(label)));
}

function getBusinessAutonomy(screen: Screen): BusinessAutonomy {
  const title = normalizeText(screen.title);
  const owner = normalizeText(screen.responsible ?? "");
  const needsRelease = hasFooterTag(screen, "Precisa release");

  if (title === "branding page") {
    return {
      status: "Em breve",
      channel: "Admin Purchase",
      complexity: "Baixa/Média",
      sla: "Previsão: fim do Q2",
      note: "Criação de Brand Page e alterações de header/footer estão em desenvolvimento. Até a entrega, solicitar via Teams Comercial + Produto.",
    };
  }

  if (title === "carrossel de marcas") {
    return {
      status: "Em breve",
      channel: "Admin Purchase",
      complexity: "Baixa",
      sla: "Previsão: fim do Q2",
      note: "Gestão do componente Marcas que amamos está em desenvolvimento no Admin. Até lá, solicitar via Teams Comercial + Produto.",
    };
  }

  if (owner.includes("comercial")) {
    return {
      status: "Sim",
      channel: "CMS/Admin comercial",
      complexity: "Baixa",
      sla: "D0-D2",
      note: "Business tem autonomia para ajustes operacionais quando conteúdo, campanha e assets já estão aprovados.",
    };
  }

  if (owner.includes("digital insights")) {
    return {
      status: "Parcial",
      channel: "Digital Insights + Produto",
      complexity: "Média",
      sla: "[A validar com DI]",
      note: "Business pode solicitar objetivo, curadoria ou segmentação; alteração de regra, modelo ou algoritmo depende de priorização técnica.",
    };
  }

  if (owner.includes("produto") || owner.includes("cx") || owner.includes("validar")) {
    return {
      status: "Não",
      channel: "Teams Comercial + Produto",
      complexity: needsRelease ? "Alta" : "Média",
      sla: needsRelease ? "Janela de release" : "Próxima janela de atendimento",
      note: "Business deve abrir solicitação para Produto. O impacto varia conforme necessidade de discovery, design, engenharia e release.",
    };
  }

  return {
    status: "A validar",
    channel: "[A definir]",
    complexity: "A validar",
    sla: "[A validar]",
    note: "Owner e autonomia ainda precisam ser confirmados com Produto, Comercial e times técnicos envolvidos.",
  };
}

function complexityLevel(value: BusinessAutonomy["complexity"]) {
  if (value === "Baixa") return 1;
  if (value === "Média" || value === "Baixa/Média") return 2;
  if (value === "Alta") return 3;
  return 0;
}

function statusStyle(status: BusinessAutonomy["status"]) {
  if (status === "Sim") return "bg-emerald-50 text-emerald-700 border-emerald-100";
  if (status === "Não") return "bg-rose-50 text-rose-700 border-rose-200";
  if (status === "Parcial") return "bg-amber-50 text-amber-700 border-amber-200";
  if (status === "Em breve") return "bg-indigo-50 text-indigo-700 border-indigo-100";
  return "bg-slate-100 text-slate-600 border-slate-200";
}

function complexityColor(level: number, active: boolean) {
  if (!active) return "bg-slate-200";
  if (level === 1) return "bg-emerald-500";
  if (level === 2) return "bg-amber-500";
  return "bg-rose-500";
}

function BusinessAutonomyPanel({ screen }: { screen: Screen }) {
  const autonomy = getBusinessAutonomy(screen);
  const level = complexityLevel(autonomy.complexity);

  return (
    <div className="business-autonomy mb-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Gauge className="h-4 w-4 text-slate-400" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Autonomia Business</p>
      </div>

      <div className="business-autonomy-chips flex flex-wrap gap-2">
        <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyle(autonomy.status)}`}>
          Autonomia: {autonomy.status}
        </span>
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
          Canal: {autonomy.channel}
        </span>
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
          SLA: {autonomy.sla}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
          Complexidade:
          <span className="inline-flex items-center gap-1">
            {[1, 2, 3].map((bar) => (
              <span
                key={bar}
                className={`h-1.5 w-4 rounded-full ${complexityColor(level, bar <= level)}`}
              />
            ))}
          </span>
          {autonomy.complexity}
        </span>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-slate-500">{autonomy.note}</p>
    </div>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState<string>("cover");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const scrollingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleNavClick(id: string) {
    setActiveId(id);
    setOpenGroup(getGroupForId(id));
    scrollingRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { scrollingRef.current = false; }, 800);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleGroup(name: string) {
    setOpenGroup((prev) => (prev === name ? null : name));
  }

  function handlePrint(mode: "print" | "pdf" = "print") {
    const previousTitle = document.title;
    const shouldRename = mode === "pdf";

    if (shouldRename) {
      document.title = `Book de Produto - ${productInfo.name} v${productInfo.version} - ${productInfo.date}`;
    }

    const restoreTitle = () => {
      document.title = previousTitle;
      window.removeEventListener("afterprint", restoreTitle);
    };

    if (shouldRename) {
      window.addEventListener("afterprint", restoreTitle);
    }

    window.dispatchEvent(new Event("book:prepare-print"));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => window.print());
    });
  }

  return (
    <div className="book-shell size-full flex bg-slate-50 text-slate-900 overflow-hidden">
      <aside className="print-sidebar w-64 shrink-0 border-r border-slate-200 bg-white flex flex-col">
        <div className="px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="tracking-tight">Product Book</span>
          </div>
          <p className="text-xs text-slate-500">{productInfo.name} · v{productInfo.version}</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          <p className="px-6 text-[10px] uppercase tracking-wider text-slate-400 mb-2">Sumário</p>

          {navStructure.map((entry) => {
            if (entry.type === "item") {
              const isActive = activeId === entry.id;
              return (
                <button
                  key={entry.id}
                  onClick={() => handleNavClick(entry.id)}
                  className={`w-full flex items-center px-5 py-2 text-left text-sm transition ${
                    isActive ? "text-slate-900" : "text-slate-600 hover:bg-slate-50"
                  }`}
                  style={isActive ? { backgroundColor: "rgba(255, 224, 0, 0.15)", borderLeft: "2px solid #FFE000" } : undefined}
                >
                  <span className="truncate">{entry.name}</span>
                </button>
              );
            }

            const isOpen = openGroup === entry.name;
            const hasActive = entry.items.some((i) => i.id === activeId);

            return (
              <div key={entry.name}>
                <button
                  onClick={() => toggleGroup(entry.name)}
                  className={`w-full flex items-center justify-between px-5 py-2 text-left text-xs transition ${
                    hasActive ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                  }`}
                  style={hasActive ? { borderLeft: "3px solid #FFE000" } : undefined}
                >
                  <span className="truncate pr-2 uppercase tracking-wide" style={{ fontSize: "10px" }}>
                    {entry.name}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-1">
                    {entry.items.map((item) => {
                      const isActive = activeId === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-center pl-8 pr-5 py-1.5 text-left text-sm transition ${
                            isActive ? "text-slate-900" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                          }`}
                          style={isActive ? { backgroundColor: "rgba(255, 224, 0, 0.15)", borderLeft: "2px solid #FFE000" } : undefined}
                        >
                          <span className="truncate">{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-slate-100 p-4 flex gap-2">
          <button
            type="button"
            onClick={() => handlePrint("print")}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 text-xs text-slate-700 hover:bg-slate-200 transition"
          >
            <Printer className="w-3.5 h-3.5" /> Imprimir
          </button>
          <button
            type="button"
            onClick={() => handlePrint("pdf")}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600 text-xs text-white hover:bg-indigo-700 transition"
          >
            <Download className="w-3.5 h-3.5" /> PDF
          </button>
        </div>
      </aside>

      <main
        className="book-content flex-1 overflow-y-auto"
        onScroll={(e) => {
          if (scrollingRef.current) return;
          const t = e.currentTarget;
          let current = allNavIds[0];
          for (const id of allNavIds) {
            const el = document.getElementById(id);
            if (el && el.offsetTop - t.scrollTop <= 200) current = id;
          }
          if (current !== activeId) {
            setActiveId(current);
            setOpenGroup(getGroupForId(current));
          }
        }}
      >
        <section id="cover" className="min-h-full relative overflow-hidden flex" style={{ backgroundColor: "#ffcd18" }}>
          <div className="relative z-10 flex flex-col justify-between flex-1 min-w-0" style={{ padding: "11% 0 5% 11%" }}>
            <div>
              <h1
                className="text-black uppercase leading-none"
                style={{
                  fontFamily: "'Barlow Condensed', 'Arial Black', Impact, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(56px, 9.5vw, 144px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  marginBottom: "clamp(20px, 3vw, 48px)",
                }}
              >
                Book de<br />Produto
              </h1>
              <div style={{ display: "inline-block", backgroundColor: "white", padding: "14px 22px" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.5vw, 22px)", color: "black", whiteSpace: "nowrap" }}>
                  App Consumer Zé · Versão {productInfo.version}
                </span>
              </div>
            </div>

            <div style={{ marginTop: "auto", paddingTop: "clamp(32px, 4vw, 64px)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(11px, 1.1vw, 18px)", color: "black", marginBottom: "6px" }}>
                Bruno Segantin · Vinicius Grigoletti · DTC BR Zé Delivery · Junho 2026
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(9px, 0.9vw, 14px)", color: "black", opacity: 0.65, maxWidth: "640px" }}>
                Todos os assets deste book estão disponíveis em iOS, Android e Web.
              </p>
            </div>
          </div>

          <div className="absolute top-0 bottom-0 overflow-hidden pointer-events-none" style={{ right: "-4%", width: "52%" }}>
            <svg
              viewBox="0 0 929.813 1212.53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMaxYMid meet"
              style={{ position: "absolute", top: "-2%", right: 0, height: "104%", width: "auto" }}
            >
              <path d={svgPaths.p18e47700} fill="#ffcd18" stroke="#ffcd18" strokeWidth="7.04142" />
              <path d={svgPaths.p3a7e5100} fill="#ffcd18" />
              <path d={svgPaths.pa450e80} fill="black" />
            </svg>
          </div>
        </section>

        {sections.map((section) => {
          if (section.kind === "about") {
            const aboutCards = [
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
                color: "bg-blue-50 text-blue-500",
                title: "Cobertura de plataformas",
                body: "Todos os assets estão disponíveis em iOS, Android e Web, salvo indicação contrária em cada slide.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                ),
                color: "bg-amber-50 text-amber-500",
                title: "Versão e atualização",
                body: "Versão 2.4 · Junho 2026\nPróxima revisão prevista: [DEFINIR]\nEste documento é vivo e atualizado a cada release relevante do app.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                color: "bg-purple-50 text-purple-500",
                title: "Responsáveis por área",
                body: "Produto · [Nome do responsável]\nComercial · [Nome do responsável]\nDigital Insights · [Nome do responsável]",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                color: "bg-emerald-50 text-emerald-500",
                title: "Contato",
                body: "Dúvidas, sugestões ou inconsistências:\n[email/Slack do time de Produto]",
              },
            ];

            return (
              <section key={section.id} id={section.id} className="book-section about-section px-16 py-20 border-b border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto">
                  <Breadcrumb sectionId={section.id} />
                  <h2 className="tracking-tight mb-2" style={{ fontSize: "40px", lineHeight: 1.1 }}>
                    {section.name}
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mb-12">{section.description}</p>

                  {/* 4 cards principais — grid 2×2 */}
                  <div className="grid grid-cols-2 gap-6 mb-12">
                    {aboutCards.map((card) => (
                      <div key={card.title} className="flex gap-5 p-7 rounded-2xl border border-slate-100 bg-white hover:shadow-sm transition">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${card.color}`}>
                          {card.icon}
                        </div>
                        <div>
                          <p className="text-slate-800 mb-2" style={{ fontSize: "15px", fontWeight: 600 }}>{card.title}</p>
                          <p className="text-slate-500 leading-relaxed whitespace-pre-line" style={{ fontSize: "14px" }}>{card.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sumário compacto — chips */}
                  <div>
                    <p className="text-slate-400 mb-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Sumário do book</p>
                    <div className="flex flex-wrap gap-2">
                      {summaryGroups.map((group) => (
                        <button
                          key={group.name}
                          onClick={() => handleNavClick(group.firstId)}
                          className="px-3 py-1.5 rounded-full text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
                          style={{ fontSize: "12px" }}
                        >
                          {group.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          return (
          <section key={section.id} id={section.id} className="book-section asset-section px-16 py-20 border-b border-slate-200 bg-white">
              <div className="asset-section-inner max-w-6xl mx-auto">
                <Breadcrumb sectionId={section.id} />
                <h2 className="tracking-tight mb-3" style={{ fontSize: "40px", lineHeight: 1.1 }}>
                  {section.name}
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mb-12">{section.description}</p>

                {section.screens.map((screen, sIdx) => (
                  <div key={screen.id} id={screen.id} className="screen-slide grid grid-cols-12 gap-10 items-start mb-16 last:mb-0">
                    <div className="screen-kicker col-span-12 -mb-4">
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        {screen.title}
                      </p>
                    </div>
                    <div className="mockup-panel col-span-6 flex items-center justify-center px-6 py-10 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-100">
                      <PhoneMockup screen={screen} />
                    </div>
                    <div className="screen-copy col-span-6 pt-4">
                      <p className="text-xs uppercase tracking-wider text-indigo-600 mb-2">{screen.subtitle}</p>
                      <h3 className="tracking-tight mb-1" style={{ fontSize: "28px", lineHeight: 1.2 }}>{screen.title}</h3>
                      {screen.responsible && (
                        <ResponsibleBadge value={screen.responsible} />
                      )}
                      <BusinessAutonomyPanel screen={screen} />

                      <div className="feature-list space-y-4">
                        {screen.features.map((f) => {
                          const isPersonalization = f.title === "Personalização";
                          const personalizationValue = f.tag === "Sem Personalização" ? "Não" : "Sim";
                          const title = isPersonalization ? `Personalização: ${personalizationValue}` : f.title;

                          return (
                            <div key={f.title} className="feature-card flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                f.tag === "Não Regionalizável" || f.tag === "Sem Personalização"
                                  ? "bg-rose-50"
                                  : f.tag === "Monolito esforço alto de alteração"
                                  ? "bg-amber-50"
                                  : f.tag === "Onde aparece"
                                  ? "bg-blue-50"
                                  : f.tag === "Destaque"
                                  ? "bg-purple-50"
                                  : f.tag === "Permite Personalização"
                                  ? "bg-emerald-50"
                                  : "bg-indigo-50"
                              }`}>
                                {f.tag === "Não Regionalizável" || f.tag === "Sem Personalização"
                                  ? <X className="w-4 h-4 text-rose-500" />
                                  : f.tag === "Monolito esforço alto de alteração"
                                  ? <AlertTriangle className="w-4 h-4 text-amber-500" />
                                  : f.tag === "Onde aparece"
                                  ? <MapPin className="w-4 h-4 text-blue-500" />
                                  : f.tag === "Destaque"
                                  ? <Lightbulb className="w-4 h-4 text-purple-600" />
                                  : f.tag === "Permite Personalização"
                                  ? <Check className="w-4 h-4 text-emerald-600" />
                                  : <Check className="w-4 h-4 text-indigo-600" />}
                              </div>
                              <div className="flex-1">
                                <p className="mb-1">{title}</p>
                                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="footer-tags mt-8 flex gap-3 text-xs flex-wrap">
                        {screen.footerTags ? (
                          screen.footerTags.map((tag) => (
                            <span key={tag.label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${tag.style}`}>
                              {tag.icon === "pin" && <MapPin className="w-3 h-3 text-purple-500" />}
                              {tag.label}
                            </span>
                          ))
                        ) : (
                          <>
                            <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">Disponível em produção</span>
                            <span className="px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 border border-slate-100">iOS · Android · Web</span>
                            {screen.regionalizable && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                <MapPin className="w-3 h-3" /> Regionalizável
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <footer className="px-16 py-12 bg-slate-900 text-slate-400 text-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <p>© 2026 {productInfo.name} · Documento interno</p>
            <p>v{productInfo.version} · {productInfo.date}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
