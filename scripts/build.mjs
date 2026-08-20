import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');
const publicDir = path.join(root, 'public');
const dist = path.join(root, 'dist');

const readJSON = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const credits = readJSON('src/data/credits.json');
const recognition = readJSON('src/data/recognition.json');
const site = readJSON('src/data/site.json');

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const attr = (value = '') => esc(value).replaceAll("'", '&#39;');
const roleLabel = (roles) => roles.join(' / ');
const roleTags = (roles) => {
  const tags = [];
  for (const role of roles) {
    const r = role.toLowerCase();
    if (r.includes('director')) tags.push('director');
    if (r === 'dop' || r.includes('cinemat')) tags.push('dop');
    if (r.includes('producer')) tags.push('producer');
    if (r.includes('editor')) tags.push('editor');
  }
  return [...new Set(tags)];
};

const nav = (current, dark = false) => `
<header class="site-header">
  <a class="site-name" href="/" ${current === 'home' ? 'aria-current="page"' : ''}>Bryan Boyd</a>
  <nav class="site-nav" aria-label="Primary navigation">
    <a href="/work/" ${current === 'work' ? 'aria-current="page"' : ''}>Work</a>
    <a href="/endless-coronet/" ${current === 'coronet' ? 'aria-current="page"' : ''}>Coronet</a>
    <a href="/index/" ${current === 'index' ? 'aria-current="page"' : ''}>Index</a>
    <a href="/about/" ${current === 'about' ? 'aria-current="page"' : ''}>About</a>
    <a href="/documents/bryan-boyd-cv-2026.pdf" target="_blank" rel="noopener">CV ↗</a>
  </nav>
</header>`;

const footer = (dark = false) => `
<footer class="site-footer">
  <div class="footer-name">Bryan Boyd</div>
  <div class="footer-location">Indianapolis, Indiana</div>
  <div class="footer-contact">
    <a href="mailto:${site.email}">Email</a>
    <a href="/documents/bryan-boyd-cv-2026.pdf" target="_blank" rel="noopener">Full CV ↗</a>
  </div>
</footer>`;

function layout({ title, description = site.description, current, body, theme = 'light', og = '/images/reel/reel-48.jpg', pathName = '/' }) {
  const canonical = new URL(pathName, site.domain).toString();
  const ogUrl = new URL(og, site.domain).toString();
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${attr(description)}">
  <link rel="canonical" href="${attr(canonical)}">
  <meta name="theme-color" content="${theme === 'dark' ? '#050505' : '#f4f2ed'}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${attr(title)}">
  <meta property="og:description" content="${attr(description)}">
  <meta property="og:url" content="${attr(canonical)}">
  <meta property="og:image" content="${attr(ogUrl)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${attr(title)}">
  <meta name="twitter:description" content="${attr(description)}">
  <meta name="twitter:image" content="${attr(ogUrl)}">
  <link rel="stylesheet" href="/styles/site.css">
  <noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>
</head>
<body data-theme="${theme}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${nav(current, theme === 'dark')}
  <main id="main">${body}</main>
  ${footer(theme === 'dark')}
  <script src="/scripts/site.js" defer></script>
</body>
</html>`;
}

const selectedTitles = [
  'The Waiting Game',
  'Pioneering Women of Sports: NBC Sports’ Big Ten Coverage',
  'Snapchat: Reunited',
  'Ransomware Is On The Rise',
  'Orgasm Inc: The Story of OneTaste',
  'D.B. Cooper: Where Are You?!',
  'Microsoft Quantum for Government',
  'Google Search Film 2020'
];
const selected = selectedTitles.map((title) => credits.find((c) => c.title === title)).filter(Boolean);

const creditRowsHome = selected.map((c) => `
  <div class="credit-item reveal">
    <div class="credit-title">${esc(c.title)}</div>
    <div class="credit-role">${esc(roleLabel(c.roles))}</div>
    <div class="credit-client">${esc(c.client)}</div>
  </div>`).join('');

const reelFrames = ['/images/reel/reel-8.jpg','/images/reel/reel-28.jpg','/images/reel/reel-48.jpg','/images/reel/reel-68.jpg','/images/reel/reel-88.jpg','/images/reel/reel-108.jpg','/images/reel/reel-128.jpg'];

const reelDialog = `
<dialog class="reel-dialog" id="reel-dialog" aria-label="Bryan Boyd reel">
  <div class="reel-dialog-inner">
    <button class="dialog-close" type="button" data-reel-close aria-label="Close reel">Close ×</button>
    <video controls playsinline preload="none" poster="/images/reel/reel-48.jpg" aria-label="Bryan Boyd reel"></video>
  </div>
</dialog>`;

const home = layout({
  title: 'Bryan Boyd — Film, Strategy & Art',
  current: 'home',
  pathName: '/',
  body: `
<section class="hero">
  <div class="hero-title">
    <h1 class="display"><span>Bryan</span><span class="line-two">Boyd</span></h1>
  </div>
  <div class="hero-foot">
    <div class="practice meta">Film / Strategy / Art</div>
    <div class="location meta">Indianapolis, Indiana</div>
    <div class="down meta" aria-hidden="true">↓</div>
  </div>
</section>

<div class="page-shell">
  <section class="section" id="reel">
    <div class="reel-feature-grid">
      <div class="reel-copy reveal">
        <div class="eyebrow">Moving image</div>
        <h2 class="h2">Reel</h2>
        <p class="body-large">Documentary, television, commercial and independent work. One reel, on site.</p>
        <a class="text-link" href="/work/">Work <span class="arrow">→</span></a>
      </div>
      <div class="reel-visual reveal">
        <button class="reel-trigger" type="button" data-reel-open data-reel-scrub data-frames="${reelFrames.join(',')}" aria-label="Play Bryan Boyd reel">
          <img src="/images/reel/reel-48.jpg" width="1600" height="844" alt="Frame from Bryan Boyd's filmmaking reel">
        </button>
        <p class="scrub-note">Move across the frame to scan the reel · click to watch</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="eyebrow reveal">Selected work</div>
    <div class="credit-list">${creditRowsHome}</div>
    <a class="text-link reveal" href="/index/">Full index <span class="arrow">→</span></a>
  </section>

  <section class="section">
    <div class="coronet-feature">
      <a class="coronet-image-wrap reveal" href="/endless-coronet/" aria-label="View Endless Coronet project">
        <img src="/images/coronet/exposure-00000165.jpg" width="1024" height="1024" alt="A white milk coronet rising from deep red liquid against black, from Endless Coronet">
      </a>
      <div class="coronet-copy reveal">
        <div class="eyebrow">Generative artwork · 2026</div>
        <h2 class="h2">Endless<br>Coronet</h2>
        <p>Each exposure is generated from a visitor’s timing and a single setting between observed and imagined, then entered into a permanent uncurated archive.</p>
        <a class="text-link" href="/endless-coronet/">View project <span class="arrow">→</span></a><br>
        <a class="text-link" href="${site.coronet}" target="_blank" rel="noopener">Enter work <span class="arrow">↗</span></a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="recognition-grid">
      <div class="recognition-big reveal">
        <div class="number">5×</div>
        <div class="award-word">Emmy® Award winner</div>
      </div>
      <div class="recognition-small reveal">
        <div class="eyebrow">Selected recognition</div>
        <ul>
          <li>Heartland International Film Festival</li>
          <li>Indiana Film Journalists Association</li>
          <li>Indiana Society of Professional Journalists</li>
          <li>Indy Shorts</li>
        </ul>
        <a class="text-link" href="/about/">About <span class="arrow">→</span></a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="about-preview">
      <div class="eyebrow reveal">About</div>
      <p class="lede reveal">Bryan Boyd is an Indianapolis-based filmmaker and digital media strategist working across documentary, commercial production, advocacy media and experimental art.</p>
      <div class="about-links reveal"><a class="text-link" href="/about/">Continue <span class="arrow">→</span></a></div>
    </div>
  </section>
</div>
${reelDialog}`
});

const waitingGameAthletic = 'https://www.nytimes.com/athletic/7009946/2026/03/04/nba-aba-financial-benefits/?redirected=1';
const waitingGamePost = 'https://www.washingtonpost.com/sports/2025/10/31/aba-documentary-the-waiting-game/';

const work = layout({
  title: 'Work — Bryan Boyd', current: 'work', pathName: '/work/',
  description: 'Film, campaign strategy and independent work by Bryan Boyd.',
  body: `
<div class="page-shell">
  <section class="page-intro">
    <h1 class="h1">Work</h1>
    <div class="intro-meta meta">Film / Campaigns / Art</div>
  </section>

  <section class="section work-feature">
    <div class="work-feature-grid">
      <div class="eyebrow reveal">The Waiting Game</div>
      <div class="work-feature-copy body-large reveal">
        <p>Bryan’s work breaks through the noise. He produced the independent impact film <em>The Waiting Game</em>, featured in <a class="inline-link" href="${waitingGameAthletic}" target="_blank" rel="noopener">The Athletic (The New York Times) ↗</a> and <a class="inline-link" href="${waitingGamePost}" target="_blank" rel="noopener">The Washington Post ↗</a>. By surfacing the human cost of the strategically structured NBA/ABA “merger,” the film advocates for the dignity and fair compensation of former players, including former stars now struggling to afford basic necessities.</p>
      </div>
    </div>
  </section>

  <section class="section work-reel">
    <div class="eyebrow reveal">Reel · 02:18</div>
    <video class="reveal" controls playsinline preload="metadata" poster="/images/reel/reel-48.jpg" aria-label="Bryan Boyd reel">
      <source src="/video/bryan-boyd-reel-mobile.mp4" media="(max-width: 700px)" type="video/mp4">
      <source src="/video/bryan-boyd-reel-web.mp4" type="video/mp4">
    </video>
  </section>

  <section class="section">
    <div class="strategy-block">
      <h2 class="h2 reveal">Campaigns &amp; strategy</h2>
      <div class="body-large reveal">
        <p>Today, Bryan applies this high-stakes creative rigor as Senior Digital Media Strategist at the Indiana State Teachers Association (ISTA), Indiana’s largest labor union. He leads digital-first creative strategy across video, social, and paid distribution—developing campaigns that compete in the attention economy and elevate member voices.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="coronet-feature">
      <a class="coronet-image-wrap reveal" href="/endless-coronet/"><img src="/images/coronet/exposure-00000132.jpg" width="1024" height="1024" loading="lazy" alt="A narrow vertical milk column suspended above red liquid, from Endless Coronet"></a>
      <div class="coronet-copy reveal"><div class="eyebrow">Art / Experiments</div><h2 class="h2">Endless<br>Coronet</h2><p>A generative artwork that turns a visitor’s timing into a numbered synthetic exposure.</p><a class="text-link" href="/endless-coronet/">View project <span class="arrow">→</span></a><br><a class="text-link" href="${site.coronet}" target="_blank" rel="noopener">Enter work <span class="arrow">↗</span></a></div>
    </div>
  </section>

  <section class="section work-index-link">
    <div class="work-feature-grid">
      <div class="eyebrow reveal">Credits</div>
      <div class="reveal"><a class="text-link" href="/index/">View full index <span class="arrow">→</span></a></div>
    </div>
  </section>
</div>`
});

const wallText = `In the 1930s, Harold Edgerton used stroboscopic photography to capture a milk drop at the instant of impact, too fast for the eye to see. ENDLESS CORONET inverts the experiment. A visitor triggers a strobe on a falling droplet. The timing, and a single setting between observed and imagined, generate a photograph of an event that never took place. Each exposure is numbered and added to a permanent, uncurated archive.`;
const artistStatement = `ENDLESS CORONET is a generative artwork by Bryan Boyd that inverts Harold Edgerton's 1930s stroboscopic photography, in which a strobe timed to a falling milk drop captured an instant too fast for the eye to see. In ENDLESS CORONET, a visitor triggers a strobe on a falling droplet rendered on screen. The exact timing of that trigger, together with a single OBSERVED–IMAGINED setting, deterministically parameterizes a server-side process that generates a synthetic photograph of an event that never occurred. Where Edgerton recorded a real instant, ENDLESS CORONET produces one that has no referent. Every exposure is assigned a number and entered into a permanent, uncurated archive, regardless of its outcome.`;

const coronet = layout({
  title: 'Endless Coronet — Bryan Boyd', current: 'coronet', pathName: '/endless-coronet/', theme: 'dark',
  og: '/images/coronet/exposure-00000165.jpg',
  description: 'Endless Coronet is a generative artwork by Bryan Boyd that inverts Harold Edgerton’s stroboscopic milk-drop photography.',
  body: `
<section class="coronet-hero coronet-hero-v2">
  <div class="coronet-hero-media reveal"><img src="/images/coronet/exposure-00000132.jpg" width="1024" height="1024" alt="A thin milk column rising to a spherical form above red liquid"></div>
  <div class="coronet-hero-copy reveal">
    <div class="eyebrow">Generative artwork · 2026</div>
    <h1 class="h1">Endless<br>Coronet</h1>
    <div class="meta">Bryan Boyd</div>
    <a class="text-link" href="${site.coronet}" target="_blank" rel="noopener">Enter Endless Coronet <span class="arrow">↗</span></a>
  </div>
</section>

<div class="page-shell coronet-page">
  <section class="section">
    <div class="coronet-wall">
      <div class="eyebrow reveal">Wall text</div>
      <blockquote class="reveal">${esc(wallText)}</blockquote>
    </div>
  </section>

  <section class="section coronet-sequence-section">
    <div class="coronet-sequence-head reveal">
      <div class="eyebrow">Selected exposures</div>
      <p class="body-large">Selected exposures from the permanent, uncurated archive.</p>
    </div>
    <div class="coronet-sequence">
      <figure class="sequence-a reveal"><img src="/images/coronet/exposure-00000135.jpg" width="1024" height="1024" loading="lazy" alt="A symmetrical branching milk form rising from red liquid"><figcaption class="coronet-caption">Exposure 00000135</figcaption></figure>
      <figure class="sequence-b reveal"><img src="/images/coronet/exposure-00000164.jpg" width="1024" height="1024" loading="lazy" alt="An irregular folded milk splash over red liquid"><figcaption class="coronet-caption">Exposure 00000164</figcaption></figure>
      <figure class="sequence-c reveal"><img src="/images/coronet/exposure-00000165.jpg" width="1024" height="1024" loading="lazy" alt="A white milk coronet rising from red liquid against black"><figcaption class="coronet-caption">Exposure 00000165</figcaption></figure>
      <figure class="sequence-d reveal"><img src="/images/coronet/exposure-00000177.jpg" width="1024" height="1024" loading="lazy" alt="A web of milk filaments and droplets suspended over red liquid"><figcaption class="coronet-caption">Exposure 00000177</figcaption></figure>
    </div>
  </section>

  <section class="section">
    <div class="archive-intro">
      <div class="eyebrow reveal">The record</div>
      <p class="body-large reveal">Every exposure receives a number and remains in the archive, regardless of outcome. The record preserves the trigger timing and the parameters that produced it.</p>
    </div>
    <div class="archive-plates">
      <figure class="archive-plate archive-plate-primary reveal"><img src="/images/coronet/plate-00000214.png" width="1024" height="1776" loading="lazy" alt="Endless Coronet exposure record 00000214 with image, parameters and lab examination"><figcaption class="coronet-caption">Exposure 00000214 · archive record</figcaption></figure>
      <figure class="archive-plate reveal"><img src="/images/coronet/plate-00000215.png" width="1024" height="1797" loading="lazy" alt="Endless Coronet exposure record 00000215 with image, parameters and lab examination"><figcaption class="coronet-caption">Exposure 00000215 · archive record</figcaption></figure>
      <figure class="archive-plate reveal"><img src="/images/coronet/plate-00000218.png" width="1024" height="1776" loading="lazy" alt="Endless Coronet exposure record 00000218 with image, parameters and lab examination"><figcaption class="coronet-caption">Exposure 00000218 · archive record</figcaption></figure>
    </div>
  </section>

  <section class="section">
    <div class="artist-statement">
      <div class="eyebrow reveal">Artist statement</div>
      <div class="statement reveal">${esc(artistStatement)}</div>
    </div>
  </section>


</div>

<section class="coronet-ending">
  <div class="eyebrow reveal">Live artwork</div>
  <h2 class="h2 reveal">Endless Coronet continues with every exposure.</h2>
  <a class="text-link reveal" href="${site.coronet}" target="_blank" rel="noopener">Enter Endless Coronet <span class="arrow">↗</span></a>
  <nav class="coronet-subnav reveal" aria-label="Project navigation"><a href="/work/">← Work</a><a href="/index/">Index →</a></nav>
</section>`
});

const filterDefs = [
  ['all','All'],['director','Director'],['dop','DOP'],['producer','Producer'],['editor','Editor'],['film','Film / TV'],['commercial','Commercial'],['advocacy','Advocacy']
];
const creditIndexRows = credits.map((c) => {
  const tags = [c.category, ...roleTags(c.roles)].join(' ');
  return `<div class="index-row" data-credit-row data-tags="${attr(tags)}">
    <div class="index-project">${esc(c.title)}</div>
    <div class="index-format">${esc(c.format)}</div>
    <div class="index-role">${esc(roleLabel(c.roles))}</div>
    <div class="index-client">${esc(c.client || '—')}</div>
  </div>`;
}).join('');

const indexPage = layout({
  title: 'Index — Bryan Boyd', current: 'index', pathName: '/index/',
  description: 'A working index of Bryan Boyd’s film, television, commercial and advocacy credits.',
  body: `
<div class="page-shell">
  <section class="page-intro">
    <div class="index-head" style="grid-column:1/-1;width:100%">
      <h1 class="h1">Index</h1>
      <div class="index-count" data-index-count>${credits.length} entries</div>
    </div>
  </section>
  <section class="section" style="padding-top:0">
    <p class="body-large reveal">A compact working archive of production credits.</p>
    <div class="filters reveal" aria-label="Filter credits">
      ${filterDefs.map(([id,label]) => `<button class="filter-btn" type="button" data-filter="${id}" aria-pressed="${id === 'all'}">${label}</button>`).join('')}
    </div>
    <div class="index-table reveal">
      <div class="index-row header" aria-hidden="true"><div>Project</div><div>Format</div><div>Role</div><div>Client / Outlet</div></div>
      ${creditIndexRows}
    </div>
    <div class="index-empty" data-index-empty>No entries match this filter.</div>
    <a class="text-link reveal" href="/documents/bryan-boyd-cv-2026.pdf" target="_blank" rel="noopener">Full CV <span class="arrow">↗</span></a>
  </section>
</div>`
});

const selectedRecognition = [
  {year:'2018', name:'Emmy® Award', detail:'Winner — Nostalgia Program'},
  {year:'2017', name:'Emmy® Award', detail:'Winner — Cultural and Historical Programming'},
  {year:'2012', name:'Emmy® Awards', detail:'Winner — Best Editor; Cultural and Historical Programming'},
  {year:'2010', name:'Emmy® Award', detail:'Winner — Nostalgia Program'},
  {year:'2024', name:'Heartland International Film Festival', detail:'Audience Choice — The Waiting Game'},
  {year:'2024', name:'Indiana Film Journalists Association', detail:'Edward Johnson-Ott Hoosier Award — The Waiting Game'},
  {year:'2020', name:'Indiana Society of Professional Journalists', detail:'Best Coverage of Social Justice Issues'},
  {year:'2018', name:'Indy Shorts', detail:'Indiana Spotlight Award — When Kids Wrote the Headlines'}
];
const recRows = selectedRecognition.map(r => `<div class="rec-row"><div class="rec-year">${r.year}</div><div>${esc(r.name)}</div><div>${esc(r.detail)}</div></div>`).join('');

const about = layout({
  title: 'About — Bryan Boyd', current: 'about', pathName: '/about/', og: '/images/about/bryan-boyd-portrait.webp',
  body: `
<div class="page-shell">
  <section class="section" style="padding-top:clamp(50px,8vw,110px)">
    <div class="about-grid">
      <div class="about-copy">
        <div class="eyebrow reveal">About</div>
        <h1 class="h1 reveal">Bryan<br>Boyd</h1>
        <div class="body-large reveal">
          <p>Bryan Boyd is an Indianapolis-based filmmaker and digital media strategist whose work spans documentary film, television, commercial production, advocacy media and experimental digital art.</p>
          <p>A five-time Emmy® Award winner, Boyd has spent more than a decade directing, shooting and producing work for PBS, Netflix, NBCUniversal, The Wall Street Journal, Snap, Microsoft and A+E. His independent documentary work includes <em>The Waiting Game</em>, an impact film examining the human consequences of the NBA/ABA merger and the fight by former players for recognition and fair compensation. The film has been featured in <a class="inline-link" href="${waitingGameAthletic}" target="_blank" rel="noopener">The Athletic ↗</a> and <a class="inline-link" href="${waitingGamePost}" target="_blank" rel="noopener">The Washington Post ↗</a>.</p>
          <p>Today, Boyd serves as Senior Digital Media Strategist at the Indiana State Teachers Association, where he leads digital-first creative strategy across video, social media and paid distribution. Alongside that work, he continues to develop independent films and experimental projects, including <em>Endless Coronet</em>.</p>
          <p>Across documentary, advocacy and digital art, his work is grounded in the same idea: finding the form a story needs, making it difficult to ignore, and using attention toward something larger than itself.</p>
        </div>
        <div class="about-contact reveal">
          <a class="text-link" href="mailto:${site.email}">Email <span class="arrow">→</span></a>
          <a class="text-link" href="/documents/bryan-boyd-cv-2026.pdf" target="_blank" rel="noopener">Full CV <span class="arrow">↗</span></a>
        </div>
      </div>
      <figure class="about-portrait reveal" style="margin-top:0"><img src="/images/about/bryan-boyd-portrait.webp" width="784" height="1178" alt="Portrait of Bryan Boyd smiling with his arms crossed"></figure>
    </div>
  </section>

  <section class="section">
    <div class="eyebrow reveal">Selected recognition</div>
    <div class="recognition-list reveal">${recRows}</div>
    <a class="text-link reveal" href="/documents/bryan-boyd-cv-2026.pdf" target="_blank" rel="noopener">Complete record in the CV <span class="arrow">↗</span></a>
  </section>
</div>`
});

const notFound = layout({
  title: 'Not Found — Bryan Boyd', current: '', pathName: '/404.html',
  body: `<div class="page-shell"><section class="page-intro"><h1 class="h1">404</h1><div class="intro-meta"><p>That page isn’t here.</p><a class="text-link" href="/">Back home <span class="arrow">→</span></a></div></section></div>`
});

function write(rel, content) {
  const target = path.join(dist, rel);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(publicDir, dist, { recursive: true });
fs.mkdirSync(path.join(dist,'styles'), { recursive:true });
fs.mkdirSync(path.join(dist,'scripts'), { recursive:true });
fs.copyFileSync(path.join(src,'styles','site.css'), path.join(dist,'styles','site.css'));
fs.copyFileSync(path.join(src,'scripts','site.js'), path.join(dist,'scripts','site.js'));

write('index.html', home);
write('work/index.html', work);
write('endless-coronet/index.html', coronet);
write('index/index.html', indexPage);
write('about/index.html', about);
write('404.html', notFound);

write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${['/','/work/','/endless-coronet/','/index/','/about/'].map(p => `  <url><loc>${new URL(p,site.domain)}</loc></url>`).join('\n')}\n</urlset>\n`);
write('_headers', `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n\n/images/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/video/*\n  Cache-Control: public, max-age=604800\n\n/documents/*\n  Cache-Control: public, max-age=86400\n`);

console.log(`Built ${credits.length} credits and 5 pages into ${dist}`);
