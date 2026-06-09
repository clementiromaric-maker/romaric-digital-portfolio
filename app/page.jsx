'use client';

import { useEffect, useState } from 'react';

const liveLinks = {
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
    value: 'Service to booking',
    label: 'Offer, pricing, policies, visit and booking path',
  },
  {
    value: 'Multilingual routes',
    label: 'DA / EN plus Farsi/English pilot logic',
  },
  {
    value: 'GitHub workflow ready',
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
    text: 'Page builds, service/product sections, CMS/content implementation support, local proof, content structure and mobile checks.',
  },
  {
    label: '02',
    title: 'UX and content implementation',
    text: 'Customer journeys, trust sections, navigation, page hierarchy, CTA logic and clearer handover from brief to build.',
  },
  {
    label: '03',
    title: 'Digital workflow and QA support',
    text: 'GitHub-based workflow support, link checks, anchor checks, deployment notes, source cleanup and practical acceptance checks.',
  },
  {
    label: '04',
    title: 'AI-assisted first-version work',
    text: 'Structured briefs, draft pages, source maps, approval points and useful prototypes with human review before use.',
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
      'Built around a simple insight: many small businesses do not need another tool first. They need clearer offers, better source material, owner approval points and a safer next step.',
    systemProof: [
      'Services, pricing and audit paths',
      'Notes hub, tools and PDF deliverables',
      'Source-of-truth and safe AI boundaries',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows service architecture, AI-workflow judgement and productized business clarity.',
  },
  {
    eyebrow: 'Stakeholder-flow system',
    status: 'Walkthrough on request',
    title: 'FørsteMatch',
    role: 'Candidate, company and actor clarity before official handoff',
    flow: ['Role', 'Manual review', 'Brief'],
    text:
      'Built for situations where interest exists, but the task, language, supervision, first week or official process owner is still unclear.',
    systemProof: [
      'Role router and pilot process',
      'Match brief, forms and documents',
      'Privacy boundaries with no sensitive case data',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows public-sector-style clarity, boundary design and human-reviewed decision flow.',
  },
  {
    eyebrow: 'Privacy-first social system',
    status: 'Walkthrough on request',
    title: 'HamdamBridge',
    role: 'Consent-led cultural introduction system',
    flow: ['Signal', 'Human review', 'Two yeses'],
    text:
      'Built around the real need behind connection: people want context, dignity and privacy before exposure, not another public profile wall.',
    systemProof: [
      'Private signals and Bridge Notes',
      'Café Circle, games and soft onboarding',
      'Trust center, safety logic and Persian/English routes',
    ],
    link: null,
    linkLabel: 'Walkthrough available on request',
    bestFor: 'Shows emotional UX, consent architecture, niche-product thinking and cultural trust design.',
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
    text: 'Learn the workflow, review one site or client flow, map pages, forms and mobile friction, then write a short QA note.',
  },
  {
    label: 'Week 02',
    title: 'Support production',
    text: 'Help with page updates, product/service pages, CMS structure, GitHub-based handover notes, internal links, UX fixes and multilingual cleanup.',
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
              <h1 id="hero-title" className="reveal" style={{ transitionDelay: '.12s' }}>
                Clear digital
                <br />
                structure from
                <br />
                <em>unclear</em> needs.
              </h1>
              <p className="lede reveal" style={{ transitionDelay: '.22s' }}>
                I find the real friction behind messy briefs, then turn it into useful first systems teams can test, hand over and improve.
              </p>
              <p className="sub reveal" style={{ transitionDelay: '.3s' }}>
                Website production, UX structure, CMS/content implementation, QA and working first versions for teams with messy input and real deadlines.
              </p>
              <div className="hero__cta reveal" style={{ transitionDelay: '.38s' }}>
                <a className="btn" href="#work">
                  View selected work
                </a>
                <a className="btn btn--ghost" href="#process">
                  See first 30 days
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
                  <dd>Website production, UX implementation, CMS/content support, delivery support and QA</dd>
                </div>
                <div className="row">
                  <dt className="mono">Proof</dt>
                  <dd>Live local business website, EN/DA routes, booking path and owner handover</dd>
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

            <article className="feature feature--marzieh reveal" aria-labelledby="marzieh-title">
              <div className="featured-case">
                <div className="featured-case__visual">
                  <div className="browser__bar">
                    <div className="browser__dots" aria-hidden="true"><i /><i /><i /></div>
                    <span className="browser__url">marziehnail-atelier.dk</span>
                    <span className="browser__live">● Live</span>
                  </div>
                  <div className="featured-case__screen">
                    <img
                      src="/assets/marzieh-homepage-ui-snapshot.webp"
                      alt="Marzieh Nail Atelier live homepage hero with navigation, booking actions and nail imagery"
                      className="case-transition-image"
                      width="2048"
                      height="1119"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="featured-case__supporting" aria-label="Additional website interface previews">
                    <figure>
                      <img src="/assets/marzieh-services-ui-snapshot.webp" alt="Marzieh Nail Atelier services and pricing interface" width="760" height="520" loading="lazy" decoding="async" />
                      <figcaption className="sr-only">Services and pricing interface</figcaption>
                    </figure>
                    <figure>
                      <img src="/assets/marzieh-booking-ui-snapshot.webp" alt="Marzieh Nail Atelier booking and visit interface" width="760" height="520" loading="lazy" decoding="async" />
                      <figcaption className="sr-only">Booking and visit interface</figcaption>
                    </figure>
                  </div>
                </div>

                <div className="featured-case__copy">
                  <p className="mono">Selected project</p>
                  <h3 id="marzieh-title">Marzieh Nail Atelier</h3>
                  <p className="featured-case__headline">Website strategy, structure and production for an independent nail atelier in Valby.</p>
                  <p className="featured-case__summary">I turned scattered service, pricing, policy and booking information into a bilingual customer journey that is clear on mobile and practical for the owner to maintain.</p>
                  <div className="featured-case__facts" aria-label="Project facts">
                    <span><b>Live</b> production website</span>
                    <span><b>EN / DA</b> bilingual routes</span>
                    <span><b>End to end</b> structure to handover</span>
                  </div>
                  <div className="featured-case__actions">
                    <a className="btn" href="/work/marzieh-nail-atelier/">Read case study</a>
                    <a className="text-link" href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">Visit live website ↗</a>
                  </div>
                </div>
              </div>

              <div className="featured-case__details">
                <article><h4>Challenge</h4><p>The atelier needed clearer services, prices, policies, location details and a more confident path to booking.</p></article>
                <article><h4>My contribution</h4><p>I set the direction and information structure, reviewed content and implementation, completed responsive QA, deployed the site and prepared the handover.</p></article>
                <article><h4>Delivered</h4><p>A live bilingual website with service and pricing routes, booking links, trust content, policies, local information and mobile-ready navigation.</p></article>
              </div>

              <p className="featured-case__method"><b>Production approach:</b> AI tools supported research, drafting and code assistance; I owned the brief, decisions, review, testing, deployment and handover.</p>
            </article>

            <div id="systems" className="systems-intro reveal" aria-label="Systems built from unclear needs">
              <p className="mono">Systems I have built</p>
              <h3>Not only pages. Working first-version systems.</h3>
              <p>
                Beyond individual websites, I build service journeys, intake flows, trust layers, pilot logic, documentation routes and review points that make unclear ideas easier to test without overbuilding.
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
                <div><p className="mono">More behind the screens</p><h3>Need the reasoning, QA evidence and operating logic?</h3><p>The quick scan keeps the decision path short. Deep dive reveals how I map friction, structure systems and prepare work for handover.</p></div>
                <button className="btn" type="button" onClick={() => setViewMode('deep')}>View detailed experience</button>
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
                  Operations, ERP, planning, master data and supplier work trained me to map a process, find where it breaks and turn vague input into ownership and build-ready notes.
                </p>
                <p>
                  I use the same rhythm for web work: understand the real need, build the first useful version, test it on mobile and document the next step.
                </p>
              </div>
            </div>

            <div className="friction-lens reveal" aria-label="Friction-mapping lens">
              <div>
                <p className="mono">Hidden friction lens</p>
                <h3>I do not only build from the brief.</h3>
                <p>
                  I look for what the customer needs to trust, what the owner needs to control, what the team needs to hand over and what the system needs to make clear.
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
                  Before building a page, flow or prototype, I look for weak sources, unclear owners and fragile handovers. The numbers here are background proof from ERP, MRP, master data and supplier follow-up work.
                </p>
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
                  What matters is not only the final screen. It is the logic that turns unclear human and business needs into a clear path, a live build and a handover the owner can keep using.
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
                I connect human needs, client input, content, UX, QA and handover. The value is not replacing senior specialists. It is making scattered material easier to understand, build, test, launch and improve.
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
                  Useful for page updates, product/service pages, content hierarchy, forms, SEO basics, mobile checks and CMS-ready thinking.
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
                  Static Next.js export, Cloudflare deployment, local assets, locally bundled fonts, Open Graph metadata, responsive layout, internal anchors, JSON-LD awareness and GitHub-based handover discipline.
                </p>
                <p className="implementation-note">
                  Not a senior-engineering claim. A working sample of clean static web build, packaging and practical QA discipline.
                </p>
              </div>
              <div className="implementation-chips" aria-label="Technical implementation signals">
                {['Static export', 'Cloudflare', 'GitHub workflow', 'Local assets', 'OG / metadata', 'Responsive QA'].map((item) => (
                  <b key={item}>{item}</b>
                ))}
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
              <p className="mono lab">Working exposure, hands-on and honest</p>
              <div className="chips" aria-label="Working exposure">
                {[
                  'HTML / CSS',
                  'Responsive layouts',
                  'Static site structure',
                  'Basic JavaScript',
                  'Cloudflare Pages / Workers',
                  'GitHub deploy',
                  'Structured handover workflow',
                  'Webflow familiarity',
                  'Shopify familiarity',
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
                Presented honestly: recent builds are custom static and Cloudflare-based. I am familiar with Webflow and Shopify delivery patterns and ready to work within established CMS workflows, with GitHub-based source packages, deployment notes and QA handover.
              </p>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-no">{viewMode === 'quick' ? '03' : '06'}</span>
              <h2>How I would start in the first 30 days</h2>
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
                    <span className="mono">Live website</span>
                    <b>
                      <a href={liveLinks.marzieh} target="_blank" rel="noopener noreferrer">
                        marziehnail-atelier.dk
                      </a>
                    </b>
                  </div>
                </div>
              </div>
              <p className="avail">
                Best fit: website production, UX implementation, CMS/content support, GitHub-based workflow, working first-version systems, digital delivery support, QA and documentation. Open to scoped project support, digital production roles or a short <b>praktik</b> when that is the cleanest way to test cooperation.
              </p>
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
          <p className="fine">Directed, reviewed and delivered by Romaric Clementi, with AI-assisted production disclosed where used. © 2026 Romaric Clementi</p>
        </div>
      </footer>
    </>
  );
}
