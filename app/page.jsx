'use client';

import { useEffect } from 'react';

const liveLinks = {
  marzieh: 'https://marziehnail-atelier.dk/en/',
  clementi: 'https://clementi-ai-workflow-pages-preview.pages.dev/',
  foerstematch: 'https://foerstematch-pilot.pages.dev/',
  hamdam: 'https://hamdambridge-private-pilot.clementiromaric.workers.dev/',
};

const pilotProjects = [
  {
    eyebrow: 'Service system',
    status: 'Controlled preview',
    title: 'Clementi AI Workflow',
    role: 'Multilingual service + workflow system',
    flow: ['Audit', 'Signal', 'Source', 'Flow'],
    text:
      'Practical AI readiness for SMEs: service architecture, notes, audit products, source-of-truth logic and owner approval points — value before automation, not autonomous-agent hype.',
    tags: ['Offer architecture', 'AEO / schema thinking', 'Notes hub', 'QA / versioning'],
    link: liveLinks.clementi,
    bestFor: 'Best for Kvalifik, startups and AI-forward teams.',
  },
  {
    eyebrow: 'Public-sector style pilot',
    status: 'Pilot',
    title: 'FørsteMatch',
    role: 'Candidate · company · advisor clarity flow',
    flow: ['Candidate', 'Company', 'Advisor', 'Brief', 'Meeting'],
    text:
      'A bounded, privacy-aware first conversation before official praktik/employment processes — with consent, role separation and data handling kept visible.',
    tags: ['Stakeholder map', 'DA / EN', 'Form logic', 'Data & privacy'],
    link: liveLinks.foerstematch,
    bestFor: 'Best for delivery, project and structured-flow roles.',
  },
  {
    eyebrow: 'Experimental UX',
    status: 'Selective proof',
    title: 'HamdamBridge',
    role: 'Privacy-first introduction pilot',
    flow: ['Signal', 'Review', 'Circle', 'Two yes', 'Meet'],
    text:
      'Trust as UX for cross-cultural and diaspora users: human review, consent-before-contact, safety pages and Farsi/English routes — softer discovery, not swipe-based performance.',
    tags: ['Information architecture', 'Consent flow', 'Emotional UX', 'Farsi / EN'],
    link: liveLinks.hamdam,
    bestFor: 'Best for culture, community, product and privacy-minded teams.',
  },
];

const capabilities = [
  {
    title: 'Website production',
    text: 'Landing and service pages, route structure, internal links, forms, FAQ/policy logic, multilingual content and basic SEO structure.',
  },
  {
    title: 'UX implementation',
    text: 'Audience paths, trust barriers, next-step clarity, mobile navigation, form friction, content hierarchy and user-flow notes.',
  },
  {
    title: 'QA & deployment',
    text: 'Mobile checks, link/anchor review, copy consistency, structured-data sanity, version notes and Cloudflare/GitHub deploy flow.',
  },
  {
    title: 'AI-assisted prototypes',
    text: 'Practical prototypes, source-of-truth logic, prompt/workflow structure, approval gates and safe-use boundaries before automation.',
  },
  {
    title: 'Operational translation',
    text: 'Turning vague client input into scope, flow, ownership, data needs, handovers and implementation-ready notes.',
  },
  {
    title: 'Niche & trust thinking',
    text: 'Spotting underserved friction, unclear offers, privacy concerns and customer hesitation before the solution becomes obvious.',
  },
];

const weeks = [
  {
    label: 'Week 01',
    title: 'Understand & audit',
    text: 'Learn the team workflow, review one site or client flow, map pages, forms and mobile friction, and write a short clarity/QA note.',
  },
  {
    label: 'Week 02',
    title: 'Support production',
    text: 'Help with page updates, service/content structure, landing-page copy, internal links, simple UX improvements and multilingual cleanup.',
  },
  {
    label: 'Week 03',
    title: 'Test & document',
    text: 'Mobile checks, link/anchor QA, form-journey review, proofreading and structured-data/metadata sanity checks.',
  },
  {
    label: 'Week 04',
    title: 'Deliver useful output',
    text: 'A final improvement list, prototype or implementation package, clear handover notes and suggested next steps.',
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
                Portfolio — web agencies · digital teams · startups
              </p>
              <h1 id="hero-title" className="reveal" style={{ transitionDelay: '.12s' }}>
                Clear digital
                <br />
                structure from
                <br />
                <em>unclear</em> needs.
              </h1>
              <p className="lede reveal" style={{ transitionDelay: '.22s' }}>
                I see the real need behind a messy idea — and make the first useful version concrete.
              </p>
              <p className="sub reveal" style={{ transitionDelay: '.3s' }}>
                Websites, customer journeys, content systems, forms, trust pages, QA notes and AI-assisted
                prototypes — built with an operations mindset.
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
                  <dd>Website production · UX implementation · digital delivery · QA</dd>
                </div>
                <div className="row">
                  <dt className="mono">Proof</dt>
                  <dd>Live local business site · 5.0 rating · 16 reviews · DA/EN</dd>
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
              <b>3 bounded pilots</b>
              <span>AI workflow, employment clarity, trust UX</span>
            </div>
            <div>
              <b>Operations brain</b>
              <span>Flow, handovers, QA and next actions</span>
            </div>
          </div>
        </section>

        <section id="approach">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">01</span>
              <h2>How I think</h2>
              <p className="note">An operations background, pointed at the web.</p>
            </div>
            <div className="approach-grid">
              <p className="approach reveal">
                I think in <b>flow, handovers, execution and visible next actions</b> — then build the structure
                underneath.
              </p>
              <div className="reveal">
                <p>
                  My background is in operations, ERP, planning, master data and supplier coordination. That trained
                  me to read a process, find where the work actually breaks, and turn vague input into scope,
                  ownership, data needs and implementation-ready notes.
                </p>
                <p>
                  I now apply that same mindset to website production, UX implementation and practical digital
                  prototypes: take a messy idea, find the real structure, build a useful first version, test it on
                  mobile, and document the next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">02</span>
              <h2>Selected work</h2>
              <p className="note">One live business first. Three bounded pilots second.</p>
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
                    <p>A refined, multilingual presence with a calm booking journey — the site as I built and shipped it.</p>
                    <a className="pill" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">
                      Visit live site
                    </a>
                  </div>
                  <div className="browser__media">
                    <img
                      src="/assets/gallery-pearl-satin-glaze-almond.webp"
                      alt="Pearl satin glaze almond nails from Marzieh Nail Atelier"
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
                    A premium one-to-one nail atelier needed a clearer digital presence: service choice, booking
                    confidence, local trust, policies and mobile readability.
                  </dd>
                </dl>
                <dl className="field">
                  <dt>My role</dt>
                  <dd>
                    Concept structure, service architecture, multilingual copy support, UX flow, trust sections, mobile
                    review, QA and deployment-safe iteration.
                  </dd>
                </dl>
                <dl className="field">
                  <dt>Built</dt>
                  <dd>
                    Homepage, service and pricing structure, gallery/work and bridal routes, FAQ, policies, privacy,
                    visit/contact journey, booking links, local SEO signals and structured-data awareness.
                  </dd>
                </dl>
                <dl className="field">
                  <dt>Agency relevance</dt>
                  <dd>
                    Shows practical production: real business content, trust architecture, mobile-first customer journey,
                    SEO/schema awareness, booking CTA logic and repeated QA.
                  </dd>
                </dl>

                <div className="gallery" aria-label="Marzieh Nail Atelier project images">
                  <div className="g">
                    <img src="/assets/gallery-tortoise-ivory-almond.webp" alt="Tortoise ivory almond nail design" loading="lazy" />
                  </div>
                  <div className="g">
                    <img src="/assets/gallery-gilded-bridal-french.webp" alt="Gilded bridal French nails" loading="lazy" />
                  </div>
                  <div className="g">
                    <img src="/assets/founder-marzieh-hand-face.webp" alt="Marzieh Nail Atelier founder portrait with nails" loading="lazy" />
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
                  <a className="linkclay pcard__link" href={project.link} target="_blank" rel="noopener noreferrer">
                    Open project →
                  </a>
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
              <p className="note">Different teams need different proof. This is how I would position the same portfolio.</p>
            </div>
            <div className="target-grid reveal">
              <article>
                <span className="mono">Established agencies</span>
                <h3>Production, UX implementation and QA</h3>
                <p>
                  Lead with the live Marzieh site, then show operational translation, QA discipline and the first-30-days plan. Relevant for Twentyfour, Adapt and Dwarf-style teams.
                </p>
              </article>
              <article>
                <span className="mono">Webflow / WordPress / Shopify shops</span>
                <h3>Structure, content and platform learning</h3>
                <p>
                  I am not claiming senior platform mastery. I can learn the tool fast because the transferable work is service structure, content hierarchy, SEO/schema basics and mobile QA.
                </p>
              </article>
              <article>
                <span className="mono">Startups</span>
                <h3>Ship useful first versions</h3>
                <p>
                  Useful when the work is undefined: landing pages, onboarding copy, forms, email/customer flows, AI-assisted prototypes and practical growth experiments.
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
              <p className="mono lab">Working exposure — hands-on, not senior-level mastery</p>
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
                Presented honestly: recent builds are custom static/Cloudflare style. I am comfortable learning a
                team&apos;s platform — Webflow, WordPress, Shopify or Umbraco — because the structure-and-QA thinking
                transfers.
              </p>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">05</span>
              <h2>How I would start — first 30 days</h2>
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
                Open to a junior or entry role — or a short <b>virksomhedspraktik</b> / scoped trial if useful — in
                website production, UX implementation, digital delivery and AI-assisted web prototyping. Best fit:
                turning business input into usable web structure, content, prototypes, QA and documentation.
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
          <p className="fine">Hand-built — consider this portfolio itself case study 05 · © 2026 Romaric Clementi</p>
        </div>
      </footer>
    </>
  );
}
