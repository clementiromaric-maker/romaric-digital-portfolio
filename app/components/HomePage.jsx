'use client';

import { useEffect, useState } from 'react';
import { site } from '../content';

function FlowVisual({ type, alt, caption, lang }) {
  const isDa = lang === 'da';

  if (type === 'erp') {
    const routeSteps = isDa
      ? ['Godkendt ændring', 'Konsekvensvurdering', 'ERP-opdatering', 'Kontrolleret frigivelse']
      : ['Approved change', 'Impact review', 'ERP update', 'Controlled release'];

    return (
      <div className="case-visual case-visual--erp" aria-hidden="true">
        <div className="record-head"><span>{isDa ? 'ÆNDRING 024' : 'CHANGE 024'}</span><b>{isDa ? 'GENNEMGÅET' : 'REVIEWED'}</b></div>
        <div className="record-grid">
          <span>{isDa ? 'VARE' : 'ITEM'}</span><strong>AX-2041</strong><span>BOM</span><strong>REV C</strong>
          <span>{isDa ? 'RUTE' : 'ROUTE'}</span><strong>OP-30</strong><span>{isDa ? 'ANSVARLIG' : 'OWNER'}</span><strong>{isDa ? 'PLANLÆGNING' : 'PLANNING'}</strong>
        </div>
        <div className="record-route">
          {routeSteps.map((step) => <span key={step}>{step}</span>)}
        </div>
      </div>
    );
  }
  if (type === 'planning') {
    return (
      <figure className="case-visual case-visual--planning case-visual--document">
        <img
          src={isDa ? '/assets/procurement-sourcing-preview-da.webp' : '/assets/procurement-sourcing-preview-en.webp'}
          alt={alt || (isDa ? 'Illustrativt dashboard til indkøbs- og leverandøropfølgning' : 'Illustrative procurement and supplier-review dashboard preview')}
          width="1360"
          height="753"
          loading="lazy"
          decoding="async"
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    );
  }
  return (
    <div className="case-visual case-visual--source">
      <img
        src="/assets/marzieh-homepage-ui-snapshot.webp"
        alt={isDa
          ? 'Marzieh Nail Ateliers engelske forside med ydelser, booking og tillidsskabende elementer'
          : 'Marzieh Nail Atelier homepage showing the English service, booking and trust journey'}
        width="2048"
        height="1119"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function Header({ c, onNavigate }) {
  return (
    <header className="site-bar">
      <div className="wrap site-bar__inner">
        <a className="brand" href={c.home} aria-label={c.lang === 'da' ? 'Romaric Clementis portfolio for indkøb og ERP' : 'Romaric Clementi operations portfolio home'}>
          <b>RC</b><span>{c.identityLabel}</span>
        </a>
        <nav className="nav" aria-label={c.lang === 'da' ? 'Primær navigation' : 'Primary navigation'}>
          <a href="#proof" onClick={(event) => onNavigate(event, '#proof')}>{c.nav.proof}</a>
          <a href="#ownership" onClick={(event) => onNavigate(event, '#ownership')}>{c.nav.growth}</a>
          <a href="#cases" onClick={(event) => onNavigate(event, '#cases')}>{c.nav.cases}</a>
          <a href="#lab" onClick={(event) => onNavigate(event, '#lab')}>{c.nav.lab}</a>
          <a href="#fit" onClick={(event) => onNavigate(event, '#fit')}>{c.nav.fit}</a>
          <details className="mobile-menu">
            <summary aria-label={c.lang === 'da' ? 'Åbn mobilmenu' : 'Open mobile menu'}>{c.mobileMenu}</summary>
            <div className="mobile-menu__panel">
              <a href="#cases" onClick={(event) => onNavigate(event, '#cases')}>{c.mobileCases}</a>
              <a href="/docs/Romaric_Clementi_Professional_CV.pdf">{c.mobileCv}</a>
              <a href={`mailto:${site.email}`}>{c.mobileContact}</a>
            </div>
          </details>
          <span className="lang-switch" aria-label={c.lang === 'da' ? 'Skift sprog' : 'Language switch'}>
            <a aria-current="page" href={c.home}>{c.lang.toUpperCase()}</a><span>/</span><a href={c.other}>{c.otherLabel}</a>
          </span>
          <a className="button button--small" href={`mailto:${site.email}`}>{c.emailCta}</a>
        </nav>
      </div>
    </header>
  );
}

export default function HomePage({ content: c }) {
  const [mode, setMode] = useState('quick');
  const deepHashes = ['#lab', '#fit', '#route', '#bridge', '#ownership'];

  const scrollToHash = (hash, behavior = 'smooth') => {
    if (deepHashes.includes(hash)) setMode('deep');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior, block: 'start' });
      });
    });
  };

  const navigateToHash = (event, hash) => {
    event.preventDefault();
    if (window.location.hash !== hash) window.history.pushState(null, '', hash);
    scrollToHash(hash);
  };

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash;
      if (hash) scrollToHash(hash, 'auto');
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    const targets = [...document.querySelectorAll('.reveal')];
    let observer;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
    } else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      targets.forEach((el) => observer.observe(el));
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#proof">{c.skip}</a>
      <Header c={c} onNavigate={navigateToHash} />
      <main className={`portfolio mode-${mode}`}>
        <section className="hero" id="top">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="eyebrow reveal">{c.heroKicker}</p>
              <h1 className="reveal">
                {c.heroLines.map((line, index) => <span key={line} className={index === c.heroLines.length - 1 ? 'accent-line' : ''}>{line}</span>)}
              </h1>
              <p className="hero__lead reveal">{c.heroLead}</p>
              <p className="hero__support reveal">{c.heroSupport}</p>
              {c.heroExperience && (Array.isArray(c.heroExperience)
                ? c.heroExperience.map((paragraph) => <p className="hero__experience reveal" key={paragraph}>{paragraph}</p>)
                : <p className="hero__experience reveal">{c.heroExperience}</p>)}
              <p className="hero__languages reveal">{c.languages}</p>
              <div className="actions reveal">
                <a className="button" href="#proof">{c.primaryCta}</a>
                <a className="button button--ghost" href="/docs/Romaric_Clementi_Professional_CV.pdf">{c.secondaryCta}</a>
              </div>
              <div className="view-toggle reveal" role="group" aria-label={c.choose}>
                <span>{c.choose}</span>
                <button type="button" aria-pressed={mode === 'quick'} aria-controls="bridge lab fit route" onClick={() => setMode('quick')}>{c.quick}</button>
                <button type="button" aria-pressed={mode === 'deep'} aria-controls="bridge lab fit route" onClick={() => setMode('deep')}>{c.deep}</button>
              </div>
            </div>

            <aside className="system-map reveal" role="group" aria-label={c.heroScopeTitle}>
              <p className="system-map__eyebrow">{c.heroScopeEyebrow}</p>
              <div className="system-map__proof">
                {c.heroMetrics.map(([value, label]) => (
                  <div key={value}><b>{value}</b><span>{label}</span></div>
                ))}
              </div>
              <h2 className="system-map__title">{c.heroScopeTitle}</h2>
              <div className="system-map__facts">
                {c.quickFacts.map(([value, label]) => <div key={value}><b>{value}</b><span>{label}</span></div>)}
              </div>
            </aside>
          </div>

          <div className="wrap quick-value reveal" role="group" aria-label={c.quickValueTitle}>
            <div className="quick-value__head">
              <span>{c.quickValueEyebrow}</span>
              <b>{c.quickValueTitle}</b>
            </div>
            <div className="quick-value__grid">
              {c.quickValueCards.map(([no, title, text, href, cta]) => (
                <a
                  className="quick-value__card"
                  href={href}
                  key={no}
                  onClick={href.startsWith('#') ? (event) => navigateToHash(event, href) : undefined}
                >
                  <span>{no}</span>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <small>{cta} <i aria-hidden="true">→</i></small>
                </a>
              ))}
            </div>
            <p className="quick-value__proof">{c.quickValueProof}</p>
          </div>
        </section>

        <section className="section section--proof" id="proof">
          <div className="wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">{c.proofEyebrow}</p>
              <h2>{c.proofTitle}</h2>
              <p>{c.proofIntro}</p>
            </div>
            <div className="metric-grid">
              {c.proofSignals.map(([value, label]) => <article className="metric reveal" key={value}><b>{value}</b><p>{label}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section section--materials" id="materials">
          <div className="wrap">
            <div className="materials-proof reveal">
              <div className="materials-proof__head">
                <p className="eyebrow">{c.materialsEvidenceEyebrow}</p>
                <h2>{c.materialsEvidenceTitle}</h2>
                <p>{c.materialsEvidenceIntro}</p>
              </div>
              <div className="materials-proof__grid">
                {c.materialsEvidenceItems.map(([metric, title, text], index) => (
                  <article key={title}>
                    <span>0{index + 1}</span>
                    <b>{metric}</b>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--principles" id="principles">
          <div className="wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">{c.principlesEyebrow}</p>
              <h2>{c.principlesTitle}</h2>
              <p>{mode === 'quick' ? c.principlesQuickIntro : c.principlesIntro}</p>
            </div>
            <div className="principles-grid">
              {c.principles.map(([quote, text], index) => (
                <article className={`principle-card principle-card--${index + 1}${index > 0 ? ' principle-card--deep' : ''} reveal`} key={quote}>
                  <span>0{index + 1}</span>
                  <blockquote>{quote}</blockquote>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark deep-section" id="bridge">
          <div className="wrap">
            <div className="section-heading section-heading--light reveal">
              <p className="eyebrow">{c.bridgeEyebrow}</p>
              <h2>{c.bridgeTitle}</h2>
              <p>{c.bridgeIntro}</p>
            </div>
            <div className="bridge-grid">
              {c.bridgeColumns.map((column, index) => (
                <article className="bridge-card reveal" key={column.label}>
                  <div className="bridge-card__no">0{index + 1}</div>
                  <h3>{column.label}</h3>
                  <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="bridge-flow bridge-flow--statement reveal" role="group" aria-label={c.bridgeFlowTitle}>
              <div className="bridge-flow__title"><span>{c.lang === 'da' ? 'SÅDAN ARBEJDER JEG' : 'HOW I WORK'}</span><b>{c.bridgeFlowTitle}</b></div>
              <p className="bridge-flow__statement">{c.bridgeFlowText}</p>
            </div>
          </div>
        </section>

        <section className="section section--ownership deep-section" id="ownership">
          <div className="wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">{c.ownershipEyebrow}</p>
              <h2>{c.ownershipTitle}</h2>
              <p>{c.ownershipIntro}</p>
            </div>
            <div className="ownership-stage-grid">
              {c.ownershipStages.map(([title, text], index) => (
                <article className={`ownership-stage ownership-stage--${index + 1} reveal`} key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="leadership-panel reveal">
              <div className="leadership-panel__head">
                <span>{c.lang === 'da' ? 'ANSVAR / INDFLYDELSE' : 'OWNERSHIP / INFLUENCE'}</span>
                <h3>{c.leadershipTitle}</h3>
              </div>
              <div className="leadership-grid">
                {c.leadershipProof.map(([title, text], index) => (
                  <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{text}</p></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="cases">
          <div className="wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">{c.casesEyebrow}</p>
              <h2>{c.casesTitle}</h2>
              <p>{c.casesIntro}</p>
            </div>
            <aside className="proof-legend reveal deep-section" aria-label={c.evidenceLegendTitle}>
              <b>{c.evidenceLegendTitle}</b>
              <div>
                {c.evidenceLegend.map(([title, text], index) => (
                  <article className={`proof-legend__item proof-legend__item--${index + 1}`} key={title}>
                    <i>0{index + 1}</i><strong>{title}</strong><small>{text}</small>
                  </article>
                ))}
              </div>
            </aside>
            <div className="case-grid">
              {c.cases.map((item) => (
                <article className={`case-card reveal${item.featured ? ' case-card--flagship' : ''}${item.wide ? ' case-card--wide' : ''}${item.supporting ? ' case-card--supporting' : ''}`} key={item.no}>
                  <div className="case-card__top"><span>{item.no}</span><small>{item.type}</small></div>
                  <FlowVisual type={item.visual} alt={item.visualAlt} caption={item.visualCaption} lang={c.lang} />
                  <div className="case-card__content">
                    <div className="proof-tag-row">{item.proofTags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.businessValue && <p className="case-card__value">{item.businessValue}</p>}
                    <div className="chip-row">{item.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
                    <div className="case-card__actions">
                      <a className="text-link" href={item.href}>{item.cta} <span aria-hidden="true">→</span></a>
                      {item.sampleHref && <a className="sample-link" href={item.sampleHref}>{item.sampleCta} <span aria-hidden="true">↓</span></a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--lab deep-section" id="lab">
          <div className="wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">{c.labEyebrow}</p>
              <h2>{c.labTitle}</h2>
              <p>{c.labIntro}</p>
            </div>
            <div className="approach-note reveal">
              <span>{c.lang === 'da' ? 'VÆRKTØJER, NÅR DE HJÆLPER' : 'TOOLS, WHEN THEY HELP'}</span>
              <p>{c.labApproach}</p>
            </div>
            <div className="lab-grid">
              {c.labCards.map(([title, text]) => <article className="lab-card reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <section className="technology-practice reveal" aria-labelledby="technology-practice-title">
              <div className="technology-practice__head">
                <span>{c.lang === 'da' ? 'TEKNOLOGI I PRAKSIS' : 'TECHNOLOGY IN PRACTICE'}</span>
                <h3 id="technology-practice-title">{c.futureTitle}</h3>
                <p>{c.futureIntro}</p>
              </div>
              <div className="future-principles-statement">
                <p>{c.futureStatement}</p>
              </div>
              <div className="technology-practice__lower">
                <article className="technology-rule">
                  <span>{c.lang === 'da' ? 'PRAKTISK REGEL' : 'PRACTICAL RULE'}</span>
                  <h4>{c.aiPrincipleTitle}</h4>
                  <p>{c.aiPrincipleText}</p>
                </article>
                <article className="technology-uses">
                  <span>{c.lang === 'da' ? 'HVOR DET HJÆLPER' : 'WHERE IT HELPS'}</span>
                  <h4>{c.aiValueTitle}</h4>
                  <p>{c.aiValueIntro}</p>
                  <ul>{c.aiValueItems.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
              <p className="technology-practice__note"><b>{c.aiDisclosureTitle}:</b> {c.aiDisclosureText} {c.protected}</p>
            </section>
          </div>
        </section>

        <section className="section deep-section" id="fit">
          <div className="wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">{c.fitEyebrow}</p>
              <h2>{c.fitTitle}</h2>
            </div>
            <div className="fit-grid">
              {c.fitLanes.map(([title, text], index) => <article className="fit-card reveal" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            {c.additionalOperatingTitle && (
              <aside className="operating-depth reveal" aria-label={c.additionalOperatingTitle}>
                <div><span>{c.additionalOperatingTitle}</span><strong>{c.additionalOperatingLabel}</strong></div>
                <p>{c.additionalOperatingText}</p>
              </aside>
            )}
            {c.industries && (
              <aside className="industry-strip reveal" aria-label={c.industryTitle}>
                <b>{c.industryTitle}</b>
                <div>{c.industries.map((item) => <span key={item}>{item}</span>)}</div>
              </aside>
            )}
            <section className="progression-panel reveal" aria-labelledby="progression-title">
              <div className="progression-panel__head"><span>{c.lang === 'da' ? 'KARRIEREUDVIKLING' : 'CAREER PROGRESSION'}</span><h3 id="progression-title">{c.progressionTitle}</h3></div>
              <div className="progression-grid">
                {c.progressionColumns.map(([title, items], index) => (
                  <article className={`progression-card progression-card--${index + 1}`} key={title}>
                    <span>0{index + 1}</span><h4>{title}</h4><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="section section--route deep-section" id="route">
          <div className="wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">{c.routeEyebrow}</p>
              <h2>{c.routeTitle}</h2>
            </div>
            <div className="week-grid">
              {c.weeks.map(([week, title, text]) => <article className="week-card reveal" key={week}><span>{week}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <section className="horizon-panel reveal" aria-labelledby="horizon-title">
              <div className="horizon-panel__head"><span>{c.lang === 'da' ? 'EFTER DE FØRSTE 90 DAGE' : 'BEYOND THE FIRST 90 DAYS'}</span><h3 id="horizon-title">{c.horizonTitle}</h3></div>
              <div className="horizon-grid">
                {c.horizonSteps.map(([period, title, text]) => <article key={period}><span>{period}</span><h4>{title}</h4><p>{text}</p></article>)}
              </div>
            </section>
            <aside className="boundary reveal"><b>{c.boundaryTitle}</b><p>{c.boundaryText}</p></aside>
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="wrap">
            <div className="contact-panel reveal">
              <div>
                <div className="contact-identity">
                  <img
                    src="/assets/romaric-portrait.webp"
                    width="640"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    alt={c.portraitAlt}
                  />
                  <div>
                    <p className="mono">{c.identityLabel}</p>
                    <b>Romaric Clementi</b>
                  </div>
                </div>
                <p className="eyebrow">{c.contactEyebrow}</p>
                <h2>{c.contactTitle}</h2>
                <p>{c.contactText}</p>
              </div>
              <div className="contact-actions">
                <a className="button button--light" href={`mailto:${site.email}`}>{c.emailCta}</a>
                <a href="/docs/Romaric_Clementi_Professional_CV.pdf">{c.cvCta}</a>
                <a href="/docs/Romaric_Clementi_Workflow_Readiness_Portfolio.pdf">{c.proofCta}</a>
                <a href="/docs/Romaric_Clementi_Procurement_Decision_Supplier_Governance_Demo.pdf">{c.sampleCta}</a>
              </div>
              <div className="contact-meta"><span>{site.location}</span><span>{c.languages}</span><span>{site.email}</span><span>{site.phone}</span></div>
              <div className="portfolio-companion">
                <span>{c.companionLabel}</span>
                <p>{c.companionText}</p>
                <a href={site.digitalPortfolio} target="_blank" rel="noopener noreferrer">{c.companionCta} ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="wrap footer-inner"><b>RC</b><span>{c.footer}</span><a className="footer-companion" href={site.digitalPortfolio} target="_blank" rel="noopener noreferrer">{c.lang === 'da' ? 'Web- og digitalportfolio ↗' : 'Web & Digital Portfolio ↗'}</a><small>© 2026 Romaric Clementi</small></div></footer>
    </>
  );
}
