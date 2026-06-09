'use client';

import { useEffect, useState } from 'react';

const liveLinks = {
  marzieh: 'https://marziehnail-atelier.dk/da/',
};

const proofSignals = [
  { value: 'Live virksomhed', label: 'Marzieh Nail Atelier i produktion' },
  { value: '3 byggede piloter', label: 'Workflow, praktikmatch og privat introduktion' },
  { value: 'Fra service til booking', label: 'Tilbud, priser, politikker, besøg og bookingvej' },
  { value: 'Flersprogede sider', label: 'DA / EN plus persisk/engelsk pilotlogik' },
  { value: 'GitHub workflow-klar', label: 'Source packages, deploy-noter, versionsspor og QA' },
  { value: 'Operationsbaggrund', label: 'ERP, leverandører, overdragelser og dokumentation' },
];

const roleFitLanes = [
  {
    label: '01',
    title: 'Website-produktion',
    text: 'Sider, service-/produktsider, CMS- og indholdsimplementering, lokal troværdighed, indholdsstruktur og mobilcheck.',
  },
  {
    label: '02',
    title: 'UX- og indholdsstruktur',
    text: 'Kunderejser, tillidssektioner, navigation, sidehierarki, CTA-logik og en klarere vej fra brief til produktion.',
  },
  {
    label: '03',
    title: 'Digitalt workflow og QA',
    text: 'GitHub-baserede arbejdsgange, linkcheck, ankercheck, deploy-noter, oprydning i kildemateriale og praktiske accepttjek.',
  },
  {
    label: '04',
    title: 'AI-assisterede første versioner',
    text: 'Strukturerede briefs, sideudkast, kildemateriale, godkendelsespunkter og brugbare prototyper med menneskelig vurdering.',
  },
];

const pilotProjects = [
  {
    eyebrow: 'Servicesystem',
    status: 'Gennemgang efter aftale',
    title: 'Clementi AI Workflow',
    role: 'SME-synlighed, workflow-audit og sikker AI-kontrol',
    flow: ['Friktion', 'Audit', 'Ejer-godkendelse'],
    text:
      'Bygget på en enkel indsigt: Mange mindre virksomheder har ikke brug for endnu et værktøj først. De har brug for tydeligere tilbud, bedre kildemateriale, ejer-godkendelse og et tryggere næste skridt.',
    systemProof: [
      'Services, priser og audit-forløb',
      'Noter, værktøjer og PDF-leverancer',
      'Én pålidelig kilde og sikre AI-grænser',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser servicearkitektur, sund AI-workflow-vurdering og konkret forretningsklarhed som service.',
  },
  {
    eyebrow: 'Aktørflow',
    status: 'Gennemgang efter aftale',
    title: 'FørsteMatch',
    role: 'Kandidat, virksomhed og aktør får klarhed før officiel overdragelse',
    flow: ['Rolle', 'Manuel vurdering', 'Brief'],
    text:
      'Bygget til situationer, hvor interessen findes, men opgaven, sproget, supervisionen, den første uge eller den officielle procesejer stadig er uklar.',
    systemProof: [
      'Rollevej og pilotproces',
      'Matchbrief, formularer og dokumenter',
      'Privatlivsgrænser uden følsomme sagsdata',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser offentlig-sektor-lignende klarhed, tydelige grænser og menneskeligt vurderet beslutningsflow.',
  },
  {
    eyebrow: 'Privatlivsfokuseret socialt system',
    status: 'Gennemgang efter aftale',
    title: 'HamdamBridge',
    role: 'Kulturelt introduktionssystem med samtykke før kontakt',
    flow: ['Signal', 'Menneskelig vurdering', 'To ja-svar'],
    text:
      'Bygget omkring det reelle behov bag kontakt: mennesker vil have kontekst, værdighed og privatliv før eksponering, ikke endnu en offentlig profilvæg.',
    systemProof: [
      'Private signaler og Bridge Notes',
      'Café Circle, spil og blød onboarding',
      'Tillidscenter, sikkerhedslogik og persisk/engelsk sprogstruktur',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser emotionel UX, samtykkearkitektur, nicheprodukt-tænkning og kulturel tillid.',
  },
];

const systemSteps = [
  {
    label: 'Kilde',
    title: 'Find det reelle materiale',
    text: 'Services, politikker, eksempler, begrænsninger, ejerbeslutninger og de spørgsmål brugerne faktisk stiller.',
  },
  {
    label: 'Struktur',
    title: 'Gør vejen læsbar',
    text: 'Sider, sidehierarki, tillidsblokke, CTA-logik, formularer og den rækkefølge mennesker har brug for.',
  },
  {
    label: 'Build',
    title: 'Lancér den første brugbare version',
    text: 'Responsive sider, lokale assets, metadata, schema-forståelse, linkcheck og mobil QA.',
  },
  {
    label: 'Overdragelse',
    title: 'Gør det lettere at drive videre',
    text: 'Versionsnoter, genbrugelige beslutninger, næste skridt og ejerkontrol efter første launch.',
  },
];

const weeks = [
  {
    label: 'Uge 01',
    title: 'Forstå og auditere',
    text: 'Lære workflowet, gennemgå én side eller kunderejse, mappe sider, formularer og mobilfriktion, og skrive en kort QA-note.',
  },
  {
    label: 'Uge 02',
    title: 'Støtte produktion',
    text: 'Hjælpe med sideopdateringer, produkt-/servicesider, CMS-struktur, GitHub-baserede overdragelsesnoter, interne links, UX-fixes og flersproget oprydning.',
  },
  {
    label: 'Uge 03',
    title: 'Teste og dokumentere',
    text: 'Mobilcheck, link- og anker-QA, formularrejser, korrektur og metadata-tjek.',
  },
  {
    label: 'Uge 04',
    title: 'Levere brugbart output',
    text: 'En konkret forbedringsliste, prototype eller implementeringspakke, overdragelsesnoter og næste skridt.',
  },
];

export default function DanishPortfolio() {
  const [viewMode, setViewMode] = useState('quick');

  useEffect(() => {
    if (['#approach', '#system', '#capabilities'].includes(window.location.hash)) {
      setViewMode('deep');
    }
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#work">
        Spring til udvalgt arbejde
      </a>

      <header className="bar">
        <div className="wrap bar__in">
          <a className="brand" href="/da/#top" aria-label="Romaric Clementi portfolio forside">
            <b>RC</b>
            <span>Romaric Clementi</span>
          </a>
          <nav className="navlinks" aria-label="Primær navigation">
            <a href="#work">Arbejde</a>
            <a href="#approach" onClick={() => setViewMode('deep')}>Tilgang</a>
            <a href="#fit">Match</a>
            <a href="#process">Første 30 dage</a>
            <span className="lang-switch" role="group" aria-label="Sprogvalg">
              <a href="/">EN</a>
              <span aria-hidden="true">/</span>
              <a aria-current="page" href="/da/">DA</a>
            </span>
            <a className="btn" href="mailto:clementiromaric@protonmail.com">
              Send mail
            </a>
          </nav>
        </div>
      </header>

      <main className={`portfolio-view is-${viewMode}`}>
        <section className="hero" id="top" aria-labelledby="hero-title-da">
          <div className="wrap hero__grid">
            <div>
              <p className="mono kicker reveal" style={{ transitionDelay: '.04s' }}>
                Portfolio for webbureauer, digitale teams og startups
              </p>
              <h1 id="hero-title-da" className="reveal" style={{ transitionDelay: '.12s' }}>
                Klar digital
                <br />
                struktur fra
                <br />
                <em>uklare</em> behov.
              </h1>
              <p className="lede reveal" style={{ transitionDelay: '.22s' }}>
                Jeg finder den reelle friktion bag uklare briefs og gør den til første brugbare systemer, teams kan teste, overdrage og forbedre.
              </p>
              <p className="sub reveal" style={{ transitionDelay: '.3s' }}>
                Website-produktion, UX-struktur, CMS- og indholdsimplementering, QA og første brugbare versioner for teams med uklart input og rigtige deadlines.
              </p>
              <div className="hero__cta reveal" style={{ transitionDelay: '.38s' }}>
                <a className="btn" href="#work">
                  Se udvalgt arbejde
                </a>
                <a className="btn btn--ghost" href="#process">
                  Se de første 30 dage
                </a>
              </div>
              <div className="view-switch reveal" style={{ transitionDelay: '.46s' }} role="group" aria-label="Vælg portfoliodetalje">
                <span className="mono">Vælg visning</span>
                <button type="button" aria-pressed={viewMode === 'quick'} onClick={() => setViewMode('quick')}>Hurtigt overblik</button>
                <button type="button" aria-pressed={viewMode === 'deep'} onClick={() => setViewMode('deep')}>Gå i dybden</button>
              </div>
            </div>

            <aside className="spec reveal" style={{ transitionDelay: '.28s' }} aria-label="Portfolio hurtige fakta">
              <div className="signal-map" aria-label="Uklart input bliver til et klart digitalt system">
                <div className="signal-map__input" aria-hidden="true">
                  <span>brief</span><span>indhold</span><span>tillid</span><span>booking</span><span>QA</span>
                </div>
                <div className="signal-map__route" aria-hidden="true"><i /></div>
                <div className="signal-map__output"><span className="mono">Output</span><b>Klart system</b><small>brugbart · vurderbart · klar til overdragelse</small></div>
              </div>
              <dl>
                <div className="row">
                  <dt className="mono">Bedst match</dt>
                  <dd>Website-produktion, UX-implementering, CMS- og indholdssupport, leveringssupport og QA</dd>
                </div>
                <div className="row">
                  <dt className="mono">Dokumentation</dt>
                  <dd>Live lokalt virksomhedssite, DA/EN-ruter, bookingvej og ejeroverdragelse</dd>
                </div>
                <div className="row">
                  <dt className="mono">Base</dt>
                  <dd>Greater Copenhagen · Tune, Denmark</dd>
                </div>
                <div className="row">
                  <dt className="mono">Sprog</dt>
                  <dd>Fransk modersmål · flydende engelsk · operationelt dansk</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="proof" className="proof-strip" aria-labelledby="proof-title-da">
          <div className="wrap">
            <div className="proof-dash reveal">
              <div className="proof-dash__head">
                <p className="mono">Dokumentationsoverblik</p>
                <h2 id="proof-title-da">Scan værdien på 20 sekunder.</h2>
                <p>Rigtigt arbejde, systemtænkning og leveringsdokumentation i ét hurtigt overblik.</p>
              </div>
              <div className="proof-grid" aria-label="Portfolio proof signals">
                {proofSignals.map((item) => (
                  <div key={item.value}>
                    <b>{item.value}</b>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">01</span>
              <h2>Udvalgt arbejde og systemer</h2>
              <p className="note">Først et live virksomhedssite, derefter brugbare systemer bygget omkring tillid, workflow og menneskelig vurdering.</p>
            </div>

            <article className="feature feature--marzieh reveal" aria-labelledby="marzieh-title-da">
              <div className="featured-case">
                <div className="featured-case__visual">
                  <div className="browser__bar">
                    <div className="browser__dots" aria-hidden="true"><i /><i /><i /></div>
                    <span className="browser__url">marziehnail-atelier.dk</span>
                    <span className="browser__live">● Live</span>
                  </div>
                  <div className="featured-case__screen">
                    <img
                      src="/assets/marzieh-homepage-ui-snapshot.webp"
                      alt="Marzieh Nail Atelier live-forside med navigation, bookinghandlinger og neglebillede"
                      className="case-transition-image"
                      width="2048"
                      height="1119"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="featured-case__supporting" aria-label="Flere visninger af website-interfacet">
                    <figure>
                      <img src="/assets/marzieh-services-ui-snapshot.webp" alt="Marzieh Nail Atelier service- og prisinterface" width="760" height="520" loading="lazy" decoding="async" />
                      <figcaption className="sr-only">Service- og prisinterface</figcaption>
                    </figure>
                    <figure>
                      <img src="/assets/marzieh-booking-ui-snapshot.webp" alt="Marzieh Nail Atelier booking- og besøgsinterface" width="760" height="520" loading="lazy" decoding="async" />
                      <figcaption className="sr-only">Booking- og besøgsinterface</figcaption>
                    </figure>
                  </div>
                </div>

                <div className="featured-case__copy">
                  <p className="mono">Udvalgt projekt</p>
                  <h3 id="marzieh-title-da">Marzieh Nail Atelier</h3>
                  <p className="featured-case__headline">Website-strategi, struktur og produktion for et selvstændigt negleatelier i Valby.</p>
                  <p className="featured-case__summary">Jeg samlede spredt information om services, priser, politikker og booking i en tosproget kunderejse, der er tydelig på mobil og praktisk for ejeren at vedligeholde.</p>
                  <div className="featured-case__facts" aria-label="Projektfakta">
                    <span><b>Live</b> website i produktion</span>
                    <span><b>DA / EN</b> tosprogede ruter</span>
                    <span><b>Fra start til slut</b> struktur og overdragelse</span>
                  </div>
                  <div className="featured-case__actions">
                    <a className="btn" href="/da/arbejde/marzieh-nail-atelier/">Læs casen</a>
                    <a className="text-link" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">Besøg live website ↗</a>
                  </div>
                </div>
              </div>

              <div className="featured-case__details">
                <article><h4>Udfordring</h4><p>Atelieret havde brug for tydeligere services, priser, politikker, besøgsinformation og en mere tryg vej til booking.</p></article>
                <article><h4>Mit bidrag</h4><p>Jeg fastlagde retning og informationsstruktur, gennemgik indhold og implementering, udførte responsiv QA, deployede sitet og forberedte overdragelsen.</p></article>
                <article><h4>Leveret</h4><p>Et live tosproget website med service- og prisruter, bookinglinks, tillidsindhold, politikker, lokal information og mobilklar navigation.</p></article>
              </div>

              <p className="featured-case__method"><b>Produktionsform:</b> AI-værktøjer understøttede research, udkast og kodehjælp; jeg havde ansvaret for brief, beslutninger, review, test, deployment og overdragelse.</p>
            </article>

            <div id="systems" className="systems-intro reveal" aria-label="Systemer bygget fra uklare behov">
              <p className="mono">Systemer jeg har bygget</p>
              <h3>Ikke kun sider. Brugbare første versioner.</h3>
              <p>Ud over enkeltstående websites bygger jeg service-rejser, intake-forløb, tillidslag, pilotlogik, dokumentationsruter og vurderingspunkter, der gør uklare ideer lettere at teste uden at overbygge.</p>
              <p className="systems-guard">Nogle pilotdetaljer er bevidst forenklet offentligt. En dybere gennemgang kan aftales.</p>
            </div>

            <div className="pilots systems-grid" aria-label="Systempiloter">
              {pilotProjects.map((project) => (
                <article className="pcard reveal" key={project.title}>
                  <div className="pcard__top"><span className="mono">{project.eyebrow}</span><span className="badge">{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p className="role">{project.role}</p>
                  <div className="flow" aria-label={`${project.title} flow`}>
                    {project.flow.map((step, index) => (
                      <span key={step}>{step}{index < project.flow.length - 1 ? <i aria-hidden="true"> → </i> : null}</span>
                    ))}
                  </div>
                  <p>{project.text}</p>
                  <ul className="system-proof-list" aria-label={`${project.title} systemproof`}>
                    {project.systemProof.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="best-for">{project.bestFor}</p>
                  {project.link ? (
                    <a className="linkclay pcard__link" href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel} →</a>
                  ) : (
                    <span className="pcard__note">{project.linkLabel}</span>
                  )}
                </article>
              ))}
            </div>

            {viewMode === 'quick' ? (
              <div className="deep-dive-gate reveal" aria-live="polite">
                <div><p className="mono">Mere bag skærmene</p><h3>Vil du se vurderingen, QA-dokumentationen og driftslogikken?</h3><p>Det hurtige overblik holder beslutningsvejen kort. Gå i dybden viser, hvordan jeg kortlægger friktion, strukturerer systemer og gør arbejdet klar til overdragelse.</p></div>
                <button className="btn" type="button" onClick={() => setViewMode('deep')}>Se detaljeret erfaring</button>
              </div>
            ) : null}
          </div>
        </section>

        <section id="approach" className="deep-dive-section">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no">02</span><h2>Sådan arbejder jeg</h2><p className="note">Operations-trænet tænkning brugt på websites, indhold og digitale flows.</p></div>
            <div className="approach-grid">
              <p className="approach reveal">Jeg tænker i <b>flow, overdragelser, eksekvering og synlige næste handlinger</b>, og bygger derefter strukturen under det.</p>
              <div className="reveal">
                <p>Operations, ERP, planlægning, master data og leverandørarbejde har trænet mig i at mappe en proces, finde hvor den går i stykker og gøre uklart input til ejerskab og noter, der er klar til produktion.</p>
                <p>Jeg bruger samme rytme i webarbejde: forstå det reelle behov, bygge første brugbare version, teste på mobil og dokumentere næste skridt.</p>
              </div>
            </div>

            <div className="friction-lens reveal" aria-label="Friktionslinse">
              <div><p className="mono">Friktionslinse</p><h3>Jeg bygger ikke kun ud fra briefet.</h3><p>Jeg ser efter, hvad kunden skal kunne stole på, hvad ejeren skal kunne styre, hvad teamet skal kunne overdrage, og hvad systemet skal gøre tydeligt.</p></div>
              <div className="lens-grid" aria-label="Fire spørgsmål til friktionskortlægning">
                <article><span>Kunde</span><b>Hvad skal føles trygt eller klart før handling?</b></article>
                <article><span>Ejer</span><b>Hvad kræver én pålidelig kilde og beslutning?</b></article>
                <article><span>Team</span><b>Hvad skal være let at overdrage eller gentage?</b></article>
                <article><span>System</span><b>Hvad skal være synligt, genbrugeligt og vurderet?</b></article>
              </div>
            </div>

            <div className="backbone reveal" aria-label="Operationsbaggrund dokumentation">
              <div className="backbone__copy">
                <p className="mono">Operationsbaggrund</p>
                <h3>Friktion først. Værktøjer bagefter.</h3>
                <p>Før jeg bygger en side, et flow eller en prototype, kigger jeg efter svage kilder, uklare ejere og skrøbelige overdragelser. Tallene er baggrundsdokumentation fra ERP, MRP, master data og leverandøropfølgning.</p>
                <p className="sr-only">Arbejdsrytme: Friktion til kilde til ejer til vurdering til genbrug.</p>
                <div className="method-strip" aria-hidden="true">{['Friktion', 'Kilde', 'Ejer', 'Vurdering', 'Genbrug'].map((step, index) => <span key={step}>{step}{index < 4 ? <i> → </i> : null}</span>)}</div>
              </div>
              <div className="metric-grid" aria-label="Operations proof metrics">
                <div aria-label="2,000 plus ERP item structures"><b>2,000+ </b><span>ERP item structures</span></div>
                <div aria-label="200 plus multi-level parts set up"><b>200+ </b><span>multi-level parts sat op</span></div>
                <div aria-label="30 plus EU and US suppliers coordinated"><b>30+ </b><span>EU/US leverandører koordineret</span></div>
                <div aria-label="5 production lines and 40 plus variants supported"><b>5 / 40+ </b><span>produktionslinjer og varianter supporteret</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="deep-dive-section" aria-labelledby="system-title-da">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no">03</span><h2 id="system-title-da">Fra uklart input til live system</h2><p className="note">Et kompakt billede af, hvordan reel friktion bliver til noget, mennesker kan bruge.</p></div>
            <div className="system-board reveal">
              <div className="system-intro"><p className="mono">Dokumentationslogik</p><h3>Mere end sider. En brugbar første version.</h3><p>Det afgørende er ikke kun den færdige skærm. Det er logikken, der gør uklare menneskelige og forretningsmæssige behov til en tydelig vej, en lanceret førsteversion og en overdragelse, ejeren kan bruge videre.</p></div>
              <div className="system-steps" aria-label="Fra uklart input til live system process">
                {systemSteps.map((step, index) => (
                  <article className="system-step" key={step.label}><span className="system-index">{String(index + 1).padStart(2, '0')}</span><p className="mono">{step.label}</p><h3>{step.title}</h3><p>{step.text}</p></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="fit">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no">{viewMode === 'quick' ? '02' : '04'}</span><h2>Hvor jeg passer ind</h2><p className="note">En praktisk beslutningsvej for bureauer, studios og startups.</p></div>
            <div className="fit-summary reveal"><p className="mono">Bedst match lige nu</p><h3>Teams der har brug for brugbart digitalt output fra rodet input.</h3><p>Jeg forbinder menneskelige behov, kundemateriale, indhold, UX, QA og overdragelse. Værdien er ikke at erstatte seniorspecialister. Det er at gøre spredt materiale lettere at forstå, bygge, teste, lancere og forbedre.</p></div>
            <div className="fit-lanes reveal" aria-label="Praktiske rolleområder">{roleFitLanes.map((lane) => <article key={lane.title}><span className="mono">{lane.label}</span><h3>{lane.title}</h3><p>{lane.text}</p></article>)}</div>
            <p className="mono audience-label reveal">Bedste målgruppe</p>
            <div className="target-grid reveal">
              <article><span className="mono">Etablerede bureauer</span><h3>Produktionssupport med overdragelsesdisciplin</h3><p>Nyttigt til kundesider, serviceflows, tillidssektioner, mobil QA og praktisk leveringssupport.</p></article>
              <article><span className="mono">Webflow / WordPress / Shopify shops</span><h3>CMS- og webshop-produktionssupport</h3><p>Nyttigt til sideopdateringer, produkt-/servicesider, indholdshierarki, formularer, SEO-basics, mobilcheck og CMS-klar tænkning.</p></article>
              <article><span className="mono">Startups og produktteams</span><h3>Første versioner før overbygning</h3><p>Nyttigt til landing pages, onboarding flows, prototyper og dokumentation, der gør næste beslutning lettere.</p></article>
            </div>
          </div>
        </section>

        <section id="capabilities" className="deep-dive-section">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no">05</span><h2>Build og QA-dokumentation</h2><p className="note">Understøttende dokumentation, ikke en senior engineering-påstand.</p></div>
            <div className="implementation-proof reveal" aria-label="Teknisk implementeringsdokumentation">
              <div><p className="mono">Teknisk implementeringsdokumentation</p><h3>Portfolioen er også et arbejdende build-eksempel.</h3><p>Statisk Next.js export, Cloudflare deployment, lokale assets, lokalt bundtede fonte, Open Graph metadata, responsivt layout, interne ankre, JSON-LD-forståelse og GitHub-baseret overdragelsesdisciplin.</p><p className="implementation-note">Ikke en senior engineering-påstand. Et arbejdende eksempel på et rent statisk web-build, pakning og praktisk QA-disciplin.</p></div>
              <div className="implementation-chips" aria-label="Tekniske implementeringssignaler">{['Static export', 'Cloudflare', 'GitHub workflow', 'Local assets', 'OG / metadata', 'Responsive QA'].map((item) => <b key={item}>{item}</b>)}</div>
            </div>
            <aside className="ai-disclosure reveal" aria-label="Oplysning om AI-assisteret produktion">
              <div><p className="mono">AI-assisteret produktion</p><h3>AI understøtter workflowet. Jeg har ansvaret for arbejdet.</h3></div>
              <p>Claude, ChatGPT og andre AI-værktøjer understøtter research, udkast, kodehjælp, sammenligning og iteration. Jeg definerer brief og retning, træffer de endelige indholds- og designbeslutninger, gennemgår og tester implementeringen og har ansvaret for deployment og overdragelse.</p>
            </aside>

            <div className="evidence-board reveal" aria-label="Dokumentationstavle">
              <div className="evidence-board__intro"><p className="mono">Dokumentationstavle</p><h3>Arbejdet bag skærmen.</h3><p>Små produktionsleverancer, der gør et build lettere at gennemgå, deploye og overdrage.</p></div>
              <div className="evidence-board__grid">
                <article><span>01</span><b>Rutekort</b><small>Sider, ankre og beslutningsveje</small></article>
                <article><span>02</span><b>Mobil QA</b><small>Android, iPhone og smalle skærme</small></article>
                <article><span>03</span><b>Sprogparitet</b><small>EN / DA-sider og synlig tekstgennemgang</small></article>
                <article><span>04</span><b>Deploy-note</b><small>Build-kommando, version og release-status</small></article>
                <article><span>05</span><b>Ejerkontrol</b><small>Tydelige kilder, links og næste beslutninger</small></article>
                <article><span>06</span><b>Overdragelsespakke</b><small>Ren kilde, README og verifikation</small></article>
              </div>
            </div>

            <div className="exposure reveal"><p className="mono lab">Arbejdseksponering, hands-on og ærlig</p><div className="chips" aria-label="Arbejdseksponering">{['HTML / CSS','Responsive layouts','Static site structure','Basic JavaScript','Cloudflare Pages / Workers','GitHub deploy','Struktureret overdragelsesworkflow','Webflow-kendskab','Shopify-kendskab','SEO-metadata','JSON-LD / schema','Forms & journeys','Multilingual content','Mobile QA','Documentation'].map((item) => <b key={item}>{item}</b>)}</div><p className="caveat">Præsenteret ærligt: de seneste builds er custom static og Cloudflare-baserede. Jeg kender Webflow- og Shopify-leveringsmønstre og er klar til at arbejde i etablerede CMS-workflows med GitHub-baserede source packages, deploy-noter og QA-overdragelse.</p></div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no">{viewMode === 'quick' ? '03' : '06'}</span><h2>Sådan ville jeg starte, første 30 dage</h2><p className="note">En enkel struktur, der gør det let at sige ja. Opgaverne tilpasses teamet.</p></div>
            <div className="weeks reveal">{weeks.map((week) => <div className="week" key={week.label}><div className="wno">{week.label}</div><h3>{week.title}</h3><p>{week.text}</p></div>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="contact reveal">
              <div className="contact__identity"><img src="/assets/romaric-portrait.webp" width="512" height="512" decoding="async" alt="Portræt af Romaric Clementi" loading="lazy" /><div><p className="mono">Kontakt</p><b>Romaric Clementi</b></div></div>
              <h2>Lad os bygge den første <em>brugbare</em> version.</h2>
              <div className="row2">
                <a className="btn email-cta" href="mailto:clementiromaric@protonmail.com"><span className="email-cta__desktop">clementiromaric@protonmail.com</span><span className="email-cta__mobile">Skriv til mig</span></a>
                <div className="meta">
                  <div className="m contact-email-row"><span className="mono">E-mail</span><b><a href="mailto:clementiromaric@protonmail.com">clementiromaric@protonmail.com</a></b></div>
                  <div className="m"><span className="mono">Lokation</span><b>Greater Copenhagen · Tune, Denmark</b></div>
                  <div className="m"><span className="mono">Sprog</span><b>Fransk modersmål · flydende engelsk · operationelt dansk</b></div>
                  <div className="m"><span className="mono">Live website</span><b><a href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">marziehnail-atelier.dk</a></b></div>
                </div>
              </div>
              <p className="avail">Bedste match: website-produktion, UX-implementering, CMS- og indholdssupport, GitHub-baseret workflow, brugbare første versioner, digital leveringssupport, QA og dokumentation. Åben for afgrænset projektsupport, digitale produktionsroller eller en kort <b>praktik</b>, når det er den reneste måde at teste samarbejdet på.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div className="mark"><b>RC</b><span>Uklart menneskeligt og forretningsmæssigt behov → klart digitalt system.</span></div>
          <p className="fine">Ledet, gennemgået og leveret af Romaric Clementi med tydelig oplysning om AI-assisteret produktion, hvor den er brugt. © 2026 Romaric Clementi</p>
        </div>
      </footer>
    </>
  );
}
