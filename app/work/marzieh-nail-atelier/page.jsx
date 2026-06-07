const operationsPortfolioUrl = 'https://romaric-operations-portfolio.clementiromaric.workers.dev/';
const liveUrl = 'https://marziehnail-atelier.dk/en/';

export const metadata = {
  title: 'Marzieh Nail Atelier Case Study | Romaric Clementi',
  description:
    'A detailed case study showing how Romaric Clementi turned loose service, trust and booking material into a bilingual, mobile-ready local business website.',
  alternates: {
    canonical: '/work/marzieh-nail-atelier/',
    languages: {
      en: '/work/marzieh-nail-atelier/',
      da: '/da/arbejde/marzieh-nail-atelier/',
    },
  },
  openGraph: {
    title: 'Marzieh Nail Atelier Case Study | Romaric Clementi',
    description: 'From loose business material to a bilingual booking and trust journey.',
    type: 'article',
    images: [{ url: '/assets/marzieh-homepage-ui-snapshot.webp', alt: 'Marzieh Nail Atelier website interface' }],
  },
};

const decisions = [
  ['Offer clarity', 'Services and prices were grouped around the questions a client needs answered before booking.'],
  ['Trust before action', 'Reviews, policies, visit information and founder context were placed before the booking decision.'],
  ['Bilingual parity', 'Danish and English routes follow the same service and trust logic without feeling mechanically translated.'],
  ['Owner control', 'Booking links, policies, visit details and business facts stay visible and easy to update.'],
];

const evidence = [
  ['Route map', 'Homepage, services, work, FAQ, policies, privacy, visit and booking paths'],
  ['Mobile QA', 'Navigation, cards, screenshots, tap targets, long labels and booking actions'],
  ['Trust layer', '5.0 rating, 16 Google reviews, CVR, policies and local visit information'],
  ['Handover', 'Versioned source package, build verification, deployment notes and clear next steps'],
];

export default function MarziehCaseStudy() {
  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Marzieh Nail Atelier website case study',
    creator: { '@type': 'Person', name: 'Romaric Clementi' },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-digital-portfolio.clementiromaric.workers.dev'}/work/marzieh-nail-atelier/`,
    mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://romaric-digital-portfolio.clementiromaric.workers.dev'}/work/marzieh-nail-atelier/`,
    about: { '@type': 'WebSite', name: 'Marzieh Nail Atelier', url: liveUrl },
    inLanguage: ['en', 'da'],
    description: 'Bilingual local business website, booking journey, trust structure and mobile QA.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />
      <header className="bar case-bar">
        <div className="wrap bar__in">
          <a className="brand" href="/#work" aria-label="Back to Romaric Clementi portfolio">
            <b>RC</b><span>Romaric Clementi</span>
          </a>
          <nav className="case-nav" aria-label="Case study navigation">
            <a href="/#work">← Portfolio</a>
            <span className="lang-switch" role="group" aria-label="Language switch">
              <a aria-current="page" href="/work/marzieh-nail-atelier/">EN</a><span aria-hidden="true">/</span><a href="/da/arbejde/marzieh-nail-atelier/">DA</a>
            </span>
            <a className="btn case-live-cta" href={liveUrl} target="_blank" rel="noopener noreferrer"><span className="case-live-cta__desktop">Live site ↗</span><span className="case-live-cta__mobile">Live ↗</span></a>
          </nav>
        </div>
      </header>

      <main className="case-page">
        <section className="case-hero">
          <div className="wrap">
            <a className="case-back" href="/#work">← Selected work</a>
            <div className="case-hero__grid">
              <div>
                <p className="mono">Case 01 · Live local business</p>
                <h1>From loose business material to a calm, credible booking journey.</h1>
                <p className="case-hero__lede">Marzieh Nail Atelier needed more than a polished homepage. It needed one reliable place for services, prices, trust, policies, visit information and booking decisions.</p>
                <div className="case-hero__actions">
                  <a className="btn" href={liveUrl} target="_blank" rel="noopener noreferrer">Open live website ↗</a>
                  <a className="btn btn--ghost" href="#story">Read the case ↓</a>
                </div>
              </div>
              <div className="case-hero__stats" aria-label="Case proof">
                <div><b>5.0</b><span>Google rating</span></div>
                <div><b>16</b><span>Google reviews</span></div>
                <div><b>DA / EN</b><span>Bilingual routes</span></div>
                <div><b>Live</b><span>Production website</span></div>
              </div>
            </div>

            <div className="case-browser case-browser--hero">
              <div className="browser__bar"><div className="browser__dots" aria-hidden="true"><i /><i /><i /></div><span className="browser__url">marziehnail-atelier.dk</span><span className="browser__live">● Live</span></div>
              <div className="case-browser__canvas"><img className="case-transition-image" src="/assets/marzieh-homepage-ui-snapshot.webp" width="1600" height="1050" fetchPriority="high" decoding="async" alt="Marzieh Nail Atelier homepage showing navigation, service cards and booking journey" /></div>
            </div>
          </div>
        </section>

        <section id="story" className="case-chapter">
          <div className="wrap case-chapter__grid">
            <div className="case-chapter__title"><span className="case-number">01</span><p className="mono">The input</p><h2>A strong service with scattered customer information.</h2></div>
            <div className="case-copy"><p>Clients needed to understand service differences, prices, timing, nail-art options, policies, location and how to book. The business owner also needed control over what remained the official source.</p><p>The challenge was to create premium calm without hiding practical information or making the journey feel complicated.</p></div>
          </div>
        </section>

        <section className="case-chapter case-chapter--ink">
          <div className="wrap">
            <div className="case-chapter__title case-chapter__title--wide"><span className="case-number">02</span><p className="mono">The structure</p><h2>Four decisions shaped the system.</h2></div>
            <div className="decision-grid">
              {decisions.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-chapter case-visual-story">
          <div className="wrap">
            <div className="case-chapter__title case-chapter__title--wide"><span className="case-number">03</span><p className="mono">The visible system</p><h2>Real screens, arranged around the customer decision.</h2></div>
            <div className="case-gallery-editorial">
              <figure className="case-shot case-shot--large"><img src="/assets/marzieh-services-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier service and pricing interface" /><figcaption><span className="mono">Offer</span>Service and pricing clarity</figcaption></figure>
              <figure className="case-shot"><img src="/assets/marzieh-work-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier work gallery interface" /><figcaption><span className="mono">Confidence</span>Work and visual proof</figcaption></figure>
              <figure className="case-shot"><img src="/assets/marzieh-booking-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier booking and visit interface" /><figcaption><span className="mono">Action</span>Booking and arrival path</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="case-chapter">
          <div className="wrap">
            <div className="case-chapter__title case-chapter__title--wide"><span className="case-number">04</span><p className="mono">Evidence and handover</p><h2>The work behind the screen.</h2></div>
            <div className="case-evidence-board">
              {evidence.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-outcome">
          <div className="wrap case-outcome__grid">
            <div><p className="mono">What this proves</p><h2>The final website is visible. The deeper value is the operational clarity underneath.</h2></div>
            <div><p>I can take loose client material, identify the trust and decision gaps, structure a bilingual customer journey, build a responsive first version, test the details and leave a clearer handover.</p><div className="case-outcome__actions"><a className="btn" href={liveUrl} target="_blank" rel="noopener noreferrer">Open live website ↗</a><a className="btn btn--ghost" href="/#contact">Discuss a role or project</a></div></div>
          </div>
        </section>
      </main>

      <footer><div className="wrap foot"><div className="mark"><b>RC</b><span>Unclear human and business need → clear digital system.</span></div><div className="case-footer-meta"><a className="companion-foot-link" href={operationsPortfolioUrl} target="_blank" rel="noopener noreferrer">Operations, ERP &amp; Workflow Portfolio ↗</a><div className="fine">Marzieh Nail Atelier case study · Romaric Clementi</div></div></div></footer>
    </>
  );
}
