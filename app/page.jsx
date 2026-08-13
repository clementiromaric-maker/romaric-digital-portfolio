'use client';

import { useEffect, useState } from 'react';

const liveLinks = {
  marzieh: 'https://marziehnail-atelier.dk/en/',
};

const proofSignals = [
  { value: 'Live business', label: 'Marzieh Nail Atelier in production' },
  { value: 'Research to release', label: 'Market signals, positioning, identity, offer, web, search and handover' },
  { value: 'Local search + Google', label: 'Metadata, structured data, Business Profile, indexing and booking measurement' },
  { value: '163 interactions', label: 'Google Business Profile · July 2026 business-level signal' },
  { value: 'GitHub + Cloudflare', label: 'Versioned source, deployment QA, release notes and handover' },
  { value: 'Operations backbone', label: 'ERP, suppliers, quality discipline, handovers and documentation' },
];


const roleFitLanes = [
  {
    label: '01',
    title: 'Website production support',
    text: 'Page builds, structured content, reusable service/product sections, local proof, responsive checks and production-ready updates.',
  },
  {
    label: '02',
    title: 'UX, content and brand implementation',
    text: 'Customer journeys, trust sections, page hierarchy, CTA logic and consistent translation of selected brand/content decisions into the live experience.',
  },
  {
    label: '03',
    title: 'CMS and multilingual content',
    text: 'Reusable sections, content models, validation, language consistency, preview/publishing workflows and structured updates.',
  },
  {
    label: '04',
    title: 'Digital delivery, search and QA support',
    text: 'GitHub-based workflow support, metadata/search hygiene, Jira follow-up, mobile checks, links, release notes, acceptance checks and practical handover.',
  },
];

const pilotProjects = [
  {
    eyebrow: 'Service and workflow system',
    status: 'Private project',
    title: 'Clementi AI Workflow',
    role: 'SME services, workflow reviews and practical AI boundaries',
    text:
      'A service and workflow concept for small businesses that need clearer offers, better source material and sensible review points before adding more technology.',
    systemProof: [
      'Service, pricing and audit structure',
      'Notes, tools and PDF deliverables',
      'Source-of-truth thinking and responsible AI boundaries',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows service architecture, workflow judgement and the ability to turn an unclear offer into something people can review and use.',
  },
  {
    eyebrow: 'Stakeholder-flow pilot',
    status: 'Private project',
    title: 'FørsteMatch',
    role: 'Candidate, company and advisor clarity before official handoff',
    text:
      'A bounded first-conversation pilot for situations where the task, language, supervision or next official step is still unclear.',
    systemProof: [
      'Role routing and manual review',
      'Match brief, forms and documents',
      'Privacy boundaries with no CPR or diagnoses',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows stakeholder mapping, bilingual communication, privacy boundaries and human-reviewed decision flow.',
  },
  {
    eyebrow: 'Privacy-first product concept',
    status: 'Private project',
    title: 'HamdamBridge',
    role: 'Consent-led cultural introduction system',
    text:
      'A private introduction concept built around context, dignity and consent before contact rather than a public profile wall.',
    systemProof: [
      'Private signals and human review',
      'Soft onboarding and cultural trust UX',
      'Safety logic and Persian/English structure',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows privacy-first product logic, consent design, niche-audience thinking and culturally sensitive UX.',
  },
];




const systemSteps = [
  {
    label: 'Source',
    title: 'Find the real material',
    text: 'Services, policies, examples, constraints, owner decisions and the questions users actually ask.',
  },
  {
    label: 'Structure',
    title: 'Make the path readable',
    text: 'Routes, page hierarchy, trust blocks, CTA logic, forms and the order people need to understand.',
  },
  {
    label: 'Build',
    title: 'Ship the useful first version',
    text: 'Responsive pages, local assets, metadata, schema awareness, link checks and mobile QA.',
  },
  {
    label: 'Handover',
    title: 'Leave it easier to run',
    text: 'Version notes, reusable decisions, next-step lists and owner control after the first launch.',
  },
];



const weeks = [
  {
    label: 'Week 01',
    title: 'Understand and audit',
    text: 'Learn the workflow, review one site or client flow, map pages, forms and mobile usability issues, then write a short QA note.',
  },
  {
    label: 'Week 02',
    title: 'Support production',
    text: 'Help with page updates, structured content, reusable sections, CMS schemas, GitHub-based handover notes, Jira follow-up, UX fixes and multilingual cleanup.',
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
        Skip to selected work
      </a>

      <header className="bar">
        <div className="wrap bar__in">
          <a className="brand" href="#top" aria-label="Romaric Clementi portfolio home">
            <b>RC</b>
            <span>Romaric Clementi</span>
          </a>
          <nav className="navlinks" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#approach" onClick={() => setViewMode('deep')}>Approach</a>
            <a href="#fit">Fit</a>
            <a href="#process">First 30 days</a>
            <span className="lang-switch" role="group" aria-label="Language switch">
              <a aria-current="page" href="/">EN</a>
              <span aria-hidden="true">/</span>
              <a href="/da/">DA</a>
            </span>
            <a className="btn" href="mailto:clementiromaric@protonmail.com">
              Email me
            </a>
          </nav>
        </div>
      </header>

      <main className={`portfolio-view is-${viewMode}`}>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap hero__grid">
            <div>
              <p className="mono kicker reveal" style={{ transitionDelay: '.04s' }}>
                Portfolio for web agencies, digital teams and startups
              </p>
              <p className="hero-role reveal" style={{ transitionDelay: '.1s' }}>Digital Production · Content Systems · Web & QA</p>
              <h1 id="hero-title" className="reveal" style={{ transitionDelay: '.12s' }}>
                Clear digital
                <br />
                structure from
                <br />
                <em>unclear</em> needs.
              </h1>
              <p className="lede reveal" style={{ transitionDelay: '.22s' }}>
                I turn scattered briefs, content and business requirements into websites and digital flows that are clear to use, straightforward to review and practical to hand over.
              </p>
              <p className="sub reveal" style={{ transitionDelay: '.3s' }}>
                Website production, content systems, brand implementation, CMS support, local-search foundations, responsive QA and multilingual delivery.
              </p>
              <div className="hero__cta reveal" style={{ transitionDelay: '.38s' }}>
                <a className="btn" href="#work">
                  View selected work
                </a>
                <a className="btn btn--ghost" href="#approach" onClick={() => setViewMode('deep')}>
                  See how I work
                </a>
              </div>
              <div className="view-switch reveal" style={{ transitionDelay: '.46s' }} role="group" aria-label="Choose portfolio depth">
                <span className="mono">Choose your view</span>
                <button type="button" aria-pressed={viewMode === 'quick'} onClick={() => setViewMode('quick')}>Quick scan</button>
                <button type="button" aria-pressed={viewMode === 'deep'} onClick={() => setViewMode('deep')}>Deep dive</button>
              </div>
            </div>

            <aside className="spec reveal" style={{ transitionDelay: '.28s' }} aria-label="Portfolio quick facts">
              <div className="signal-map" aria-label="Rough input becoming a clear first version">
                <p className="mono signal-map__label">From rough input</p>
                <div className="signal-map__input" aria-hidden="true">
                  <span>brief</span><span>content</span><span>trust</span><span>booking</span><span>QA</span>
                </div>
                <div className="signal-map__route" aria-hidden="true"><i /></div>
                <div className="signal-map__output"><span className="mono">Useful output</span><b>Clear first version</b><small>usable · reviewable · ready to hand over</small></div>
              </div>
              <dl>
                <div className="row">
                  <dt className="mono">Live-site proof</dt>
                  <dd>Marzieh Nail Atelier</dd>
                </div>
                <div className="row">
                  <dt className="mono">Best fit</dt>
                  <dd>Digital production, content systems, CMS/web implementation, delivery support and QA</dd>
                </div>
                <div className="row">
                  <dt className="mono">Proof</dt>
                  <dd>Live business, research-to-release case, bilingual booking journey, search foundations, responsive QA and owner handover</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="proof" className="proof-strip" aria-labelledby="proof-title">
          <div className="wrap">
            <div className="proof-dash reveal">
              <div className="proof-dash__head">
                <p className="mono">Proof dashboard</p>
                <h2 id="proof-title">Scan the value in 20 seconds.</h2>
                <p>
                  Real work, structured delivery and practical proof in one scan.
                </p>
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
              <h2>Selected work and systems</h2>
              <p className="note">A live business first, then three supporting projects with different problems and constraints.</p>
            </div>

            <article className="feature feature--marzieh reveal" aria-labelledby="marzieh-title">
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
                        alt="Real desktop screenshot of the Marzieh Nail Atelier website"
                        width="1600"
                        height="873"
                        loading="eager"
                        decoding="async"
                      />
                      <figcaption>Real desktop screenshot · live website linked below</figcaption>
                    </figure>
                    <figure className="featured-case__mobile featured-case__mobile--real">
                      <div className="mobile-proof-frame mobile-proof-frame--real">
                        <span className="mobile-proof-frame__speaker" aria-hidden="true" />
                        <img
                          src="/assets/marzieh-composition-full-v687.webp"
                          alt="Real mobile screenshot of the Marzieh Nail Atelier composition page"
                          width="688"
                          height="1487"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <figcaption>Real mobile screenshot · clean live-site crop</figcaption>
                    </figure>
                  </div>
                </div>

                <div className="featured-case__copy">
                  <p className="mono">Selected project</p>
                  <h3 id="marzieh-title">Marzieh Nail Atelier</h3>
                  <p className="featured-case__headline">Market research, identity and digital launch system for an independent nail atelier in Valby.</p>
                  <p className="featured-case__summary">I helped shape the atelier proposition from local market signals, developed identity directions with the owner, then translated the selected direction into the offer, bilingual website, local-search setup, booking journey, QA and handover.</p>
                  <div className="featured-case__facts" aria-label="Project facts">
                    <span><b>Live</b> production website</span>
                    <span><b>EN / DA</b> bilingual routes</span>
                    <span><b>Research to release</b> concept to handover</span>
                  </div>
                  <div className="featured-case__actions">
                    <a className="btn" href="/work/marzieh-nail-atelier/">Read case study</a>
                    <a className="text-link" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">Visit live website ↗</a>
                  </div>
                </div>
              </div>

              <div className="featured-case__details">
                <article><h4>Challenge</h4><p>A new private atelier needed a distinctive position, coherent identity, clear offer, local visibility and a booking journey that felt as considered as the service.</p></article>
                <article><h4>My contribution</h4><p>I led a small local market and competitor review, developed positioning and identity directions with the owner, structured the offer and customer journey, implemented search foundations, completed QA and prepared the handover.</p></article>
                <article><h4>Delivered</h4><p>A coherent brand-to-booking system across identity, services, bilingual content, local search, Google trust signals, responsive delivery and owner-controlled source material.</p></article>
              </div>
            </article>

            <div id="systems" className="systems-intro reveal" aria-label="Supporting digital projects">
              <p className="mono">Supporting projects</p>
              <h3>Different problems. Different constraints.</h3>
              <p>
                These projects show service architecture, stakeholder flows, privacy thinking, multilingual content and first-version delivery beyond the live Marzieh site.
              </p>
              <p className="systems-guard">Public details stay deliberately bounded where privacy or pilot context matters.</p>
            </div>

            <div className="pilots systems-grid" aria-label="System pilot projects">
              {pilotProjects.map((project) => (
                <article className="pcard reveal" key={project.title}>
                  <div className="pcard__top">
                    <span className="mono">{project.eyebrow}</span>
                    <span className="badge">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="role">{project.role}</p>
                  <p>{project.text}</p>
                  <ul className="system-proof-list" aria-label={`${project.title} system proof`}>
                    {project.systemProof.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="best-for">{project.bestFor}</p>
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

            {viewMode === 'quick' ? (
              <div className="deep-dive-gate reveal" aria-live="polite">
                <div><p className="mono">More behind the screens</p><h3>Need the reasoning, QA evidence and operating logic?</h3><p>The quick scan keeps the decision path short. Deep dive shows how I make decisions, structure information, test the work and prepare it for handover.</p></div>
                <button className="btn" type="button" onClick={() => setViewMode('deep')}>View detailed experience</button>
              </div>
            ) : null}
          </div>
        </section>

        <section id="approach" className="deep-dive-section">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no" data-deep="02" data-quick="02" aria-hidden="true" />
              <h2>How I work</h2>
              <p className="note">The operations habits I carry into digital production.</p>
            </div>
            <div className="approach-grid">
              <p className="approach reveal">
                I like to understand <b>what people need, what is still undecided and what has to happen after launch</b> before I build.
              </p>
              <div className="reveal">
                <p>
                  Operations, ERP, planning, product/master data, technical information, supplier and quality/process work trained me to follow dependencies, question unclear information and keep ownership visible.
                </p>
                <p>
                  I bring the same discipline to web work: clarify the brief and source material, make the first useful version, test it properly and leave the next person with something they can continue.
                </p>
              </div>
            </div>

            <div className="decision-lens reveal" aria-label="Questions I ask before building">
              <div>
                <p className="mono">Before I build</p>
                <h3>I do not build only from the brief.</h3>
                <p>
                  I look at what the customer needs to understand, what the owner needs to decide, what the team needs at handover and what the implementation has to make visible.
                </p>
              </div>
              <div className="lens-grid" aria-label="Four questions before building">
                <article><span>Customer</span><b>What needs to be clear before action?</b></article>
                <article><span>Owner</span><b>What must stay easy to decide or update?</b></article>
                <article><span>Team</span><b>What needs a clean handover?</b></article>
                <article><span>Implementation</span><b>What should be reusable, visible or checked?</b></article>
              </div>
            </div>

            <div className="backbone reveal" aria-label="Operations backbone proof">
              <div className="backbone__copy">
                <p className="mono">Operations backbone</p>
                <h3>I start with the problem, not the tool.</h3>
                <p>
                  ERP, planning, master-data, supplier and quality/process work trained me to follow dependencies, spot missing information and keep ownership visible. I bring that discipline into digital production, QA and handover.
                </p>
              </div>
              <div className="metric-grid" aria-label="Operations proof metrics">
                <div aria-label="2,000 plus ERP and master-data records">
                  <b>2,000+ </b>
                  <span>ERP and master-data records</span>
                </div>
                <div aria-label="200 plus multi-level product and BOM structures">
                  <b>200+ </b>
                  <span>multi-level product / BOM structures</span>
                </div>
                <div aria-label="30 plus international suppliers coordinated">
                  <b>30+ </b>
                  <span>international suppliers coordinated</span>
                </div>
                <div aria-label="5 production lines and 40 plus variants supported">
                  <b>5 / 40+ </b>
                  <span>production lines / variants supported</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="deep-dive-section" aria-labelledby="system-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no" data-deep="03" data-quick="03" aria-hidden="true" />
              <h2 id="system-title">From unclear input to a working first version</h2>
              <p className="note">A real production sequence: understand the source, shape the structure, build, test and hand over.</p>
            </div>

            <div className="system-board reveal">
              <div className="system-intro">
                <p className="mono">Production sequence</p>
                <h3>The screen is only one part of the delivery.</h3><p>I start from the source material and open decisions, shape a usable structure, build and test the first version, then leave clear notes so the work is easier to continue.</p>
              </div>
              <div className="system-steps" aria-label="From unclear input to live system process">
                {systemSteps.map((step, index) => (
                  <article className="system-step" key={step.label}>
                    <span className="system-index">{String(index + 1).padStart(2, '0')}</span>
                    <p className="mono">{step.label}</p>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="fit">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no" data-deep="04" data-quick="02" aria-hidden="true" />
              <h2>Where I fit</h2>
              <p className="note">A practical decision path for agencies, studios and startups.</p>
            </div>

            <div className="fit-summary reveal">
              <p className="mono">Best match right now</p>
              <h3>Teams that need useful digital output from messy input.</h3>
              <p>
                I connect client input, content, UX, implementation, QA and handover. My value is making scattered material easier to understand, build, test, launch and maintain.
              </p>
            </div>

            <div className="fit-lanes reveal" aria-label="Practical role fit lanes">
              {roleFitLanes.map((lane) => (
                <article key={lane.title}>
                  <span className="mono">{lane.label}</span>
                  <h3>{lane.title}</h3>
                  <p>{lane.text}</p>
                </article>
              ))}
            </div>

            <p className="mono audience-label reveal">Best audience fit</p>
            <div className="target-grid reveal">
              <article>
                <span className="mono">Established agencies</span>
                <h3>Production support with handover discipline</h3>
                <p>
                  Useful for client pages, service flows, trust sections, mobile QA and practical delivery support.
                </p>
              </article>
              <article>
                <span className="mono">Webflow / WordPress / Shopify shops</span>
                <h3>CMS and ecommerce production support</h3>
                <p>
                  Useful for page updates, product/service pages, content schemas, reusable sections, validation rules, preview/publishing flows, forms and mobile checks.
                </p>
              </article>
              <article>
                <span className="mono">Startups and product teams</span>
                <h3>First versions before overbuilding</h3>
                <p>
                  Useful for landing pages, onboarding flows, prototypes and documentation that make the next decision easier.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="capabilities" className="deep-dive-section">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no" data-deep="05" data-quick="05" aria-hidden="true" />
              <h2>Build and QA proof</h2>
              <p className="note">Practical implementation and delivery evidence.</p>
            </div>

            <div className="implementation-proof reveal" aria-label="Technical implementation proof">
              <div>
                <p className="mono">Technical implementation proof</p>
                <h3>This portfolio is also a working build sample.</h3>
                <p>
                  Static Next.js export, Cloudflare deployment, local assets, locally bundled fonts, Open Graph metadata, responsive layout, internal anchors, JSON-LD awareness and GitHub-based handover discipline. Across selected projects, I have also worked with Sanity CMS content models, reusable sections, validation rules, multilingual content and preview/publishing flows, using Jira for issue and action follow-up.
                </p>
                <p className="implementation-note">
                  My strongest contribution is structured digital production, content systems, implementation QA and maintainable handover, supported by practical front-end and CMS capability.
                </p>
              </div>
              <div className="implementation-chips" aria-label="Technical implementation signals">
                {['Static export', 'Cloudflare', 'GitHub workflow', 'Local assets', 'OG / metadata', 'Responsive QA'].map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
            </div>

            <div className="cms-model-proof reveal" aria-label="Sanitised CMS content model example">
              <div className="cms-model-proof__copy">
                <p className="mono">Sanitised CMS structure example</p>
                <h3>Turn recurring business facts into reusable, reviewable content.</h3>
                <p>Selected CMS project work included structured content models, validation rules and multilingual preview/publishing flows. This sanitised artefact shows how source facts become reusable, reviewable content. Marzieh is shown separately as a static implementation.</p>
              </div>
              <div className="cms-model-flow" aria-label="Source to content model to validation to preview and publish">
                <article><span>01</span><b>Source</b><small>service · price · duration · booking group</small></article>
                <article><span>02</span><b>Content model</b><small>reusable fields · sections · ownership</small></article>
                <article><span>03</span><b>Validation</b><small>required values · EN/DA parity · review state</small></article>
                <article><span>04</span><b>Preview / publish</b><small>check the page · release · hand over</small></article>
              </div>
            </div>

            <aside className="ai-disclosure reveal" aria-label="AI-assisted production disclosure">
              <div>
                <p className="mono">AI-assisted production disclosure</p>
                <h3>AI supports the workflow. I remain responsible for the work.</h3>
              </div>
              <p>Claude, ChatGPT and other AI tools support research, drafting, code assistance, comparison and iteration. I define the brief and direction, make the final content and design decisions, review and test the implementation, and remain responsible for deployment and handover.</p>
            </aside>

            <div className="evidence-board reveal" aria-label="Delivery evidence board">
              <div className="evidence-board__intro">
                <p className="mono">Evidence board</p>
                <h3>The work behind the screen.</h3>
                <p>Small production artefacts that make a build easier to review, deploy and hand over.</p>
              </div>
              <div className="evidence-board__grid">
                <article><span>01</span><b>Route map</b><small>Pages, anchors and decision paths</small></article>
                <article><span>02</span><b>Mobile QA</b><small>Android, iPhone and narrow-width checks</small></article>
                <article><span>03</span><b>Language parity</b><small>EN / DA routes and visible-copy review</small></article>
                <article><span>04</span><b>Deploy note</b><small>Build command, version and release state</small></article>
                <article><span>05</span><b>Owner control</b><small>Clear sources, links and next decisions</small></article>
                <article><span>06</span><b>Handover package</b><small>Clean source, README and verification</small></article>
              </div>
            </div>

            <div className="exposure reveal">
              <p className="mono lab">Working toolkit</p>
              <div className="chips" aria-label="Working exposure">
                {[
                  'HTML / CSS',
                  'Next.js / static delivery',
                  'Basic JavaScript',
                  'Cloudflare / GitHub delivery',
                  'Sanity CMS / preview workflows',
                  'Structured content / reusable sections',
                  'Validation rules',
                  'Jira issue / action follow-up',
                  'Salesforce Sales Cloud / Service Cloud / Flow',
                  'Webflow / Shopify familiarity',
                  'SEO / Search Console / LocalBusiness JSON-LD',
                  'Forms / multilingual journeys',
                  'Mobile & responsive QA',
                  'Documentation / handover',
                ].map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
              <p className="caveat">
                Built as a custom static Next.js/Cloudflare site. My strongest contribution is production, structured content, QA and handover. Sanity CMS and Jira reflect selected project workflows, while Webflow and Shopify remain working familiarity. Salesforce: hands-on familiarity with Sales Cloud and Service Cloud workflows, lead/opportunity and case management, reporting, and low-code automation using Salesforce Flow. Additional systems foundation: formal SQL 2016 Database Administration training covering SQL Server/T-SQL, relational database design and Azure SQL. The Azure evidence is course-based, not recent professional Azure use; the Salesforce evidence does not imply administrator status, enterprise CRM ownership or production deployment/governance.
              </p>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no" data-deep="06" data-quick="03" aria-hidden="true" />
              <h2>How I would start in the first 30 days</h2>
              <p className="note">A practical starting point. Tasks adapt to the team and the work already in motion.</p>
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

        <section id="contact" className="contact-section contact-section--professional">
          <div className="wrap">
            <div className="contact contact--professional reveal">
              <div className="contact-pro__main">
                <div className="contact__identity contact-pro__identity">
                  <img src="/assets/romaric-portrait.webp" width="512" height="512" decoding="async" alt="Portrait of Romaric Clementi" loading="lazy" />
                  <div>
                    <p className="mono">Digital Production · Content Systems · Web & QA</p>
                    <b>Romaric Clementi</b>
                  </div>
                </div>
                <p className="mono contact-pro__label">Contact</p>
                <h2>Need someone who can turn unclear digital work into something <em>usable?</em></h2>
                <p className="contact-pro__intro">I help teams bring structure to websites, content, implementation and QA, from rough input and scattered requirements to a clear first version that can be reviewed, shipped and handed over properly.</p>
                <p className="contact-pro__intro contact-pro__intro--secondary">I am looking for digital production, content systems, web/CMS implementation and QA roles across Greater Copenhagen and the Øresund region. I am also open to scoped project work where a team needs practical delivery support.</p>
                <div className="contact-pro__details" aria-label="Contact details">
                  <a href="tel:+4528737485"><span className="mono">Phone</span><b>+45 28 73 74 85</b></a>
                  <a href="mailto:clementiromaric@protonmail.com"><span className="mono">Email</span><b>clementiromaric@protonmail.com</b></a>
                  <div><span className="mono">Location</span><b>Tune, Denmark · Greater Copenhagen / Øresund</b></div>
                  <div><span className="mono">Languages</span><b>French native · English fluent · Danish operational (PD2/B1+)</b></div>
                </div>
              </div>
              <aside className="contact-pro__aside" aria-label="Contact actions">
                <a className="btn contact-pro__email" href="mailto:clementiromaric@protonmail.com">Email Romaric</a>
                <nav className="contact-pro__links" aria-label="Portfolio links">
                  <a href="tel:+4528737485"><span>Call</span><b>+45 28 73 74 85</b></a>
                  <a href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer"><span>View live work</span><b>Marzieh Nail Atelier</b></a>
                  <a href="https://romaric-operations-portfolio.clementiromaric.workers.dev/" target="_blank" rel="noopener noreferrer"><span>Operations portfolio</span><b>Procurement · Planning · ERP · Product Data</b></a>
                </nav>
              </aside>
              <p className="contact-pro__closing">Clear structure. Practical delivery. Work that is easier to use and easier to continue.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div className="mark">
            <b>RC</b>
            <span>Clear digital structure from unclear needs.</span>
          </div>
          <p className="fine">Built, reviewed and delivered by Romaric Clementi. AI-assisted production is disclosed where used. © 2026 Romaric Clementi</p>
        </div>
      </footer>
    </>
  );
}
