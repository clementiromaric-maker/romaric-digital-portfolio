'use client';

import { useEffect, useState } from 'react';

const liveLinks = {
  marzieh: 'https://marziehnail-atelier.dk/da/',
};

const proofSignals = [
  { value: 'Live virksomhed', label: 'Marzieh Nail Atelier i produktion' },
  { value: 'Research til release', label: 'Markedssignaler, positionering, identitet, tilbud, web, søgning og overdragelse' },
  { value: 'Lokal søgning + Google', label: 'Metadata, strukturerede data, Business Profile, indeksering og bookingmåling' },
  { value: '163 interaktioner', label: 'Google Business Profile · juli 2026, signal på virksomhedsniveau' },
  { value: 'GitHub + Cloudflare', label: 'Versioneret kilde, deployment-QA, release-noter og overdragelse' },
  { value: 'Operationsbaggrund', label: 'ERP, leverandører, kvalitetsdisciplin, overdragelser og dokumentation' },
];

const roleFitLanes = [
  {
    label: '01',
    title: 'Website-produktion',
    text: 'Sider, struktureret indhold, genbrugelige service-/produktsektioner, lokal dokumentation, responsive tjek og produktionsklare opdateringer.',
  },
  {
    label: '02',
    title: 'UX, indhold og brandimplementering',
    text: 'Kunderejser, tillidssektioner, sidehierarki, CTA-logik og konsistent omsætning af valgte brand-/indholdsbeslutninger til liveoplevelsen.',
  },
  {
    label: '03',
    title: 'CMS og flersproget indhold',
    text: 'Genbrugelige sektioner, indholdsmodeller, validering, sproglig konsistens, forhåndsvisning/publicering og strukturerede opdateringer.',
  },
  {
    label: '04',
    title: 'Digital levering, søgning og QA',
    text: 'GitHub-baserede arbejdsgange, metadata-/søgehygiejne, Jira-opfølgning, mobilcheck, links, udgivelsesnoter, accepttjek og praktisk overdragelse.',
  },
];

const pilotProjects = [
  {
    eyebrow: 'Service- og workflowsystem',
    status: 'Privat projekt',
    title: 'Clementi AI Workflow',
    role: 'SME-services, workflow-gennemgang og praktiske AI-grænser',
    text:
      'Et service- og workflowkoncept til mindre virksomheder, der først har brug for et tydeligere tilbud, bedre kildemateriale og klare vurderingspunkter, før der tilføjes mere teknologi.',
    systemProof: [
      'Service-, pris- og auditstruktur',
      'Noter, værktøjer og PDF-leverancer',
      'Én pålidelig kilde og ansvarlige AI-grænser',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser servicearkitektur, workflowforståelse og evnen til at gøre et uklart tilbud lettere at gennemgå og bruge.',
  },
  {
    eyebrow: 'Pilot for flere aktører',
    status: 'Privat projekt',
    title: 'FørsteMatch',
    role: 'Klarhed for kandidat, virksomhed og rådgiver før officiel overdragelse',
    text:
      'En afgrænset pilot til den første samtale, når opgaven, sproget, supervisionen eller næste officielle skridt stadig er uklart.',
    systemProof: [
      'Rolleindgang og manuel gennemgang',
      'Matchbrief, formularer og dokumenter',
      'Privatlivsgrænser uden CPR eller diagnoser',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser aktørkortlægning, tosproget kommunikation, privatlivsgrænser og menneskelig vurdering.',
  },
  {
    eyebrow: 'Privatlivsfokuseret produktkoncept',
    status: 'Privat projekt',
    title: 'HamdamBridge',
    role: 'Kulturelt introduktionssystem med samtykke før kontakt',
    text:
      'Et privat introduktionskoncept bygget omkring kontekst, værdighed og samtykke før kontakt i stedet for en offentlig profilvæg.',
    systemProof: [
      'Private signaler og menneskelig vurdering',
      'Rolig introduktion og kulturel tillid',
      'Sikkerhedslogik og persisk/engelsk struktur',
    ],
    link: null,
    linkLabel: 'Gennemgang efter aftale',
    bestFor: 'Viser privatlivsfokuseret produktlogik, samtykkedesign, nicheforståelse og kulturelt følsom UX.',
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
    text: 'Lære arbejdsgangen, gennemgå én side eller kunderejse, kortlægge sider, formularer og mobilproblemer og skrive en kort QA-note.',
  },
  {
    label: 'Uge 02',
    title: 'Støtte produktion',
    text: 'Hjælpe med sideopdateringer, struktureret indhold, genbrugelige sektioner, CMS-modeller, GitHub-baserede overdragelsesnoter, Jira-opfølgning, UX-fixes og flersproget oprydning.',
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
              <p className="hero-role reveal" style={{ transitionDelay: '.1s' }}>Digital produktion · Indholdssystemer · Web & QA</p>
              <h1 id="hero-title-da" className="reveal" style={{ transitionDelay: '.12s' }}>
                Klar digital
                <br />
                struktur fra
                <br />
                <em>uklare</em> behov.
              </h1>
              <p className="lede reveal" style={{ transitionDelay: '.22s' }}>
                Jeg gør spredte oplæg, indhold og forretningskrav til websites og digitale forløb, der er klare at bruge, nemme at gennemgå og praktiske at arbejde videre med.
              </p>
              <p className="sub reveal" style={{ transitionDelay: '.3s' }}>
                Website-produktion, indholdssystemer, brandimplementering, CMS-støtte, lokale søgefundamenter, responsiv QA og flersproget levering.
              </p>
              <div className="hero__cta reveal" style={{ transitionDelay: '.38s' }}>
                <a className="btn" href="#work">
                  Se udvalgt arbejde
                </a>
                <a className="btn btn--ghost" href="#approach" onClick={() => setViewMode('deep')}>
                  Se hvordan jeg arbejder
                </a>
              </div>
              <div className="view-switch reveal" style={{ transitionDelay: '.46s' }} role="group" aria-label="Vælg portfoliodetalje">
                <span className="mono">Vælg visning</span>
                <button type="button" aria-pressed={viewMode === 'quick'} onClick={() => setViewMode('quick')}>Hurtigt overblik</button>
                <button type="button" aria-pressed={viewMode === 'deep'} onClick={() => setViewMode('deep')}>Gå i dybden</button>
              </div>
            </div>

            <aside className="spec reveal" style={{ transitionDelay: '.28s' }} aria-label="Portfolio hurtige fakta">
              <div className="signal-map" aria-label="Råt input bliver til en klar første version">
                <p className="mono signal-map__label">Fra råt input</p>
                <div className="signal-map__input" aria-hidden="true">
                  <span>brief</span><span>indhold</span><span>tillid</span><span>booking</span><span>QA</span>
                </div>
                <div className="signal-map__route" aria-hidden="true"><i /></div>
                <div className="signal-map__output"><span className="mono">Brugbart output</span><b>Klar første version</b><small>brugbart · let at gennemgå · klar til overdragelse</small></div>
              </div>
              <dl>
                <div className="row">
                  <dt className="mono">Live dokumentation</dt>
                  <dd>Marzieh Nail Atelier</dd>
                </div>
                <div className="row">
                  <dt className="mono">Bedst match</dt>
                  <dd>Digital produktion, indholdssystemer, CMS-/webimplementering, digital levering og QA</dd>
                </div>
                <div className="row">
                  <dt className="mono">Dokumentation</dt>
                  <dd>Live virksomhed, research-til-release-case, tosproget bookingrejse, søgefundamenter, responsiv QA og ejeroverdragelse</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="proof" className="proof-strip" aria-labelledby="proof-title-da">
          <div className="wrap">
            <div className="proof-dash reveal">
              <div className="proof-dash__head">
                <p className="mono">Hurtigt overblik</p>
                <h2 id="proof-title-da">Se det vigtigste på 20 sekunder.</h2>
                <p>Rigtigt arbejde, struktureret levering og konkret dokumentation i ét overblik.</p>
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
              <span className="sec-no" data-deep="01" data-quick="01" aria-hidden="true" />
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
                  <div className="featured-case__visual-grid">
                    <figure className="featured-case__desktop featured-case__desktop--real">
                      <img
                        src="/assets/marzieh-desktop-proof-4p9-37-v687.webp"
                        alt="Reelt desktop-skærmbillede af Marzieh Nail Atelier-websitet"
                        width="1600"
                        height="873"
                        loading="eager"
                        decoding="async"
                      />
                      <figcaption>Reelt desktop-skærmbillede · live website er linket nedenfor</figcaption>
                    </figure>
                    <figure className="featured-case__mobile featured-case__mobile--real">
                      <div className="mobile-proof-frame mobile-proof-frame--real">
                        <span className="mobile-proof-frame__speaker" aria-hidden="true" />
                        <img
                          src="/assets/marzieh-composition-full-v687.webp"
                          alt="Reelt mobilskærmbillede af Marzieh Nail Ateliers kompositionsside"
                          width="688"
                          height="1487"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <figcaption>Reelt mobilskærmbillede · rent udsnit fra live-sitet</figcaption>
                    </figure>
                  </div>
                </div>

                <div className="featured-case__copy">
                  <p className="mono">Udvalgt projekt</p>
                  <h3 id="marzieh-title-da">Marzieh Nail Atelier</h3>
                  <p className="featured-case__headline">Markedsresearch, identitet og digitalt launch-system for et selvstændigt negleatelier i Valby.</p>
                  <p className="featured-case__summary">Jeg var med til at forme atelierets position ud fra lokale markedssignaler, udviklede identitetsretninger med ejeren og omsatte den valgte retning til tilbud, tosproget website, lokal søgning, bookingrejse, QA og overdragelse.</p>
                  <div className="featured-case__facts" aria-label="Projektfakta">
                    <span><b>Live</b> website i produktion</span>
                    <span><b>DA / EN</b> tosprogede ruter</span>
                    <span><b>Research til release</b> koncept til overdragelse</span>
                  </div>
                  <div className="featured-case__actions">
                    <a className="btn" href="/da/arbejde/marzieh-nail-atelier/">Læs casen</a>
                    <a className="text-link" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">Besøg live website ↗</a>
                  </div>
                </div>
              </div>

              <div className="featured-case__details">
                <article><h4>Udfordring</h4><p>Et nyt privat atelier havde brug for en tydelig position, sammenhængende identitet, klart tilbud, lokal synlighed og en bookingrejse, der føltes lige så gennemtænkt som servicen.</p></article>
                <article><h4>Mit bidrag</h4><p>Jeg gennemførte en mindre lokal markeds- og konkurrentgennemgang, udviklede positionering og identitetsretninger med ejeren, strukturerede tilbud og kunderejse, implementerede søgefundamenter, udførte QA og forberedte overdragelsen.</p></article>
                <article><h4>Leveret</h4><p>Et sammenhængende brand-til-booking-system på tværs af identitet, services, tosproget indhold, lokal søgning, Google-tillidssignaler, responsiv levering og ejerstyrede kilder.</p></article>
              </div>
            </article>

            <div id="systems" className="systems-intro reveal" aria-label="Supplerende digitale projekter">
              <p className="mono">Supplerende projekter</p>
              <h3>Forskellige problemer. Forskellige rammer.</h3>
              <p>Projekterne viser servicearkitektur, aktørforløb, privatliv, flersproget indhold og levering af første versioner ud over det live Marzieh-site.</p>
              <p className="systems-guard">Offentlige detaljer holdes bevidst afgrænsede, når privatliv eller pilotkontekst kræver det.</p>
            </div>

            <div className="pilots systems-grid" aria-label="Systempiloter">
              {pilotProjects.map((project) => (
                <article className="pcard reveal" key={project.title}>
                  <div className="pcard__top"><span className="mono">{project.eyebrow}</span><span className="badge">{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p className="role">{project.role}</p>
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
                <div><p className="mono">Mere bag skærmene</p><h3>Vil du se vurderingen, QA-dokumentationen og driftslogikken?</h3><p>Det hurtige overblik holder beslutningsvejen kort. Gå i dybden viser, hvordan jeg træffer valg, strukturerer information, tester arbejdet og gør det klar til overdragelse.</p></div>
                <button className="btn" type="button" onClick={() => setViewMode('deep')}>Se detaljeret erfaring</button>
              </div>
            ) : null}
          </div>
        </section>

        <section id="approach" className="deep-dive-section">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no" data-deep="02" data-quick="02" aria-hidden="true" /><h2>Sådan arbejder jeg</h2><p className="note">De arbejdsvaner fra drift, som jeg tager med ind i digital produktion.</p></div>
            <div className="approach-grid">
              <p className="approach reveal">Jeg vil først forstå <b>hvad mennesker har brug for, hvad der stadig er uafklaret, og hvad der skal ske efter lancering</b>, før jeg bygger.</p>
              <div className="reveal">
                <p>Drift, ERP, planlægning, master data, leverandør- og kvalitets-/procesarbejde har trænet mig i at følge afhængigheder, udfordre uklar information og holde ejerskab synligt.</p>
                <p>Jeg tager den samme disciplin med ind i webarbejde: afklar oplæg og kildemateriale, byg den første brugbare version, test den ordentligt og efterlad noget, den næste person kan arbejde videre med.</p>
              </div>
            </div>

            <div className="decision-lens reveal" aria-label="Spørgsmål før jeg bygger">
              <div><p className="mono">Før jeg bygger</p><h3>Jeg bygger ikke kun ud fra oplægget.</h3><p>Jeg ser på, hvad kunden skal forstå, hvad ejeren skal kunne beslutte, hvad teamet har brug for ved overdragelse, og hvad implementeringen skal gøre synligt.</p></div>
              <div className="lens-grid" aria-label="Fire spørgsmål før jeg bygger">
                <article><span>Kunde</span><b>Hvad skal være tydeligt før handling?</b></article>
                <article><span>Ejer</span><b>Hvad skal være nemt at beslutte eller opdatere?</b></article>
                <article><span>Team</span><b>Hvad kræver en ren overdragelse?</b></article>
                <article><span>Implementering</span><b>Hvad skal kunne genbruges, ses eller kontrolleres?</b></article>
              </div>
            </div>

            <div className="backbone reveal" aria-label="Operationsbaggrund dokumentation">
              <div className="backbone__copy">
                <p className="mono">Driftsbaggrund</p>
                <h3>Jeg starter med problemet, ikke værktøjet.</h3>
                <p>ERP, planlægning, master data, leverandør- og kvalitets-/procesarbejde har trænet mig i at følge afhængigheder, opdage manglende information og holde ejerskab tydeligt. Den disciplin tager jeg med ind i digital produktion, QA og overdragelse.</p>
              </div>
              <div className="metric-grid" aria-label="Operations proof metrics">
                <div aria-label="2.000 plus ERP- og masterdata-poster"><b>2.000+ </b><span>ERP- og masterdata-poster</span></div>
                <div aria-label="200 plus flerniveau produkt- og BOM-strukturer"><b>200+ </b><span>flerniveau produkt- og BOM-strukturer</span></div>
                <div aria-label="30 plus internationale leverandører koordineret"><b>30+ </b><span>internationale leverandører koordineret</span></div>
                <div aria-label="5 produktionslinjer og 40 plus varianter understøttet"><b>5 / 40+ </b><span>produktionslinjer / varianter understøttet</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="deep-dive-section" aria-labelledby="system-title-da">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no" data-deep="03" data-quick="03" aria-hidden="true" /><h2 id="system-title-da">Fra uklart input til en brugbar første version</h2><p className="note">En reel produktionsrækkefølge: forstå kilden, form strukturen, byg, test og overdrag.</p></div>
            <div className="system-board reveal">
              <div className="system-intro"><p className="mono">Produktionsrækkefølge</p><h3>Skærmen er kun én del af leveringen.</h3><p>Jeg starter med kildematerialet og de åbne beslutninger, former en brugbar struktur, bygger og tester første version og efterlader tydelige noter, så arbejdet er nemmere at fortsætte.</p></div>
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
            <div className="sec-head"><span className="sec-no" data-deep="04" data-quick="02" aria-hidden="true" /><h2>Hvor jeg passer ind</h2><p className="note">En praktisk beslutningsvej for bureauer, studios og startups.</p></div>
            <div className="fit-summary reveal"><p className="mono">Bedst match lige nu</p><h3>Teams der har brug for brugbart digitalt output fra rodet input.</h3><p>Jeg forbinder kundemateriale, indhold, UX, implementering, QA og overdragelse. Min værdi er at gøre spredt materiale lettere at forstå, bygge, teste, lancere og vedligeholde.</p></div>
            <div className="fit-lanes reveal" aria-label="Praktiske rolleområder">{roleFitLanes.map((lane) => <article key={lane.title}><span className="mono">{lane.label}</span><h3>{lane.title}</h3><p>{lane.text}</p></article>)}</div>
            <p className="mono audience-label reveal">Bedste målgruppe</p>
            <div className="target-grid reveal">
              <article><span className="mono">Etablerede bureauer</span><h3>Produktionssupport med overdragelsesdisciplin</h3><p>Nyttigt til kundesider, serviceflows, tillidssektioner, mobil QA og praktisk leveringssupport.</p></article>
              <article><span className="mono">Webflow / WordPress / Shopify shops</span><h3>CMS- og webshop-produktionssupport</h3><p>Nyttigt til sideopdateringer, produkt-/servicesider, indholdsmodeller, genbrugelige sektioner, valideringsregler, forhåndsvisning/publicering, formularer og mobilcheck.</p></article>
              <article><span className="mono">Startups og produktteams</span><h3>Første versioner før overbygning</h3><p>Nyttigt til landing pages, onboarding flows, prototyper og dokumentation, der gør næste beslutning lettere.</p></article>
            </div>
          </div>
        </section>

        <section id="capabilities" className="deep-dive-section">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no" data-deep="05" data-quick="05" aria-hidden="true" /><h2>Build og QA-dokumentation</h2><p className="note">Praktisk dokumentation for implementering og levering.</p></div>
            <div className="implementation-proof reveal" aria-label="Teknisk implementeringsdokumentation">
              <div><p className="mono">Teknisk implementeringsdokumentation</p><h3>Portfolioen er også et arbejdende build-eksempel.</h3><p>Statisk Next.js export, Cloudflare deployment, lokale assets, lokalt bundtede fonte, Open Graph metadata, responsivt layout, interne ankre, JSON-LD-forståelse og GitHub-baseret overdragelsesdisciplin. I udvalgte projekter har jeg desuden arbejdet med Sanity CMS-indholdsmodeller, genbrugelige sektioner, valideringsregler, flersproget indhold og forhåndsvisnings-/publiceringsflows samt brugt Jira til opfølgning på issues og handlinger.</p><p className="implementation-note">Mit stærkeste bidrag er struktureret digital produktion, indholdssystemer, implementerings-QA og vedligeholdbar overdragelse, understøttet af praktisk frontend- og CMS-kapacitet.</p></div>
              <div className="implementation-chips" aria-label="Tekniske implementeringssignaler">{['Static export', 'Cloudflare', 'GitHub workflow', 'Local assets', 'OG / metadata', 'Responsive QA'].map((item) => <b key={item}>{item}</b>)}</div>
            </div>

            <div className="cms-model-proof reveal" aria-label="Anonymiseret eksempel på CMS-indholdsmodel">
              <div className="cms-model-proof__copy">
                <p className="mono">Anonymiseret CMS-struktureksempel</p>
                <h3>Gør tilbagevendende virksomhedsdata til genbrugeligt og reviewbart indhold.</h3>
                <p>Udvalgt CMS-projektarbejde omfattede strukturerede indholdsmodeller, valideringsregler og flersprogede preview-/publiceringsflows. Dette anonymiserede artefakt viser, hvordan kildedata bliver til genbrugeligt og reviewbart indhold. Marzieh vises separat som en statisk implementering.</p>
              </div>
              <div className="cms-model-flow" aria-label="Fra kilde til indholdsmodel, validering, preview og publicering">
                <article><span>01</span><b>Kilde</b><small>service · pris · varighed · bookinggruppe</small></article>
                <article><span>02</span><b>Indholdsmodel</b><small>genbrugelige felter · sektioner · ejerskab</small></article>
                <article><span>03</span><b>Validering</b><small>obligatoriske værdier · EN/DA-paritet · reviewstatus</small></article>
                <article><span>04</span><b>Preview / publicér</b><small>kontrollér siden · release · overdrag</small></article>
              </div>
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

            <div className="exposure reveal"><p className="mono lab">Værktøjer i praksis</p><div className="chips" aria-label="Arbejdseksponering">{['HTML / CSS','Next.js / statisk levering','Basic JavaScript','Cloudflare / GitHub-levering','Sanity CMS / preview-workflows','Struktureret indhold / genbrugelige sektioner','Valideringsregler','Jira issue-/handlingsopfølgning','Salesforce Sales Cloud / Service Cloud / Flow','Webflow / Shopify-kendskab','SEO / Search Console / LocalBusiness JSON-LD','Formularer / flersprogede flows','Mobil og responsiv QA','Dokumentation / overdragelse'].map((item) => <b key={item}>{item}</b>)}</div><p className="caveat">Bygget som et custom statisk Next.js/Cloudflare-site. Mit stærkeste bidrag er produktion, struktureret indhold, QA og overdragelse. Sanity CMS og Jira afspejler udvalgte projektworkflows, mens Webflow og Shopify fortsat er praktisk kendskab. Salesforce: praktisk hands-on kendskab til Sales Cloud- og Service Cloud-workflows, lead-/opportunity- og sagsstyring, rapportering samt low-code-automatisering med Salesforce Flow. Supplerende systemgrundlag: formel SQL 2016 Database Administration-træning med SQL Server/T-SQL, relationelt databasedesign og Azure SQL. Azure-delen er kursusbaseret, ikke nyere professionel Azure-anvendelse; Salesforce-delen betyder ikke administratorstatus, enterprise CRM-ejerskab eller ansvar for produktionsdeployment/governance.</p></div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sec-head"><span className="sec-no" data-deep="06" data-quick="03" aria-hidden="true" /><h2>Sådan ville jeg starte, første 30 dage</h2><p className="note">Et praktisk udgangspunkt. Opgaverne tilpasses teamet og det arbejde, der allerede er i gang.</p></div>
            <div className="weeks reveal">{weeks.map((week) => <div className="week" key={week.label}><div className="wno">{week.label}</div><h3>{week.title}</h3><p>{week.text}</p></div>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section contact-section--professional">
          <div className="wrap">
            <div className="contact contact--professional reveal">
              <div className="contact-pro__main">
                <div className="contact__identity contact-pro__identity"><img src="/assets/romaric-portrait.webp" width="512" height="512" decoding="async" alt="Portræt af Romaric Clementi" loading="lazy" /><div><p className="mono">Digital produktion · Indholdssystemer · Web & QA</p><b>Romaric Clementi</b></div></div>
                <p className="mono contact-pro__label">Kontakt</p>
                <h2>Har I brug for en, der kan gøre uklart digitalt arbejde <em>brugbart?</em></h2>
                <p className="contact-pro__intro">Jeg hjælper teams med at skabe struktur i websites, indhold, implementering og QA, fra spredt input og uklare krav til en tydelig første version, der kan gennemgås, udgives og overdrages ordentligt.</p>
                <p className="contact-pro__intro contact-pro__intro--secondary">Jeg søger roller inden for digital produktion, indholdssystemer, web/CMS-implementering og QA i Storkøbenhavn og Øresundsregionen. Jeg er også åben for afgrænsede projekter, hvor et team har brug for praktisk leveringssupport.</p>
                <div className="contact-pro__details" aria-label="Kontaktoplysninger">
                  <a href="tel:+4528737485"><span className="mono">Telefon</span><b>+45 28 73 74 85</b></a>
                  <a href="mailto:clementiromaric@protonmail.com"><span className="mono">E-mail</span><b>clementiromaric@protonmail.com</b></a>
                  <div><span className="mono">Lokation</span><b>Tune, Danmark · Storkøbenhavn / Øresund</b></div>
                  <div><span className="mono">Sprog</span><b>Fransk modersmål · flydende engelsk · operationelt dansk (PD2/B1+)</b></div>
                </div>
              </div>
              <aside className="contact-pro__aside" aria-label="Kontakthandlinger">
                <a className="btn contact-pro__email" href="mailto:clementiromaric@protonmail.com">Skriv til Romaric</a>
                <nav className="contact-pro__links" aria-label="Portfolio-links">
                  <a href="tel:+4528737485"><span>Ring</span><b>+45 28 73 74 85</b></a>
                  <a href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer"><span>Se live arbejde</span><b>Marzieh Nail Atelier</b></a>
                  <a href="https://romaric-operations-portfolio.clementiromaric.workers.dev/" target="_blank" rel="noopener noreferrer"><span>Operations-portfolio</span><b>Indkøb · Planlægning · ERP · Produktdata</b></a>
                </nav>
              </aside>
              <p className="contact-pro__closing">Klar struktur. Praktisk levering. Arbejde, der er nemmere at bruge og nemmere at arbejde videre med.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div className="mark"><b>RC</b><span>Klar digital struktur fra uklare behov.</span></div>
          <p className="fine">Bygget, gennemgået og leveret af Romaric Clementi. AI-assisteret produktion oplyses, hvor den er brugt. © 2026 Romaric Clementi</p>
        </div>
      </footer>
    </>
  );
}
