const liveUrl = 'https://marziehnail-atelier.dk/da/';

export const metadata = {
  title: 'Marzieh Nail Atelier case | Romaric Clementi',
  description: 'Website-strategi, struktur og produktion for Marzieh Nail Atelier, et live tosproget website for et selvstændigt negleatelier i Valby.',
  alternates: {
    canonical: '/da/arbejde/marzieh-nail-atelier/',
    languages: { en: '/work/marzieh-nail-atelier/', da: '/da/arbejde/marzieh-nail-atelier/' },
  },
  openGraph: {
    title: 'Marzieh Nail Atelier case | Romaric Clementi',
    description: 'Fra spredt virksomhedsinformation til en tydelig tosproget bookingrejse.',
    type: 'article',
    images: [{ url: '/assets/marzieh-desktop-proof-clean.webp', alt: 'Marzieh Nail Atelier website-interface' }],
  },
};

const decisions = [
  ['Gør tilbuddet tydeligt', 'Saml services og priser omkring de spørgsmål, kunden skal have svar på før booking.'],
  ['Skab tillid før handling', 'Placer arbejdseksempler, politikker, besøgsinformation og praktiske forventninger før bookingbeslutningen.'],
  ['Hold sprogene på linje', 'Giv danske og engelske besøgende samme service-, politik- og bookinglogik.'],
  ['Bevar ejerens kontrol', 'Gør virksomhedsoplysninger, bookinglinks og politikker synlige og enkle at opdatere.'],
];

const evidence = [
  ['Informationsarkitektur', 'Forside, services, arbejde, brudeside, FAQ, politikker, privatliv, besøg og bookingveje'],
  ['Responsiv QA', 'Navigation, kort, screenshots, trykflader, lange labels og bookinghandlinger'],
  ['Produktionskontrol', 'Links, metadata, forståelse for strukturerede data, lokale assets og release-verifikation'],
  ['Overdragelse', 'Versionsstyret kildepakke, deploy-noter, ejerbeslutninger og tydelige næste skridt'],
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
    description: 'Tosproget website for et selvstændigt negleatelier med service-, booking-, tillids- og mobil-QA-arbejde.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />
      <header className="bar case-bar"><div className="wrap bar__in"><a className="brand" href="/da/#work" aria-label="Tilbage til Romaric Clementis portfolio"><b>RC</b><span>Romaric Clementi</span></a><nav className="case-nav" aria-label="Case-navigation"><a href="/da/#work">← Tilbage til portfolio</a><span className="lang-switch" role="group" aria-label="Sprogvalg"><a href="/work/marzieh-nail-atelier/">EN</a><span aria-hidden="true">/</span><a aria-current="page" href="/da/arbejde/marzieh-nail-atelier/">DA</a></span><a className="btn case-live-cta" href={liveUrl} target="_blank" rel="noopener noreferrer"><span className="case-live-cta__desktop">Besøg website ↗</span><span className="case-live-cta__mobile">Website ↗</span></a></nav></div></header>

      <main className="case-page case-page--editorial">
        <section className="case-hero case-hero--editorial"><div className="wrap"><nav className="case-breadcrumb" aria-label="Brødkrummer"><a href="/da/">Portfolio</a><span>/</span><strong>Marzieh Nail Atelier</strong></nav><div className="case-title-block"><p className="mono">Case 01</p><h1>Marzieh Nail Atelier</h1><p className="case-subtitle">Website-strategi, struktur og produktion for et selvstændigt negleatelier i Valby.</p><p className="case-hero__lede">Jeg samlede spredt information om services, priser, politikker og booking i en tosproget kunderejse, der er tydelig på mobil og praktisk for ejeren at vedligeholde.</p><div className="case-hero__actions"><a className="btn" href="#project">Se projektdetaljer</a><a className="text-link" href={liveUrl} target="_blank" rel="noopener noreferrer">Besøg live website ↗</a></div></div>

        <div className="project-glance" aria-label="Projektet kort fortalt"><div><span>Kontekst</span><p>Et reelt implementeret projekt for min kones selvstændige virksomhed; ikke en betalt ekstern kundeopgave.</p></div><div><span>Mit ansvar</span><p>Retning, informationsarkitektur, indholdsbeslutninger, implementeringsreview, responsiv QA, deployment og overdragelse.</p></div><div><span>Levering</span><p>Live dansk og engelsk website med service-, booking-, tillids-, politik- og besøgsruter.</p></div></div>

        <figure className="case-cover"><img className="case-transition-image" src="/assets/marzieh-desktop-proof-clean.webp" width="1600" height="900" fetchPriority="high" decoding="async" alt="Aktuelt Marzieh Nail Atelier-interface-preview med indhold og billedmateriale fra live-sitet" /><figcaption>Aktuelt interface-preview med indhold og billedmateriale fra live-sitet · danske og engelske ruter</figcaption></figure></div></section>

        <section id="project" className="case-section"><div className="wrap case-section__grid"><div className="case-section__heading"><p className="mono">01 / Kontekst</p><h2>En stærk service med spredt kundeinformation.</h2></div><div className="case-copy"><p>Atelieret skulle gøre forskelle mellem services, priser, tidsforbrug, nail-art-muligheder, politikker, placering og booking lettere at forstå. Ejeren havde også brug for én pålidelig kilde til den information, der vises gennem websitet og bookingrejsen.</p><p>Udfordringen var at skabe en rolig premium-oplevelse uden at skjule de praktiske detaljer, mennesker har brug for før en aftale.</p></div></div></section>

        <section className="case-section case-section--role"><div className="wrap case-section__grid"><div className="case-section__heading"><p className="mono">02 / Mit bidrag</p><h2>Fra løst materiale til et fungerende website og en overdragelse.</h2></div><div className="case-copy"><ul className="case-contribution-list"><li>Definerede projektretning, sidestruktur og kunderejse.</li><li>Organiserede services, priser, booking, politikker og lokal information.</li><li>Gennemgik og reviderede indhold og implementeringsbeslutninger.</li><li>Testede navigation, responsiv adfærd, links, labels og bookinghandlinger.</li><li>Forberedte produktionsreleases, deploy-noter og ejeroverdragelse.</li></ul></div></div></section>

        <section className="case-section case-section--dark"><div className="wrap"><div className="case-section__heading case-section__heading--wide"><p className="mono">03 / Vigtige beslutninger</p><h2>Fire valg formede kunderejsen.</h2></div><div className="decision-grid">{decisions.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="case-section case-section--screens"><div className="wrap"><div className="case-section__heading case-section__heading--wide"><p className="mono">04 / Interface</p><h2>Skærmene følger de spørgsmål, kunderne stiller før booking.</h2></div><div className="case-gallery-editorial"><figure className="case-shot case-shot--large"><img src="/assets/marzieh-services-current.webp" width="1520" height="1040" loading="lazy" decoding="async" alt="Marzieh Nail Atelier service- og prisinterface" /><figcaption><span>Services og priser</span>Gør tilbuddet tydeligt før bookingbeslutningen.</figcaption></figure><figure className="case-shot"><img src="/assets/marzieh-work-current.webp" width="1520" height="1040" loading="lazy" decoding="async" alt="Marzieh Nail Atelier udvalgt arbejde interface-preview" /><figcaption><span>Arbejde og tillid</span>Vis kvaliteten og stilen kunden kan forvente.</figcaption></figure><figure className="case-shot"><img src="/assets/marzieh-booking-current.webp" width="1520" height="1040" loading="lazy" decoding="async" alt="Marzieh Nail Atelier booking- og besøgsinterface" /><figcaption><span>Booking og besøg</span>Gør næste skridt og praktiske detaljer lette at finde.</figcaption></figure></div></div></section>

        <section className="case-section case-section--production"><div className="wrap"><div className="case-section__heading case-section__heading--wide"><p className="mono">05 / Produktion og overdragelse</p><h2>Arbejdet bag de synlige sider.</h2></div><div className="case-evidence-board">{evidence.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="production-disclosure"><h3>AI-assisteret produktion</h3><p>Claude, ChatGPT og andre AI-værktøjer understøttede research, udkast, kodehjælp og sammenligning. Jeg definerede brief og retning, udvalgte og reviderede output, testede implementeringen, traf de endelige beslutninger og havde ansvaret for deployment og overdragelse.</p></div></div></section>

        <section className="case-outcome case-outcome--editorial"><div className="wrap case-outcome__grid"><div><p className="mono">Det kan jeg bidrage med</p><h2>Tydeligere struktur, omhyggelig produktion og en overdragelse, mennesker kan bruge.</h2></div><div><p>Projektet viser, hvordan jeg arbejder med ufuldstændigt virksomhedsmateriale: identificerer beslutningerne, organiserer kunderejsen, leder produktionsprocessen, tester resultatet og efterlader ejeren med et tydeligere system.</p><div className="case-outcome__actions"><a className="btn" href={liveUrl} target="_blank" rel="noopener noreferrer">Besøg live website ↗</a><a className="btn btn--ghost" href="/da/#contact">Kontakt mig</a></div></div></div></section>
      </main>

      <footer><div className="wrap foot"><div className="mark"><b>RC</b><span>Uklart menneskeligt og forretningsmæssigt behov → klart digitalt system.</span></div><div className="fine">Marzieh Nail Atelier case · Romaric Clementi</div></div></footer>
    </>
  );
}
