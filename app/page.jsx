'use client';

import { useEffect, useState } from 'react';

const liveLinks = {
  operations: 'https://romaric-operations-portfolio.clementiromaric.workers.dev/',
  marzieh: 'https://marziehnail-atelier.dk/en/',
};

const proofSignals = [
  {
    value: 'Live business',
    label: 'Marzieh Nail Atelier in production',
  },
  {
    value: '3 built pilots',
    label: 'Workflow, employment and private-introduction systems',
  },
  {
    value: '5.0 / 16',
    label: 'Google rating and Google reviews',
  },
  {
    value: 'Multilingual routes',
    label: 'DA / EN plus Farsi/English pilot logic',
  },
  {
    value: 'GitHub / GitLab aware',
    label: 'Source packages, version notes, deploy QA and handover',
  },
  {
    value: 'Operations backbone',
    label: 'ERP, suppliers, handovers and documentation',
  },
];


const roleFitLanes = [
  {
    label: '01',
    title: 'Website production support',
    text: 'Pages, service/product sections, Webflow/Shopify/CMS support, content structure and mobile checks.',
  },
  {
    label: '02',
    title: 'UX and content implementation',
    text: 'Customer journeys, trust, navigation, hierarchy, CTA logic and clearer handover from brief to build.',
  },
  {
    label: '03',
    title: 'Digital workflow and QA support',
    text: 'GitHub/GitLab workflow, link and anchor checks, deployment notes, source cleanup and acceptance checks.',
  },
  {
    label: '04',
    title: 'AI-assisted first-version work',
    text: 'Structured briefs, draft pages, source maps, approval points and human-reviewed prototypes.',
  },
];

const pilotProjects = [
  {
    eyebrow: 'Service system',
    status: 'Walkthrough on request',
    title: 'Clementi AI Workflow',
    role: 'SME visibility, workflow audit and safe AI-control system',
    flow: ['Friction', 'Audit', 'Owner review'],
    text:
      'Built on a simple insight: small businesses often need clearer offers, reliable source material, owner approvals and a safer next step before another tool.',
    systemProof: [
      'Services, pricing and audit paths',
      'Notes hub, tools and PDF deliverables',
      'Source-of-truth and safe AI boundaries',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows service architecture, AI-workflow judgement and practical business clarity.',
  },
  {
    eyebrow: 'Stakeholder-flow system',
    status: 'Walkthrough on request',
    title: 'FørsteMatch',
    role: 'Candidate, company and actor clarity before official handoff',
    flow: ['Role', 'Manual review', 'Brief'],
    text:
      'Built where interest exists but the task, language, supervision, first week or process ownership remains unclear.',
    systemProof: [
      'Role router and pilot process',
      'Match brief, forms and documents',
      'Privacy boundaries with no sensitive case data',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows structured clarity, firm boundaries and human-reviewed decisions.',
  },
  {
    eyebrow: 'Privacy-first social system',
    status: 'Walkthrough on request',
    title: 'HamdamBridge',
    role: 'Consent-led cultural introduction system',
    flow: ['Signal', 'Human review', 'Two yeses'],
    text:
      'Built for people who need context, dignity and privacy before exposure, not another public profile wall.',
    systemProof: [
      'Private signals and Bridge Notes',
      'Café Circle, games and soft onboarding',
      'Trust center, safety logic and Persian/English routes',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows emotional UX, consent architecture and culturally aware trust design.',
  },
];




const systemSteps = [
  {
    label: 'Source',
    title: 'Find the real material',
    text: 'Services, policies, constraints, owner decisions and real user questions.',
  },
  {
    label: 'Structure',
    title: 'Make the path readable',
    text: 'Routes, hierarchy, trust blocks, CTA logic, forms and reading order.',
  },
  {
    label: 'Build',
    title: 'Ship the useful first version',
    text: 'Responsive pages, local assets, metadata, link checks and mobile QA.',
  },
  {
    label: 'Handover',
    title: 'Leave it easier to run',
    text: 'Version notes, reusable decisions, next steps and owner control after launch.',
  },
];



const weeks = [
  {
    label: 'Week 01',
    title: 'Understand and audit',
    text: 'Learn the workflow, review one site or flow, map pages, forms and mobile friction, then write a QA note.',
  },
  {
    label: 'Week 02',
    title: 'Support production',
    text: 'Support page updates, product/service pages, CMS structure, handover notes, internal links, UX fixes and multilingual cleanup.',
  },
  {
    label: 'Week 03',
    title: 'Test and document',
    text: 'Mobile, link and anchor QA, form journeys, proofreading and metadata checks.',
  },
  {
    label: 'Week 04',
    title: 'Deliver useful output',
    text: 'An improvement list, prototype or implementation package with handover notes and next steps.',
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
              <h1 id="hero-title" className="reveal" style={{ transitionDelay: '.12s' }}>
                Clear digital
                <br />
                structure from
                <br />
                <em>unclear</em> needs.
              </h1>
              <p className="lede reveal" style={{ transitionDelay: '.22s' }}>
                I find the real friction in messy briefs and turn it into useful first systems teams can test, hand over and improve.
              </p>
              <p className="sub reveal" style={{ transitionDelay: '.3s' }}>
                Website production, UX structure and Webflow/Shopify/CMS support for teams with messy input and real deadlines.
              </p>
              <div className="hero__cta reveal" style={{ transitionDelay: '.38s' }}>
                <a className="btn" href="#work">
                  Selected work ↓
                </a>
                <a className="btn btn--ghost" href="#process">
                  How I would start
                </a>
              </div>
              <div className="view-switch reveal" style={{ transitionDelay: '.46s' }} role="group" aria-label="Choose portfolio depth">
                <span className="mono">Choose your view</span>
                <button type="button" aria-pressed={viewMode === 'quick'} onClick={() => setViewMode('quick')}>Quick scan</button>
                <button type="button" aria-pressed={viewMode === 'deep'} onClick={() => setViewMode('deep')}>Deep dive</button>
              </div>
            </div>

            <aside className="spec reveal" style={{ transitionDelay: '.28s' }} aria-label="Portfolio quick facts">
              <div className="signal-map" aria-label="Unclear input becoming a clear digital system">
                <div className="signal-map__input" aria-hidden="true">
                  <span>brief</span><span>content</span><span>trust</span><span>booking</span><span>QA</span>
                </div>
                <div className="signal-map__route" aria-hidden="true"><i /></div>
                <div className="signal-map__output"><span className="mono">Output</span><b>Clear system</b><small>usable · reviewable · ready to hand over</small></div>
              </div>
              <dl>
                <div className="row">
                  <dt className="mono">Best fit</dt>
                  <dd>Website production, UX implementation, Webflow/Shopify/CMS support, delivery support and QA</dd>
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

        <section id="proof" className="proof-strip" aria-labelledby="proof-title">
          <div className="wrap">
            <div className="proof-dash reveal">
              <div className="proof-dash__head">
                <p className="mono">Proof dashboard</p>
                <h2 id="proof-title">Scan the value in 20 seconds.</h2>
                <p>
                  Real work, system thinking and delivery proof in one scan.
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
              <span className="sec-no">01</span>
              <h2>Selected work and systems</h2>
              <p className="note">A live business first, then working systems built around trust, workflow and review.</p>
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
                    <div className="case-actions">
                      <a className="pill" href="/work/marzieh-nail-atelier/">View case study</a>
                      <a className="case-live-link" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">Live site ↗</a>
                    </div>
                  </div>
                  <div className="browser__media">
                    <img
                      src="/assets/marzieh-homepage-ui-snapshot.webp"
                      alt="Marzieh Nail Atelier homepage UI snapshot showing navigation, hero, booking path and service cards"
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
                  <div id="marzieh-title" className="ttl">
                    Marzieh Nail Atelier<span>Real local business website · live in production</span>
                  </div>
                  <span className="badge badge--live">Strongest proof</span>
                </div>

                <dl className="field">
                  <dt>Problem</dt>
                  <dd>
                    A premium nail atelier needed clearer services, booking confidence, local trust, policies and mobile readability.
                  </dd>
                </dl>
                <dl className="field">
                  <dt>My role</dt>
                  <dd>
                    I shaped the concept, service structure, copy flow, trust, mobile QA and deployment-safe iterations.
                  </dd>
                </dl>
                <dl className="field">
                  <dt>Built</dt>
                  <dd>
                    Homepage, services, pricing, gallery, bridal route, FAQ, policies, visit path, booking links, local SEO signals and schema awareness.
                  </dd>
                </dl>
                <dl className="field field--highlight">
                  <dt>Agency relevance</dt>
                  <dd>
                    This shows I can turn loose client material into a mobile-ready journey with trust proof, booking logic and handover discipline.
                  </dd>
                </dl>

                <div className="case-proof-row" aria-label="Marzieh Nail Atelier production proof areas">
                  <div>
                    <span className="mono">Offer</span>
                    <b>Services and pricing</b>
                  </div>
                  <div>
                    <span className="mono">Journey</span>
                    <b>Booking and visit path</b>
                  </div>
                  <div>
                    <span className="mono">Trust</span>
                    <b>Reviews, policies and FAQ</b>
                  </div>
                  <div>
                    <span className="mono">QA</span>
                    <b>Mobile, links and handover</b>
                  </div>
                </div>

                <div className="before-after" aria-label="Marzieh Nail Atelier before and after proof">
                  <div>
                    <span className="mono">Before</span>
                    <p>
                      Strong service skill existed, but services, policies, booking, trust and local visibility needed one source.
                    </p>
                  </div>
                  <div>
                    <span className="mono">After</span>
                    <p>
                      A bilingual journey aligned services, booking, policies, trust signals, Planway/Jazzy logic and calmer brand language.
                    </p>
                  </div>
                  <div>
                    <span className="mono">What it proves</span>
                    <p>
                      The website is visible. The deeper work is clarifying trust, price, service confidence and owner control before booking.
                    </p>
                  </div>
                </div>

                <div className="gallery" aria-label="Marzieh Nail Atelier UI snapshots">
                  <div className="g">
                    <img src="/assets/marzieh-services-ui-snapshot.webp" width="760" height="520" decoding="async" alt="Marzieh Nail Atelier services UI snapshot" loading="lazy" />
                  </div>
                  <div className="g">
                    <img src="/assets/marzieh-work-ui-snapshot.webp" width="760" height="520" decoding="async" alt="Marzieh Nail Atelier work gallery UI snapshot" loading="lazy" />
                  </div>
                  <div className="g">
                    <img src="/assets/marzieh-booking-ui-snapshot.webp" width="760" height="520" decoding="async" alt="Marzieh Nail Atelier visit and booking UI snapshot" loading="lazy" />
                  </div>
                </div>

                <div className="case-foot">
                  <div className="case-foot__actions">
                    <a className="linkclay case-cta" href="/work/marzieh-nail-atelier/">View full case study →</a>
                    <a className="linkclay case-secondary-cta" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">Open live website ↗</a>
                  </div>
                  <div className="stat" aria-label="Public proof facts">
                    <div className="s">
                      <b>5.0</b>
                      <span>Google rating</span>
                    </div>
                    <div className="s">
                      <b>16</b>
                      <span>Google reviews</span>
                    </div>
                    <div className="s">
                      <b>DA / EN</b>
                      <span>Multilingual</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div id="systems" className="systems-intro reveal" aria-label="Systems built from unclear needs">
              <p className="mono">Systems I have built</p>
              <h3>Not only pages. Working first-version systems.</h3>
              <p>
                Beyond websites, I build service journeys, intake flows, trust layers, documentation routes and review points that make ideas easier to test without overbuilding.
              </p>
              <p className="systems-guard">Some pilot details are intentionally simplified in public. Deeper walkthroughs are available on request.</p>
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
                  <div className="flow" aria-label={`${project.title} flow`}>
                    {project.flow.map((step, index) => (
                      <span key={step}>
                        {step}
                        {index < project.flow.length - 1 ? <i aria-hidden="true"> → </i> : null}
                      </span>
                    ))}
                  </div>
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
                <div><p className="mono">More behind the screens</p><h3>Need the reasoning, QA and operating logic?</h3><p>Deep dive shows how I map friction, structure systems and prepare handover.</p></div>
                <button className="btn" type="button" onClick={() => setViewMode('deep')}>Open deep dive ↓</button>
              </div>
            ) : null}
          </div>
        </section>

        <section id="approach" className="deep-dive-section">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">02</span>
              <h2>How I work</h2>
              <p className="note">Operations-trained thinking applied to websites, content and digital flows.</p>
            </div>
            <div className="approach-grid">
              <p className="approach reveal">
                I think in <b>flow, handovers, execution and visible next actions</b>, then build the structure underneath.
              </p>
              <div className="reveal">
                <p>
                  Operations, ERP, planning and supplier work trained me to map processes, find breaks and turn vague input into ownership and build-ready notes.
                </p>
                <p>
                  I use the same rhythm for web work: understand the need, build a useful first version, test it and document the next step.
                </p>
              </div>
            </div>

            <div className="friction-lens reveal" aria-label="Friction-mapping lens">
              <div>
                <p className="mono">Hidden friction lens</p>
                <h3>I do not only build from the brief.</h3>
                <p>
                  I look for what the customer must trust, the owner must control, the team must hand over and the system must clarify.
                </p>
              </div>
              <div className="lens-grid" aria-label="Four friction-mapping questions">
                <article><span>Customer</span><b>What must feel safe or clear before action?</b></article>
                <article><span>Owner</span><b>What needs one reliable source and decision point?</b></article>
                <article><span>Team</span><b>What must be easy to hand over or repeat?</b></article>
                <article><span>System</span><b>What should be visible, reusable and reviewed?</b></article>
              </div>
            </div>

            <div className="backbone reveal" aria-label="Operations backbone proof">
              <div className="backbone__copy">
                <p className="mono">Operations backbone</p>
                <h3>Friction first. Tools second.</h3>
                <p>
                  Before building, I look for weak sources, unclear owners and fragile handovers. These figures come from ERP, MRP, master-data and supplier work.
                </p>
                <p className="backbone__bridge"><b>I bring operations-trained QA, ownership and handover discipline to digital production.</b></p>
                <p className="sr-only">Working rhythm: Friction to Source to Owner to Review to Reuse.</p>
                <div className="method-strip" aria-hidden="true">
                  {['Friction', 'Source', 'Owner', 'Review', 'Reuse'].map((step, index) => (
                    <span key={step}>
                      {step}
                      {index < 4 ? <i> → </i> : null}
                    </span>
                  ))}
                </div>
              </div>
              <div className="metric-grid" aria-label="Operations proof metrics">
                <div aria-label="2,000 plus ERP item structures">
                  <b>2,000+ </b>
                  <span>ERP item structures</span>
                </div>
                <div aria-label="200 plus multi-level parts set up">
                  <b>200+ </b>
                  <span>multi-level parts set up</span>
                </div>
                <div aria-label="30 plus EU and US suppliers coordinated">
                  <b>30+ </b>
                  <span>EU/US suppliers coordinated</span>
                </div>
                <div aria-label="5 production lines and 40 plus variants supported">
                  <b>5 / 40+ </b>
                  <span>production lines and variants supported</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="deep-dive-section" aria-labelledby="system-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">03</span>
              <h2 id="system-title">From unclear input to live system</h2>
              <p className="note">A compact view of how real friction becomes something people can use.</p>
            </div>

            <div className="system-board reveal">
              <div className="system-intro">
                <p className="mono">Proof logic</p>
                <h3>More than pages. A working first system.</h3>
                <p>
                  Proof is not only the final screen. It is the logic that turns unclear needs into a clear path, a shipped first version and usable handover.
                </p>
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
              <span className="sec-no">{viewMode === 'quick' ? '02' : '04'}</span>
              <h2>Where I fit</h2>
              <p className="note">A practical decision path for agencies, studios and startups.</p>
            </div>

            <div className="fit-summary reveal">
              <p className="mono">Best match right now</p>
              <h3>Teams that need useful digital output from messy input.</h3>
              <p>
                I connect client input, content, UX, QA and handover so scattered material is easier to build, test, launch and improve.
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
                  Useful for page updates, product/service pages, hierarchy, forms, SEO basics and mobile checks.
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
              <span className="sec-no">05</span>
              <h2>Build and QA proof</h2>
              <p className="note">Supporting evidence, not a senior-engineering claim.</p>
            </div>

            <div className="implementation-proof reveal" aria-label="Technical implementation proof">
              <div>
                <p className="mono">Technical implementation proof</p>
                <h3>This portfolio is also a working build sample.</h3>
                <p>
                  Static Next.js export, Cloudflare deployment, local assets and fonts, Open Graph metadata, responsive layout, anchors, JSON-LD awareness and GitHub/GitLab handover.
                </p>
                <p className="implementation-note">
                  Not a senior-engineering claim. A working sample of clean static build, packaging and QA discipline.
                </p>
              </div>
              <div className="implementation-chips" aria-label="Technical implementation signals">
                {['Static export', 'Cloudflare', 'GitHub / GitLab flow', 'Local assets', 'OG / metadata', 'Responsive QA'].map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
            </div>

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
              <p className="mono lab">Working exposure, hands-on and honest</p>
              <div className="chips" aria-label="Working exposure">
                {[
                  'HTML / CSS',
                  'Responsive layouts',
                  'Static site structure',
                  'Basic JavaScript',
                  'Cloudflare Pages / Workers',
                  'GitHub deploy',
                  'GitLab-style workflow',
                  'Webflow support',
                  'Shopify support',
                  'SEO metadata',
                  'JSON-LD / schema',
                  'Forms & journeys',
                  'Multilingual content',
                  'Mobile QA',
                  'Documentation',
                ].map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
              <p className="caveat">
                Recent builds are custom static and Cloudflare-based. I am comfortable with Webflow, Shopify and CMS structures, GitHub/GitLab workflow, source packages, deployment notes and QA handover.
              </p>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">{viewMode === 'quick' ? '03' : '06'}</span>
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
              <div className="contact__identity">
                <img src="/assets/romaric-portrait.webp" width="512" height="512" decoding="async" alt="Portrait of Romaric Clementi" loading="lazy" />
                <div>
                  <p className="mono">Contact</p>
                  <b>Romaric Clementi</b>
                </div>
              </div>
              <h2>
                Let&apos;s build the first <em>useful</em> version.
              </h2>
              <div className="row2">
                <a className="btn email-cta" href="mailto:clementiromaric@protonmail.com">
                  <span className="email-cta__desktop">clementiromaric@protonmail.com</span>
                  <span className="email-cta__mobile">Email me</span>
                </a>
                <div className="meta">
                  <div className="m contact-email-row">
                    <span className="mono">Email</span>
                    <b>
                      <a href="mailto:clementiromaric@protonmail.com">clementiromaric@protonmail.com</a>
                    </b>
                  </div>
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
                Best fit: website production, UX implementation, Webflow/Shopify/CMS support, GitHub/GitLab workflow, digital delivery, QA and documentation. Open to scoped projects, production roles or a short <b>praktik</b> to test cooperation.
              </p>
              <div className="portfolio-companion">
                <span className="mono">Companion portfolio</span>
                <p>Looking for my ERP, master-data and operations background?</p>
                <a href={liveLinks.operations} target="_blank" rel="noopener noreferrer">View the Operations, ERP &amp; Workflow Portfolio ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div className="mark">
            <b>RC</b>
            <span>Unclear human and business need → clear digital system.</span>
          </div>
          <p className="fine">Hand-built as live proof of friction mapping, system structure, UX flow, QA and deployment discipline. © 2026 Romaric Clementi</p>
        </div>
      </footer>
    </>
  );
}
