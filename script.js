/**
 * NUNES MÓVEIS E ELETRO - JAVASCRIPT MASTER ENGINE
 * Funcionalidades:
 * 1. Meta Pixel & Google Analytics 4 Tagging por Produto
 * 2. Engenharia de Conversão para WhatsApp com Rastreamento de SKU e Lote
 * 3. Catálogo Interativo com Busca Instantânea e Filtros
 * 4. Modal de Visualização Rápida (Quick View)
 * 5. Simulador de Triangulação Direto de Fábrica em 3 Passos
 * 6. FAQ Accordion & Mobile Drawer
 */

// ==========================================================================
// 1. BASE DE DADOS DOS PRODUTOS
// ==========================================================================
const PRODUCTS_DATA = {
  'NM-HOM-01': {
    sku: 'NM-HOM-01',
    name: 'Home Martino Ripado com LED',
    category: 'Salas & Racks',
    categoryKey: 'salas',
    price: 1343.00,
    priceFrom: 1690.00,
    installments: '10x de R$ 134,30 sem juros',
    image: 'fotos/home-martino.jpg',
    factory: 'Gelius / Indústria Parceira',
    description: 'Home para TV até 75" de altíssimo padrão. Possui painel ripado decorativo com apliques em MDF nobre, prateleira superior de suporte e elegante prateleira de vidro temperado com iluminação LED quente embutida. Ideal para modernizar sua sala de estar com requinte e sofisticação.',
    specs: [
      'Espaço para TV de até 75 polegadas',
      'Painel ripado com apliques em MDF de alta resistência',
      'Prateleira de vidro temperado com iluminação LED',
      'Nicho com corrediças telescópicas e puxadores ergonômicos',
      'Dimensões: Largura 2,00m | Altura 1,95m | Profundidade 0,42m'
    ]
  },
  'NM-JNT-02': {
    sku: 'NM-JNT-02',
    name: 'Conjunto Mesa Fiorença + Cadeiras Sena',
    category: 'Salas de Jantar',
    categoryKey: 'jantar',
    price: 2085.00,
    priceFrom: 2590.00,
    installments: '10x de R$ 208,50 sem juros',
    image: 'fotos/mesa-fiorenca-sena.jpg',
    factory: 'Móveis Direto da Fábrica',
    description: 'A união perfeita de durabilidade e elegância para sua sala de jantar. Mesa Fiorença com base estrutural em madeira maciça nobre acabamento nogueira, tampo chanfrado laminado em Cinamomo de 120x90cm e 4 cadeiras Sena com tela sextavada e assentos acolchoados em tecido nobre.',
    specs: [
      'Mesa de 1,20m x 0,90m com tampo laminado em Cinamomo',
      'Base robusta em madeira maciça de reflorestamento sustentável',
      '4 Cadeiras Sena com encosto em tela sextavada cor nogueira',
      'Assento estofado em espuma D-26 de alta densidade',
      'Acabamento com verniz poliuretano anti-risco'
    ]
  },
  'NM-COL-03': {
    sku: 'NM-COL-03',
    name: 'Colchão Box Concept Blue Plumatex Molas Ensacadas',
    category: 'Quartos & Colchões',
    categoryKey: 'quartos',
    price: 949.99,
    priceFrom: 1250.00,
    installments: '10x de R$ 95,00 sem juros',
    image: 'fotos/colchao-concept-blue.jpg',
    factory: 'Plumatex Colchões',
    description: 'O colchão Concept Blue da Plumatex reúne conforto térmico, suporte ortopédico e resistência ímpar para noites de sono restauradoras. Com sistema de molas ensacadas individualmente (quando um se mexe o outro não sente), camada de conforto em espuma D-28 e malha suave com tratamento antiácaro.',
    specs: [
      'Molas ensacadas individualmente (Zero transferência de movimento)',
      'Espuma de conforto certificada D-28 de alta resiliência',
      'Tecido em Malha Complete com toque suave e fresco',
      'Base com acabamento e tecido antiderrapante',
      'Dimensões Casal Padrão: 1,38m x 1,88m x 0,30m'
    ]
  },
  'NM-BAN-04': {
    sku: 'NM-BAN-04',
    name: 'Bancada Requinte Gelius com Nicho Iluminado',
    category: 'Salas & Racks',
    categoryKey: 'salas',
    price: 899.00,
    priceFrom: 1150.00,
    installments: '10x de R$ 89,90 sem juros',
    image: 'fotos/bancada-requinte.jpg',
    factory: 'Gelius Móveis',
    description: 'Sua sala merece esse toque de requinte! A bancada Requinte Gelius conta com design retrô contemporâneo com pés angulados de madeira, 3 gavetões amplos com corrediças telescópicas e prateleiras de vidro com fita LED embutida para acomodar eletrônicos e objetos de decoração.',
    specs: [
      '3 Gavetões reforçados com abertura total telescópica',
      'Divisórias com prateleiras de vidro translúcido',
      'Fita de LED com fiação embutida e interruptor discreto',
      'Pés maciços cônicos em estilo escandinavo',
      'Acabamento amadeirado fosco com pintura UV'
    ]
  },
  'NM-COL-05': {
    sku: 'NM-COL-05',
    name: 'Colchão Gazin Espuma Supreme Casal',
    category: 'Quartos & Colchões',
    categoryKey: 'quartos',
    price: 789.97,
    priceFrom: 990.00,
    installments: '10x de R$ 78,99 sem juros',
    image: 'fotos/colchao-gazin-supreme.jpg',
    factory: 'Gazin Colchões',
    description: 'Colchão Gazin Espuma Supreme desenvolvido com espuma de densidade balanceada para proporcionar suporte ideal para a coluna e bem-estar nas noites de descanso. Revestimento refinado com estampa floral e faixas laterais pretas de alta resistência.',
    specs: [
      'Dimensões: 1380 x 1880 x 210 mm (Casal padrão)',
      'Espuma certificada com selo de qualidade Inmetro',
      'Suporte de peso adequado para casal',
      'Acabamento lateral moderno em tecido nobre preto',
      'Garantia oficial de fábrica Gazin'
    ]
  },
  'NM-CAD-06': {
    sku: 'NM-CAD-06',
    name: 'Cadeira Stela Fam 3 Veludo Luxo',
    category: 'Salas de Jantar',
    categoryKey: 'jantar',
    price: 180.00,
    priceFrom: 240.00,
    installments: 'Kit 2 por R$ 360,00 ou 10x sem juros',
    image: 'fotos/cadeira-stela.jpg',
    factory: 'Fam 3 Estofados',
    description: 'Une design sofisticado, conforto ergonômico e praticidade. A Cadeira Stela Fam 3 possui revestimento em veludo H10 cor cinza com costura matelassê em diamante, estrutura resistente de madeira e puxador ergonômico em madeira na parte superior do encosto.',
    specs: [
      'Revestimento em veludo especial H10 com toque macio',
      'Puxador superior de madeira que facilita o manuseio diário',
      'Costura capitonê geométrica no encosto',
      'Estrutura em madeira tratada de alta durabilidade',
      'Vendido avulso ou em kits de 2, 4 e 6 unidades'
    ]
  },
  'NM-ELE-07': {
    sku: 'NM-ELE-07',
    name: 'Tanquinho Suggar Eco 15KG Lavadora',
    category: 'Cozinha & Eletros',
    categoryKey: 'cozinha',
    price: 578.00,
    priceFrom: 749.00,
    installments: '10x de R$ 57,80 sem juros',
    image: 'fotos/tanquinho-suggar.jpg',
    factory: 'Suggar Eletrodomésticos',
    description: 'Mais praticidade na hora de lavar! O Tanquinho Suggar Eco conta com super capacidade para até 15kg de roupas, 6 programas inteligentes de lavagem (incluindo lavagem de edredom), filtro cata-fiapos de alta eficiência, timer com desligamento automático e consumo nota A do Inmetro.',
    specs: [
      'Capacidade impressionante para 15kg de roupas',
      '6 programas de lavagem com intervalos para molho',
      'Filtro de fiapos patenteado',
      'Timer com programação de até 28 minutos',
      'Desligamento automático com economia de energia'
    ]
  },
  'NM-COZ-08': {
    sku: 'NM-COZ-08',
    name: 'Cozinha Compacta Pitaya 7 Portas Demóbile',
    category: 'Cozinha & Eletros',
    categoryKey: 'cozinha',
    price: 761.00,
    priceFrom: 980.00,
    installments: '10x de R$ 76,10 sem juros',
    image: 'fotos/cozinha-eletros.jpg',
    factory: 'Demóbile Móveis',
    description: 'A solução completa e inteligente para organizar sua cozinha com beleza e economia. A Cozinha Compacta Pitaya conta com 7 portas, 2 gavetas com corrediças reforçadas, nicho aberto para micro-ondas e amplo espaço interno para louças, mantimentos e eletroportáteis.',
    specs: [
      '7 portas amplas com dobradiças metálicas',
      '2 gavetas com corrediças metálicas suaves',
      'Nicho dedicado para forno micro-ondas ou elétrico',
      'Puxadores modernos na cor bronze e pés com regulagem de nível',
      'Acabamento nobre Cinamomo / Off White de fácil limpeza'
    ]
  }
};

// ==========================================================================
// 2. MOTOR DE RASTREAMENTO: META PIXEL & GOOGLE ANALYTICS
// ==========================================================================
const TRACKING_CONFIG = {
  currency: 'BRL',
  channel: 'WhatsApp Vendas Nunes Móveis',
  businessModel: 'Triangulacao_Direto_Fabrica'
};

/**
 * Disparador unificado de eventos de conversão e comportamento
 */
function trackEvent(eventName, params = {}) {
  const payload = {
    ...TRACKING_CONFIG,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...params
  };

  // 1. Meta Pixel (Facebook)
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, payload);
  }

  // 2. Google Analytics 4 / Google Tag
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  // 3. DataLayer (GTM)
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ecommerce: payload
    });
  }

  // Auditoria interna no console
  console.log(`%c[NUNES PIXEL] Evento: ${eventName}`, 'color: #ffc107; font-weight: bold;', payload);
}

/**
 * Rastreia visualização de produto específico (ViewContent)
 */
function trackViewContent(product) {
  trackEvent('ViewContent', {
    content_name: product.name,
    content_ids: [product.sku],
    content_type: 'product',
    content_category: product.category,
    value: product.price,
    currency: 'BRL'
  });
}

/**
 * Rastreia clique de compra e início de checkout no WhatsApp (InitiateCheckout)
 */
function trackInitiateCheckout(productName, sku, price, triggerLocation) {
  trackEvent('InitiateCheckout', {
    content_name: productName,
    content_ids: [sku],
    content_type: 'product',
    value: price,
    currency: 'BRL',
    trigger_source: triggerLocation,
    checkout_channel: 'WhatsApp'
  });
}

// ==========================================================================
// 3. INTERSECTION OBSERVER PARA VIEWCONTENT NOS PRODUTOS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const viewedSkus = new Set();
  const productCards = document.querySelectorAll('.product-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sku = entry.target.getAttribute('data-sku');
          if (sku && !viewedSkus.has(sku) && PRODUCTS_DATA[sku]) {
            viewedSkus.add(sku);
            trackViewContent(PRODUCTS_DATA[sku]);
          }
        }
      });
    }, { threshold: 0.45 });

    productCards.forEach(card => observer.observe(card));
  }
});

// ==========================================================================
// 4. FILTROS DE CATEGORIA & BUSCA INSTANTÂNEA
// ==========================================================================
const catalogSearch = document.getElementById('catalogSearch');
const categoryTabs = document.querySelectorAll('.cat-tab-btn');
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');

let currentCategory = 'todos';
let searchQuery = '';

function applyFilters() {
  const cards = document.querySelectorAll('.product-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const cardName = card.getAttribute('data-name').toLowerCase();
    const cardSku = card.getAttribute('data-sku').toLowerCase();

    const matchesCategory = (currentCategory === 'todos' || cardCategory === currentCategory);
    const matchesSearch = (!searchQuery || cardName.includes(searchQuery) || cardSku.includes(searchQuery));

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (visibleCount === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
  }
}

// Evento de Busca por texto
if (catalogSearch) {
  catalogSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();

    if (searchQuery.length >= 3) {
      trackEvent('Search', { search_string: searchQuery });
    }
  });
}

// Evento de Tabs de Categoria
categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCategory = tab.getAttribute('data-category');
    applyFilters();

    trackEvent('CategoryFilter', { selected_category: currentCategory });
  });
});

function filterCategory(categoryKey) {
  currentCategory = categoryKey;
  categoryTabs.forEach(t => {
    if (t.getAttribute('data-category') === categoryKey) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });
  applyFilters();
}

function resetFilters() {
  currentCategory = 'todos';
  searchQuery = '';
  if (catalogSearch) catalogSearch.value = '';
  categoryTabs.forEach(t => t.classList.remove('active'));
  const allTab = document.querySelector('.cat-tab-btn[data-category="todos"]');
  if (allTab) allTab.classList.add('active');
  applyFilters();
}

// ==========================================================================
// 5. MODAL DE VISUALIZAÇÃO RÁPIDA (QUICK VIEW)
// ==========================================================================
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');

function openProductModal(sku) {
  const prod = PRODUCTS_DATA[sku];
  if (!prod) return;

  // Rastreia no Pixel que o cliente aprofundou o interesse no produto
  trackViewContent(prod);
  trackEvent('CustomizeProduct', { sku: prod.sku, name: prod.name });

  const specsListHtml = prod.specs.map(item => `<li><i class="fa-solid fa-check-circle" style="color: #ffc107; margin-right: 8px;"></i>${item}</li>`).join('');

  const waText = encodeURIComponent(
    `Olá, Nunes Móveis! Quero fechar o *${prod.name}* (Ref: ${prod.sku}) por *R$ ${prod.price.toFixed(2).replace('.', ',')}* direto da fábrica com entrega e montagem em até 48h!`
  );
  const waUrl = `https://wa.me/5561981889061?text=${waText}`;

  modalBody.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-img-col">
        <img src="${prod.image}" alt="${prod.name}" class="modal-product-img">
      </div>
      <div class="modal-product-details">
        <div class="product-meta-row">
          <span class="product-sku">SKU OFICIAL: ${prod.sku}</span>
          <span class="product-tag-factory"><i class="fa-solid fa-industry"></i> ${prod.factory}</span>
        </div>
        <h2 style="font-size: 1.5rem; margin-top: 4px;">${prod.name}</h2>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${prod.description}</p>
        
        <div style="margin: 8px 0; padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08);">
          <h4 style="font-size: 0.95rem; margin-bottom: 8px; color: var(--gold-light);">Diferenciais Técnicos de Fábrica:</h4>
          <ul style="list-style: none; font-size: 0.85rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 6px;">
            ${specsListHtml}
          </ul>
        </div>

        <div class="product-pricing" style="border: none; padding: 0;">
          <span class="price-from">Valor de Tabela: R$ ${prod.priceFrom.toFixed(2).replace('.', ',')}</span>
          <div class="price-current-row">
            <span class="price-current">R$ ${prod.price.toFixed(2).replace('.', ',')}</span>
            <span class="price-cash-badge">Preço Direto de Fábrica</span>
          </div>
          <span class="price-installments">${prod.installments}</span>
        </div>

        <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 10px;">
          <a href="${waUrl}" 
             class="glass-btn glass-btn-whatsapp glass-btn-lg w-full" 
             target="_blank" 
             rel="noopener"
             onclick="trackInitiateCheckout('${prod.name}', '${prod.sku}', ${prod.price}, 'Modal Quick View')">
            <i class="fa-brands fa-whatsapp"></i> Comprar Direto da Fábrica
          </a>
          <p style="font-size: 0.75rem; text-align: center; color: var(--text-muted);">
            <i class="fa-solid fa-truck-fast"></i> Montagem e entrega profissional em até 48 horas no DF e Entorno.
          </p>
        </div>
      </div>
    </div>
  `;

  productModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  productModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Fechar modal clicando fora
if (productModal) {
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });
}

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && productModal && productModal.classList.contains('open')) {
    closeProductModal();
  }
});

// ==========================================================================
// 6. SIMULADOR INTELIGENTE DE TRIANGULAÇÃO (3 PASSOS)
// ==========================================================================
function submitSimulator() {
  const form = document.getElementById('simuladorForm');
  if (!form) return;

  const ambienteRadio = form.querySelector('input[name="sim_ambiente"]:checked');
  const pagamentoRadio = form.querySelector('input[name="sim_pagamento"]:checked');
  const cidadeSelect = document.getElementById('simCidade');

  const ambiente = ambienteRadio ? ambienteRadio.value : 'Ambiente Geral';
  const pagamento = pagamentoRadio ? pagamentoRadio.value : '10x Sem Juros';
  const cidade = cidadeSelect ? cidadeSelect.value : 'Valparaíso de Goiás';

  // Dispara evento Lead no Pixel e GA4
  trackEvent('Lead', {
    content_category: 'Simulador de Crediario e Triangulacao',
    ambiente: ambiente,
    condicao_pagamento: pagamento,
    cidade_entrega: cidade,
    value: 1000.00,
    currency: 'BRL'
  });

  // Mensagem estruturada para o WhatsApp
  const message = 
`Olá, equipe Nunes Móveis e Eletro! Fiz uma simulação pelo site oficial:

🏠 *Ambiente de Interesse:* ${ambiente}
💳 *Condição Pretendida:* ${pagamento}
📍 *Cidade de Entrega:* ${cidade}

Gostaria de ver os modelos direto da fábrica para esse ambiente e fechar meu pedido com entrega e montagem garantida!`;

  const waUrl = `https://wa.me/5561981889061?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// ==========================================================================
// 7. FAQ ACCORDION INTERATIVO
// ==========================================================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  questionBtn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Fecha outros
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
      const otherAnswer = otherItem.querySelector('.faq-answer');
      if (otherAnswer) otherAnswer.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      trackEvent('FAQOpen', { question: questionBtn.innerText.trim() });
    } else {
      item.classList.remove('active');
      answer.style.maxHeight = null;
    }
  });
});

// ==========================================================================
// 8. MOBILE DRAWER NAVIGATION & SCROLL LISTENER
// ==========================================================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');
const drawerLinks = document.querySelectorAll('.drawer-link');

function openDrawer() {
  if (mobileDrawer) mobileDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  if (mobileDrawer) mobileDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

// Efeito de Glass Header no Scroll
const mainHeader = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    mainHeader.style.background = 'rgba(7, 8, 11, 0.92)';
    mainHeader.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
  } else {
    mainHeader.style.background = 'rgba(7, 8, 11, 0.75)';
    mainHeader.style.boxShadow = 'none';
  }
});
