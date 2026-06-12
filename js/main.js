// ── i18n ──
const i18n = {
  ar: {
    nav_features: 'المميزات', nav_iptv: 'IPTV', nav_live: 'النتائج',
    nav_bracket: 'براكيت', nav_download: 'تحميل',
    hero_eyebrow: 'كأس العالم 2026 · USA · CANADA · MEXICO',
    hero_title1: 'تابع كأس العالم', hero_title2: 'MUNDIALY',
    hero_sub: 'النتائج الفورية، البث المباشر، جدول المجموعات، وبراكيت المتابعة — كل شيء في تطبيق واحد مذهل.',
    cta_primary: '⚡ حمّل التطبيق مجاناً', cta_ghost: '🔴 النتائج المباشرة',
    feat_tag: 'المميزات الحصرية', feat_title: 'كل ما تحتاجه\nفي مكان واحد',
    badge_new: 'جديد',
    feat1_title: 'IPTV مباشر عبر Xtream', feat1_desc: 'ادخل بيانات Xtream Codes IPTV وشاهد قنوات beIN Sports, OSN, Alwan وأكثر من 49 فئة مباشرة.',
    feat2_title: 'نتائج فورية', feat2_desc: 'نتائج مباريات الوقت الفعلي مع تفاصيل الأهداف وأحداث المباراة وقرارات VAR لحظة بلحظة.',
    feat3_title: 'جدول المباريات', feat3_desc: 'تصفية حسب التاريخ، الفريق، أو المجموعة. تابع مباريات تونس ومنتخبك المفضل.',
    feat4_title: 'Bracket 2026', feat4_desc: 'تابع مسار كل منتخب من دور المجموعات حتى النهائي في واجهة بصرية مذهلة.',
    feat5_title: '32 منتخباً + الهدافون', feat5_desc: 'إحصاءات شاملة، ترتيب المجموعات، وترتيب الهدافين بتصميم احترافي.',
    iptv_tag: 'بث مباشر حصري', iptv_title: 'شاهد كل مباراة\nمباشرة على هاتفك',
    iptv_desc: 'ادخل بيانات Xtream Codes IPTV الخاصة بك واستمتع بأكثر من <strong style="color:var(--gold)">49 فئة</strong> من القنوات المتنوعة.',
    stat1: 'فئة قناة', stat2: 'جودة عالية', stat3: 'إعلانات',
    live_tag: 'مباريات كأس العالم 2026', live_title: 'نتائج فورية',
    live_badge: 'بث مباشر',
    status_done: 'انتهت', status_live: 'مباشر', status_soon: 'قادم',
    bracket_tag: 'الجدول التنافسي', bracket_title: 'Bracket 2026',
    bracket_sub: 'تابع مسار كل منتخب من دور 32 حتى النهائي الكبير',
    round_16: 'دور الـ16', round_qf: 'ربع النهائي', round_sf: 'نصف النهائي', round_final: 'النهائي الكبير',
    dl_title: 'حمّل Mundialy\nمجاناً الآن', dl_sub: 'انضم إلى ملايين المشجعين حول العالم. تجربة كأس العالم 2026 تبدأ هنا.',
    dl_apk_label: 'متوفر على', dl_direct_label: 'تحميل مباشر', dl_tg_label: 'اطلب عبر',
    tg_iptv_msg: '🔑 احصل على Trilar IPTV — تواصل معنا على Telegram',
    footer_rights: '© 2026 Mundialy — جميع الحقوق محفوظة',
  },
  fr: {
    nav_features: 'Fonctions', nav_iptv: 'IPTV', nav_live: 'Résultats',
    nav_bracket: 'Bracket', nav_download: 'Télécharger',
    hero_eyebrow: 'COUPE DU MONDE 2026 · USA · CANADA · MEXIQUE',
    hero_title1: 'Suivez la Coupe du Monde', hero_title2: 'MUNDIALY',
    hero_sub: 'Résultats en direct, streaming IPTV, groupes et bracket — tout en une seule app magnifique.',
    cta_primary: '⚡ Télécharger gratuitement', cta_ghost: '🔴 Résultats en direct',
    feat_tag: 'Fonctionnalités exclusives', feat_title: 'Tout ce qu\'il vous faut\nen un seul endroit',
    badge_new: 'NOUVEAU',
    feat1_title: 'IPTV Live via Xtream', feat1_desc: 'Entrez vos codes Xtream IPTV et regardez beIN Sports, OSN, Alwan et plus de 49 catégories.',
    feat2_title: 'Résultats instantanés', feat2_desc: 'Scores en temps réel avec détails des buts, événements de match et décisions VAR.',
    feat3_title: 'Calendrier des matchs', feat3_desc: 'Filtrez par date, équipe ou groupe. Suivez la Tunisie et votre équipe favorite.',
    feat4_title: 'Bracket 2026', feat4_desc: 'Suivez le parcours de chaque équipe des groupes jusqu\'à la finale.',
    feat5_title: '32 équipes + Buteurs', feat5_desc: 'Stats complètes, classements et tableau des buteurs en design pro.',
    iptv_tag: 'Streaming exclusif', iptv_title: 'Regardez chaque match\ndirectement sur votre téléphone',
    iptv_desc: 'Entrez vos codes Xtream IPTV et profitez de plus de <strong style="color:var(--gold)">49 catégories</strong> de chaînes.',
    stat1: 'Catégories', stat2: 'Haute qualité', stat3: 'Publicités',
    live_tag: 'Matchs Coupe du Monde 2026', live_title: 'Résultats en direct',
    live_badge: 'EN DIRECT',
    status_done: 'Terminé', status_live: 'EN DIRECT', status_soon: 'À VENIR',
    bracket_tag: 'Tableau de compétition', bracket_title: 'Bracket 2026',
    bracket_sub: 'Suivez le parcours de chaque équipe du tour de 32 jusqu\'à la grande finale',
    round_16: '1/8 Finale', round_qf: 'Quarts', round_sf: 'Demis', round_final: 'FINALE',
    dl_title: 'Téléchargez Mundialy\ngratuitement', dl_sub: 'Rejoignez des millions de supporters. L\'expérience Coupe du Monde 2026 commence ici.',
    dl_apk_label: 'Disponible sur', dl_direct_label: 'Téléchargement direct', dl_tg_label: 'Obtenir via',
    tg_iptv_msg: '🔑 Obtenir Trilar IPTV — Contactez-nous sur Telegram',
    footer_rights: '© 2026 Mundialy — Tous droits réservés',
  },
  en: {
    nav_features: 'Features', nav_iptv: 'IPTV', nav_live: 'Results',
    nav_bracket: 'Bracket', nav_download: 'Download',
    hero_eyebrow: 'FIFA WORLD CUP 2026 · USA · CANADA · MEXICO',
    hero_title1: 'Follow the World Cup', hero_title2: 'MUNDIALY',
    hero_sub: 'Live scores, IPTV streaming, group tables, and a bracket tracker — everything in one stunning app.',
    cta_primary: '⚡ Download Free', cta_ghost: '🔴 Live Results',
    feat_tag: 'Exclusive Features', feat_title: 'Everything You Need\nIn One Place',
    badge_new: 'NEW',
    feat1_title: 'Live IPTV via Xtream', feat1_desc: 'Enter your Xtream Codes IPTV credentials and watch beIN Sports, OSN, Alwan and 49+ categories.',
    feat2_title: 'Instant Results', feat2_desc: 'Real-time match scores with goal details, match events, and VAR decisions as they happen.',
    feat3_title: 'Match Schedule', feat3_desc: 'Filter by date, team, or group. Follow Tunisia and your favourite national team.',
    feat4_title: 'Bracket 2026', feat4_desc: 'Track every team\'s journey from the group stage all the way to the grand final.',
    feat5_title: '32 Teams + Top Scorers', feat5_desc: 'Full stats, group standings, and top scorer rankings with a professional design.',
    iptv_tag: 'Exclusive Streaming', iptv_title: 'Watch Every Match\nLive on Your Phone',
    iptv_desc: 'Enter your Xtream Codes IPTV credentials and enjoy over <strong style="color:var(--gold)">49 categories</strong> of channels.',
    stat1: 'Channel Categories', stat2: 'High Quality', stat3: 'No Ads',
    live_tag: 'World Cup 2026 Matches', live_title: 'Lightning Fast Results',
    live_badge: 'LIVE',
    status_done: 'FT', status_live: 'LIVE', status_soon: 'UPCOMING',
    bracket_tag: 'Competition Bracket', bracket_title: 'Bracket 2026',
    bracket_sub: 'Track every team from the Round of 32 to the grand final',
    round_16: 'Round of 16', round_qf: 'Quarter Finals', round_sf: 'Semi Finals', round_final: 'GRAND FINAL',
    dl_title: 'Download Mundialy\nFor Free', dl_sub: 'Join millions of fans worldwide. The World Cup 2026 experience starts here.',
    dl_apk_label: 'Available on', dl_direct_label: 'Direct Download', dl_tg_label: 'Get via',
    tg_iptv_msg: '🔑 Get Trilar IPTV — Contact us on Telegram',
    footer_rights: '© 2026 Mundialy — All rights reserved',
  }
};

let currentLang = 'ar';

function setLang(lang) {
  currentLang = lang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key].replace(/\n/g, '<br>');
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
  });

  // Font adjustment for Arabic
  const body = document.body;
  if (lang === 'ar') {
    body.style.fontFamily = "'Cairo', sans-serif";
  } else {
    body.style.fontFamily = "'Inter', sans-serif";
  }
}

// ── Cursor ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animCursor() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  ring.style.left   = rx + 'px';
  ring.style.top    = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();

document.querySelectorAll('a, button, .feat-card, .result-card, .channel-pill').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'rgba(231,193,106,0.9)';
    ring.style.width = '60px';
    ring.style.height = '60px';
    ring.style.borderColor = 'rgba(231,193,106,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursor.style.background = 'var(--gold)';
    ring.style.width = '40px';
    ring.style.height = '40px';
    ring.style.borderColor = 'rgba(231,193,106,0.5)';
  });
});

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── GSAP Animations ──
gsap.registerPlugin(ScrollTrigger);

// Hero entrance
gsap.fromTo('.hero-content', 
  { opacity: 0, y: 60 },
  { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
);

gsap.fromTo('.phones-strip', 
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.7 }
);

// Phone parallax on scroll
gsap.to('.phone-wrap:nth-child(1)', {
  yPercent: -20, ease: 'none',
  scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
});
gsap.to('.phone-wrap:nth-child(3)', {
  yPercent: -30, ease: 'none',
  scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
});
gsap.to('.phone-wrap:nth-child(2)', {
  yPercent: -10, ease: 'none',
  scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
});

// Scroll reveals
gsap.utils.toArray('.reveal').forEach((el, i) => {
  gsap.fromTo(el,
    { opacity: 0, y: 50 },
    {
      opacity: 1, y: 0,
      duration: 0.9, ease: 'power3.out',
      delay: (i % 3) * 0.1,
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    }
  );
});

// Stagger feat cards
gsap.utils.toArray('.feat-card').forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 40, scale: 0.97 },
    {
      opacity: 1, y: 0, scale: 1,
      duration: 0.7, ease: 'back.out(1.5)',
      delay: i * 0.08,
      scrollTrigger: { trigger: '#features', start: 'top 75%', toggleActions: 'play none none none' }
    }
  );
});

// Result cards stagger
gsap.utils.toArray('.result-card').forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
    {
      opacity: 1, x: 0,
      duration: 0.6, ease: 'power2.out',
      delay: i * 0.1,
      scrollTrigger: { trigger: '#live', start: 'top 75%', toggleActions: 'play none none none' }
    }
  );
});

// Orb parallax
gsap.to('.hero-orb', {
  yPercent: 30, ease: 'none',
  scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
});

// Counter animation for stats
function animateCounter(el, target) {
  let start = 0;
  const isText = isNaN(target);
  if (isText) return;
  const dur = 1500;
  const startTime = performance.now();
  function step(now) {
    const progress = Math.min((now - startTime) / dur, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

ScrollTrigger.create({
  trigger: '#iptv',
  start: 'top 70%',
  onEnter: () => {
    document.querySelectorAll('.stat-num').forEach(el => {
      const count = parseInt(el.dataset.count);
      if (!isNaN(count)) animateCounter(el, count);
    });
  }
});

// Magnetic buttons
document.querySelectorAll('.btn-primary, .btn-ghost, .store-btn, .tg-iptv-btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) * 0.2;
    const dy = (e.clientY - cy) * 0.2;
    gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' });
  });
});

// Init Arabic
setLang('ar');
