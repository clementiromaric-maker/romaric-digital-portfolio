import Link from 'next/link';

function LanguageSwitch({ lang }) {
  return (
    <div className="languageSwitch" aria-label={lang === 'da' ? 'Sprogvalg' : 'Language switcher'}>
      <a className={lang === 'en' ? 'active' : ''} href="/" aria-current={lang === 'en' ? 'page' : undefined}>EN</a>
      <span>/</span>
      <a className={lang === 'da' ? 'active' : ''} href="/da/" aria-current={lang === 'da' ? 'page' : undefined}>DA</a>
    </div>
  );
}

export default function PortfolioPage({ c }) {
  const home = c.lang === 'da' ? '/da/' : '/';
  const caseHref = c.lang === 'da' ? '/da/work/marzieh-nail-atelier/' : '/work/marzieh-nail-atelier/';
  const liveMarzieh = c.lang === 'da' ? 'https://marziehnail-atelier.dk/' : 'https://marziehnail-atelier.dk/en/';
  const personLd = {
    '@context': 'https://schema.org', '@type': 'Person', name: 'Romaric Clementi',
    email: 'mailto:clementiromaric@protonmail.com', jobTitle: c.hero.identity,
    url: c.lang === 'da' ? 'https://romaric-digital-portfolio.clementiromaric.workers.dev/da/' : 'https://romaric-digital-portfolio.clementiromaric.workers.dev/',
    knowsAbout: ['Digital production','Web content','CMS implementation','Responsive QA','Multilingual delivery','Next.js','Cloudflare','GitHub'],
    workExample: [{ '@type':'CreativeWork', name:'Marzieh Nail Atelier website', url: liveMarzieh }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(personLd)}} />
      <a className="skip" href="#main">{c.lang === 'da' ? 'Spring til indhold' : 'Skip to content'}</a>

      <header className="topbar">
        <div className="wrap topbarIn">
          <Link href={home} className="brand"><span className="brandMark">RC</span><span>Romaric Clementi</span></Link>
          <nav className="nav" aria-label={c.lang === 'da' ? 'Primær navigation' : 'Primary navigation'}>
            <a href="#work">{c.nav.work}</a>
            <a href="#approach">{c.nav.approach}</a>
            <a href="#fit">{c.nav.fit}</a>
            <a href="#proof">{c.nav.proof}</a>
            <a href="#first30">{c.nav.first}</a>
            <a href="#contact">{c.nav.contact}</a>
          </nav>
          <div className="navUtility">
            <LanguageSwitch lang={c.lang} />
            <a className="smallBtn" href={`mailto:${c.contact.email}`}>{c.lang === 'da' ? 'Skriv til mig' : 'Email me'}</a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="wrap heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">{c.hero.eyebrow}</p>
              <p className="identity">{c.hero.identity}</p>
              <h1><span>{c.hero.titleTop}</span><span>{c.hero.titleMiddle}</span><em>{c.hero.titleEm}</em></h1>
              <p className="lede">{c.hero.lede}</p>
              <p className="sub">{c.hero.sub}</p>
              <div className="actions"><a className="btn" href="#work">{c.hero.ctaWork}</a><a className="btn ghost" href="#approach">{c.hero.ctaApproach}</a></div>
            </div>

            <aside className="heroPanel" aria-label={c.lang === 'da' ? 'Hurtigt overblik' : 'Quick portfolio overview'}>
              <div className="heroFlowBox">
                <span className="panelLabel">{c.hero.panel.inputLabel}</span>
                <div className="heroChips">{c.hero.panel.chips.map(x => <span key={x}>{x}</span>)}</div>
                <div className="flowLine" aria-hidden="true"><i></i></div>
                <div className="heroOutput"><span>{c.hero.panel.outputLabel}</span><strong>{c.hero.panel.outputTitle}</strong><small>{c.hero.panel.outputMeta}</small></div>
              </div>
              <figure className="heroLiveProof">
                <div className="heroImageWrap"><img src="/assets/marzieh-mobile-live.jpg" alt={c.hero.panel.imageAlt}/></div>
                <figcaption>{c.hero.panel.imageLabel}</figcaption>
              </figure>
              <div className="heroPanelFact"><span>{c.hero.panel.bestFitLabel}</span><strong>{c.hero.panel.bestFit}</strong></div>
              <div className="heroPanelFact"><span>{c.hero.panel.proofLabel}</span><strong>{c.hero.panel.proof}</strong></div>
            </aside>
          </div>

          <div className="wrap proofStrip">{c.proof.items.map(([k,v]) => <div key={k}><strong>{k}</strong><span>{v}</span></div>)}</div>
        </section>

        <section id="work" className="section">
          <div className="wrap">
            <div className="sectionHead"><p className="eyebrow">{c.work.eyebrow}</p><h2>{c.work.title}</h2><p>{c.work.intro}</p></div>

            <article className="featureProject">
              <div className="browserFrame">
                <div className="browserBar"><span className="dots"><i></i><i></i><i></i></span><span className="browserUrl">marziehnail-atelier.dk</span><span className="browserLive">● LIVE</span></div>
                <div className="projectVisualGrid">
                  <figure className="visual mainVisual"><img src="/assets/marzieh-homepage.webp" alt={c.work.marzieh.previewAlt}/><figcaption>{c.work.marzieh.previewCaption}</figcaption></figure>
                  <figure className="visual mobileVisual"><img src="/assets/marzieh-mobile-live.jpg" alt={c.work.marzieh.mobileAlt}/><figcaption>{c.lang === 'da' ? 'Reelt mobilskærmbillede' : 'Real mobile screenshot'}</figcaption></figure>
                </div>
              </div>

              <div className="projectCopy">
                <span className="tag">{c.work.marzieh.tag}</span>
                <h3>{c.work.marzieh.title}</h3>
                <p className="projectSub">{c.work.marzieh.subtitle}</p>
                <p>{c.work.marzieh.body}</p>
                <div className="projectGrid rich">
                  <div><h4>{c.work.marzieh.challengeTitle}</h4><p>{c.work.marzieh.challenge}</p></div>
                  <div><h4>{c.work.marzieh.contributionTitle}</h4><p>{c.work.marzieh.contribution}</p></div>
                  <div><h4>{c.work.marzieh.builtTitle}</h4><p>{c.work.marzieh.built}</p></div>
                  <div><h4>{c.work.marzieh.proofTitle}</h4><p>{c.work.marzieh.proof}</p></div>
                  <div><h4>{c.work.marzieh.relevanceTitle}</h4><p>{c.work.marzieh.relevance}</p></div>
                </div>
                <div className="actions"><Link className="btn" href={caseHref}>{c.work.marzieh.caseCta}</Link><a className="btn ghost" href={liveMarzieh} target="_blank" rel="noopener">{c.work.marzieh.liveCta}</a></div>
              </div>
            </article>

            <div className="subhead"><h3>{c.work.systemsTitle}</h3><p>{c.work.systemsIntro}</p></div>
            <div className="systemGrid">
              {c.work.systems.map(s => <article className="systemCard" key={s.title}>
                <span className="tag muted">{s.type}</span><h3>{s.title}</h3>
                <dl><div><dt>{c.work.labels.what}</dt><dd>{s.what}</dd></div><div><dt>{c.work.labels.worked}</dt><dd>{s.worked}</dd></div><div><dt>{c.work.labels.shows}</dt><dd>{s.shows}</dd></div></dl>
                {s.href ? <a className="systemLink" href={s.href} target="_blank" rel="noopener">{s.linkLabel}</a> : <p className="walkthrough">{s.linkLabel}</p>}
              </article>)}
            </div>
          </div>
        </section>

        <section id="approach" className="section tone">
          <div className="wrap">
            <div className="sectionHead narrow"><p className="eyebrow">{c.approach.eyebrow}</p><h2>{c.approach.title}</h2><p>{c.approach.body}</p></div>
            <div className="approachGrid">{c.approach.cards.map(([h,p],i) => <article key={h}><span className="num">0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
            <div className="backbone"><div><p className="eyebrow">{c.approach.backboneTitle}</p><p>{c.approach.backbone}</p></div><div className="stats">{c.approach.stats.map(([n,l]) => <div key={n+l}><strong>{n}</strong><span>{l}</span></div>)}</div></div>
          </div>
        </section>

        <section className="section processSection">
          <div className="wrap">
            <div className="sectionHead"><p className="eyebrow">{c.process.eyebrow}</p><h2>{c.process.title}</h2><p>{c.process.intro}</p></div>
            <div className="processGrid">{c.process.steps.map(([n,k,h,p]) => <article key={n}><span className="num">{n}</span><p className="processKey">{k}</p><h3>{h}</h3><p>{p}</p></article>)}</div>
          </div>
        </section>

        <section id="fit" className="section tone">
          <div className="wrap">
            <div className="sectionHead narrow"><p className="eyebrow">{c.fit.eyebrow}</p><h2>{c.fit.title}</h2><p>{c.fit.intro}</p></div>
            <div className="roleGrid six">{c.fit.roles.map(([h,p],i) => <article key={h}><span className="num">0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
            <p className="platformLine">{c.fit.platformLine}</p>
            <div className="audiences"><span>{c.fit.audiencesTitle}</span>{c.fit.audiences.map(x => <b key={x}>{x}</b>)}</div>
          </div>
        </section>

        <section id="proof" className="section">
          <div className="wrap proofGrid">
            <div><p className="eyebrow">{c.build.eyebrow}</p><h2>{c.build.title}</h2><p>{c.build.intro}</p><div className="chips">{c.build.chips.map(x => <span key={x}>{x}</span>)}</div></div>
            <aside className="aiCard"><p className="eyebrow">{c.build.aiTitle}</p><p>{c.build.ai}</p></aside>
          </div>
        </section>

        <section id="first30" className="section tone first30Section">
          <div className="wrap">
            <div className="sectionHead"><p className="eyebrow">{c.first30.eyebrow}</p><h2>{c.first30.title}</h2><p>{c.first30.intro}</p></div>
            <div className="weeksGrid">{c.first30.weeks.map(([w,h,p]) => <article key={w}><span>{w}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
          </div>
        </section>

        <section id="contact" className="contactSection">
          <div className="wrap contactCard">
            <div className="contactMain"><p className="eyebrow">{c.contact.eyebrow}</p><h2>{c.contact.title}</h2><p>{c.contact.body}</p><div className="actions"><a className="btn light" href={`mailto:${c.contact.email}`}>{c.contact.email}</a></div></div>
            <div className="contactMeta">
              <div><span>{c.contact.locationLabel}</span><strong>{c.contact.location}</strong></div>
              <div><span>{c.contact.languagesLabel}</span><strong>{c.contact.languages}</strong></div>
              <div><span>{c.contact.proofLabel}</span><strong><a href={c.contact.proofHref} target="_blank" rel="noopener">{c.contact.proof} ↗</a></strong></div>
            </div>
            <p className="opsPrompt">{c.contact.opsPrompt} <a href="https://romaric-operations-portfolio.clementiromaric.workers.dev/" target="_blank" rel="noopener">{c.contact.opsCta}</a></p>
          </div>
        </section>
      </main>

      <footer><div className="wrap"><span>RC</span><p>{c.contact.footer}</p></div></footer>
    </>
  );
}
