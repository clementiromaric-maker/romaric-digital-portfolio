const operationsPortfolioUrl = 'https://romaric-operations-portfolio.clementiromaric.workers.dev/';
const liveUrl = 'https://marziehnail-atelier.dk/da/';

export const metadata = {
  title: 'Marzieh Nail Atelier case | Romaric Clementi',
  description: 'En detaljeret case om, hvordan løst service-, tillids- og bookingmateriale blev til et tosproget, mobilklart website for en lokal virksomhed.',
  alternates: {
    canonical: '/da/arbejde/marzieh-nail-atelier/',
    languages: { en: '/work/marzieh-nail-atelier/', da: '/da/arbejde/marzieh-nail-atelier/' },
  },
  openGraph: {
    title: 'Marzieh Nail Atelier case | Romaric Clementi',
    description: 'Fra løst virksomhedsmateriale til en tosproget booking- og tillidsrejse.',
    type: 'article',
    images: [{ url: '/assets/marzieh-homepage-ui-snapshot.webp', alt: 'Marzieh Nail Atelier websitegrænseflade' }],
  },
};

const decisions = [
  ['Tydeligt tilbud', 'Services og priser blev samlet omkring de spørgsmål, kunden stiller før booking.'],
  ['Tillid før handling', 'Anmeldelser, politikker og besøgsinformation står før bookingbeslutningen.'],
  ['Tosproget paritet', 'Danske og engelske sider følger samme service- og tillidslogik uden at virke mekaniske.'],
  ['Ejerkontrol', 'Bookinglinks, politikker, besøgsoplysninger og virksomhedsdata er synlige og lette at opdatere.'],
];

const evidence = [
  ['Rutekort', 'Forside, services, arbejde, FAQ, politikker, privatliv, besøg og bookingveje'],
  ['Mobil QA', 'Navigation, kort, trykflader, lange tekster og bookinghandlinger'],
  ['Tillidslag', '5,0 bedømmelse, 16 Google-anmeldelser, CVR, politikker og besøgsinformation'],
  ['Overdragelse', 'Versionsstyret kilde, byggetest, udgivelsesnoter og næste skridt'],
];

export default function MarziehCaseStudyDa() {
  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Marzieh Nail Atelier website-case',
    creator: { '@type': 'Person', name: 'Romaric Clementi' },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-digital-portfolio.clementiromaric.workers.dev'}/da/arbejde/marzieh-nail-atelier/`,
    mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-digital-portfolio.clementiromaric.workers.dev'}/da/arbejde/marzieh-nail-atelier/`,
    about: { '@type': 'WebSite', name: 'Marzieh Nail Atelier', url: liveUrl },
    inLanguage: ['da', 'en'],
    description: 'Tosproget website for en lokal virksomhed med bookingrejse, tillidsstruktur og mobil QA.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />
      <header className="bar case-bar"><div className="wrap bar__in"><a className="brand" href="/da/#work" aria-label="Tilbage til Romaric Clementis portfolio"><b>RC</b><span>Romaric Clementi</span></a><nav className="case-nav" aria-label="Case-navigation"><a href="/da/#work">← Portfolio</a><span className="lang-switch" role="group" aria-label="Sprogvalg"><a href="/work/marzieh-nail-atelier/">EN</a><span aria-hidden="true">/</span><a aria-current="page" href="/da/arbejde/marzieh-nail-atelier/">DA</a></span><a className="btn case-live-cta" href={liveUrl} target="_blank" rel="noopener noreferrer"><span className="case-live-cta__desktop">Åbn website ↗</span><span className="case-live-cta__mobile">Website ↗</span></a></nav></div></header>

      <main className="case-page">
        <section className="case-hero"><div className="wrap"><a className="case-back" href="/da/#work">← Udvalgt arbejde</a><div className="case-hero__grid"><div><p className="mono">Case 01 · Live lokal virksomhed</p><h1>Fra løst input til en rolig og troværdig bookingrejse.</h1><p className="case-hero__lede">Marzieh Nail Atelier havde brug for ét pålideligt sted for services, priser, tillid, politikker, besøgsinformation og booking.</p><div className="case-hero__actions"><a className="btn" href={liveUrl} target="_blank" rel="noopener noreferrer">Åbn live website ↗</a><a className="btn btn--ghost" href="#story">Læs casen ↓</a></div></div><div className="case-hero__stats" aria-label="Case-dokumentation"><div><b>5,0</b><span>Google-bedømmelse</span></div><div><b>16</b><span>Google-anmeldelser</span></div><div><b>DA / EN</b><span>Tosprogede sider</span></div><div><b>Live</b><span>Website i drift</span></div></div></div><div className="case-browser case-browser--hero"><div className="browser__bar"><div className="browser__dots" aria-hidden="true"><i /><i /><i /></div><span className="browser__url">marziehnail-atelier.dk</span><span className="browser__live">● Live</span></div><div className="case-browser__canvas"><img className="case-transition-image" src="/assets/marzieh-homepage-ui-snapshot.webp" width="1600" height="1050" fetchPriority="high" decoding="async" alt="Marzieh Nail Atelier forside med navigation, ydelseskort og bookingrejse" /></div></div></div></section>

        <section id="story" className="case-chapter"><div className="wrap case-chapter__grid"><div className="case-chapter__title"><span className="case-number">01</span><p className="mono">Inputtet</p><h2>En stærk ydelse med spredt kundeinformation.</h2></div><div className="case-copy"><p>Kunder skulle forstå services, priser, tidsforbrug, politikker, placering og booking. Ejeren havde samtidig brug for kontrol over den officielle kilde.</p><p>Udfordringen var et eksklusivt, roligt udtryk uden at skjule praktisk information.</p></div></div></section>

        <section className="case-chapter case-chapter--ink"><div className="wrap"><div className="case-chapter__title case-chapter__title--wide"><span className="case-number">02</span><p className="mono">Strukturen</p><h2>Fire beslutninger formede systemet.</h2></div><div className="decision-grid">{decisions.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="case-chapter case-visual-story"><div className="wrap"><div className="case-chapter__title case-chapter__title--wide"><span className="case-number">03</span><p className="mono">Det synlige system</p><h2>Rigtige skærme organiseret omkring kundens beslutning.</h2></div><div className="case-gallery-editorial"><figure className="case-shot case-shot--large"><img src="/assets/marzieh-services-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier ydelses- og prisvisning" /><figcaption><span className="mono">Tilbud</span>Ydelses- og prisklarhed</figcaption></figure><figure className="case-shot"><img src="/assets/marzieh-work-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier arbejdsgalleri" /><figcaption><span className="mono">Tryghed</span>Arbejde og visuelt bevis</figcaption></figure><figure className="case-shot"><img src="/assets/marzieh-booking-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier booking- og besøgsinterface" /><figcaption><span className="mono">Handling</span>Booking- og ankomstvej</figcaption></figure></div></div></section>

        <section className="case-chapter"><div className="wrap"><div className="case-chapter__title case-chapter__title--wide"><span className="case-number">04</span><p className="mono">Dokumentation og overdragelse</p><h2>Arbejdet bag skærmen.</h2></div><div className="case-evidence-board">{evidence.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="case-outcome"><div className="wrap case-outcome__grid"><div><p className="mono">Hvad casen viser</p><h2>Det færdige website er synligt. Den dybere værdi er den operationelle klarhed under det.</h2></div><div><p>Jeg kan omsætte løst kundemateriale til en tosproget rejse, responsiv første version, testede detaljer og en tydeligere overdragelse.</p><div className="case-outcome__actions"><a className="btn" href={liveUrl} target="_blank" rel="noopener noreferrer">Åbn live website ↗</a><a className="btn btn--ghost" href="/da/#contact">Tal om en rolle eller opgave</a></div></div></div></section>
      </main>

      <footer><div className="wrap foot"><div className="mark"><b>RC</b><span>Uklart menneskeligt og forretningsmæssigt behov → klart digitalt system.</span></div><div className="case-footer-meta"><a className="companion-foot-link" href={operationsPortfolioUrl} target="_blank" rel="noopener noreferrer">Portfolio for drift, ERP og arbejdsgange ↗</a><div className="fine">Marzieh Nail Atelier case · Romaric Clementi</div></div></div></footer>
    </>
  );
}
