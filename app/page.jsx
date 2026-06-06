'use client';

import { useEffect } from 'react';

const liveLinks = {
  marzieh: 'https://marziehnail-atelier.dk/en/',
  clementi: 'https://clementi-ai-workflow-pages-preview.pages.dev/',
  foerstematch: 'https://foerstematch-pilot.pages.dev/',
};

const pilotProjects = [
  {
    eyebrow: 'Service system',
    status: 'Controlled preview',
    title: 'Clementi AI Workflow',
    role: 'Multilingual service and workflow system',
    flow: ['Audit', 'Signal', 'Source', 'Flow'],
    text:
      'A service site and workflow concept for small businesses that need clearer offers, cleaner source material and safer AI use.',
    tags: ['Offer structure', 'AEO / schema', 'Notes hub', 'QA / versioning'],
    link: liveLinks.clementi,
    linkLabel: 'Open preview',
    bestFor: 'Strongest for AI-forward teams, Webflow/AEO agencies and startups.',
  },
  {
    eyebrow: 'Public-sector style pilot',
    status: 'Pilot',
    title: 'FørsteMatch',
    role: 'Candidate, company and advisor clarity flow',
    flow: ['Candidate', 'Company', 'Advisor', 'Brief', 'Meeting'],
    text:
      'A first-conversation flow before official praktik or employment steps, with visible boundaries, data handling and role separation.',
    tags: ['Stakeholder map', 'DA / EN', 'Form logic', 'Data and privacy'],
    link: liveLinks.foerstematch,
    linkLabel: 'Open pilot',
    bestFor: 'Strongest for delivery, project support and structured-flow roles.',
  },
  {
    eyebrow: 'Selective UX proof',
    status: 'Walkthrough on request',
    title: 'HamdamBridge',
    role: 'Privacy-first introduction pilot',
    flow: ['Signal', 'Review', 'Circle', 'Two yeses', 'Meet'],
    text:
      'A consent-led introduction concept for cross-cultural and diaspora users, shared selectively because the topic is personal.',
    tags: ['Trust UX', 'Consent flow', 'Emotional safety', 'Farsi / EN'],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Best shared with culture, community, product and privacy-minded teams.',
  },
];

const capabilities = [
  {
    title: 'Website production',
    text: 'Landing pages, service pages, route logic, forms, FAQ, policy paths, multilingual content and basic SEO structure.',
  },
  {
    title: 'UX implementation',
    text: 'Audience paths, trust barriers, mobile navigation, form friction and content hierarchy.',
  },
  {
    title: 'QA and deployment',
    text: 'Mobile checks, link review, copy consistency, structured-data sanity, version notes and Cloudflare/GitHub flow.',
  },
  {
    title: 'AI-assisted prototypes',
    text: 'Small prototypes, source-of-truth logic, reusable prompts, approval points and safe-use boundaries before automation.',
  },
  {
    title: 'Operational translation',
    text: 'Turning vague client input into scope, ownership, handovers, next actions and build-ready notes.',
  },
  {
    title: 'Niche and trust thinking',
    text: 'Spotting underserved friction, unclear offers, privacy concerns and customer hesitation early.',
  },
];

const weeks = [
  {
    label: 'Week 01',
    title: 'Understand and audit',
    text: 'Learn the workflow, review one site or client flow, map pages, forms and mobile friction, then write a short QA note.',
  },
  {
    label: 'Week 02',
    title: 'Support production',
    text: 'Help with page updates, service/content structure, landing-page copy, internal links, UX fixes and multilingual cleanup.',
  },
  {
    label: 'Week 03',
    title: 'Test and document',
    text: 'Mobile checks, link/anchor QA, form-journey review, proofreading and metadata sanity checks.',
  },
  {
    label: 'Week 04',
    title: 'Deliver useful output',
    text: 'A final improvement list, prototype or implementation package, handover notes and next steps.',
  },
];

export default function Home() {
  useEffect(() => {
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
        Skip to selected work
      </a>

      <header className="bar">
        <div className="wrap bar__in">
          <a className="brand" href="#top" aria-label="Romaric Clementi portfolio home">
            <b>RC</b>
            <span>Romaric Clementi</span>
          </a>
          <nav className="navlinks" aria-label="Primary navigation">
            <a href="#approach">Approach</a>
            <a href="#work">Work</a>
            <a href="#fit">Fit</a>
            <a href="#process">First 30 days</a>
            <a className="btn" href="mailto:clementiromaric@protonmail.com">
              Email me
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap hero__grid">
            <div>
              <p className="mono kicker reveal" style={{ transitionDelay: '.04s' }}>
                Portfolio for web agencies, digital teams and startups
              </p>
              <h1 id="hero-title" className="reveal" style={{ transitionDelay: '.12s' }}>
                Clear digital
                <br />
                structure from
                <br />
                <em>unclear</em> needs.
              </h1>
              <p className="lede reveal" style={{ transitionDelay: '.22s' }}>
                I turn messy briefs into useful first versions that teams can test, hand over and improve.
              </p>
              <p className="sub reveal" style={{ transitionDelay: '.3s' }}>
                Websites, UX flows, content systems, forms and QA notes, built with an operations mindset.
              </p>
              <div className="hero__cta reveal" style={{ transitionDelay: '.38s' }}>
                <a className="btn" href="#work">
                  Selected work ↓
                </a>
                <a className="btn btn--ghost" href="#process">
                  How I would start
                </a>
              </div>
            </div>

            <aside className="spec reveal" style={{ transitionDelay: '.28s' }} aria-label="Portfolio quick facts">
              <dl>
                <div className="row">
                  <dt className="mono">Best fit</dt>
                  <dd>Website production, UX implementation, digital delivery support and QA</dd>
                </div>
                <div className="row">
                  <dt className="mono">Proof</dt>
                  <dd>Live local business site, 5.0 rating, 16 reviews and DA/EN routes</dd>
                </div>
                <div className="row">
                  <dt className="mono">Based</dt>
                  <dd>Greater Copenhagen · Tune, Denmark</dd>
                </div>
                <div className="row">
                  <dt className="mono">Languages</dt>
                  <dd>French native · English fluent · Danish operational</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="proof-strip" aria-label="Proof signals">
          <div className="wrap proof-grid reveal">
            <div>
              <b>Live business</b>
              <span>Not a tutorial project</span>
            </div>
            <div>
              <b>Real booking path</b>
              <span>Service, trust, policy and CTA flow</span>
            </div>
            <div>
              <b>3 focused pilots</b>
              <span>AI workflow, employment clarity and trust UX</span>
            </div>
            <div>
              <b>Operations brain</b>
              <span>Flow, owners, handovers and QA</span>
            </div>
          </div>
        </section>

        <section id="approach">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">01</span>
              <h2>How I work</h2>
              <p className="note">Operations-trained thinking applied to websites, content and digital flows.</p>
            </div>
            <div className="approach-grid">
              <p className="approach reveal">
                I think in <b>flow, handovers, execution and visible next actions</b>, then build the structure underneath.
              </p>
              <div className="reveal">
                <p>
                  Operations, ERP, planning, master data and supplier work trained me to read a process, find where it breaks, and turn vague input into ownership and build-ready notes.
                </p>
                <p>
                  I use the same rhythm for web work: understand the real need, build the first useful version, test it on mobile and document the next step.
                </p>
              </div>
            </div>

            <div className="backbone reveal" aria-label="Operations backbone proof">
              <div className="backbone__copy">
                <p className="mono">Operations backbone</p>
                <h3>Friction first. Tools second.</h3>
                <p>
                  Before building a page, flow or prototype, I look for weak sources, unclear owners and fragile handovers. The numbers here are background proof from ERP, MRP, master data and supplier follow-up work.
                </p>
                <div className="method-strip" aria-label="Working rhythm">
                  {['Friction', 'Source', 'Owner', 'Review', 'Reuse'].map((step, index) => (
                    <span key={step}>
                      {step}
                      {index < 4 ? <i aria-hidden="true">→</i> : null}
                    </span>
                  ))}
                </div>
              </div>
              <div className="metric-grid" aria-label="Operations proof metrics">
                <div>
                  <b>2,000+</b>
                  <span>ERP item structures</span>
                </div>
                <div>
                  <b>200+</b>
                  <span>multi-level parts set up</span>
                </div>
                <div>
                  <b>30+</b>
                  <span>EU/US suppliers coordinated</span>
                </div>
                <div>
                  <b>5 / 40+</b>
                  <span>production lines and variants supported</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">02</span>
              <h2>Selected work</h2>
              <p className="note">One live business first, focused pilots second.</p>
            </div>

            <article className="feature reveal" aria-labelledby="marzieh-title">
              <div className="browser">
                <div className="browser__bar">
                  <div className="browser__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="browser__url">marziehnail-atelier.dk</span>
                  <span className="browser__live">● Live</span>
                </div>
                <div className="browser__view">
                  <div className="browser__copy">
                    <span className="eyebrow">Private nail atelier · Valby</span>
                    <h3>
                      Art You Wear.
                      <br />
                      Care You Remember.
                    </h3>
                    <p>A refined bilingual presence with clear services, trust signals and a calm booking path.</p>
                    <a className="pill" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">
                      Visit live site
                    </a>
                  </div>
                  <div className="browser__media">
                    <img
                      src="/assets/marzieh-homepage-ui-snapshot.webp"
                      alt="Marzieh Nail Atelier homepage UI snapshot showing navigation, hero, booking path and service cards"
                      className="ui-shot"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              <div className="case-body">
                <div className="case-head">
                  <div id="marzieh-title" className="ttl">
                    Marzieh Nail Atelier<span>Real local business website · live in production</span>
                  </div>
                  <span className="badge badge--live">Strongest proof</span>
                </div>

                <dl className="field">
                  <dt>Problem</dt>
                  <dd>
                    A premium one-to-one nail atelier needed clear services, booking confidence, local trust, policies and mobile readability.
                  </dd>
                </dl>
                <dl className="field">
                  <dt>My role</dt>
                  <dd>
                    I shaped the concept, service structure, copy flow, trust sections, mobile QA and deployment-safe iterations.
                  </dd>
                </dl>
                <dl className="field">
                  <dt>Built</dt>
                  <dd>
                    Homepage, services and pricing, work gallery, bridal route, FAQ, policies, privacy, visit path, booking links, local SEO signals and schema awareness.
                  </dd>
                </dl>
                <dl className="field">
                  <dt>Agency relevance</dt>
                  <dd>
                    Shows practical production: real business content, trust UX, mobile journey, SEO/schema awareness, booking CTA logic and repeated QA.
                  </dd>
                </dl>

                <div className="before-after" aria-label="Marzieh Nail Atelier before and after proof">
                  <div>
                    <span className="mono">Before</span>
                    <p>
                      Strong service skill and visual taste existed, but the public system needed one source of truth for services, policies, booking, trust proof and local visibility.
                    </p>
                  </div>
                  <div>
                    <span className="mono">After</span>
                    <p>
                      A bilingual customer journey aligned services, appointment path, policies, trust signals, Google Business, Planway/Jazzy logic and calmer brand language.
                    </p>
                  </div>
                  <div>
                    <span className="mono">What it proves</span>
                    <p>
                      The output looks like a website. The real work is customer flow, policy clarity, trust proof and repeatable owner control.
                    </p>
                  </div>
                </div>

                <div className="gallery" aria-label="Marzieh Nail Atelier UI snapshots">
                  <div className="g">
                    <img src="/assets/marzieh-services-ui-snapshot.webp" alt="Marzieh Nail Atelier services UI snapshot" loading="lazy" />
                  </div>
                  <div className="g">
                    <img src="/assets/marzieh-work-ui-snapshot.webp" alt="Marzieh Nail Atelier work gallery UI snapshot" loading="lazy" />
                  </div>
                  <div className="g">
                    <img src="/assets/marzieh-booking-ui-snapshot.webp" alt="Marzieh Nail Atelier visit and booking UI snapshot" loading="lazy" />
                  </div>
                </div>

                <div className="case-foot">
                  <a className="linkclay" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">
                    Open Marzieh Nail Atelier →
                  </a>
                  <div className="stat" aria-label="Public proof facts">
                    <div className="s">
                      <b>5.0</b>
                      <span>Google rating</span>
                    </div>
                    <div className="s">
                      <b>16</b>
                      <span>Client reviews</span>
                    </div>
                    <div className="s">
                      <b>DA / EN</b>
                      <span>Multilingual</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="pilots" aria-label="Pilot projects">
              {pilotProjects.map((project) => (
                <article className="pcard reveal" key={project.title}>
                  <div className="pcard__top">
                    <span className="mono">{project.eyebrow}</span>
                    <span className="badge">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="role">{project.role}</p>
                  <div className="flow" aria-label={`${project.title} flow`}>
                    {project.flow.map((step, index) => (
                      <span key={step}>
                        {step}
                        {index < project.flow.length - 1 ? <i aria-hidden="true">→</i> : null}
                      </span>
                    ))}
                  </div>
                  <p>{project.text}</p>
                  <p className="best-for">{project.bestFor}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <b key={tag}>{tag}</b>
                    ))}
                  </div>
                  {project.link ? (
                    <a className="linkclay pcard__link" href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel} →
                    </a>
                  ) : (
                    <span className="pcard__note">{project.linkLabel}</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fit">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">03</span>
              <h2>Target fit</h2>
              <p className="note">Where I can create value fastest.</p>
            </div>

            <div className="fit-summary reveal">
              <p className="mono">Best match right now</p>
              <h3>Teams that need reliable digital production support when the brief is messy, content is scattered or a first version needs to ship.</h3>
              <p>
                I bring operations discipline to web work: structure the input, make the journey readable, test the details and leave a useful handover. For deeper engineering, I contribute best inside a team with technical leadership.
              </p>
            </div>

            <div className="target-grid reveal">
              <article>
                <span className="mono">Established agencies</span>
                <h3>Production muscle and operational discipline</h3>
                <p>
                  I support client work with page structure, service flows, trust sections, mobile QA and handover notes. You get dependable execution across client input, content, UX and delivery.
                </p>
              </article>
              <article>
                <span className="mono">Webflow / WordPress / Shopify shops</span>
                <h3>Fast structure and platform adaptability</h3>
                <p>
                  I help organize service pages, content hierarchy, forms, SEO basics and mobile checks. I learn tools quickly because the core work transfers across platforms: flow and QA.
                </p>
              </article>
              <article>
                <span className="mono">Startups and product teams</span>
                <h3>Useful first versions before overbuilding</h3>
                <p>
                  I turn fuzzy ideas into concrete landing pages, onboarding flows, customer journeys, prototypes and documentation that make the next decision easier.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="capabilities">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">04</span>
              <h2>Where I help a team</h2>
              <p className="note">Strongest where client input, content, UX and QA need to connect.</p>
            </div>
            <div className="caps reveal">
              {capabilities.map((capability, index) => (
                <div className="cap" key={capability.title}>
                  <div className="n">{String(index + 1).padStart(2, '0')}</div>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </div>
              ))}
            </div>

            <div className="exposure reveal">
              <p className="mono lab">Working exposure, hands-on and honest</p>
              <div className="chips" aria-label="Working exposure">
                {[
                  'HTML / CSS',
                  'Responsive layouts',
                  'Static site structure',
                  'Basic JavaScript',
                  'Cloudflare Pages / Workers',
                  'GitHub deploy',
                  'SEO metadata',
                  'JSON-LD / schema',
                  'Forms & journeys',
                  'PDF deliverables',
                  'Multilingual content',
                  'Mobile QA',
                  'AI-assisted prototyping',
                  'Documentation',
                ].map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
              <p className="caveat">
                Presented honestly: recent builds are custom static and Cloudflare-based. I can learn Webflow, WordPress, Shopify or Umbraco because the content, flow and QA thinking transfers.
              </p>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">05</span>
              <h2>How I would start, first 30 days</h2>
              <p className="note">A simple structure that makes it easy to say yes. Tasks adapt to the team.</p>
            </div>
            <div className="weeks reveal">
              {weeks.map((week) => (
                <div className="week" key={week.label}>
                  <div className="wno">{week.label}</div>
                  <h3>{week.title}</h3>
                  <p>{week.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="contact reveal">
              <p className="mono">Contact</p>
              <h2>
                Let&apos;s build the first <em>useful</em> version.
              </h2>
              <div className="row2">
                <a className="btn" href="mailto:clementiromaric@protonmail.com">
                  clementiromaric@protonmail.com
                </a>
                <div className="meta">
                  <div className="m">
                    <span className="mono">Location</span>
                    <b>Greater Copenhagen · Tune, Denmark</b>
                  </div>
                  <div className="m">
                    <span className="mono">Languages</span>
                    <b>French native · English fluent · Danish operational</b>
                  </div>
                  <div className="m">
                    <span className="mono">Live proof</span>
                    <b>
                      <a href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">
                        marziehnail-atelier.dk
                      </a>
                    </b>
                  </div>
                </div>
              </div>
              <p className="avail">
                Best fit: website production, UX implementation, digital delivery support, practical prototypes, QA and documentation. Open to a scoped trial or <b>virksomhedspraktik</b> when that is the right practical route to test cooperation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div className="mark">
            <b>RC</b>
            <span>Unclear business need → clear digital structure.</span>
          </div>
          <p className="fine">Hand-built. Consider this portfolio itself case study 05. © 2026 Romaric Clementi</p>
        </div>
      </footer>
    </>
  );
}
