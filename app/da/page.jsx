'use client';

import { useEffect, useState } from 'react';

const liveLinks = {
  marzieh: 'https://marziehnail-atelier.dk/da/',
};

const proofSignals = [
  { value: 'Live virksomhed', label: 'Marzieh Nail Atelier i produktion' },
  { value: '3 byggede piloter', label: 'Arbejdsgange, praktikmatch og private introduktioner' },
  { value: '5.0 / 16', label: 'Google-bedømmelse og Google-anmeldelser' },
  { value: 'Flersprogede sider', label: 'DA / EN plus persisk/engelsk pilotlogik' },
  { value: 'GitHub / GitLab-klar', label: 'Kildepakker, udgivelsesnoter, versionsspor og QA' },
  { value: 'Driftsbaggrund', label: 'ERP, leverandører, overdragelser og dokumentation' },
];

const roleFitLanes = [
  {
    label: '01',
    title: 'Website-produktion',
    text: 'Sider, service-/produktsider, Webflow/Shopify/CMS-support, lokal troværdighed, indholdsstruktur og mobilcheck.',
  },
  {
    label: '02',
    title: 'UX- og indholdsstruktur',
    text: 'Kunderejser, tillidssektioner, navigation, sidehierarki, CTA-logik og en klarere vej fra oplæg til produktion.',
  },
  {
    label: '03',
    title: 'Digitale arbejdsgange og QA',
    text: 'GitHub/GitLab-lignende arbejdsgange, linkcheck, ankercheck, udgivelsesnoter, oprydning i kildemateriale og praktiske accepttjek.',
  },
  {
    label: '04',
    title: 'AI-assisterede første versioner',
    text: 'Strukturerede oplæg, sideudkast, kildemateriale, godkendelsespunkter og brugbare prototyper med menneskelig vurdering.',
  },
];

const pilotProjects = [
  {
    eyebrow: 'Servicesystem',
    status: 'Gennemgang efter aftale',
    title: 'Clementi AI Workflow',
    role: 'SMV-synlighed, gennemgang af arbejdsgange og sikker AI-kontrol',
    flow: ['Friktion', 'Gennemgang', 'Ejergodkendelse'],
    text:
      'Bygget på en enkel indsigt: Mange mindre virksomheder har ikke brug for endnu et værktøj først. De har brug for tydeligere tilbud, bedre kildemateriale, ejergodkendelser og et tryggere næste skridt.',
    systemProof: [
      'Ydelser, priser og gennemgangsforløb',
      'Noter, værktøjer og PDF-leverancer',
      'Én pålidelig kilde og sikre AI-grænser',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser servicearkitektur, sund vurdering af AI-arbejdsgange og konkret forretningsklarhed som service.',
  },
  {
    eyebrow: 'Aktørflow',
    status: 'Gennemgang efter aftale',
    title: 'FørsteMatch',
    role: 'Kandidat, virksomhed og aktør får klarhed før officiel overdragelse',
    flow: ['Rolle', 'Manuel vurdering', 'Oplæg'],
    text:
      'Bygget til situationer, hvor interessen findes, men opgaven, sproget, supervisionen, den første uge eller den officielle procesejer stadig er uklar.',
    systemProof: [
      'Rollevej og pilotproces',
      'Matchoplæg, formularer og dokumenter',
      'Privatlivsgrænser uden følsomme sagsdata',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser klarhed som i den offentlige sektor, tydelige grænser og et beslutningsforløb med menneskelig vurdering.',
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
      'Café Circle, spil og en rolig introduktion',
      'Tillidscenter, sikkerhedslogik og persisk/engelsk sprogstruktur',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser emotionel UX, samtykkearkitektur, tænkning for nicheprodukter og kulturel tillid.',
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
    label: 'Byg',
    title: 'Lancér den første brugbare version',
    text: 'Responsive sider, lokale filer, metadata, forståelse for strukturerede data, linkcheck og mobil QA.',
  },
  {
    label: 'Overdragelse',
    title: 'Gør det lettere at drive videre',
    text: 'Versionsnoter, genbrugelige beslutninger, næste skridt og ejerkontrol efter første lancering.',
  },
];

const weeks = [
  {
    label: 'Uge 01',
    title: 'Forstå og gennemgå',
    text: 'Forstå arbejdsgangen, gennemgå én side eller kunderejse, kortlægge sider, formularer og mobilfriktion og skrive en kort QA-note.',
  },
  {
    label: 'Uge 02',
    title: 'Støtte produktion',
    text: 'Hjælpe med sideopdateringer, produkt-/servicesider, Webflow/Shopify/CMS-struktur, GitHub/GitLab-noter, interne links, UX-rettelser og flersproget oprydning.',
  },
  {
    label: 'Uge 03',
    title: 'Teste og dokumentere',
    text: 'Mobilcheck, link- og anker-QA, formularrejser, korrektur og metadata-tjek.',
  },
  {
    label: 'Uge 04',
    title: 'Levere et brugbart resultat',
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
                Jeg finder den reelle friktion bag uklare oplæg og omsætter den til brugbare første versioner, som teams kan teste, overdrage og forbedre.
              </p>
              <p className="sub reveal" style={{ transitionDelay: '.3s' }}>
                Website-produktion, UX-struktur, Webflow/Shopify/CMS-support og første brugbare versioner for teams med uklart input og rigtige deadlines.
              </p>
              <div className="hero__cta reveal" style={{ transitionDelay: '.38s' }}>
                <a className="btn" href="#work">
                  Udvalgt arbejde ↓
                </a>
                <a className="btn btn--ghost" href="#process">
                  Sådan starter jeg
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
                  <span>oplæg</span><span>indhold</span><span>tillid</span><span>booking</span><span>QA</span>
                </div>
                <div className="signal-map__route" aria-hidden="true"><i /></div>
                <div className="signal-map__output"><span className="mono">Resultat</span><b>Klart system</b><small>brugbart · vurderbart · klar til overdragelse</small></div>
              </div>
              <dl>
                <div className="row">
                  <dt className="mono">Bedst match</dt>
                  <dd>Website-produktion, UX-implementering, Webflow/Shopify/CMS-support, leveringssupport og QA</dd>
                </div>
                <div className="row">
                  <dt className="mono">Dokumentation</dt>
                  <dd>Live lokal virksomhedssite, 5.0-bedømmelse, 16 anmeldelser og DA/EN-sider</dd>
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
                <h2 id="proof-title-da">Få overblikket på 20 sekunder.</h2>
                <p>Rigtigt arbejde, systemtænkning og leveringsdokumentation i ét hurtigt overblik.</p>
              </div>
              <div className="proof-grid" aria-label="Dokumentation i portfolioen">
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
              <p className="note">Først et live virksomhedssite, derefter brugbare systemer bygget omkring tillid, arbejdsgange og menneskelig vurdering.</p>
            </div>

            <article className="feature reveal" aria-labelledby="marzieh-title-da">
              <div className="browser">
                <div className="browser__bar">
                  <div className="browser__dots" aria-hidden="true"><i /><i /><i /></div>
                  <span className="browser__url">marziehnail-atelier.dk</span>
                  <span className="browser__live">● Live</span>
                </div>
                <div className="browser__view">
                  <div className="browser__copy">
                    <span className="eyebrow">Privat negleatelier · Valby</span>
                    <h3>Art You Wear.<br />Care You Remember.</h3>
                    <p>En rolig tosproget tilstedeværelse med tydelige services, tillidssignaler og en enkel bookingvej.</p>
                    <div className="case-actions"><a className="pill" href="/da/arbejde/marzieh-nail-atelier/">Se casen</a><a className="case-live-link" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">Åbn website ↗</a></div>
                  </div>
                  <div className="browser__media">
                    <img
                      src="/assets/marzieh-homepage-ui-snapshot.webp"
                      alt="Marzieh Nail Atelier hjemmeside UI snapshot med navigation, hero, bookingvej og servicekort"
                      className="ui-shot case-transition-image"
                      width="1600"
                      height="1050"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <div className="case-body">
                <div className="case-head">
                  <div id="marzieh-title-da" className="ttl">
                    Marzieh Nail Atelier<span>Rigtigt lokalt virksomhedssite · live i produktion</span>
                  </div>
                  <span className="badge badge--live">Stærkeste dokumentation</span>
                </div>

                <dl className="field"><dt>Problem</dt><dd>Et premium one-to-one negleatelier havde brug for tydeligere services, mere bookingtryghed, lokal tillid, politikker og mobil læsbarhed.</dd></dl>
                <dl className="field"><dt>Min rolle</dt><dd>Jeg formede koncept, servicestruktur, tekstflow, tillidssektioner, mobil QA og udgivelsessikre iterationer.</dd></dl>
                <dl className="field"><dt>Bygget</dt><dd>Forside, services og priser, galleri, brudeside, FAQ, politikker, privatliv, besøgsvej, bookinglinks, lokale SEO-signaler og forståelse for strukturerede data.</dd></dl>
                <dl className="field field--highlight"><dt>Bureau-relevans</dt><dd>For et bureau viser det, at jeg kan gøre løst kundemateriale til en struktureret, mobilklar kunderejse med dokumenteret tillid, bookinglogik og overdragelsesdisciplin.</dd></dl>

                <div className="case-proof-row" aria-label="Marzieh Nail Atelier produktionsdokumentation">
                  <div><span className="mono">Tilbud</span><b>Services og priser</b></div>
                  <div><span className="mono">Rejse</span><b>Booking og besøg</b></div>
                  <div><span className="mono">Tillid</span><b>Anmeldelser, politikker og FAQ</b></div>
                  <div><span className="mono">QA</span><b>Mobil, links og overdragelse</b></div>
                </div>

                <div className="before-after" aria-label="Marzieh Nail Atelier før og efter">
                  <div><span className="mono">Før</span><p>Stærke faglige evner var der allerede, men services, politikker, booking, dokumenteret tillid og lokal synlighed manglede én tydelig kilde.</p></div>
                  <div><span className="mono">Efter</span><p>En tosproget kunderejse samlede services, bookingvej, politikker, tillidssignaler, Planway/Jazzy-logik og roligere brand-sprog.</p></div>
                  <div><span className="mono">Hvad det viser</span><p>Det synlige output er et website. Det dybere arbejde er at forstå, hvad kunder skal vide før booking: tillid, pris, serviceklarhed og ejerkontrol.</p></div>
                </div>

                <div className="gallery" aria-label="Marzieh Nail Atelier UI snapshots">
                  <div className="g"><img src="/assets/marzieh-services-ui-snapshot.webp" width="760" height="520" decoding="async" alt="Marzieh Nail Atelier visning af ydelser og priser" loading="lazy" /></div>
                  <div className="g"><img src="/assets/marzieh-work-ui-snapshot.webp" width="760" height="520" decoding="async" alt="Marzieh Nail Atelier visning af arbejdsgalleri" loading="lazy" /></div>
                  <div className="g"><img src="/assets/marzieh-booking-ui-snapshot.webp" width="760" height="520" decoding="async" alt="Marzieh Nail Atelier visning af besøg og booking" loading="lazy" /></div>
                </div>

                <div className="case-foot">
                  <div className="case-foot__actions"><a className="linkclay case-cta" href="/da/arbejde/marzieh-nail-atelier/">Se hele casen →</a><a className="linkclay case-secondary-cta" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">Åbn live website ↗</a></div>
                  <div className="stat" aria-label="Offentlige dokumentationsfakta">
                    <div className="s"><b>5.0</b><span>Google-bedømmelse</span></div>
                    <div className="s"><b>16</b><span>Google-anmeldelser</span></div>
                    <div className="s"><b>DA / EN</b><span>Flersproget</span></div>
                  </div>
                </div>
              </div>
            </article>

            <div id="systems" className="systems-intro reveal" aria-label="Systemer bygget fra uklare behov">
              <p className="mono">Systemer jeg har bygget</p>
              <h3>Ikke kun sider. Brugbare første versioner.</h3>
              <p>Ud over enkeltstående websites bygger jeg servicerejser, henvendelsesforløb, tillidslag, pilotlogik, dokumentationsruter og vurderingspunkter, der gør uklare ideer lettere at teste uden at overbygge.</p>
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
                  <ul className="system-proof-list" aria-label={`${project.title} systemdokumentation`}>
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
                <button className="btn" type="button" onClick={() => setViewMode('deep')}>Åbn dybdegennemgang ↓</button>
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
                <p>Drift, ERP, planlægning, masterdata og leverandørarbejde har trænet mig i at mappe en proces, finde hvor den går i stykker og gøre uklart input til ejerskab og noter, der er klar til produktion.</p>
                <p>Jeg bruger samme rytme i webarbejde: forstå det reelle behov, bygge første brugbare version, teste på mobil og dokumentere næste skridt.</p>
              </div>
            </div>

            <div className="friction-lens reveal" aria-label="Friktionslinse">
              <div><p className="mono">Friktionslinse</p><h3>Jeg bygger ikke kun ud fra oplægget.</h3><p>Jeg ser efter, hvad kunden skal kunne stole på, hvad ejeren skal kunne styre, hvad teamet skal kunne overdrage, og hvad systemet skal gøre tydeligt.</p></div>
              <div className="lens-grid" aria-label="Fire spørgsmål til friktionskortlægning">
                <article><span>Kunde</span><b>Hvad skal føles trygt eller klart før handling?</b></article>
                <article><span>Ejer</span><b>Hvad kræver én pålidelig kilde og beslutning?</b></article>
                <article><span>Team</span><b>Hvad skal være let at overdrage eller gentage?</b></article>
                <article><span>System</span><b>Hvad skal være synligt, genbrugeligt og vurderet?</b></article>
              </div>
            </div>

            <div className="backbone reveal" aria-label="Dokumentation fra driftsbaggrunden">
              <div className="backbone__copy">
                <p className="mono">Driftsbaggrund</p>
                <h3>Friktion først. Værktøjer bagefter.</h3>
                <p>Før jeg bygger en side, et flow eller en prototype, kigger jeg efter svage kilder, uklare ejere og skrøbelige overdragelser. Tallene er baggrundsdokumentation fra ERP, MRP, master data og leverandøropfølgning.</p>
                <p className="sr-only">Arbejdsrytme: Friktion til kilde til ejer til vurdering til genbrug.</p>
                <div className="method-strip" aria-hidden="true">{['Friktion', 'Kilde', 'Ejer', 'Vurdering', 'Genbrug'].map((step, index) => <span key={step}>{step}{index < 4 ? <i> → </i> : null}</span>)}</div>
              </div>
              <div className="metric-grid" aria-label="Dokumentation fra driftsarbejde">
                <div aria-label="2,000 plus ERP-varestrukturer"><b>2,000+ </b><span>ERP-varestrukturer</span></div>
                <div aria-label="200 plus multi-level parts set up"><b>200+ </b><span>flerniveaudele oprettet</span></div>
                <div aria-label="30 plus EU and US suppliers coordinated"><b>30+ </b><span>EU/US leverandører koordineret</span></div>
                <div aria-label="5 production lines and 40 plus variants supported"><b>5 / 40+ </b><span>produktionslinjer og varianter understøttet</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="deep-dive-section" aria-labelledby="system-title-da">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no">03</span><h2 id="system-title-da">Fra uklart input til et system i drift</h2><p className="note">Et kompakt billede af, hvordan reel friktion bliver til noget, mennesker kan bruge.</p></div>
            <div className="system-board reveal">
              <div className="system-intro"><p className="mono">Dokumentationslogik</p><h3>Mere end sider. En brugbar første version.</h3><p>Den stærkeste dokumentation er ikke kun den færdige skærm. Det er logikken, der gør uklare menneskelige og forretningsmæssige behov til en tydelig vej, en lanceret førsteversion og en overdragelse, ejeren kan bruge videre.</p></div>
              <div className="system-steps" aria-label="Proces fra uklart input til et system i drift">
                {systemSteps.map((step, index) => (
                  <article className="system-step" key={step.label}><span className="system-index">{String(index + 1).padStart(2, '0')}</span><p className="mono">{step.label}</p><h3>{step.title}</h3><p>{step.text}</p></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="fit">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no">{viewMode === 'quick' ? '02' : '04'}</span><h2>Hvor jeg passer ind</h2><p className="note">En praktisk beslutningsvej for bureauer, digitale studier og startups.</p></div>
            <div className="fit-summary reveal"><p className="mono">Bedst match lige nu</p><h3>Teams der har brug for brugbare digitale leverancer fra rodet input.</h3><p>Jeg forbinder menneskelige behov, kundemateriale, indhold, UX, QA og overdragelse. Værdien er ikke at erstatte seniorspecialister. Det er at gøre spredt materiale lettere at forstå, bygge, teste, lancere og forbedre.</p></div>
            <div className="fit-lanes reveal" aria-label="Praktiske rolleområder">{roleFitLanes.map((lane) => <article key={lane.title}><span className="mono">{lane.label}</span><h3>{lane.title}</h3><p>{lane.text}</p></article>)}</div>
            <p className="mono audience-label reveal">Bedste målgruppe</p>
            <div className="target-grid reveal">
              <article><span className="mono">Etablerede bureauer</span><h3>Produktionssupport med overdragelsesdisciplin</h3><p>Nyttigt til kundesider, serviceforløb, tillidssektioner, mobil QA og praktisk leveringssupport.</p></article>
              <article><span className="mono">Webflow-, WordPress- og Shopify-bureauer</span><h3>CMS- og webshop-produktionssupport</h3><p>Nyttigt til sideopdateringer, produkt-/servicesider, indholdshierarki, formularer, grundlæggende SEO, mobilcheck og CMS-klar tænkning.</p></article>
              <article><span className="mono">Startups og produktteams</span><h3>Første versioner før overbygning</h3><p>Nyttigt til landingssider, onboardingforløb, prototyper og dokumentation, der gør næste beslutning lettere.</p></article>
            </div>
          </div>
        </section>

        <section id="capabilities" className="deep-dive-section">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no">05</span><h2>Implementering og QA-dokumentation</h2><p className="note">Understøttende dokumentation, ikke en påstand om seniorudviklerniveau.</p></div>
            <div className="implementation-proof reveal" aria-label="Teknisk implementeringsdokumentation">
              <div><p className="mono">Teknisk implementeringsdokumentation</p><h3>Portfolioen er også et fungerende webeksempel.</h3><p>Statisk Next.js-eksport, udgivelse på Cloudflare, lokale filer, lokalt bundtede fonte, Open Graph metadata, responsivt layout, interne ankre, JSON-LD-forståelse og GitHub/GitLab-lignende overdragelsesdisciplin.</p><p className="implementation-note">Ikke en påstand om seniorudviklerniveau. Et fungerende eksempel på et rent statisk website, en ryddelig kildepakke og praktisk QA-disciplin.</p></div>
              <div className="implementation-chips" aria-label="Tekniske implementeringssignaler">{['Statisk eksport', 'Cloudflare', 'GitHub / GitLab-arbejdsgang', 'Lokale filer', 'OG / metadata', 'Responsiv QA'].map((item) => <b key={item}>{item}</b>)}</div>
            </div>
            <div className="evidence-board reveal" aria-label="Dokumentationstavle">
              <div className="evidence-board__intro"><p className="mono">Dokumentationstavle</p><h3>Arbejdet bag skærmen.</h3><p>Små produktionsleverancer, der gør arbejdet lettere at gennemgå, udgive og overdrage.</p></div>
              <div className="evidence-board__grid">
                <article><span>01</span><b>Rutekort</b><small>Sider, ankre og beslutningsveje</small></article>
                <article><span>02</span><b>Mobil QA</b><small>Android, iPhone og smalle skærme</small></article>
                <article><span>03</span><b>Sprogparitet</b><small>EN / DA-sider og synlig tekstgennemgang</small></article>
                <article><span>04</span><b>Udgivelsesnote</b><small>Byggekommando, version og udgivelsesstatus</small></article>
                <article><span>05</span><b>Ejerkontrol</b><small>Tydelige kilder, links og næste beslutninger</small></article>
                <article><span>06</span><b>Overdragelsespakke</b><small>Ren kilde, README og verifikation</small></article>
              </div>
            </div>

            <div className="exposure reveal"><p className="mono lab">Praktisk erfaring, ærligt beskrevet</p><div className="chips" aria-label="Arbejdseksponering">{['HTML / CSS','Responsivt layout','Statisk websitestruktur','Grundlæggende JavaScript','Cloudflare Pages / Workers','GitHub-udgivelse','GitLab-arbejdsgang','Webflow-support','Shopify-support','SEO-metadata','JSON-LD / strukturerede data','Formularer og brugerrejser','Flersproget indhold','Mobil QA','Dokumentation'].map((item) => <b key={item}>{item}</b>)}</div><p className="caveat">Præsenteret ærligt: de seneste builds er specialbyggede, statiske og Cloudflare-baserede. Jeg er tryg ved Webflow, Shopify og CMS-lignende sitestrukturer samt GitHub/GitLab-lignende arbejdsgange, kildepakker, udgivelsesnoter og QA-overdragelse.</p></div>
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
                  <div className="m"><span className="mono">Lokation</span><b>Storkøbenhavn · Tune, Danmark</b></div>
                  <div className="m"><span className="mono">Sprog</span><b>Fransk modersmål · flydende engelsk · operationelt dansk</b></div>
                  <div className="m"><span className="mono">Live dokumentation</span><b><a href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">marziehnail-atelier.dk</a></b></div>
                </div>
              </div>
              <p className="avail">Bedste match: website-produktion, UX-implementering, Webflow/Shopify/CMS-support, GitHub/GitLab-lignende arbejdsgange, brugbare første versioner, digital leveringssupport, QA og dokumentation. Åben for afgrænset projektsupport, digitale produktionsroller eller en kort <b>praktik</b>, når det er den reneste måde at teste samarbejdet på.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div className="mark"><b>RC</b><span>Uklart menneskeligt og forretningsmæssigt behov → klart digitalt system.</span></div>
          <p className="fine">Håndbygget som live dokumentation af friktionskortlægning, systemstruktur, UX-flow, QA og udgivelsesdisciplin. © 2026 Romaric Clementi</p>
        </div>
      </footer>
    </>
  );
}
