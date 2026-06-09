const liveUrl = 'https://marziehnail-atelier.dk/en/';

export const metadata = {
  title: 'Marzieh Nail Atelier Case Study | Romaric Clementi',
  description:
    'Website strategy, structure and production for Marzieh Nail Atelier, a live bilingual website for an independent nail atelier in Valby.',
  alternates: {
    canonical: '/work/marzieh-nail-atelier/',
    languages: {
      en: '/work/marzieh-nail-atelier/',
      da: '/da/arbejde/marzieh-nail-atelier/',
    },
  },
  openGraph: {
    title: 'Marzieh Nail Atelier Case Study | Romaric Clementi',
    description: 'From scattered business information to a clear bilingual booking journey.',
    type: 'article',
    images: [{ url: '/assets/marzieh-homepage-ui-snapshot.webp', alt: 'Marzieh Nail Atelier website interface' }],
  },
};

const decisions = [
  ['Clarify the offer', 'Group services and prices around the questions a client needs answered before booking.'],
  ['Build trust before action', 'Place work examples, policies, visit information and practical expectations before the booking decision.'],
  ['Keep both languages aligned', 'Give English and Danish visitors the same service, policy and booking logic.'],
  ['Leave the owner in control', 'Keep business facts, booking links and policy information visible and straightforward to update.'],
];

const evidence = [
  ['Information architecture', 'Homepage, services, work, bridal, FAQ, policies, privacy, visit and booking paths'],
  ['Responsive QA', 'Navigation, cards, screenshots, tap targets, long labels and booking actions'],
  ['Production checks', 'Links, metadata, structured data awareness, local assets and release verification'],
  ['Handover', 'Versioned source package, deployment notes, owner decisions and clear next steps'],
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
    description: 'Bilingual website for an independent nail atelier, covering services, booking, trust and mobile QA.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />
      <header className="bar case-bar">
        <div className="wrap bar__in">
          <a className="brand" href="/#work" aria-label="Back to Romaric Clementi portfolio"><b>RC</b><span>Romaric Clementi</span></a>
          <nav className="case-nav" aria-label="Case study navigation">
            <a href="/#work">← Back to portfolio</a>
            <span className="lang-switch" role="group" aria-label="Language switch"><a aria-current="page" href="/work/marzieh-nail-atelier/">EN</a><span aria-hidden="true">/</span><a href="/da/arbejde/marzieh-nail-atelier/">DA</a></span>
            <a className="btn case-live-cta" href={liveUrl} target="_blank" rel="noopener noreferrer"><span className="case-live-cta__desktop">Visit website ↗</span><span className="case-live-cta__mobile">Website ↗</span></a>
          </nav>
        </div>
      </header>

      <main className="case-page case-page--editorial">
        <section className="case-hero case-hero--editorial">
          <div className="wrap">
            <nav className="case-breadcrumb" aria-label="Breadcrumb"><a href="/">Portfolio</a><span>/</span><strong>Marzieh Nail Atelier</strong></nav>
            <div className="case-title-block">
              <p className="mono">Case study 01</p>
              <h1>Marzieh Nail Atelier</h1>
              <p className="case-subtitle">Website strategy, structure and production for an independent nail atelier in Valby.</p>
              <p className="case-hero__lede">I turned scattered service, pricing, policy and booking information into a bilingual customer journey that is clear on mobile and practical for the owner to maintain.</p>
              <div className="case-hero__actions"><a className="btn" href="#project">View project details</a><a className="text-link" href={liveUrl} target="_blank" rel="noopener noreferrer">Visit live website ↗</a></div>
            </div>

            <div className="project-glance" aria-label="Project at a glance">
              <div><span>Context</span><p>A real implemented project for my wife’s independent business; not a paid external client engagement.</p></div>
              <div><span>My role</span><p>Direction, information architecture, content decisions, implementation review, responsive QA, deployment and handover.</p></div>
              <div><span>Delivery</span><p>Live English and Danish website with service, booking, trust, policy and visit routes.</p></div>
            </div>

            <figure className="case-cover">
              <img className="case-transition-image" src="/assets/marzieh-homepage-ui-snapshot.webp" width="2048" height="1119" fetchPriority="high" decoding="async" alt="Marzieh Nail Atelier live homepage hero with navigation, booking actions and nail imagery" />
              <figcaption>Live production website · English and Danish routes</figcaption>
            </figure>
          </div>
        </section>

        <section id="project" className="case-section">
          <div className="wrap case-section__grid">
            <div className="case-section__heading"><p className="mono">01 / Context</p><h2>A strong service with scattered customer information.</h2></div>
            <div className="case-copy"><p>The atelier needed to make service differences, prices, timing, nail-art options, policies, location and booking easier to understand. The owner also needed one reliable source for the information shown across the website and booking journey.</p><p>The challenge was to create a premium, calm experience without hiding the practical details people need before making an appointment.</p></div>
          </div>
        </section>

        <section className="case-section case-section--role">
          <div className="wrap case-section__grid">
            <div className="case-section__heading"><p className="mono">02 / My contribution</p><h2>From loose material to a working website and handover.</h2></div>
            <div className="case-copy"><ul className="case-contribution-list"><li>Defined the project direction, page structure and customer journey.</li><li>Organised service, pricing, booking, policy and local information.</li><li>Reviewed and revised content and implementation decisions.</li><li>Tested navigation, responsive behaviour, links, labels and booking actions.</li><li>Prepared production releases, deployment notes and owner handover.</li></ul></div>
          </div>
        </section>

        <section className="case-section case-section--dark">
          <div className="wrap">
            <div className="case-section__heading case-section__heading--wide"><p className="mono">03 / Key decisions</p><h2>Four choices shaped the customer journey.</h2></div>
            <div className="decision-grid">{decisions.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="case-section case-section--screens">
          <div className="wrap">
            <div className="case-section__heading case-section__heading--wide"><p className="mono">04 / Interface</p><h2>The screens follow the questions clients ask before booking.</h2></div>
            <div className="case-gallery-editorial">
              <figure className="case-shot case-shot--large"><img src="/assets/marzieh-services-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier service and pricing interface" /><figcaption><span>Services and prices</span>Clarify the offer before the booking decision.</figcaption></figure>
              <figure className="case-shot"><img src="/assets/marzieh-work-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier work gallery interface" /><figcaption><span>Work and trust</span>Show the quality and style clients can expect.</figcaption></figure>
              <figure className="case-shot"><img src="/assets/marzieh-booking-ui-snapshot.webp" width="760" height="520" loading="lazy" decoding="async" alt="Marzieh Nail Atelier booking and visit interface" /><figcaption><span>Booking and visit</span>Make the next step and practical details easy to find.</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="case-section case-section--production">
          <div className="wrap">
            <div className="case-section__heading case-section__heading--wide"><p className="mono">05 / Production and handover</p><h2>The work behind the visible pages.</h2></div>
            <div className="case-evidence-board">{evidence.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
            <div className="production-disclosure"><h3>AI-assisted production</h3><p>Claude, ChatGPT and other AI tools supported research, drafting, code assistance and comparison. I defined the brief and direction, selected and revised the outputs, tested the implementation, made the final decisions and remained responsible for deployment and handover.</p></div>
          </div>
        </section>

        <section className="case-outcome case-outcome--editorial">
          <div className="wrap case-outcome__grid"><div><p className="mono">What I can contribute</p><h2>Clearer structure, careful production and a handover people can use.</h2></div><div><p>This project shows how I work with incomplete business material: identify the decisions, organise the customer journey, direct the production process, test the result and leave the owner with a clearer system.</p><div className="case-outcome__actions"><a className="btn" href={liveUrl} target="_blank" rel="noopener noreferrer">Visit live website ↗</a><a className="btn btn--ghost" href="/#contact">Contact me</a></div></div></div>
        </section>
      </main>

      <footer><div className="wrap foot"><div className="mark"><b>RC</b><span>Unclear human and business need → clear digital system.</span></div><div className="fine">Marzieh Nail Atelier case study · Romaric Clementi</div></div></footer>
    </>
  );
}
