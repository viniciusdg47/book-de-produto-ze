export type FooterTag = { label: string; style: string; icon?: "pin" };

export type Screen = {
  id: string;
  title: string;
  subtitle: string;
  responsible?: string;
  features: { title: string; description: string; tag?: string }[];
  mockup: "splash" | "onboarding" | "cadastro" | "showcase" | "showcase-categorias" | "showcase-banner" | "showcase-prateleira" | "showcase-rec4u" | "showcase-ofertas-dia" | "showcase-chopp" | "showcase-recomendacoes" | "category" | "brand" | "product" | "carrossel-marcas" | "carrossel-banners" | "prateleiras-showcase" | "banners-formatos" | "pagina-prateleiras" | "desconto-progressivo" | "rec-similar" | "combina-com" | "pre-sacola" | "leve-tambem" | "rec-complemento" | "pesquisa-inapp" | "promo-relampago";
  regionalizable: boolean;
  footerTags?: FooterTag[];
};

export type Section = {
  id: string;
  name: string;
  description: string;
  screens: Screen[];
  kind?: "about";
};

export const productInfo = {
  name: "Zé Delivery",
  tagline: "A cervejinha gelada na hora que você quiser",
  version: "2.4",
  date: "Junho 2026",
};

export const metrics = [
  { label: "Usuários ativos", value: "14M", delta: "+22%" },
  { label: "Pedidos/mês", value: "6.8M", delta: "+28%" },
  { label: "NPS", value: "78", delta: "+6 pts" },
  { label: "Tempo médio entrega", value: "32min", delta: "-4 min" },
];

export const sections: Section[] = [
  // 01
  {
    id: "sobre-este-book",
    name: "Sobre este book",
    description: "Este book documenta os 24 principais assets do app Consumer Zé e seus respectivos comportamentos, limitações técnicas e áreas responsáveis.",
    screens: [],
    kind: "about",
  },

  // 02
  {
    id: "welcome",
    name: "Welcome Page",
    description: "Primeira tela do app, antes do login. Espaço editorial de boas-vindas para apresentar o Zé, destacar portfólio e capturar o usuário no fluxo de cadastro ou entrada.",
    screens: [
      {
        id: "signin-1",
        title: "Welcome Page",
        subtitle: "BOAS-VINDAS COM DESTAQUE DE PORTFÓLIO",
        responsible: "Time responsável · Produto",
        mockup: "onboarding",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Imagens e atributos em destaque configuráveis por praça e período via CMS, sem necessidade de release do app", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Antes do login — primeira tela que o usuário vê ao abrir o app sem estar autenticado.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Lógica de autenticação e pré-carga de catálogo está acoplada ao startup do app; otimizações exigem release nativo", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Cervejas em destaque (Spaten, Corona, Guaraná, Bud) criam desejo imediato de consumo antes do login", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Precisa release", style: "bg-rose-50 text-rose-700 border-rose-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 03
  {
    id: "componente-categorias",
    name: "Componente de Categorias",
    description: "Componente da Home que organiza a entrada do usuário em grandes grupos de produto. 4 tipos de categoria com funções distintas: âncora, estruturador, complementar e estratégica.",
    screens: [
      {
        id: "categorias-1",
        title: "Componente de Categorias",
        subtitle: "NAVEGAÇÃO POR TIPO DE PRODUTO",
        responsible: "Time responsável · Produto",
        mockup: "showcase-categorias",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Ordem e seleção de categorias reconfigurada por praça e perfil de usuário via CMS, sem necessidade de deploy", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home — primeira dobra, abaixo do Welcome Page e dos primeiros banners de destaque.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Lógica de badge 'Promoção' sobre os chips está acoplada ao promotions engine monolítico. Ícones e nomenclaturas seguem biblioteca centralizada do Design System, sem variação regional.", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Categorias exibidas em carrossel com snap, priorizando as mais acessadas pelo usuário", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Precisa release", style: "bg-rose-50 text-rose-700 border-rose-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 04
  {
    id: "banner-hero",
    name: "Banner Hero",
    description: "Espaço para comunicação de campanhas internas e campanhas de marcas Ambev. Carrossel de até 5 banners com troca automática a cada 3 s e controle manual por toque.",
    screens: [
      {
        id: "banner-hero-1",
        title: "Banner Hero",
        subtitle: "Carrossel de campanhas e promoções",
        responsible: "Time responsável · Comercial",
        mockup: "showcase-banner",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Banners publicados e segmentados por região, perfil e data pelo time de marketing via CMS, sem deploy", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home — posição de alta visibilidade, entre o Welcome Page e as prateleiras de produto.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Deep links são resolvidos pelo roteador nativo acoplado ao monolito; adicionar novos destinos exige alteração de código", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Troca automática a cada 3 s com controle manual por toque e dots de navegação", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 05
  {
    id: "carrossel-marcas",
    name: "Carrossel de Marcas",
    description: "Carrossel com lista de marcas selecionadas que levam para a página própria da marca (Branding Page). A ordenação é gerenciada pelo time comercial.",
    screens: [
      {
        id: "carrossel-marcas-1",
        title: "Carrossel de Marcas",
        subtitle: "Navegação para Brand Pages",
        responsible: "Time responsável · Produto",
        mockup: "carrossel-marcas",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Marcas exibidas e ordenação definidas pelo time comercial via CMS, ativadas por praça e período sem necessidade de deploy", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home — carrossel 'Marcas que amamos', abaixo das prateleiras de produto.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Adição de novas marcas parceiras exige criação de Brand Page e integração ao catálogo monolítico com deploy", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Seleção curada que direciona o usuário para a Brand Page com portfólio completo e storytelling da marca parceira", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 06
  {
    id: "carrossel-banners",
    name: "Carrossel de Banners",
    description: "Carrossel com banners para comunicação de campanhas internas e externas em diferentes pontos da jornada.",
    screens: [
      {
        id: "carrossel-banners-1",
        title: "Carrossel de Banners",
        subtitle: "Campanhas internas e externas",
        responsible: "Time responsável · Comercial",
        mockup: "carrossel-banners",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Banners publicados e segmentados por região, perfil e período pelo time de marketing via CMS, sem necessidade de deploy", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home e diversos pontos da jornada — bloco 'Destaques' para campanhas internas e externas.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Deep links dos banners são resolvidos pelo roteador nativo acoplado ao monolito; novos destinos exigem alteração de código", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Suporte a deep links para produtos, categorias, promoções e páginas externas em um único componente configurável", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 07
  {
    id: "banners-formatos",
    name: "Banners",
    description: "Lista de formatos possíveis para comunicação de campanhas em diversos pontos da jornada. Para mais detalhes, consulte o guia de formatos disponível no guia de CRM.",
    screens: [
      {
        id: "banners-1",
        title: "Banners",
        subtitle: "Formatos de comunicação na jornada",
        responsible: "Time responsável · Comercial",
        mockup: "banners-formatos",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Banners publicados por canal, data e segmento via CMS pelo time de marketing sem necessidade de deploy técnico", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Diversos pontos da jornada — Home, páginas de categoria, Brand Page, recap e pré-login. Cada formato tem posicionamento específico.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Novos posicionamentos de banner na jornada exigem alteração de layout em código nativo e deploy de nova versão do app", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Formatos disponíveis documentados no guia de CRM para uso direto pelo time de marketing sem intervenção técnica", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 08
  {
    id: "prateleira-ofertas",
    name: "Prateleira de Ofertas",
    description: "Prateleira que exibe as melhores ofertas para aquele usuário. É controlada por um modelo algorítmico de Digital Insights que otimiza por margem e giro de estoque.",
    screens: [
      {
        id: "prateleira-ofertas-1",
        title: "Prateleira de Ofertas",
        subtitle: "Carrossel horizontal de produtos em desconto",
        responsible: "Time responsável · Digital Insights",
        mockup: "showcase-prateleira",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "SKUs elegíveis e descontos calculados em tempo real pelo promotions engine com regras configuráveis por praça", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home — uma das prateleiras principais, abaixo do Banner Hero.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Lógica de countdown das ofertas relâmpago está embutida no monolito de promoções; mudanças de comportamento requerem deploy", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Usuário navega por dezenas de SKUs em oferta sem sair da home, com carregamento sob demanda", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 09
  {
    id: "carrossel-ofertas-dia",
    name: "Carrossel de Ofertas do Dia",
    description: "Espaço para comunicação de conjunto de ofertas. É possível o cadastro de 2 a 5 conjuntos. Dentro de cada conjunto é possível adicionar produtos com desconto e contador regressivo até meia-noite.",
    screens: [
      {
        id: "ofertas-dia-1",
        title: "Carrossel de Ofertas do Dia",
        subtitle: "Seleção diária de produtos com desconto",
        responsible: "Time responsável · Comercial",
        mockup: "showcase-ofertas-dia",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Time de negócio define âncoras por praça; algoritmo preenche demais slots por margem e giro sem intervenção técnica", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home — bloco dedicado a ofertas com contador regressivo até meia-noite.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Push notification diário está integrado ao sistema de mensageria do monolito; alterar horário ou segmentação requer deploy", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Cada conjunto pode conter múltiplos produtos com desconto; badge automático quando estoque cai abaixo de 20 unidades", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 10
  {
    id: "chopp-showcase",
    name: "Espaço Chopp Showcase",
    description: "Espaço para divulgação de campanhas e oferta relacionadas ao CBE. Módulo ativado sazonalmente por feature flag e disponível apenas nos CEPs com cobertura de choppeiras cadastrada.",
    screens: [
      {
        id: "chopp-1",
        title: "Espaço Chopp Showcase",
        subtitle: "Módulo dedicado ao aluguel de choppeiras",
        responsible: "Time responsável · Produto",
        mockup: "showcase-chopp",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Módulo configurado uma vez pelo time, sem segmentação por usuário ou perfil. Disponibilidade automática por CEP com cobertura de choppeiras cadastrada.", tag: "Sem Personalização" },
          { title: "Onde aparece", description: "Home — aparece sazonalmente para usuários nas regiões com cobertura de aluguel de choppeiras.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Fluxo de reserva e agendamento de choppeiras está embutido no monolito de pedidos; novas etapas exigem refatoração", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Sugere itens complementares (copo, isopor, petisco) no mesmo pedido para aumentar ticket médio", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Precisa release", style: "bg-rose-50 text-rose-700 border-rose-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 11
  {
    id: "prateleiras-showcase",
    name: "Prateleiras Showcase",
    description: "Prateleiras temáticas com curadoria editorial exibidas no scroll da home, agrupando produtos por contexto ou ocasião.",
    screens: [
      {
        id: "prateleiras-showcase-1",
        title: "Prateleiras Showcase",
        subtitle: "CURADORIA TEMÁTICA NO SCROLL DA HOME",
        responsible: "Time responsável · Comercial",
        mockup: "prateleiras-showcase",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Título e curadoria de produtos configuráveis via CMS por praça e período. Suporte a badges promocionais (Leve + Por -, desconto %) por SKU. [A VALIDAR]", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Scroll da home, após as prateleiras algorítmicas. Pode aparecer em múltiplas posições dependendo da configuração editorial.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Ordem das prateleiras e quantidade de itens dependem do BFF centralizado. Conflito a validar: planilha indica \"sem limite de itens\", documentação aponta dependência do BFF. [A VALIDAR]", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Permite combinar contexto editorial (tema, ocasião) com mecânica promocional (badges, desconto) numa única superfície, sem exigir tela dedicada.", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 12
  {
    id: "rec4u",
    name: "Rec4U",
    description: "Prateleira com os últimos produtos comprados pelo usuário e produtos relacionados. É controlada por um modelo algorítmico de Digital Insights com personalização 1:1.",
    screens: [
      {
        id: "rec4u-1",
        title: "Rec4U",
        subtitle: "Recomendações personalizadas por IA",
        responsible: "Time responsável · Digital Insights",
        mockup: "showcase-rec4u",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Experimentos A/B permitem comparar algoritmos de recomendação por segmento de usuário sem alterar código", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home — prateleira dedicada à recompra, abaixo das prateleiras de oferta.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Pipeline de atualização em tempo real das recomendações depende de infraestrutura de ML acoplada ao monolito de dados", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Tag 'Porque você comprou X' contextualiza cada sugestão, aumentando CTR e transparência para o usuário", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 13
  {
    id: "recomendados-ze",
    name: "Recomendados pelo Zé",
    description: "Prateleira com os produtos selecionados pelo time comercial para divulgação e impulsão em vendas. É controlada por um modelo algorítmico de Digital Insights com personalização 1:1.",
    screens: [
      {
        id: "recomendados-1",
        title: "Recomendados pelo Zé",
        subtitle: "Seleção editorial da equipe Zé",
        responsible: "Time responsável · Digital Insights",
        mockup: "showcase-recomendacoes",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Conteúdo curatorial publicado semanalmente via CMS pelo time editorial, sem necessidade de release de app", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home — prateleira com produtos selecionados pelo time comercial, abaixo das prateleiras algorítmicas.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Botão 'Adicionar kit' aciona lógica de múltiplos itens no carrinho acoplada ao monolito de pedidos", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Time editorial do Zé elege combinações temáticas como 'Kit Churrasco' e 'Frio de Inverno'", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 14
  {
    id: "category",
    name: "Páginas de Categorias",
    description: "Página dedicada para organização e disponibilização de produtos de uma categoria. Cada categoria tem sua particularidade e disposição de prateleiras e sub-categorias independentes.",
    screens: [
      {
        id: "category-1",
        title: "Páginas de Categorias",
        subtitle: "Listagem e filtros de produtos",
        responsible: "Time responsável · Produto",
        mockup: "category",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Filtros e ordenação configuráveis por categoria e praça; promoções regionais refletidas em tempo real", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Acessada ao tocar em uma categoria do componente de categorias na Home (ex: Cervejas, Vinhos, Destilados).", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Lazy loading e paginação da listagem dependem da API de catálogo monolítica; mudanças de performance requerem deploy", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Produtos esgotados desabilitados automaticamente via integração com WMS do hub de entrega", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Precisa release", style: "bg-rose-50 text-rose-700 border-rose-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 15
  {
    id: "pagina-prateleiras",
    name: "Páginas de Prateleiras",
    description: "Páginas dedicadas abertas ao clicar em \"Ver todos\" de uma prateleira, exibindo todos os produtos da coleção em grid.",
    screens: [
      {
        id: "pagina-prateleiras-1",
        title: "Páginas de Prateleiras",
        subtitle: "PÁGINA DEDICADA AO CLICAR EM \"VER TODOS\"",
        responsible: "Time responsável · Comercial",
        mockup: "pagina-prateleiras",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Imagem de abertura e título da página configuráveis por coleção via CMS. Produtos e ordem determinados pela curadoria editorial ou algoritmo da prateleira de origem. [A VALIDAR]", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Acessada ao clicar em \"Ver todos\" em qualquer prateleira da home. Também acessível via deep link direto para a coleção.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Página gerada dinamicamente a partir dos dados da prateleira de origem. Mudanças na estrutura do grid ou filtros exigem deploy. [A VALIDAR]", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Mantém o contexto temático da prateleira de origem (título, curadoria), transformando a navegação horizontal em exploração vertical completa da coleção.", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 16
  {
    id: "brand",
    name: "Branding Page",
    description: "Página oficial de uma marca dentro do app. Prateleiras podem ser disponibilizadas dentro da página. A imagem do topo é personalizada com a identidade da marca. Ao final há um banner para divulgação.",
    screens: [
      {
        id: "brand-1",
        title: "Branding Page",
        subtitle: "Portfólio e storytelling de marca",
        responsible: "Time responsável · Produto",
        mockup: "brand",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Hero, portfólio e badges de co-marketing configurados por parceiro via CMS, com ativação por região e período", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Acessada ao tocar em uma marca do Carrossel de Marcas ('Marcas que amamos') ou via deep link de campanha específica da marca.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Espaço editorial de receitas e storytelling depende de integração CMS-monolito legada; mudanças de schema exigem deploy", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Selos de promoção exclusiva e cashback da marca exibidos nos cards do portfólio", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Precisa release", style: "bg-rose-50 text-rose-700 border-rose-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 17
  {
    id: "product",
    name: "Página de Produto (PDP)",
    description: "Página com detalhes e atributos de um SKU. São exibidos o valor do produto, pontos do Zé Compensa, imagem com possibilidade de zoom, descrição e atributos. Temos 3 tipos: sem desconto, com desconto e com desconto progressivo.",
    screens: [
      {
        id: "product-1",
        title: "Página de Produto (PDP)",
        subtitle: "Detalhe e adição ao carrinho",
        responsible: "Time responsável · Produto",
        mockup: "product",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Sugestões de produtos relacionados são personalizadas por afinidade de compra e histórico do usuário", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Acessada ao tocar em qualquer produto no app — prateleiras, busca, página de categoria, deep link de banner ou recomendação.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Tabela nutricional e ingredientes são exibidos a partir de dados legados no monolito de catálogo; atualizações exigem integração regulatória", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Produto sem desconto, com desconto e com desconto progressivo — cada tipo com layout e lógica de preço específicos", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Precisa release", style: "bg-rose-50 text-rose-700 border-rose-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 18
  {
    id: "rec-similar",
    name: "Recomendação Item Similar",
    description: "Modelo de Digital Insights com o objetivo de recomendar itens similares com valor de venda maior do que o produto da página. É exibido dentro de uma página de produto.",
    screens: [
      {
        id: "rec-similar-1",
        title: "Recomendação Item Similar",
        subtitle: "Upsell por similaridade no PDP",
        responsible: "Time responsável · Digital Insights (a confirmar)",
        mockup: "rec-similar",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Experimentos A/B permitem calibrar o threshold de similaridade e preço por segmento sem alterar código", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Página de produto (PDP) — bloco de upsell exibido com itens similares de ticket superior ao produto da página.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Pipeline de atualização do modelo de similaridade depende de infraestrutura de ML acoplada ao monolito de dados", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Recomenda produtos similares com ticket superior para aumentar o valor médio do pedido com base em dados de compra", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 19
  {
    id: "combina-com",
    name: "Combina com",
    description: "Modelo de Digital Insights com o objetivo de recomendar 1 item mais comprado em conjunto com o produto da página. É exibido na página de produto.",
    screens: [
      {
        id: "combina-com-1",
        title: "Combina com",
        subtitle: "Cross-sell por co-ocorrência no PDP",
        responsible: "Time responsável · Digital Insights (a confirmar)",
        mockup: "combina-com",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Modelo retreinado semanalmente com dados de co-compra do catálogo sem intervenção manual do time técnico", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Página de produto (PDP) — bloco de cross-sell exibido com 1 item de alta co-ocorrência de compra com o produto da página.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Score de co-ocorrência calculado no pipeline de dados acoplado ao monolito; mudanças de lógica exigem deploy de infraestrutura", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Destaca o produto mais frequentemente comprado junto, com alta precisão de conversão por foco e simplicidade", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 20
  {
    id: "desconto-progressivo",
    name: "Desconto Progressivo",
    description: "Tipo de oferta possível em um SKU. É exibida na página de produto. Ferramenta com objetivo de aumento de AOV. É possível a exibição de 4 níveis de ofertas de quantidades.",
    screens: [
      {
        id: "desconto-progressivo-1",
        title: "Desconto Progressivo",
        subtitle: "Incentivo de volume na página de produto",
        responsible: "Time responsável · Comercial (a confirmar)",
        mockup: "desconto-progressivo",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "Níveis de desconto e quantidades configuráveis por SKU e praça via backoffice sem necessidade de deploy técnico", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Página de produto (PDP) — bloco de incentivo de volume exibido dentro de SKUs com desconto progressivo ativo.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Validação de estoque em tempo real para cada nível de quantidade está acoplada ao monolito de promoções", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Exibe combinações de quantidade e preço que incentivam compras maiores para aumento de AOV", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 21
  {
    id: "promo-relampago",
    name: "Promo Relâmpago",
    description: "Espaço dedicado para ofertas especiais por tempo limitado. Contador regressivo visível gera urgência e acelera a decisão de compra do usuário.",
    screens: [
      {
        id: "promo-relampago-1",
        title: "Promo Relâmpago",
        subtitle: "Ofertas especiais com urgência programada",
        responsible: "Time responsável · Comercial (a confirmar)",
        mockup: "promo-relampago",
        regionalizable: false,
        features: [
          { title: "Personalização", description: "SKUs, descontos e janela de tempo configurados pelo time comercial via backoffice sem necessidade de deploy técnico", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Home — bloco dedicado a ofertas especiais por tempo limitado, com contador regressivo e badge vermelho de urgência.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Expiração automática da oferta e rollback de preço dependem do promotions engine monolítico; mudanças de lógica exigem deploy", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Contador regressivo visível gera FOMO e acelera a decisão de compra; badge de estoque limitado reforça a escassez", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Não regionalizável", style: "bg-slate-100 text-slate-500 border-slate-200" },
        ],
      },
    ],
  },

  // 22
  {
    id: "pre-sacola",
    name: "Pré-sacola",
    description: "Etapa apresentada para o usuário após adicionar algum item na sacola. Modelo de Digital Insights com o objetivo de complementar a cesta com itens relacionados.",
    screens: [
      {
        id: "pre-sacola-1",
        title: "Pré-sacola",
        subtitle: "Recomendação após adição ao carrinho",
        responsible: "Time responsável · Digital Insights (a confirmar)",
        mockup: "pre-sacola",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Itens recomendados personalizados por segmento e histórico do usuário em tempo real pelo engine de Digital Insights", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Modal exibido logo após o usuário adicionar um item à sacola — momento de alta intenção de compra. Mensagem: 'Vai mais alguma coisinha?'", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Trigger de exibição e lógica de recomendação estão acoplados ao monolito de pedidos; personalizar gatilho exige deploy", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Exibido logo após a adição ao carrinho, quando o usuário está mais propenso a complementar a cesta", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 23
  {
    id: "leve-tambem",
    name: "Leve também",
    description: "Etapa de recomendação pré-fechamento de pedido. Modelo de Digital Insights com o objetivo de complementar a cesta com itens relacionados e comprados anteriormente pelo usuário.",
    screens: [
      {
        id: "leve-tambem-1",
        title: "Leve também",
        subtitle: "Recomendação pré-fechamento",
        responsible: "Time responsável · Digital Insights (a confirmar)",
        mockup: "leve-tambem",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Recomendações ajustadas por comportamento de compra recente e sazonalidade, retreinadas semanalmente", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Sacola — bloco exibido antes do fechamento do pedido, complementando a cesta com itens relacionados ao histórico do usuário.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Exibição condicional baseada no conteúdo do carrinho está acoplada ao monolito de pedidos; personalizar gatilho exige deploy", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Exibida antes do fechamento do pedido para aumentar ticket médio com itens relacionados ao histórico do usuário", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 24
  {
    id: "rec-complemento",
    name: "Complemento de Cesta",
    description: "Sugestões de produtos complementares exibidas na sacola antes da finalização do pedido.",
    screens: [
      {
        id: "rec-complemento-1",
        title: "Complemento de Cesta",
        subtitle: "RECOMENDAÇÃO DE COMPLEMENTO NA SACOLA",
        responsible: "Time responsável · [A VALIDAR]",
        mockup: "rec-complemento",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Sugestões algorítmicas baseadas nos itens da sacola e histórico de compra do usuário. Configuração por segmento sem deploy. [A VALIDAR]", tag: "Permite Personalização" },
          { title: "Onde aparece", description: "Modal acionado na sacola antes da finalização do pedido, quando o valor ainda não atingiu o mínimo ou como oportunidade de upsell.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Recomendações processadas pelo monolito de pedidos. Atualização de modelo depende de retreino com dados de co-compra. [A VALIDAR]", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Exibe progress bar dinâmica mostrando quanto falta para o pedido mínimo, criando incentivo direto para adicionar itens.", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Não precisa release", style: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

  // 25
  {
    id: "pesquisa-inapp",
    name: "Pesquisa In App",
    description: "Avaliação de pedido e coleta de feedback estruturado após a entrega.",
    screens: [
      {
        id: "pesquisa-inapp-1",
        title: "Pesquisa In App",
        subtitle: "AVALIAÇÃO E FEEDBACK PÓS-ENTREGA",
        responsible: "Time responsável · [A VALIDAR — Produto ou CX]",
        mockup: "pesquisa-inapp",
        regionalizable: true,
        features: [
          { title: "Personalização", description: "Estrutura de perguntas fixa por tipo de pedido. Sem personalização por segmento de usuário no momento. [A VALIDAR]", tag: "Sem Personalização" },
          { title: "Onde aparece", description: "Tela de confirmação de entrega, acionada automaticamente após o status \"Entregue\". Também acessível pelo histórico de pedidos.", tag: "Onde aparece" },
          { title: "Limitação técnica", description: "Coleta acoplada ao fluxo de pedido no monolito. Adição de novas perguntas ou critérios exige deploy. [A VALIDAR]", tag: "Monolito esforço alto de alteração" },
          { title: "Destaque", description: "Avaliação em dois níveis: nota geral por estrelas + critérios específicos com thumbs, permitindo granularidade sem aumentar fricção.", tag: "Destaque" },
        ],
        footerTags: [
          { label: "Disponível em produção", style: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Precisa release", style: "bg-rose-50 text-rose-700 border-rose-200" },
          { label: "Regionalizável", style: "bg-purple-50 text-purple-700 border-purple-200", icon: "pin" },
        ],
      },
    ],
  },

];
