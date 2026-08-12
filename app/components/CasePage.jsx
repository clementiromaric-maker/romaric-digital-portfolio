import { site } from '../content';

function Header({ c }) {
  return (
    <header className="site-bar">
      <div className="wrap site-bar__inner">
        <a className="brand" href={c.home}><b>RC</b><span>{c.lang === 'da' ? 'Indkøb · Planlægning · ERP' : 'Procurement · Supply Planning · ERP'}</span></a>
        <nav className="nav nav--case" aria-label={c.lang === 'da' ? 'Case-navigation' : 'Case navigation'}>
          <a href={c.home}>{c.back}</a>
          <details className="mobile-menu">
            <summary aria-label={c.lang === 'da' ? 'Åbn mobilmenu' : 'Open mobile menu'}>{c.lang === 'da' ? 'Menu' : 'Menu'}</summary>
            <div className="mobile-menu__panel">
              <a href={c.home}>{c.lang === 'da' ? 'Forside' : 'Home'}</a>
              <a href="/docs/Romaric_Clementi_Professional_CV.pdf">CV</a>
              <a href={`mailto:${site.email}`}>{c.lang === 'da' ? 'Kontakt' : 'Contact'}</a>
            </div>
          </details>
          <span className="lang-switch" aria-label={c.lang === 'da' ? 'Skift sprog' : 'Language switch'}>
            <span className="lang-current" aria-current="page">{c.lang.toUpperCase()}</span><span className="lang-divider" aria-hidden="true">/</span><a href={c.other}>{c.otherLabel}</a>
          </span>
          <a className="button button--small" href={`mailto:${site.email}`}>{c.lang === 'da' ? 'Kontakt' : 'Contact'}</a>
        </nav>
      </div>
    </header>
  );
}

function ERPBoard({ lang }) {
  const isDa = lang === 'da';
  const rows = isDa
    ? [
        ['VARE', 'AX-2041', 'valider status', 'ANSVARLIG KLAR'],
        ['BOM', 'REV C / 3 niveauer', 'sammenlign struktur', 'DOBBELTKONTROL'],
        ['RUTE', 'OP-30', 'bekræft udførelse', 'GODKENDELSE'],
        ['MRP', 'gældende 18. jun.', 'gennemgå behov', 'RESULTATKONTROL'],
        ['DOK.', 'sporbarhedsref. åben', 'afslut overdragelse', 'FRIGIVELSESKONTROL'],
      ]
    : [
        ['ITEM', 'AX-2041', 'validate status', 'OWNER SET'],
        ['BOM', 'REV C / 3 levels', 'compare structure', 'DUAL CHECK'],
        ['ROUTE', 'OP-30', 'confirm execution', 'SIGN-OFF'],
        ['MRP', 'effective 18 Jun', 'review demand', 'RESULT CHECK'],
        ['DOC', 'trace ref open', 'close handover', 'RELEASE CHECK'],
      ];

  return (
    <figure className="case-hero-visual case-hero-visual--erp" role="group" aria-label={isDa ? 'Anonymiseret visualisering af ændringskonsekvenser i ERP' : 'Sanitised ERP change-impact visual'}>
      <div className="erp-board__top"><span>{isDa ? 'BRIEF OM ÆNDRINGSKONSEKVENS / CI-024' : 'CHANGE IMPACT BRIEF / CI-024'}</span><b>{isDa ? 'KLAR TIL GENNEMGANG' : 'REVIEW READY'}</b></div>
      <div className="erp-board__summary">
        <div><small>{isDa ? 'KILDE' : 'SOURCE'}</small><b>{isDa ? 'Godkendt ændring' : 'Approved change'}</b><em>{isDa ? 'versionsstyret' : 'versioned'}</em></div>
        <div><small>{isDa ? 'OMFANG' : 'SCOPE'}</small><b>{isDa ? 'Vare + BOM + rute' : 'Item + BOM + route'}</b><em>{isDa ? 'planlægningspåvirkning' : 'planning impact'}</em></div>
        <div><small>{isDa ? 'ANSVARLIG' : 'OWNER'}</small><b>{isDa ? 'Stamdata / planlægning' : 'Master data / planning'}</b><em>{isDa ? 'navngivne handlinger' : 'named actions'}</em></div>
        <div><small>{isDa ? 'AFGRÆNSNING' : 'BOUNDARY'}</small><b>{isDa ? 'Illustrative ID\'er' : 'Illustrative IDs'}</b><em>{isDa ? 'ingen virksomhedsdata' : 'no company data'}</em></div>
      </div>
      <div className="erp-impact-table">
        <div className="erp-impact-table__head"><span>{isDa ? 'OMRÅDE' : 'AREA'}</span><span>{isDa ? 'NUVÆRENDE REGISTRERING' : 'CURRENT RECORD'}</span><span>{isDa ? 'GENNEMGANG' : 'REVIEW ACTION'}</span><span>{isDa ? 'KONTROLPUNKT' : 'CHECKPOINT'}</span></div>
        {rows.map((row) => (
          <div className="erp-impact-table__row" key={row[0]}>
            <b>{row[0]}</b><span>{row[1]}</span><span>{row[2]}</span><em>{row[3]}</em>
          </div>
        ))}
      </div>
      <div className="erp-board__owners"><small>{isDa ? 'ANSVAR / GODKENDELSESPUNKTER' : 'OWNER / APPROVAL POINTS'}</small><span>{isDa ? 'Input fra Engineering' : 'Engineering input'}</span><i>→</i><span>{isDa ? 'Stamdata' : 'Master data'}</span><i>→</i><span>{isDa ? 'Planlægning' : 'Planning'}</span><i>→</i><span>{isDa ? 'Kontrolleret frigivelse' : 'Controlled release'}</span></div>
      <div className="erp-board__footer"><span>{isDa ? '01 kilde kontrolleret' : '01 source checked'}</span><span>{isDa ? '02 konsekvens vurderet' : '02 impact reviewed'}</span><span>{isDa ? '03 ejer bekræftet' : '03 owner confirmed'}</span><span>{isDa ? '04 overdragelse synlig' : '04 handover visible'}</span></div>
    </figure>
  );
}

function PlanningBoard({ lang }) {
  const isDa = lang === 'da';
  const rows = isDa
    ? [
        ['L-014', '18. jun.', '18. jun.', 'stabil', 'Planlægning', 'overvåg'],
        ['L-027', '20. jun.', '24. jun.', 'følg', 'Indkøb', 'gennemgå alternativ'],
        ['L-031', '21. jun.', 'åben', 'risiko', 'Planlægning', 'eskalér'],
        ['L-044', '26. jun.', '25. jun.', 'stabil', 'Lager', 'afslut'],
      ]
    : [
        ['S-014', '18 Jun', '18 Jun', 'stable', 'Planning', 'monitor'],
        ['S-027', '20 Jun', '24 Jun', 'watch', 'Purchasing', 'review alternative'],
        ['S-031', '21 Jun', 'open', 'risk', 'Planning', 'escalate'],
        ['S-044', '26 Jun', '25 Jun', 'stable', 'Warehouse', 'close'],
      ];
  const stateClass = (state) => {
    if (state === 'stabil') return 'stable';
    if (state === 'følg') return 'watch';
    if (state === 'risiko') return 'risk';
    return state;
  };

  return (
    <figure className="case-hero-visual case-hero-visual--planning" role="group" aria-label={isDa ? 'Anonymiseret overblik over leverandører og materialer' : 'Sanitised supplier and material visibility board'}>
      <div className="planning-board__top"><span>{isDa ? 'OVERBLIK OVER MATERIALEFORPLIGTELSER' : 'MATERIAL COMMITMENT VIEW'}</span><b>{isDa ? 'UGE 25' : 'WEEK 25'}</b></div>
      <div className="planning-board__head"><span>{isDa ? 'LEVERANDØR' : 'SUPPLIER'}</span><span>{isDa ? 'BEHOV' : 'NEED'}</span><span>{isDa ? 'LOVET' : 'PROMISE'}</span><span>{isDa ? 'STATUS' : 'STATUS'}</span><span>{isDa ? 'ANSVARLIG' : 'OWNER'}</span><span>{isDa ? 'NÆSTE' : 'NEXT'}</span></div>
      {rows.map((row) => <div className="planning-board__row" key={row[0]}>{row.map((cell, i) => <span className={i === 3 ? `state state--${stateClass(cell)}` : i === 4 ? 'owner-chip' : ''} key={`${row[0]}-${i}`}>{cell}</span>)}</div>)}
      <div className="planning-board__legend"><span>{isDa ? 'stabil' : 'stable'}</span><span>{isDa ? 'følg' : 'watch'}</span><span>{isDa ? 'risiko' : 'risk'}</span><b>{isDa ? 'navngiven ansvarlig + synlig næste handling' : 'named owner + visible next action'}</b></div>
      <div className="planning-board__ownership"><small>{isDa ? 'OVERDRAGELSESFLOW' : 'HANDOFF FLOW'}</small><span>{isDa ? 'Planlægning' : 'Planning'}</span><i>→</i><span>{isDa ? 'Indkøb' : 'Purchasing'}</span><i>→</i><span>{isDa ? 'Lager' : 'Warehouse'}</span><i>→</i><span>{isDa ? 'Produktion' : 'Production'}</span></div>
    </figure>
  );
}

function SourceBoard({ lang }) {
  const isDa = lang === 'da';
  return (
    <figure className="case-hero-visual case-hero-visual--source" role="group" aria-label={isDa ? 'Reelle skærmudsnit fra Marzieh Nail Atelier' : 'Real Marzieh Nail Atelier website captures'}>
      <div className="source-screen source-screen--large"><img src="/assets/marzieh-homepage-ui-snapshot.webp" alt={isDa ? 'Marzieh Nail Ateliers engelske forside' : 'Current Marzieh Nail Atelier English homepage interface'} width="2048" height="1119" /></div>
      <div className="source-screen source-screen--small source-screen--real"><img src="/assets/marzieh-source-proof-mobile-clean-v1860.webp" alt={isDa ? 'Rent portrætudsnit fra Marzieh Nail Ateliers live-website' : 'Clean portrait mobile proof from the live Marzieh Nail Atelier website'} width="850" height="1788" /></div>
    </figure>
  );
}

function Visual({ type, lang }) {
  if (type === 'erp') return <ERPBoard lang={lang} />;
  if (type === 'planning') return <PlanningBoard lang={lang} />;
  return <SourceBoard lang={lang} />;
}

function ProofKey({ c }) {
  return (
    <aside className="case-proof-key" aria-label={c.proofKeyTitle}>
      <div className="case-proof-key__title"><span>{c.lang === 'da' ? 'DOKUMENTATION' : 'DOCUMENTATION'}</span><b>{c.proofKeyTitle}</b></div>
      <div className="case-proof-key__grid">
        {c.proofTypes.map(([title, text], index) => (
          <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>
        ))}
      </div>
    </aside>
  );
}

export default function CasePage({ content: c, type }) {
  return (
    <>
      <a className="skip-link" href="#case-content">{c.lang === 'da' ? 'Gå til casens indhold' : 'Skip to case content'}</a>
      <Header c={c} />
      <main className="case-page" id="case-content">
        <nav className="case-index" aria-label={c.lang === 'da' ? 'Casekapitler' : 'Case chapters'}>
          <div className="wrap case-index__inner">
            {[["01", c.problemTitle, "#case-01"], ["02", c.modelTitle, "#case-02"], ["03", c.evidenceTitle, "#case-03"], ["04", c.outputTitle, "#case-04"], ...(c.strategicTitle ? [["05", c.strategicTitle, "#case-05"]] : [])].map(([no, label, href]) => (
              <a href={href} key={no}><span>{no}</span><b>{label}</b></a>
            ))}
          </div>
        </nav>
        <section className="case-hero">
          <div className="wrap">
            <p className="eyebrow">{c.eyebrow}</p>
            <div className="case-hero__grid">
              <div>
                <h1>{c.title}</h1>
                <p className="case-hero__lead">{c.lead}</p>
                <p className="case-note">{c.note}</p>
              </div>
              <div className="case-metrics">
                {c.metrics.map(([value, label]) => <div key={`${value}-${label}`}><b>{value}</b><span>{label}</span></div>)}
              </div>
            </div>
            {c.caseSnapshot && (
              <aside className="case-snapshot" aria-label={c.lang === 'da' ? 'Caseoverblik' : 'Case at a glance'}>
                {c.caseSnapshot.map(([label, value], index) => (
                  <div className={index === c.caseSnapshot.length - 1 ? 'case-snapshot__outcome' : ''} key={label}>
                    <span>{label}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </aside>
            )}
            {c.demoLabel && <p className="demo-data-label">{c.demoLabel}</p>}
            <Visual type={type} lang={c.lang} />
            <ProofKey c={c} />
          </div>
        </section>

        <section className="case-section" id="case-01">
          <div className="wrap case-two-col">
            <div className="case-marker"><span>01</span><small>{c.problemTitle}</small></div>
            <div className="case-copy"><h2>{c.problemTitle}</h2><p>{c.problem}</p></div>
          </div>
        </section>

        <section className="case-section case-section--dark" id="case-02">
          <div className="wrap">
            <div className="case-chapter-title"><span>02</span><div><small>{c.modelTitle}</small><h2>{c.modelTitle}</h2></div></div>
            <div className="case-model">
              {c.model.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section" id="case-03">
          <div className="wrap">
            <div className="case-chapter-title"><span>03</span><div><small>{c.evidenceTitle}</small><h2>{c.evidenceTitle}</h2></div></div>
            <div className="evidence-grid">
              {c.evidence.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-section case-section--output" id="case-04">
          <div className="wrap">
            <div className="case-chapter-title"><span>04</span><div><small>{c.outputTitle}</small><h2>{c.outputTitle}</h2></div></div>
            <div className="output-board">
              {c.outputs.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><b>{item}</b><em>{c.outputStatus}</em></div>)}
            </div>
            {c.transfer && (
              <aside className="case-transfer" aria-label={c.transferTitle}>
                <b>{c.transferTitle}</b>
                <div>{c.transfer.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
              </aside>
            )}
            {c.sampleHref && (
              <aside className="case-sample">
                <div><span>PDF / EN + DA</span><b>{c.sampleLabel}</b><small>{c.sampleMeta}</small></div>
                <a className="button" href={c.sampleHref}>{c.lang === 'da' ? 'Hent eksempel' : 'Download sample'} ↓</a>
              </aside>
            )}
            {c.liveHref && <a className="button case-live" href={c.liveHref} target="_blank" rel="noopener noreferrer">{c.liveLabel}</a>}
          </div>
        </section>

        {c.strategicTitle && (
          <section className="case-section case-section--strategic" id="case-05">
            <div className="wrap">
              <div className="case-chapter-title"><span>05</span><div><small>{c.lang === 'da' ? 'NÆSTE SKRIDT' : 'NEXT STEP'}</small><h2>{c.strategicTitle}</h2></div></div>
              <p className="strategic-intro">{c.strategicIntro}</p>
              <div className="strategic-step-grid">
                {c.strategicSteps.map(([title, text], index) => (
                  <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
                ))}
              </div>
              <aside className="strategic-note"><b>{c.lang === 'da' ? 'PRAKTISK FORDEL' : 'PRACTICAL ADVANTAGE'}</b><p>{c.strategicNote}</p></aside>
            </div>
          </section>
        )}

        <section className="case-next">
          <div className="wrap case-next__inner">
            <a href={c.home}>← {c.back}</a>
            <a href={c.nextHref}>{c.next} →</a>
          </div>
        </section>
      </main>
      <footer><div className="wrap footer-inner"><b>RC</b><span>{c.lang === 'da' ? 'Indkøb · Planlægning · ERP' : 'Procurement · Supply Planning · ERP'}</span><a className="footer-companion" href={site.digitalPortfolio} target="_blank" rel="noopener noreferrer">{c.lang === 'da' ? 'Web- og digitalportfolio ↗' : 'Web & Digital Portfolio ↗'}</a><small>© 2026 Romaric Clementi</small></div></footer>
    </>
  );
}
