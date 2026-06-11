// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let offset = 0;
let currentKey = null;
let imgFmt = 'both'; // 'hindi' | 'english' | 'both'

// ─────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────
const THEME_KEY = 'gita-theme';

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  updateThemeToggle();
}

function toggleTheme() {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

function updateThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const isDark = getTheme() === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  btn.setAttribute('aria-label', label);
  btn.setAttribute('title', isDark ? 'Light mode' : 'Dark mode');
}

const EXPORT_THEMES = {
  dark: {
    bgTop: '#0F0F12',
    bgBottom: '#08080A',
    gold: '#C9A84C',
    skt: '#C9A84C',
    text: '#F0EDE6',
    glowGold: '#C9A84C',
    glowGoldOp: 0.06,
    glowWarm: '#7B4A10',
    glowWarmOp: 0.05,
    borderOp: 0.18,
    cornerOp: 0.55,
    ruleOp: 0.3,
    ruleDiamondOp: 0.35,
    refOp: 0.38,
    labelOp: 0.4,
    purOp: 0.55,
    quoteOp: 0.09,
  },
  light: {
    bgTop: '#FFFCF6',
    bgBottom: '#EDE6D6',
    gold: '#7A5C12',
    skt: '#5C450E',
    text: '#1C1812',
    glowGold: '#7A5C12',
    glowGoldOp: 0.1,
    glowWarm: '#A84E0E',
    glowWarmOp: 0.08,
    borderOp: 0.35,
    cornerOp: 0.65,
    ruleOp: 0.4,
    ruleDiamondOp: 0.45,
    refOp: 0.5,
    labelOp: 0.55,
    purOp: 0.65,
    quoteOp: 0.12,
  },
};

function initTheme() {
  updateThemeToggle();
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
window.addEventListener('load', () => {
  initTheme();
  initChapterInfoCard();
  initGlossaryTips();
  initSidebar();
  buildGrid();
  shiftDay(0, true);
});

// ─────────────────────────────────────────────
// DAY NAVIGATION
// ─────────────────────────────────────────────
function shiftDay(delta, reset=false) {
  if (reset) offset = 0;
  else offset += delta;

  const d = new Date();
  d.setDate(d.getDate() + offset);
  const opts = {weekday:'long', day:'numeric', month:'long', year:'numeric'};
  document.getElementById('date-str').textContent = d.toLocaleDateString('en-IN', opts);

  const start = new Date(d.getFullYear(), 0, 0);
  const doy = Math.floor((d - start) / 86400000);
  loadVerse(ROTATION[doy % ROTATION.length]);
}

// ─────────────────────────────────────────────
// LOAD VERSE
// ─────────────────────────────────────────────
function loadVerse(key) {
  currentKey = key;
  const vd = VERSES[key];
  const ch = CHAPTERS[vd.ch - 1];

  document.getElementById('m-chapter').textContent = `Ch. ${vd.ch} — ${ch.hi}`;
  document.getElementById('m-verse').textContent   = `${vd.ch}.${vd.v}`;
  document.getElementById('m-speaker').textContent = vd.speaker;

  // Both panel
  setText('b-skt', vd.skt.replace(/\n/g, '\n'));
  setText('b-trlit', vd.trlit);
  setAnnotatedText('b-hi', vd.hi, 'hi');
  setAnnotatedText('b-en', '\u201C' + vd.en + '\u201D', 'en');
  setAnnotatedText('b-pur-hi', vd.purHi, 'hi');

  // Hindi panel
  setText('h-skt', vd.skt);
  setAnnotatedText('h-hi', vd.hi, 'hi');
  setAnnotatedText('h-pur', vd.purHi, 'hi');

  // English panel
  setText('e-skt', vd.skt);
  setText('e-trlit', vd.trlit);
  setAnnotatedText('e-en', '\u201C' + vd.en + '\u201D', 'en');
  setAnnotatedText('e-pur', vd.purEn, 'en');

  syncSidebar(key);
  syncBottomGrid(key);
}

function setText(id, txt) {
  const el = document.getElementById(id);
  if (el) el.textContent = txt;
}

function setAnnotatedText(id, txt, lang) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = annotateGlossary(txt, lang);
}

// ─────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────
function switchTab(tab, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('p-' + tab).classList.add('on');
}

// ─────────────────────────────────────────────
// IMAGE FORMAT
// ─────────────────────────────────────────────
function setFmt(fmt, btn) {
  imgFmt = fmt;
  document.querySelectorAll('.fmt-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}

// ─────────────────────────────────────────────
// SIDEBAR NAVIGATION
// ─────────────────────────────────────────────
const DESKTOP_BP = 960;

function isDesktopNav() {
  return window.matchMedia(`(min-width:${DESKTOP_BP}px)`).matches;
}

function versesForChapter(n) {
  return Object.keys(VERSES)
    .filter(k => VERSES[k].ch === n)
    .sort((a, b) => VERSES[a].v - VERSES[b].v);
}

function goToVerse(key, { closeSidebar = true, scrollMain = true } = {}) {
  loadVerse(key);
  if (closeSidebar && !isDesktopNav()) closeSidebarPanel();
  if (scrollMain) {
    document.querySelector('.verse-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function syncBottomGrid(key) {
  const vd = VERSES[key];
  if (!vd) return;

  document.querySelectorAll('.ch-card').forEach(c => c.classList.remove('on'));
  document.getElementById('ch-' + vd.ch)?.classList.add('on');
  document.querySelectorAll('.vchip').forEach(c => {
    c.classList.toggle('on', c.dataset.key === key);
  });
}

function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  nav.innerHTML = '';

  CHAPTERS.forEach(ch => {
    const verses = versesForChapter(ch.n);
    const block = document.createElement('div');
    block.className = 'sb-chapter';
    block.dataset.ch = ch.n;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'sb-ch-toggle';
    toggle.innerHTML =
      `<span class="sb-ch-num">${ch.n}</span>` +
      `<span class="sb-ch-label">` +
        `<span class="sb-ch-hi">${ch.hi}</span>` +
        `<span class="sb-ch-en">${ch.en}</span>` +
      `</span>` +
      `<span class="sb-ch-count">${verses.length}</span>` +
      `<span class="sb-ch-chevron">&#9654;</span>`;
    toggle.addEventListener('click', () => block.classList.toggle('open'));
    bindChapterInfo(toggle, ch.n);

    const list = document.createElement('div');
    list.className = 'sb-verses';

    if (!verses.length) {
      const empty = document.createElement('span');
      empty.style.cssText = 'font-size:0.75rem;color:var(--text-3);font-style:italic;padding:0.25rem 0.5rem';
      empty.textContent = 'Coming soon';
      list.appendChild(empty);
    } else {
      verses.forEach(k => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sb-verse';
        btn.dataset.key = k;
        btn.textContent = `${VERSES[k].ch}.${VERSES[k].v}`;
        btn.addEventListener('click', () => goToVerse(k));
        list.appendChild(btn);
      });
    }

    block.appendChild(toggle);
    block.appendChild(list);
    nav.appendChild(block);
  });
}

function syncSidebar(key) {
  if (!key || !VERSES[key]) return;
  const vd = VERSES[key];

  document.querySelectorAll('.sb-verse').forEach(btn => {
    btn.classList.toggle('on', btn.dataset.key === key);
  });

  document.querySelectorAll('.sb-chapter').forEach(block => {
    block.classList.toggle('open', Number(block.dataset.ch) === vd.ch);
  });

  const active = document.querySelector(`.sb-verse[data-key="${key}"]`);
  if (active) {
    requestAnimationFrame(() => {
      active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }
}

function openSidebarPanel() {
  document.getElementById('sidebar')?.classList.add('open');
  const backdrop = document.getElementById('sidebar-backdrop');
  backdrop?.removeAttribute('hidden');
  backdrop?.classList.add('show');
  document.body.classList.add('sidebar-open');
  document.getElementById('sidebar-toggle')?.setAttribute('aria-expanded', 'true');
}

function closeSidebarPanel() {
  document.getElementById('sidebar')?.classList.remove('open');
  const backdrop = document.getElementById('sidebar-backdrop');
  backdrop?.classList.remove('show');
  backdrop?.setAttribute('hidden', '');
  document.body.classList.remove('sidebar-open');
  document.getElementById('sidebar-toggle')?.setAttribute('aria-expanded', 'false');
  hideChapterInfo();
}

function filterSidebar(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll('.sb-chapter').forEach(block => {
    const n = block.dataset.ch;
    const ch = CHAPTERS[Number(n) - 1];
    const verses = block.querySelectorAll('.sb-verse');
    let chapterMatch = !q ||
      n.includes(q) ||
      ch.hi.toLowerCase().includes(q) ||
      ch.en.toLowerCase().includes(q) ||
      `ch ${n}`.includes(q) ||
      `chapter ${n}`.includes(q);

    let anyVerseVisible = false;
    verses.forEach(btn => {
      const vd = VERSES[btn.dataset.key];
      const verseMatch = !q ||
        btn.dataset.key.includes(q) ||
        vd.hi.toLowerCase().includes(q) ||
        vd.en.toLowerCase().includes(q) ||
        vd.skt.toLowerCase().includes(q);
      btn.classList.toggle('hidden', !verseMatch && !chapterMatch);
      if (verseMatch) anyVerseVisible = true;
    });

    const show = !q || chapterMatch || anyVerseVisible;
    block.classList.toggle('hidden', !show);
    if (q && show) block.classList.add('open');
  });
}

function initSidebar() {
  buildSidebar();

  document.getElementById('sidebar-toggle')?.addEventListener('click', openSidebarPanel);
  document.getElementById('sidebar-close')?.addEventListener('click', closeSidebarPanel);
  document.getElementById('sidebar-backdrop')?.addEventListener('click', closeSidebarPanel);

  document.getElementById('sidebar-search')?.addEventListener('input', (e) => {
    filterSidebar(e.target.value);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebarPanel();
      hideGlossTip();
    }
  });
}

// ─────────────────────────────────────────────
// GLOSSARY TOOLTIPS
// ─────────────────────────────────────────────
let glossHideTimer = null;
let glossAnchor = null;

function initGlossaryTips() {
  const tip = document.createElement('div');
  tip.id = 'gloss-tip';
  tip.className = 'gloss-tip';
  tip.hidden = true;
  tip.setAttribute('role', 'tooltip');
  tip.innerHTML =
    '<div class="gloss-tip-term" id="gloss-tip-term"></div>' +
    '<div class="gloss-tip-sub" id="gloss-tip-sub"></div>' +
    '<p class="gloss-tip-def" id="gloss-tip-def"></p>';
  document.body.appendChild(tip);

  tip.addEventListener('mouseenter', () => clearTimeout(glossHideTimer));
  tip.addEventListener('mouseleave', scheduleHideGlossTip);

  document.addEventListener('mouseover', (e) => {
    const term = e.target.closest('.gloss-term');
    if (term) showGlossTip(term);
  });
  document.addEventListener('mouseout', (e) => {
    const term = e.target.closest('.gloss-term');
    if (term && !e.relatedTarget?.closest?.('.gloss-term, #gloss-tip')) {
      scheduleHideGlossTip();
    }
  });
  document.addEventListener('focusin', (e) => {
    const term = e.target.closest?.('.gloss-term');
    if (term) showGlossTip(term);
  });
  document.addEventListener('focusout', (e) => {
    if (e.target.closest?.('.gloss-term')) scheduleHideGlossTip();
  });

  window.addEventListener('scroll', repositionGlossTip, true);
  window.addEventListener('resize', repositionGlossTip);
}

function showGlossTip(anchor) {
  const id = anchor.dataset.term;
  const entry = GLOSSARY[id];
  if (!entry) return;

  clearTimeout(glossHideTimer);
  glossAnchor = anchor;
  const lang = anchor.dataset.lang || 'hi';
  const isHi = lang === 'hi';

  document.getElementById('gloss-tip-term').textContent =
    isHi ? entry.labelHi : entry.labelEn;
  document.getElementById('gloss-tip-sub').textContent =
    isHi ? entry.labelEn : entry.labelHi;
  document.getElementById('gloss-tip-def').textContent =
    isHi ? entry.defHi : entry.defEn;

  const tip = document.getElementById('gloss-tip');
  tip.hidden = false;
  tip.classList.add('show');
  repositionGlossTip();
}

function repositionGlossTip() {
  const tip = document.getElementById('gloss-tip');
  if (!tip || tip.hidden || !glossAnchor) return;

  const rect = glossAnchor.getBoundingClientRect();
  const tipW = tip.offsetWidth;
  const tipH = tip.offsetHeight;
  const gap = 10;
  const pad = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let left = rect.left + rect.width / 2 - tipW / 2;
  let top = rect.bottom + gap;
  if (top + tipH > vh - pad) top = rect.top - tipH - gap;

  left = Math.max(pad, Math.min(left, vw - tipW - pad));
  top = Math.max(pad, Math.min(top, vh - tipH - pad));

  tip.style.left = `${left}px`;
  tip.style.top = `${top}px`;
}

function scheduleHideGlossTip() {
  clearTimeout(glossHideTimer);
  glossHideTimer = setTimeout(hideGlossTip, 100);
}

function hideGlossTip() {
  const tip = document.getElementById('gloss-tip');
  if (!tip) return;
  tip.classList.remove('show');
  tip.hidden = true;
  glossAnchor = null;
}

// ─────────────────────────────────────────────
// CHAPTER INFO CARD (hover)
// ─────────────────────────────────────────────
let infoCardLang = 'hi';
let infoHideTimer = null;
let infoActiveCh = null;

function getChapter(n) {
  return CHAPTERS.find(c => c.n === n);
}

function initChapterInfoCard() {
  const card = document.createElement('div');
  card.id = 'ch-info-card';
  card.className = 'ch-info-card';
  card.hidden = true;
  card.setAttribute('role', 'tooltip');
  card.innerHTML =
    '<div class="ch-info-head">' +
      '<span class="ch-info-num" id="ch-info-num"></span>' +
      '<div class="ch-info-lang">' +
        '<button type="button" class="ch-info-lang-btn on" data-lang="hi">हिन्दी</button>' +
        '<button type="button" class="ch-info-lang-btn" data-lang="en">English</button>' +
      '</div>' +
    '</div>' +
    '<div class="ch-info-title" id="ch-info-title"></div>' +
    '<div class="ch-info-sub" id="ch-info-sub"></div>' +
    '<div class="ch-info-meta" id="ch-info-meta"></div>' +
    '<p class="ch-info-body" id="ch-info-body"></p>';

  document.body.appendChild(card);

  card.addEventListener('mouseenter', () => clearTimeout(infoHideTimer));
  card.addEventListener('mouseleave', scheduleHideChapterInfo);

  card.querySelectorAll('.ch-info-lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      infoCardLang = btn.dataset.lang;
      card.querySelectorAll('.ch-info-lang-btn').forEach(b =>
        b.classList.toggle('on', b.dataset.lang === infoCardLang)
      );
      if (infoActiveCh) renderChapterInfoContent(infoActiveCh);
    });
  });

  window.addEventListener('scroll', repositionChapterInfoCard, true);
  window.addEventListener('resize', repositionChapterInfoCard);
  document.getElementById('sidebar-nav')?.addEventListener('scroll', repositionChapterInfoCard);
}

function bindChapterInfo(el, chNum) {
  el.dataset.ch = chNum;

  el.addEventListener('mouseenter', () => showChapterInfo(chNum, el));
  el.addEventListener('mouseleave', scheduleHideChapterInfo);
  el.addEventListener('focus', () => showChapterInfo(chNum, el));
  el.addEventListener('blur', scheduleHideChapterInfo);

  if (window.matchMedia('(hover: none)').matches) {
    el.addEventListener('click', () => {
      showChapterInfo(chNum, el);
      clearTimeout(infoHideTimer);
      infoHideTimer = setTimeout(hideChapterInfo, 4500);
    });
  }
}

function renderChapterInfoContent(n) {
  const ch = getChapter(n);
  if (!ch) return;

  const inApp = versesForChapter(n).length;
  const isHi = infoCardLang === 'hi';
  const title = isHi ? ch.hi : ch.en;
  const altTitle = isHi ? ch.en : ch.hi;
  const body = isHi ? (ch.aboutHi || '') : (ch.aboutEn || '');

  document.getElementById('ch-info-num').textContent = `Chapter ${ch.n}`;
  document.getElementById('ch-info-title').textContent = title;
  document.getElementById('ch-info-sub').textContent = altTitle;
  document.getElementById('ch-info-meta').textContent = isHi
    ? `${ch.total} श्लोक · इस ऐप में ${inApp} चयनित`
    : `${ch.total} verses · ${inApp} in this app`;
  document.getElementById('ch-info-body').innerHTML = annotateGlossary(body, infoCardLang);
}

let infoAnchor = null;

function showChapterInfo(n, anchor) {
  clearTimeout(infoHideTimer);
  infoActiveCh = n;
  infoAnchor = anchor;
  renderChapterInfoContent(n);

  const card = document.getElementById('ch-info-card');
  card.hidden = false;
  card.classList.add('show');
  requestAnimationFrame(() => {
    repositionChapterInfoCard();
    requestAnimationFrame(repositionChapterInfoCard);
  });
}

function repositionChapterInfoCard() {
  const card = document.getElementById('ch-info-card');
  if (!card || card.hidden || !infoAnchor) return;

  const rect = infoAnchor.getBoundingClientRect();
  const gap = 14;
  const pad = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const fromSidebar = infoAnchor.classList.contains('sb-ch-toggle');
  const mobileSidebar = fromSidebar && !isDesktopNav();

  card.style.width = '';
  card.style.maxWidth = '';

  let left;
  let top;

  if (mobileSidebar) {
    const sidebar = document.getElementById('sidebar');
    const sidebarRect = sidebar?.getBoundingClientRect();
    const chapterBlock = infoAnchor.closest('.sb-chapter');
    const blockRect = chapterBlock?.getBoundingClientRect() || rect;
    const innerW = (sidebarRect?.width ?? vw) - pad * 2;

    card.style.width = `${Math.min(320, innerW)}px`;
    left = (sidebarRect?.left ?? pad) + pad;

    if (chapterBlock?.classList.contains('open')) {
      top = blockRect.bottom + gap;
    } else {
      top = rect.bottom + gap;
    }

    if (top + card.offsetHeight > vh - pad) {
      top = rect.top - card.offsetHeight - gap;
    }
  } else if (fromSidebar) {
    left = rect.right + gap;
    top = rect.top;
    if (left + card.offsetWidth > vw - pad) left = rect.left - card.offsetWidth - gap;
  } else {
    left = rect.left + rect.width / 2 - card.offsetWidth / 2;
    top = rect.bottom + gap;
    if (top + card.offsetHeight > vh - pad) top = rect.top - card.offsetHeight - gap;
  }

  const cardW = card.offsetWidth;
  const cardH = card.offsetHeight;
  left = Math.max(pad, Math.min(left, vw - cardW - pad));
  top = Math.max(pad, Math.min(top, vh - cardH - pad));

  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
}

function scheduleHideChapterInfo() {
  clearTimeout(infoHideTimer);
  infoHideTimer = setTimeout(hideChapterInfo, 120);
}

function hideChapterInfo() {
  const card = document.getElementById('ch-info-card');
  if (!card) return;
  card.classList.remove('show');
  card.hidden = true;
  infoActiveCh = null;
  infoAnchor = null;
}

// ─────────────────────────────────────────────
// CHAPTER GRID
// ─────────────────────────────────────────────
function buildGrid() {
  const grid = document.getElementById('ch-grid');
  CHAPTERS.forEach(ch => {
    const d = document.createElement('div');
    d.className = 'ch-card';
    d.id = 'ch-' + ch.n;
    d.tabIndex = 0;
    d.innerHTML = `<span class="ch-num">Ch. ${ch.n}</span><span class="ch-hi">${ch.hi}</span><span class="ch-en">${ch.en}</span>`;
    d.onclick = () => selectChapter(ch.n);
    bindChapterInfo(d, ch.n);
    grid.appendChild(d);
  });
}

function selectChapter(n) {
  document.querySelectorAll('.ch-card').forEach(c => c.classList.remove('on'));
  document.getElementById('ch-' + n).classList.add('on');

  document.querySelectorAll('.sb-chapter').forEach(block => {
    block.classList.toggle('open', Number(block.dataset.ch) === n);
  });

  const row = document.getElementById('verse-row');
  row.innerHTML = '';
  const available = versesForChapter(n);
  if (!available.length) {
    row.innerHTML = '<span style="font-size:0.8rem;color:var(--text-3);font-style:italic">More verses coming soon</span>';
  } else {
    available.forEach(k => {
      const chip = document.createElement('button');
      chip.className = 'vchip' + (k === currentKey ? ' on' : '');
      chip.dataset.key = k;
      chip.textContent = VERSES[k].ch + '.' + VERSES[k].v;
      chip.onclick = () => goToVerse(k, { scrollMain: false });
      row.appendChild(chip);
    });
  }
  row.classList.add('on');
  row.scrollIntoView({behavior:'smooth', block:'nearest'});
}

// ─────────────────────────────────────────────
// COPY
// ─────────────────────────────────────────────
function doCopy() {
  const vd = VERSES[currentKey];
  const t = `${vd.skt}\n\n${vd.hi}\n\n"${vd.en}"\n\n— Bhagavad Gita ${vd.ch}.${vd.v}`;
  navigator.clipboard.writeText(t).then(() => toast('Copied to clipboard'));
}

// ─────────────────────────────────────────────
// SHARE
// ─────────────────────────────────────────────
function doShare() {
  const vd = VERSES[currentKey];
  const t = `${vd.skt}\n\n"${vd.en}"\n— Gita ${vd.ch}.${vd.v}`;
  if (navigator.share) navigator.share({title:'Daily Gita', text:t});
  else { navigator.clipboard.writeText(t); toast('Copied for sharing'); }
}

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('on');
  setTimeout(() => el.classList.remove('on'), 2600);
}

// ─────────────────────────────────────────────
// DOWNLOAD — SVG → PNG (1:1 square or 9:16 story)
// ─────────────────────────────────────────────
const EXPORT_LAYOUTS = {
  square: {
    w: 1200, h: 1200,
    padX: 80, padTop: 72, padBot: 72,
    refSpace: 40, borderInset: 20, cornerLen: 38,
    minScale: 0.55, maxScale: 1, purMax: 3,
    fillSpace: false, wrapW: 0.92,
    tag: '1x1',
  },
  story: {
    w: 1080, h: 1920,
    padX: 56, padTop: 120, padBot: 140,
    refSpace: 40, borderInset: 28, cornerLen: 40,
    minScale: 0.45, maxScale: 2.4, purMax: 4,
    fillSpace: true, wrapW: 0.98,
    tag: '9x16',
  },
};

function doDownload(aspect = 'square') {
  const layout = EXPORT_LAYOUTS[aspect] || EXPORT_LAYOUTS.square;
  const W = layout.w;
  const H = layout.h;
  const PAD_X = layout.padX;
  const PAD_TOP = layout.padTop;
  const PAD_BOT = layout.padBot;
  const B = layout.borderInset;
  const CL = B + layout.cornerLen;

  const vd = VERSES[currentKey];
  const ch = CHAPTERS[vd.ch - 1];
  const palette = EXPORT_THEMES[getTheme()] || EXPORT_THEMES.dark;
  const theme = getTheme();
  toast('Preparing…');

  function esc(s) {
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function wrapPx(text, maxPx, fontSpec) {
    const mc = document.createElement('canvas').getContext('2d');
    mc.font = fontSpec;
    const words = text.split(' ');
    const lines = []; let cur = '';
    for (const w of words) {
      const t = cur ? cur + ' ' + w : w;
      if (mc.measureText(t).width > maxPx && cur) { lines.push(cur); cur = w; }
      else cur = t;
    }
    if (cur) lines.push(cur);
    return lines;
  }

  const CW_INNER = W - PAD_X * 2;
  const fs = W / 1200;
  const wrapMain = layout.wrapW ?? 0.92;
  const wrapSkt = Math.min(wrapMain + 0.03, 0.99);
  const wrapPur = Math.min(wrapMain + 0.02, 0.98);

  const isBoth = imgFmt === 'both';
  const isHindi = imgFmt === 'hindi' || isBoth;
  const isEn    = imgFmt === 'english' || isBoth;

  let SKT_SIZE  = Math.round(42 * fs);
  let MAIN_SIZE = Math.round(36 * fs);
  let PUR_SIZE  = Math.round(26 * fs);
  let LBL_SIZE  = Math.round(16 * fs);
  let REF_SIZE  = Math.round(18 * fs);
  const SKT_LH_RATIO  = 1.65;
  const MAIN_LH_RATIO = 1.72;
  const PUR_LH_RATIO  = 1.65;
  const LBL_H  = Math.round(22 * fs);
  const RULE_H = Math.round(48 * fs);
  const SEC_GAP = Math.round(20 * fs);

  function buildAtScale(scale) {
    const sktSz  = Math.max(12, Math.round(SKT_SIZE  * scale));
    const mainSz = Math.max(12, Math.round(MAIN_SIZE * scale));
    const purSz  = Math.max(10, Math.round(PUR_SIZE  * scale));
    const sktLH  = sktSz  * SKT_LH_RATIO;
    const mainLH = mainSz * MAIN_LH_RATIO;
    const purLH  = purSz  * PUR_LH_RATIO;
    const lblH   = Math.max(14, Math.round(LBL_H * scale));
    const ruleH  = Math.max(28, Math.round(RULE_H * scale));
    const secGap = Math.max(8, Math.round(SEC_GAP * scale));
    const lblSize = Math.max(10, Math.round(LBL_SIZE * scale));

    const sktLines = vd.skt.split('\n').flatMap(l =>
      wrapPx(l, CW_INNER * wrapSkt, `${sktSz}px Georgia,serif`)
    );
    const hiLines = isHindi
      ? wrapPx(vd.hi, CW_INNER * wrapMain, `${mainSz}px Georgia,serif`)
      : [];
    const enLines = isEn
      ? wrapPx(vd.en, CW_INNER * (wrapMain - 0.04), `italic ${mainSz}px Georgia,serif`)
      : [];
    const purHiLines = isHindi
      ? wrapPx(vd.purHi, CW_INNER * wrapPur, `italic ${purSz}px Georgia,serif`).slice(0, layout.purMax)
      : [];
    const purEnLines = isEn
      ? wrapPx(vd.purEn, CW_INNER * wrapPur, `italic ${purSz}px Georgia,serif`).slice(0, layout.purMax)
      : [];

    let height = 0;
    height += sktLines.length * sktLH + secGap;
    height += ruleH;
    if (isHindi) {
      height += hiLines.length * mainLH + secGap;
      height += lblH + 4 + purHiLines.length * purLH + secGap;
    }
    if (isBoth) height += ruleH;
    if (isEn) {
      height += enLines.length * mainLH + secGap;
      height += lblH + 4 + purEnLines.length * purLH + secGap;
    }

    return {
      sktSz, mainSz, purSz, sktLH, mainLH, purLH,
      lblH, ruleH, secGap, lblSize,
      sktLines, hiLines, enLines, purHiLines, purEnLines,
      height,
    };
  }

  const available = H - PAD_TOP - PAD_BOT - layout.refSpace;
  const maxScale = layout.maxScale ?? 1;
  let bestScale = 1;

  if (layout.fillSpace) {
    let lo = layout.minScale, hi = maxScale;
    for (let i = 0; i < 48; i++) {
      const mid = (lo + hi) / 2;
      if (buildAtScale(mid).height <= available) {
        bestScale = mid;
        lo = mid;
      } else {
        hi = mid;
      }
    }
  } else {
    let scale = 1;
    while (buildAtScale(scale).height > available && scale > layout.minScale) {
      scale -= 0.02;
    }
    bestScale = scale;
  }

  const fit = buildAtScale(bestScale);
  const {
    sktSz, mainSz, purSz, sktLH, mainLH, purLH,
    lblH, ruleH, secGap, lblSize,
    sktLines, hiLines, enLines, purHiLines, purEnLines,
  } = fit;

  const slack = Math.max(0, available - fit.height);
  const startY = PAD_TOP + layout.refSpace + slack * 0.5;

  let els = '';
  let cy = startY;

  function rule(y) {
    const cx = W / 2, x1 = PAD_X + 30, x2 = W - PAD_X - 30;
    return `
      <line x1="${x1}" y1="${y}" x2="${cx-12}" y2="${y}"
        stroke="${palette.gold}" stroke-width="0.8" stroke-opacity="${palette.ruleOp}"/>
      <rect x="${cx-7}" y="${y-7}" width="14" height="14" rx="1"
        fill="${palette.gold}" opacity="${palette.ruleDiamondOp}" transform="rotate(45,${cx},${y})"/>
      <line x1="${cx+12}" y1="${y}" x2="${x2}" y2="${y}"
        stroke="${palette.gold}" stroke-width="0.8" stroke-opacity="${palette.ruleOp}"/>`;
  }

  function textBlock(lines, y, size, lh, fill, anchor, x, style='normal', weight='normal', opacity=1) {
    return lines.map((line, i) => {
      const ty = y + i * lh + size * 0.82;
      const op = opacity < 1 ? ` opacity="${opacity}"` : '';
      return `<text x="${x}" y="${ty}" text-anchor="${anchor}"
        font-size="${size}" fill="${fill}"${op}
        font-family="Georgia,serif"
        font-style="${style}" font-weight="${weight}">${esc(line)}</text>`;
    }).join('\n');
  }

  const refLabel = imgFmt === 'hindi'
    ? `${ch.hi} · ${vd.ch}.${vd.v}`
    : imgFmt === 'english'
    ? `Bhagavad Gita · ${vd.ch}.${vd.v} · ${ch.en}`
    : `Bhagavad Gita · ${vd.ch}.${vd.v}`;
  els += `<text x="${W/2}" y="${PAD_TOP + REF_SIZE}" text-anchor="middle"
    font-size="${REF_SIZE}" fill="${palette.gold}" opacity="${palette.refOp}"
    font-family="Georgia,serif" font-style="italic" letter-spacing="3">${esc(refLabel)}</text>`;

  els += textBlock(sktLines, cy, sktSz, sktLH, palette.skt, 'middle', W/2);
  cy += sktLines.length * sktLH + secGap;

  cy += ruleH * 0.35;
  els += rule(cy);
  cy += ruleH * 0.65;

  if (isHindi) {
    els += textBlock(hiLines, cy, mainSz, mainLH, palette.text, 'middle', W/2);
    cy += hiLines.length * mainLH + secGap;

    els += `<text x="${PAD_X}" y="${cy + lblH - 4}" text-anchor="start"
      font-size="${lblSize}" fill="${palette.gold}" opacity="${palette.labelOp}"
      font-family="Georgia,serif" letter-spacing="3">${esc('TATPARYA')}</text>`;
    cy += lblH + 4;
    els += textBlock(purHiLines, cy, purSz, purLH, palette.text, 'middle', W/2, 'italic', 'normal', palette.purOp);
    cy += purHiLines.length * purLH + secGap;
  }

  if (isBoth) {
    cy += ruleH * 0.35;
    els += rule(cy);
    cy += ruleH * 0.65;
  }

  if (isEn) {
    if (!isBoth) {
      els += `<text x="${PAD_X - 10}" y="${cy + mainSz * 1.1}" text-anchor="start"
        font-size="${mainSz * 2.4}" fill="${palette.gold}" opacity="${palette.quoteOp}"
        font-family="Georgia,serif">&#8220;</text>`;
    }
    els += textBlock(enLines, cy, mainSz, mainLH, palette.text, 'middle', W/2, 'italic');
    cy += enLines.length * mainLH + secGap;

    els += `<text x="${PAD_X}" y="${cy + lblH - 4}" text-anchor="start"
      font-size="${lblSize}" fill="${palette.gold}" opacity="${palette.labelOp}"
      font-family="Georgia,serif" letter-spacing="3">PURPORT</text>`;
    cy += lblH + 4;
    els += textBlock(purEnLines, cy, purSz, purLH, palette.text, 'middle', W/2, 'italic', 'normal', palette.purOp);
  }

  const svgSrc = `<svg xmlns="http://www.w3.org/2000/svg"
    width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="0.15" y2="1">
    <stop offset="0%" stop-color="${palette.bgTop}"/>
    <stop offset="100%" stop-color="${palette.bgBottom}"/>
  </linearGradient>
  <radialGradient id="g1" cx="20%" cy="18%" r="60%">
    <stop offset="0%" stop-color="${palette.glowGold}" stop-opacity="${palette.glowGoldOp}"/>
    <stop offset="100%" stop-color="${palette.glowGold}" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="g2" cx="80%" cy="82%" r="55%">
    <stop offset="0%" stop-color="${palette.glowWarm}" stop-opacity="${palette.glowWarmOp}"/>
    <stop offset="100%" stop-color="${palette.glowWarm}" stop-opacity="0"/>
  </radialGradient>
</defs>

<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect width="${W}" height="${H}" fill="url(#g1)"/>
<rect width="${W}" height="${H}" fill="url(#g2)"/>

<rect x="${B}" y="${B}" width="${W-B*2}" height="${H-B*2}" rx="3"
  fill="none" stroke="${palette.gold}" stroke-width="0.6" stroke-opacity="${palette.borderOp}"/>

<line x1="${B}" y1="${B}" x2="${CL}" y2="${B}" stroke="${palette.gold}" stroke-width="1.8" stroke-opacity="${palette.cornerOp}" stroke-linecap="round"/>
<line x1="${B}" y1="${B}" x2="${B}" y2="${CL}" stroke="${palette.gold}" stroke-width="1.8" stroke-opacity="${palette.cornerOp}" stroke-linecap="round"/>
<line x1="${W-B}" y1="${B}" x2="${W-CL}" y2="${B}" stroke="${palette.gold}" stroke-width="1.8" stroke-opacity="${palette.cornerOp}" stroke-linecap="round"/>
<line x1="${W-B}" y1="${B}" x2="${W-B}" y2="${CL}" stroke="${palette.gold}" stroke-width="1.8" stroke-opacity="${palette.cornerOp}" stroke-linecap="round"/>
<line x1="${B}" y1="${H-B}" x2="${CL}" y2="${H-B}" stroke="${palette.gold}" stroke-width="1.8" stroke-opacity="${palette.cornerOp}" stroke-linecap="round"/>
<line x1="${B}" y1="${H-B}" x2="${B}" y2="${H-CL}" stroke="${palette.gold}" stroke-width="1.8" stroke-opacity="${palette.cornerOp}" stroke-linecap="round"/>
<line x1="${W-B}" y1="${H-B}" x2="${W-CL}" y2="${H-B}" stroke="${palette.gold}" stroke-width="1.8" stroke-opacity="${palette.cornerOp}" stroke-linecap="round"/>
<line x1="${W-B}" y1="${H-B}" x2="${W-B}" y2="${H-CL}" stroke="${palette.gold}" stroke-width="1.8" stroke-opacity="${palette.cornerOp}" stroke-linecap="round"/>

${els}
</svg>`;

  const b64 = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgSrc)));
  const canvas = document.getElementById('qcanvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = () => {
    try {
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(img, 0, 0, W, H);
      const link = document.createElement('a');
      link.download = `gita-${currentKey}-${imgFmt}-${theme}-${layout.tag}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast('Downloaded ✓');
    } catch(e) {
      svgFallback(svgSrc, imgFmt, theme, layout.tag);
    }
  };
  img.onerror = () => svgFallback(svgSrc, imgFmt, theme, layout.tag);
  img.src = b64;
}

function svgFallback(svgSrc, fmt, theme, aspectTag) {
  const blob = new Blob([svgSrc], {type:'image/svg+xml'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = `gita-${currentKey}-${fmt}-${theme || getTheme()}-${aspectTag || '1x1'}.svg`;
  a.href = url;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('Saved as SVG');
}